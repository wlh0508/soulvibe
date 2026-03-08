import Reveal from "./Reveal";

export default function VideoSection() {
  return (
    <section id="video-section" className="py-32 px-[5vw] bg-black text-center">
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <p className="text-[1.1rem] text-[#b38728] font-bold tracking-[0.3em] mb-4">感受聲波的力量</p>
          <h2 className="text-white font-serif text-[clamp(2.4rem,5vw,3.5rem)] mb-8">聽見頌缽的<em>真實頻率</em></h2>
          <p className="text-white/80 text-[1.25rem] mb-16 max-w-[700px] mx-auto">
            文字無法完全描述這個體驗。先讓你的耳朵感受看看。建議使用耳機以獲得最佳聆聽體驗。
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="max-w-[950px] mx-auto relative border border-white/10 shadow-2xl overflow-hidden aspect-video">
            <iframe 
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/CYJLGdbAZHo?rel=0" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
