import { useRef, useEffect } from 'react';

export default function VideoCall() {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const peerConnection = useRef(null);

  useEffect(() => {
    async function startVideoCall() {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      localVideoRef.current.srcObject = stream;

      // Створення peer-з’єднання
      peerConnection.current = new RTCPeerConnection();

      // Додавання локального потоку до peer
      stream.getTracks().forEach((track) => {
        peerConnection.current.addTrack(track, stream);
      });

      // Встановлення remote stream
      peerConnection.current.ontrack = (event) => {
        remoteVideoRef.current.srcObject = event.streams[0];
      };

      // Імітація WebRTC з’єднання (локально)
      const offer = await peerConnection.current.createOffer();
      await peerConnection.current.setLocalDescription(offer);

      const tempPC = new RTCPeerConnection();
      tempPC.ontrack = (event) => {
        remoteVideoRef.current.srcObject = event.streams[0];
      };

      tempPC.onicecandidate = (e) => {
        if (e.candidate) peerConnection.current.addIceCandidate(e.candidate);
      };

      peerConnection.current.onicecandidate = (e) => {
        if (e.candidate) tempPC.addIceCandidate(e.candidate);
      };

      stream.getTracks().forEach((track) => {
        tempPC.addTrack(track, stream);
      });

      await tempPC.setRemoteDescription(peerConnection.current.localDescription);
      const answer = await tempPC.createAnswer();
      await tempPC.setLocalDescription(answer);
      await peerConnection.current.setRemoteDescription(tempPC.localDescription);
    }

    startVideoCall();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center gap-4">
      <h2 className="text-xl font-bold text-pink-600">Video Call (Local Test)</h2>
      <div className="flex gap-4">
        <video ref={localVideoRef} autoPlay playsInline muted className="w-64 rounded-xl border" />
        <video ref={remoteVideoRef} autoPlay playsInline className="w-64 rounded-xl border" />
      </div>
    </div>
  );
}