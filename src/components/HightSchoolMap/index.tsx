import React, { useLayoutEffect, useState, useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import { useSnapshot } from "valtio";

import Markers from "./Marker";
import { filteredData, currentLocationDisplay } from "../../state/state";

const getPosition = async (setPosition: React.Dispatch<React.SetStateAction<LatitudeLongitude>>): Promise<unknown> => {
  return await new Promise((resolve, reject) => {
    // 現在地を取得
    navigator.geolocation.getCurrentPosition(
      // 取得成功した場合
      (position) => {
        setPosition({ latitude: position.coords.latitude, longitude: position.coords.longitude });
        resolve(position);
      },
      // 取得失敗した場合
      (error) => {
        switch (error.code) {
          case 1:
            alert("位置情報の利用が許可されていません");
            break;
          case 2:
            alert("現在位置が取得できませんでした");
            break;
          case 3:
            alert("タイムアウトになりました");
            break;
          default:
            alert(`その他のエラー(エラーコード:${error.code})`);
            break;
        }
        reject(error.code);
      },
    );
  });
};

const MapRecenter: React.FC<MapRecenterProps> = (Props) => {
  const map = useMap();
  useEffect(() => {
    map.setView([Props.lat, Props.lng]);
  }, [Props.lat, Props.lng]);
  return null;
};

const HightSchoolMap: React.FC = () => {
  const snapFilteredData = useSnapshot<FilteredDataType>(filteredData);
  const snapCurrentLocationDisplay = useSnapshot<CurrentLocationDisplayType>(currentLocationDisplay);
  const [position, setPosition] = useState<LatitudeLongitude>({ latitude: 34.68646722650664, longitude: 135.51972054126023 });
  useLayoutEffect((): void => {
    if (!snapCurrentLocationDisplay.enabled) {
      return;
    }
    getPosition(setPosition)
      .then(() => {})
      .catch(() => {});
  }, [snapCurrentLocationDisplay.enabled]);
  return (
    <MapContainer zoom={10} center={new L.LatLng(position.latitude, position.longitude)}>
      <MapRecenter lat={position.latitude} lng={position.longitude} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {snapFilteredData.searchResultData.map((dataItem: HightSchoolResultData) => (
        <Markers
          position={new L.LatLng(dataItem.item.lat, dataItem.item.lng)}
          color="sky"
          name={dataItem.item.name}
          course={dataItem.item.course}
          label={dataItem.item.label}
          tel={dataItem.item.tel}
          site={dataItem.item.site}
          address={dataItem.item.address}
          id={dataItem.item.id}
          key={dataItem.item.id}
        />
      ))}
      {snapCurrentLocationDisplay.enabled && (
        <Markers position={new L.LatLng(position.latitude, position.longitude)} color="red" name="現在地" location />
      )}
    </MapContainer>
  );
};

export default HightSchoolMap;
