import React, { useState } from 'react';
import QRCode from 'qrcode';
import classes from "./style.module.css"
function App() {
  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const generateQrCode = async () => {
    try {
      const response = await QRCode.toDataURL(text);
      setImageUrl(response);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className={classes.container}>
      <div>
        <h2 className={classes.title}>Generate Download & Scan QR Code with React js</h2>
        <div>
          <div >
            <div className={classes.center}>

            <div className={classes.div}>
              <input className={classes.input} placeholder="Enter Text Here" onChange={(e) => setText(e.target.value)} />
              <button className={classes.btn} variant="contained"
                color="primary" onClick={() => generateQrCode()}>Generate</button>
              <br />
              </div>
                </div>
              <br />
              <br />
              {imageUrl ? (
                <a className={classes.center}href={imageUrl} download>
                  <img src={imageUrl} alt="img" width={200} />
                </a>) : null}

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;