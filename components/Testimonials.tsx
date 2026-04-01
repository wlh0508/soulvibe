"use client";

import Reveal from "./Reveal";

const REVIEWS = [
  {
    avatar: "K",
    quote:
      "原本以為會很玄，結果頌缽一敲我立刻睡死。醒來時完全不知道身在何處，是種很奇妙的安心感。",
    name: "Kelly L.",
    meta: "34 歲・軟體產品經理",
  },
  {
    avatar: "A",
    quote:
      "環境非常乾淨、舒服，老師完全不推銷任何東西。對我這種社交恐懼的人來說，這裡簡直是天堂。",
    name: "Amber C.",
    meta: "29 歲・接案設計師",
  },
  {
    avatar: "J",
    quote:
      "肩頸硬了三年，按摩只能撐幾天。缽療之後整個人好像被重置了，一周後肩膀還是輕的。",
    name: "Jason W.",
    meta: "41 歲・廣告創意總監",
  },
];

const Stars = () => (
  <span className="review-stars" aria-label="五星好評">★★★★★</span>
);

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="section-inner">

        <Reveal>
          <div className="testimonials-header">
            <p className="section-eyebrow">學員真實回饋</p>
            <h2>他們在這裡，<br />找回了丟失的睡眠</h2>
          </div>
        </Reveal>

        <div className="reviews-grid">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.15}>
              <article className="review-card">
                <Stars />
                <blockquote className="review-quote">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <footer className="review-footer">
                  <div className="review-avatar" aria-hidden="true">
                    {r.avatar}
                  </div>
                  <div>
                    <p className="review-name">{r.name}</p>
                    <p className="review-meta">{r.meta}</p>
                  </div>
                </footer>
              </article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
