import Reveal from "./Reveal";

export default function Locations() {
  const locs = [
    { city: "TAIPEI ／ 台北", name: "台北館", addr: "迴咖啡・捷運民權西路站", time: "預約制", booking: "https://shop.soulvibetw.com" },
    { city: "CHIAYI ／ 嘉義", name: "嘉義館", addr: "嘉義市東區・蘭井街 342 號", time: "週二至週日 10:00–20:00", booking: "https://shop.soulvibetw.com" },
    { city: "KAOHSIUNG ／ 高雄", name: "高雄館", addr: "橋頭區・捷運橋頭糖廠站", time: "週一至周日 9:00-17:00", booking: "https://shop.soulvibetw.com" },
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
              <a href={loc.booking} className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>選擇{loc.name}預約</a>
            </div>
          ))}
          <div className="location-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', opacity: 0.5, borderStyle: 'dashed', minHeight: '220px', gap: '0.75rem' }}>
            <span style={{ fontSize: '2rem' }}>＋</span>
            <span className="loc-city-label" style={{ letterSpacing: '0.2em' }}>MORE COMING</span>
            <h3 style={{ margin: 0 }}>陸續增加中</h3>
            <p style={{ fontSize: '1rem', textAlign: 'center', margin: 0 }}>更多城市據點籌備中，<br />敬請期待</p>
          </div>
        </div>
      </div>
    </section>
  );
}
