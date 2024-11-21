import QRCode from 'qrcode'
import { useState } from "react";

const CodeGenerator = () => {

    const [url, setURL] = useState('');
    const [qrcode, setQrcode] = useState('');

    const GenerateQRCode = () => {
        QRCode.toDataURL(url, {width: 800, margin: 2 }, (err, url) => {

            if (err) return console.error(err)
            setQrcode(url);
        })
    }

    return (  
        <>
            <div>
                <h1>QR Code Generator</h1>
                <p>Hello, friends! This is a free QR Generator program I made for anyone and everyone to use for free. Please share with anyone who may need this. Thank you!</p>
                <input type="text" placeholder="e.g. https://google.com" value={url} onChange={(event) => setURL(event.target.value)}  />
                <button onClick={GenerateQRCode} className="button-52" role="button">Generate</button>
                {qrcode && <>
                    <img src={qrcode} />
                    <a href={qrcode} download="qrcode.png">
                        <button className="button-51" role="button">Download</button>
                    </a>
                </>}
            </div>
        </>
    );
}
 
export default CodeGenerator;