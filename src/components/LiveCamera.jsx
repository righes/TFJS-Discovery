// import React, { useEffect, useRef } from 'react';
import React, { useState, useRef } from 'react';
// Gonna create it after 
import '../styles/camera.css'; //canvasCam

const LiveCamera = () => {

    const videoRef = useRef(null); 
    const canvasRef = useRef(null);
    const [isCameraOn, setStreamOn] = useState(false);
    const [stream, setStream] = useState(null);

    const startCamera = async () => {
        try{
            const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true});
            setStreamOn(true);
            videoRef.current.srcObject = mediaStream;
            setIsCameraOn(true);
        } catch (err) {
            console.error("Erreur accessing camera:", err);
        }
    };
    const stopCamera = () => {
        // if (stream) {
        //     stream.getTracks().forEach((track) => track.stop());
        //     videoRef.current.srcObject = null;
        //     setIsCameraOn(false);
        // }
        if (videoRef.current && videoRef.current.srcObject) {
            videoRef.current.srcObject.getTracks().forEach((track) => TrackEvent.stop());
            videoRef.current.srcObject = null;
        }
        setStream(null);
        setIsCameraOn(false);
    };
    // useEffect(() => {
    //     const getCamera = async () => {
    //         try {
    //             const stream = await navigator.mediaDevices.getUserMedia({
    //                 video: true,
    //             });
    //             if (videoRef.current){
    //                 videoRef.current.srcObject = stream;
    //             }
    //         } catch (err) {
    //             console.error("Error accessing camera: ", err);
    //         }
    //     }; 
    //     getCamera();
    // }, []);
        // in return old version 
        // <div>
        //     <h2>Live Camera Feed</h2>
        //     <video ref={videoRef} autoPLay width="640" height="480" />
    return (
        <div className="camera-container">
            <h2>Live Camera Feed</h2>
            <div className="video-wrapper">
                <video ref={videoRef} autoPlay muted playInline width="640" height="480" />
                <canvas ref={canvasRef} width="640" height="480" />
            </div>
            <div className="buttons">
            {!isCameraOn ? (
                <button onClick={startCamera}>Start Camera</button>
            ) : (
                <button onClick={stopCamera}>Stop Camera</button>
            )}
            </div>
        </div>
    );
};
export default LiveCamera;


