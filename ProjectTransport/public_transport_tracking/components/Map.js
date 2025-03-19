import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 28.7041,
  lng: 77.1025,
};

export default function MapComponent({ transportData }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={12}>
      {transportData.map((transport) => (
        <Marker key={transport.id} position={{ lat: transport.latitude, lng: transport.longitude }} />
      ))}
    </GoogleMap>
  );
}
