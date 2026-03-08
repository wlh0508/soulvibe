import Reveal from "./Reveal";

export default function PainPoint() {
  return (
    <section id="pain-point">
      <div className="section-inner">
        <Reveal>
          <p className="section-eyebrow">關於你此刻的狀態</p>
          <h2>你的身體在休息，<br /><em>大腦卻還在加班嗎？</em></h2>
          <p className="pain-lead">深夜滑手機卻越來越清醒。肩頸僵硬如石。你不是懶，你只是太久沒有真正靜下來。</p>
        </Reveal>
        <div className="pain-cards">
          <Reveal delay={0.1}>
            <div className="pain-card">
              <div className="pain-num">01</div>
              <h3>腦袋像開了 50 個視窗，<br />越累反而越睡不著</h3>
              <p>傳統冥想太難，你根本靜不下來。躺在床上，腦袋自動排演明天的會議，多夢易醒。</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="pain-card">
              <div className="pain-num">02</div>
              <h3>肩頸僵硬如石，對周遭噪音<br />與情緒感到極度耗竭</h3>
              <p>長期姿勢固定、高敏感體質，能量被四周環境不斷抽乾。你需要的不只是放鬆身體。</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
