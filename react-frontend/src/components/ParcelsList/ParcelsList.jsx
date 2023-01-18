import { ParcelItem } from './ParcelItem';

export const ParcelList = ({ parcels }) => {
  return (
    <ul className="border">
      {parcels.map(parcel => (
        <ParcelItem parcel={parcel} />
      ))}
    </ul>
  );
};
