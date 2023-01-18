import axios from 'axios';
import { NewParcelForm } from 'components/NewParcelForm/NewParcelForm';
import { ParcelList } from 'components/ParcelsList/ParcelsList';
import { useEffect, useState } from 'react';

export default function App() {
  const [parcels, setParcels] = useState([]);

  useEffect(() => {
    axios
      .get('http://silverstripe.localhost/silverstripe/public/api/v1/Parcel', {
        auth: { username: 'admin', password: 'admin' },
        headers: { Accept: 'application/json' },
      })
      .then(res => {
        if (res.status === 200) return res.data;
      })
      .then(res => {
        if (res.totalSize > 0) return res.items;
      })
      .then(res => {
        console.log(res);
        setParcels(res);
      })
      .catch(e => {
        console.error(e);
      });
  }, []);

  return (
    <div className="flex justify-start gap-4">
      <div className="flex flex-col gap-4 border w-[300px]">
        <h1 className="text-2xl font-bold">Paketübernahme</h1>
        <ParcelList className="border" parcels={parcels} />
      </div>
      <NewParcelForm />
    </div>
  );
}

/*

ClassName: "Parcel"
Created: "2023-01-18 15:02:23"
DeliveryTimestamp: "2023-01-01"
ID: 1
LastEdited: "2023-01-18 15:07:59"
ParcelReferenceId: "Vlad001"
RecipientName: "Vlad P 1"
RecipientSignature: "iVBORw0KGgoAAAANSUhEUgAACgAAAAoACAIAAADyNuyPAAAAC

*/
