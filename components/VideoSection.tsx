"use client";

import Reveal from "./Reveal";

export default function VideoSection() {
  return (
    <section id="video-section" style={{ background: '#0d0d0d', textAlign: 'center', padding: '8rem 10vw' }}>
      <div style={{ width: '80vw', margin: '0 auto' }}>

        <Reveal>
          <p style={{ color: '#b38728', fontSize: '1.1rem', fontWeight: 700, letterSpacing: '0.3em', marginBottom: '1rem' }}>
            感受聲波的力量
          </p>
          <h2 style={{ color: '#faf4e8', fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem,5vw,3.5rem)', marginBottom: '1.5rem', fontWeight: 300 }}>
            聽見頌缽的<em style={{ color: '#b38728', fontStyle: 'italic' }}>真實頻率</em>
          </h2>
          <p style={{ color: 'rgba(245,240,232,0.8)', fontSize: '1.25rem', marginBottom: '4rem', lineHeight: 1.9 }}>
            文字無法完全描述這個體驗。先讓你的耳朵感受看看。建議使用耳機以獲得最佳聆聽體驗。
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', border: '1px solid rgba(201,169,110,0.2)', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
            <iframe
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
              src="https://www.youtube.com/embed/CYJLGdbAZHo?rel=0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Reveal>

      </div>
    </section>
  );
}
