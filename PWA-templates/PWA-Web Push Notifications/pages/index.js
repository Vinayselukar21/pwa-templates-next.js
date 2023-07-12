import { useEffect, useState } from "react";
import Head from "next/head";

const base64ToUint8Array = (base64) => {
  const padding = "=".repeat((4 - (base64.length % 4)) % 4);
  const b64 = (base64 + padding).replace(/-/g, "+").replace(/_/g, "/");

  const rawData = window.atob(b64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};

const Index = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscription, setSubscription] = useState(null);
  const [registration, setRegistration] = useState(null);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      "serviceWorker" in navigator &&
      window.workbox !== undefined
    ) {
      // run only in browser
      navigator.serviceWorker.ready.then((reg) => {
        reg.pushManager.getSubscription().then((sub) => {
          if (
            sub &&
            !(
              sub.expirationTime &&
              Date.now() > sub.expirationTime - 5 * 60 * 1000
            )
          ) {
            setSubscription(sub);
            setIsSubscribed(true);
          }
        });
        setRegistration(reg);
      });
    }
  }, []);

  const subscribeButtonOnClick = async (event) => {
    event.preventDefault();
    const sub = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: base64ToUint8Array(
        process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY
      ),
    });
    // TODO: you should call your API to save subscription data on server in order to send web push notification from server
    setSubscription(sub);
    setIsSubscribed(true);
    console.log("web push subscribed!");
    console.log(sub);
  };

  const unsubscribeButtonOnClick = async (event) => {
    event.preventDefault();
    await subscription.unsubscribe();
    // TODO: you should call your API to delete or invalidate subscription data on server
    setSubscription(null);
    setIsSubscribed(false);
    console.log("web push unsubscribed!");
  };

  const sendNotificationButtonOnClick = async (event) => {
    event.preventDefault();
    if (subscription == null) {
      console.error("web push not subscribed");
      return;
    }

    await fetch("/api/notification", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        subscription,
      }),
    });
  };

  return (
    <>
      <Head>
        <title>next-pwa web-Push</title>
      </Head>
      <div
        style={{
          width: "50%",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <h1>Push Notifications with PWA using Next.js</h1>
        <div
          style={{
            width: "50%",
            margin: "auto",
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            justifyContent: "space-around",
          }}
        >
          <button
            style={{ padding: "10px" }}
            onClick={subscribeButtonOnClick}
            disabled={isSubscribed}
          >
            Subscribe
          </button>
          <button
            style={{ padding: "10px" }}
            onClick={unsubscribeButtonOnClick}
            disabled={!isSubscribed}
          >
            Unsubscribe
          </button>
          <button
            style={{ padding: "10px" }}
            onClick={sendNotificationButtonOnClick}
            disabled={!isSubscribed}
          >
            Send Notification
          </button>
        </div>
        <p style={{textAlign: 'center'}}>
          Note: It the notification wont work in dev server, It will only run on
          build server.
        </p>
      </div>
    </>
  );
};

export default Index;
