import React, { useEffect, useRef, useState } from 'react';

const CameraComponent = () => {
  const [isFrontCamera, setIsFrontCamera] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    // Function to start the camera stream
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: isFrontCamera ? 'user' : 'environment' } });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    // Call the function to start the camera stream when the component mounts
    startCamera();

    // Cleanup function to stop the camera stream when the component unmounts
    return () => {
      const stream = videoRef.current.srcObject;
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, [isFrontCamera]);

  const handleCameraSwitch = () => {
    setIsFrontCamera(prevState => !prevState);
  };

  return (
    <div style={{display: 'flex' , flexDirection: 'column'}}>
      <video ref={videoRef} autoPlay playsInline muted />
      <br />
      <button onClick={handleCameraSwitch} style={{padding: '10px'}}>Switch Camera</button>
    </div>
  );
};

export default CameraComponent;
