import TCPlayer from 'tcplayer.js';
import 'tcplayer.js/dist/tcplayer.min.css';
import { useEffect, useRef } from 'react';

function App() {
  const myRef = useRef(null);

  useEffect(() => {
    const player = TCPlayer(myRef.current, {
      fileID: '243791576943072647',
      appID: '1306264703',
      psign: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6MTMwNjI2NDcwMywiZmlsZUlkIjoiMjQzNzkxNTc2OTQzMDcyNjQ3IiwiY3VycmVudFRpbWVTdGFtcCI6MTY3MDQ2OTk3MSwiY29udGVudEluZm8iOnsiYXVkaW9WaWRlb1R5cGUiOiJQcm90ZWN0ZWRBZGFwdGl2ZSIsImRybUFkYXB0aXZlSW5mbyI6eyJwcml2YXRlRW5jcnlwdGlvbkRlZmluaXRpb24iOjEyfX0sInVybEFjY2Vzc0luZm8iOnsiZG9tYWluIjoiMTMwNjI2NDcwMy52b2QyLm15cWNsb3VkLmNvbSIsInNjaGVtZSI6IkhUVFBTIn19.FOcmChHfrGY9tYCDn20MSQi-IqvQ9U_U6qLNgx9MhLg',
    });

    player.on('loadedmetadata', () => {
      console.log('loadedmetadata');
    });
  }, []);

  return (
    <div className="App">
      <video ref={myRef} id="player-container-id" width="414" height="270" preload="auto" playsInline webkit-playsinline="true"></video>
    </div>
  );
}

export default App;
