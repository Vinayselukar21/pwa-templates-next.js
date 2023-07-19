# next-pwa - web push example

This example demonstrates how to use `next-pwa` plugin to implement web push with custom worker.

**NOTE**

In real world, you may want to send the subscription data to your server once user agree to subscribe web push. Store the data associate with the user. So that you can initiate a web push notification from your server to the specific users.

## Usage

``` bash
cd PWA-templates/PWA-Web Push Notifications'
yarn install
yarn vapid
```
(You can use any pakage manager)

Create a `.env` file, and put the public key generated from the previous steps

```
WEB_PUSH_EMAIL=user@example.com
WEB_PUSH_PRIVATE_KEY=<vapid-private-key>
NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY=<vapid-public-key>
```

Build and start

``` bash
yarn build
yarn start
```
## Recommend `.gitignore`

```
**/public/workbox-*.js
**/public/sw.js
**/public/worker-*.js
```



