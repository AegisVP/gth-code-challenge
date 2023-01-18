export const ParcelItem = ({ parcel }) => {
  return (
    <li key={parcel.ID} className="border">
      <p>ID: {parcel.ParcelReferenceId}</p>
      <p>Name: {parcel.RecipientName}</p>
      <p>Delivered: {parcel.DeliveryTimestamp}</p>
    </li>
  );
};
