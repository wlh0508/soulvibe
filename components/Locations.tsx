import Reveal from "./Reveal";

export default function Locations() {
  const locs = [
    { city: "TAIPEI ／ 台北", name: "台北館", addr: "迴咖啡・捷運民權西路站", time: "預約制" },
    { city: "KAOHSIUNG ／ 高雄", name: "高雄館", addr: "橋頭區・捷運橋頭糖廠站", time: "週一至周日 9:00-17:00" }
  ];

  return (
    <section id="locations">
      <div className="map-grid"></div>
      <div className="section-inner" style={{ position: 'relative', zIndex: 1 }}>
        <Reveal>
          <p className="section-eyebrow">LOCATIONS</p>
          <h2 className="text-center">選擇你的 <em>重啟據點</em></h2>
        </Reveal>
        <div className="locations-grid" style={{ marginTop: '4rem' }}>
          {locs.map((loc, i) => (
            <div key={i} className="location-card">
              <span className="loc-city-label">{loc.city}</span>
              <h3>{loc.name}</h3>
              <div className="loc-info">
                <p className="loc-info-row">📍 {loc.addr}</p>
                <p className="loc-info-row">🕐 {loc.time}</p>
              </div>
              <a href="https://soulvibetw.com/booking" className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>選擇{loc.name}預約</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
