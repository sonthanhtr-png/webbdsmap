import MapView from "./MapView";

export default function MapPage() {
  return (
    <main style={{ padding: 16 }}>
      <h1 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>
        Bản đồ
      </h1>
      <MapView />
    </main>
  );
}
