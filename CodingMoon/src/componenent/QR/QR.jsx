import React, { useState } from 'react';
import QRCode from 'qrcode.react';

function QRCodeGenerator() {
  const [jsonString, setJsonString] = useState({
    product1: 0,
    product2: 0,
    product3: 0,
    product4: 0,
    D17: "5555555"
  });

  const handleIncrement = (product) => {
    setJsonString(prevState => ({
      ...prevState,
      [product]: prevState[product] + 1
    }));
  };

  const handleDecrement = (product) => {
    setJsonString(prevState => ({
      ...prevState,
      [product]: Math.max(0, prevState[product] - 1)
    }));
  };

  return (
    <div>
      <div>
        <label>product1: {jsonString.product1}</label>
        <button type="button" className="btn btn-success" onClick={() => handleIncrement('product1')}>+</button>
        <button type="button" className="btn btn-danger" onClick={() => handleDecrement('product1')}>-</button>
      </div>
      <div>
        <label>product2: {jsonString.product2}</label>
        <button type="button" className="btn btn-success" onClick={() => handleIncrement('product2')}>+</button>
        <button type="button" className="btn btn-danger" onClick={() => handleDecrement('product2')}>-</button>
      </div>
      <div>
        <label>product3: {jsonString.product3}</label>
        <button type="button" className="btn btn-success" onClick={() => handleIncrement('product3')}>+</button>
        <button type="button" className="btn btn-danger" onClick={() => handleDecrement('product3')}>-</button>
      </div>
      <div>
        <label>product4: {jsonString.product4}</label>
        <button type="button" className="btn btn-success" onClick={() => handleIncrement('product4')}>+</button>
        <button type="button" className="btn btn-danger" onClick={() => handleDecrement('product4')}>-</button>
      </div>
      <div style={{ marginTop: '20px' }}>
        {jsonString && <QRCode value={JSON.stringify(jsonString)} />}
      </div>
    </div>
  );
}

export default QRCodeGenerator;
