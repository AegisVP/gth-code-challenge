import axios from 'axios';
import { useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';

export const NewParcelForm = () => {
  const [sigPad, setSigPad] = useState({});

  const clear = () => {
    sigPad.clear();
  };

  const submitHandler = e => {
    e.preventDefault();

    const preparedData = {
      ParcelReferenceId: e.currentTarget.elements.parcel_id.value,
      RecipientName: e.currentTarget.elements.name.value,
      DeliveryTimestamp: e.currentTarget.elements.date.value,
      RecipientSignature: sigPad.toDataURL('text/html'),
    };

    axios.post('/api/v1/Parcel', preparedData);
  };

  return (
    <form onSubmit={submitHandler} className="w-[300px] border flex flex-col gap-2">
      <label className="border flex justify-between">
        ID:
        <input type="text" name="parcel_id" className="border w-[230px]" />
      </label>
      <label className="border flex justify-between">
        Name:
        <input type="text" name="name" className="border w-[230px]" />
      </label>
      <label className="border flex justify-between">
        Date:
        <input type="text" name="date" className="border w-[230px]" />
      </label>
      <div className="flex flex-col gap-2 border">
        <p>Signature:</p>
        <div className="border">
          <SignatureCanvas canvasProps={{ width: 300, height: 80 }} ref={setSigPad} />
        </div>
        <button type="button" className="border self-center w-[120px] h-[45px]" onClick={clear}>
          Clear
        </button>
      </div>
      <button type="submit" className="border self-center w-[120px] h-[45px]">
        Submit
      </button>
    </form>
  );
};
