import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "./Marker";

const token = import.meta.env.VITE_MAP_TOKEN;

function Map(props) {
  const location = [props.lat || 37.38605, props.long || -122.08385];

  return (
    <MapContainer center={location} zoom={15} scrollWheelZoom={true}>
      <TileLayer
        attribution='<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={`https://{s}.tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=${token}`}
        accessToken={token}
        minZoom="8"
        maxZoom="20"
      />
      {/* <Marker position={location} icon={customIcon} /> */}
      <LocationMarker latlng={props.latlng}/>
    </MapContainer>
  );
}

export default Map;
