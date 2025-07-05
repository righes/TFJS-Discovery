import React, { useEffect, useRef } from 'react';

const LiveCamera = () => {
    const videoRef = useRef(null);
    useEffect(() => {
        const getCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: true,
                });
                if (videoRef.current){
                    videoRef.current.srcObject = stream;
                }
            } catch (err) {
                console.error("Error accessing camera: ", err);
            }
        }; 
        getCamera();
    }, []);
    return (
        <div>
            <h2>Live Camera Feed</h2>
            <video ref={videoRef} autoPLay width="640" height="480" />
        </div>
    );
};
export default LiveCamera;