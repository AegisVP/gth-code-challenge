import axios from 'axios';
import { NewParcelForm } from 'components/NewParcelForm/NewParcelForm';
import { ParcelList } from 'components/ParcelsList/ParcelsList';
import { useEffect, useState } from 'react';

axios.defaults.baseUrl = 'http://silverstripe.localhost/silverstripe/public';
axios.defaults.auth = { username: 'admin', password: 'admin' };
axios.defaults.headers = { 'Content-Type': 'application/json', Accept: 'application/json' };

export default function App() {
  const [parcels, setParcels] = useState([]);

  useEffect(() => {
    axios
      .get('/api/v1/Parcel')
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
