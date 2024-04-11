"use client";

import "leaflet/dist/leaflet.css";

import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";

import "leaflet-defaulticon-compatibility";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function Map() {
  return (
    <section className="py-12 sm:py-24 lg:py-10 px-3 md:px-10 lg:px-24 flex flex-col justify-center bg-gray-800">
      <h1 className="text-4xl text-newWhite font-semibold">Obavljeni Radovi</h1>
      <p className="mt-2 mb-6 text-slate-400">
        Neki od naših dosadašnjih radova, ali ima ih još mnogo!
      </p>
      <MapContainer
        // @ts-ignore
        preferCanvas={true}
        center={[45.815, 15.9819]}
        zoom={6}
        zoomControl={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        touchZoom={false}
        draggable={false}
        dragging={false}
        className="z-10 w-full h-[500px]"
      >
        <TileLayer
          // @ts-ignore
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
        />
        <Marker position={[45.815, 15.9819]}>
          <Popup>Zagreb</Popup>
        </Marker>
        <Marker position={[46.1639, 16.8335]}>
          <Popup>Koprivnica</Popup>
        </Marker>
      </MapContainer>
    </section>
  );
}
