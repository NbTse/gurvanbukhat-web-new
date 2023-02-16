import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const Map = ({ lat = 47.9192, lon = 106.9186 }: any) => {
    const position = [lat, lon];
    const icon = L.icon({ iconUrl: "/leaflet/images/marker-icon.png" });

    return (
        <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "400px" }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={icon}>
                <Popup>
                    Баянзүрх дүүрэг, 25-р хороо, PLUS Residence, PLUS center - 2
                    давхар
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;
