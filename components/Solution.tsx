import Reveal from "./Reveal";
import SectionRings from "./SectionRings";

export default function Solution() {
  return (
    <section id="solution">
      <SectionRings />
      <div className="section-inner" style={{ position: 'relative', zIndex: 1 }}>
        <Reveal>
          <p className="section-eyebrow" style={{ color: 'var(--gold)' }}>OUR PHILOSOPHY</p>
          <h2>真正的放鬆，<br /><em>不需要你付出任何努力</em></h2>
          <p className="solution-intro">物理聲波共振，讓你在完全被動的狀態下，自然進入深層的身心重啟。</p>
        </Reveal>
        <div className="solution-pillars" style={{ marginTop: '4rem' }}>
          <div className="pillar"><h3>不需練習冥想</h3><p>頌缽的物理聲波自動引導腦波，科學自然發生。</p></div>
          <div className="pillar"><h3>不需尬聊社交</h3><p>保留你完整的個人結界。全程安靜沉浸。</p></div>
          <div className="pillar"><h3>不被推銷打擾</h3><p>不強制消費、不推薦產品、無額外費用。</p></div>
        </div>
      </div>
    </section>
  );
}
