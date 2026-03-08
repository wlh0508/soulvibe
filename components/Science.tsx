import Reveal from "./Reveal";

export default function Science() {
  return (
    <section id="science">
      <div className="section-inner">
        <Reveal>
          <p className="section-eyebrow">SCIENCE</p>
          <h2>不是玄學，<em>是頻率管理</em></h2>
          <div className="science-text"><p>頌缽療癒的核心原理來自物理聲學：特定頻率的聲波在人體組織中產生共振，透過神經系統調節身心。</p></div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="freq-diagram">
            <div className="freq-row"><span className="freq-label">Beta 波</span><div className="freq-bar-wrap"><div className="freq-bar beta" style={{ width: '90%', background: '#ff5e5e' }}></div></div><span className="freq-val">14–30Hz</span></div>
            <span className="freq-sublabel">高壓・焦慮・腦袋轉不停</span>
            <div className="freq-row"><span className="freq-label">Alpha 波</span><div className="freq-bar-wrap"><div className="freq-bar alpha" style={{ width: '58%', background: 'var(--gold)' }}></div></div><span className="freq-val">8–13Hz</span></div>
            <span className="freq-sublabel">平靜・專注・創意甦醒</span>
            <div className="freq-row"><span className="freq-label">Theta 波</span><div className="freq-bar-wrap"><div className="freq-bar theta" style={{ width: '32%', background: '#4ecdc4' }}></div></div><span className="freq-val">4–7Hz</span></div>
            <span className="freq-sublabel">深層放鬆・直覺・深睡邊界</span>
            <div className="freq-row"><span className="freq-label">Delta 波</span><div className="freq-bar-wrap"><div className="freq-bar delta" style={{ width: '12%', background: '#45b7d1' }}></div></div><span className="freq-val">0.5–4Hz</span></div>
            <span className="freq-sublabel">無意識・深層睡眠・細胞修復</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
