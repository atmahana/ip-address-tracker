import { Marker, Popup, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import IconLocation from "../../assets/icon-location.svg";

const customIcon = new Icon({
  iconUrl: IconLocation,
  iconSize: [30, 38],
});

function LocationMarker({latlng}) {
  const map = useMap();

  if (latlng) {
    map.flyTo(latlng, 14, map.getZoom());
  }

  return latlng === null ? null : (
    <Marker position={latlng} icon={customIcon}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

export default LocationMarker;
