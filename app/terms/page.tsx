import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '服務條款・退款政策・隱私聲明｜樺芯苑',
  description: '樺芯苑頌缽療癒服務之完整服務條款，包含課程預約、實體商品購買、退款政策及個人資料保護說明。',
}

const EFFECTIVE_DATE = '2025 年 1 月 1 日'
const COMPANY_NAME = '樺芯苑'
const EMAIL = 'soulvibetw@gmail.com'
const LINE = 'https://lin.ee/r9o68Jb'

const TOC_ITEMS: [string, string][] = [
  ['#general',     '一、總則與適用範圍'],
  ['#course',      '二、課程與療癒服務預約'],
  ['#course-refund','三、課程退費政策'],
  ['#goods',       '四、實體商品購買條款'],
  ['#shipping',    '五、運送政策'],
  ['#goods-refund','六、商品退換貨政策'],
  ['#payment',     '七、付款方式'],
  ['#ip',          '八、智慧財產權'],
  ['#disclaimer',  '九、免責聲明'],
  ['#privacy',     '十、個人資料保護'],
  ['#update',      '十一、條款更新'],
  ['#contact',     '十二、聯絡方式'],
]

export default function TermsPage() {
  return (
    <div style={{ background: 'var(--warm-white)', minHeight: '100vh' }}>

      {/* 簡易頂部導覽 */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(255,255,255,0.97)',
        borderBottom: '1px solid var(--mist)',
        padding: '1rem 5vw',
        display: 'flex', alignItems: 'center', gap: '1rem',
        backdropFilter: 'blur(16px)',
      }}>
        <Link href="/" style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.4rem',
          color: 'var(--deep-gold)',
          textDecoration: 'none',
          fontWeight: 700,
          letterSpacing: '0.1em',
        }}>
          樺芯苑
        </Link>
        <span style={{ color: 'var(--sand)', fontSize: '0.9rem' }}>／</span>
        <span style={{ color: 'var(--clay)', fontSize: '0.9rem', letterSpacing: '0.06em' }}>服務條款</span>
      </nav>

      <main style={{ padding: '3rem 5vw 8rem' }}>

        {/* 頁頭 — 全寬 */}
        <div style={{ maxWidth: 1060, margin: '0 auto 3rem', borderBottom: '2px solid var(--gold)', paddingBottom: '2rem' }}>
          <p style={{ fontSize: '0.8rem', letterSpacing: '0.35em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
            Legal · Terms of Service
          </p>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 300,
            color: 'var(--deep)',
            lineHeight: 1.3,
            marginBottom: '1rem',
          }}>
            服務條款、退款政策<br />
            <em style={{ fontStyle: 'italic', color: 'var(--clay)' }}>及個人資料保護聲明</em>
          </h1>
          <p style={{ fontSize: '0.9rem', color: 'var(--clay)', letterSpacing: '0.05em' }}>
            生效日期：{EFFECTIVE_DATE}｜適用主體：{COMPANY_NAME}
          </p>
        </div>

        {/* 雙欄：左側 TOC + 右側內文 */}
        <div className="terms-layout">

          {/* 左側 sticky TOC（桌機） */}
          <aside className="terms-sidebar">
            <p className="terms-sidebar-label">本頁目錄</p>
            <ol>
              {TOC_ITEMS.map(([href, label]) => (
                <li key={href}><a href={href} className="terms-toc-link">{label}</a></li>
              ))}
            </ol>
          </aside>

          {/* 右側內文 */}
          <div>

            {/* 手機版折疊 TOC */}
            <details className="terms-toc-mobile">
              <summary>本頁目錄 <span className="arrow">▾</span></summary>
              <ol>
                {TOC_ITEMS.map(([href, label]) => (
                  <li key={href}><a href={href} className="terms-toc-link">{label}</a></li>
                ))}
              </ol>
            </details>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>

          {/* 一、總則 */}
          <section id="general" className="terms-section">
            <SectionTitle num="一" title="總則與適用範圍" />
            <Prose>
              <p>本服務條款（以下簡稱「本條款」）由<strong>{COMPANY_NAME}</strong>（以下簡稱「本品牌」）制定，適用於透過本網站、LINE 官方帳號、電話或其他通訊管道，購買本品牌提供之頌缽療癒課程、工作坊、實體商品及周邊商品之消費者（以下簡稱「您」）。</p>
              <p>當您完成預約、下單或付款，即表示您已閱讀、了解並同意本條款之全部內容。若您不同意本條款，請勿進行任何交易。</p>
              <p>本條款依據以下法規訂定：</p>
              <ul>
                <li>《消費者保護法》（民國 110 年修正版）</li>
                <li>《通訊交易解除權合理例外情事適用準則》（民國 104 年）</li>
                <li>《個人資料保護法》（民國 104 年修正版）</li>
                <li>《電子商務消費者保護綱領》</li>
              </ul>
            </Prose>
          </section>

          {/* 二、課程預約 */}
          <section id="course" className="terms-section">
            <SectionTitle num="二" title="課程與療癒服務預約條款" />
            <Prose>
              <p>本品牌提供之頌缽療癒服務包含：一對一個人療癒、小團體工作坊、頌缽課程培訓，以及其他不定期推出之主題體驗。</p>
              <h3>2.1 預約方式</h3>
              <ul>
                <li>透過本網站預約頁面（shop.soulvibetw.com）</li>
                <li>透過 LINE 官方帳號（@lin.ee/r9o68Jb）傳訊預約</li>
                <li>電話或 Email 聯繫本品牌後台確認</li>
              </ul>
              <p>預約完成後，本品牌將以 LINE 訊息或 Email 進行確認通知。未收到確認通知前，預約尚未成立。</p>

              <h3>2.2 預約確認與付款</h3>
              <ul>
                <li>部分課程或工作坊需於確認預約後 <strong>24 小時內</strong>完成付款，逾期視為取消預約，名額釋出。</li>
                <li>課程費用、工作坊費用依各期公告為準，本品牌保留調整售價之權利，但已付款訂單不受影響。</li>
              </ul>

              <h3>2.3 課程出席</h3>
              <ul>
                <li>請於課程開始前 <strong>10 分鐘</strong>抵達場地，以利暖身說明。</li>
                <li>課程進行中請關閉手機或調至靜音，以維護所有學員的療癒品質。</li>
                <li>嚴重遲到（超過課程開始後 15 分鐘）者，本品牌有權拒絕進場，且不予退費。</li>
              </ul>

              <h3>2.4 健康注意事項</h3>
              <p>以下情況建議諮詢醫師後再行參加，或如實告知師資後評估：</p>
              <ul>
                <li>心律不整、裝有心臟節律器</li>
                <li>癲癇病史</li>
                <li>懷孕初期（12 週以內）</li>
                <li>嚴重焦慮症或精神科疾患急性期</li>
                <li>近期動過手術或身體有傷口</li>
              </ul>
              <p>本品牌之頌缽療癒為輔助放鬆體驗，<strong>不具醫療效果，不可取代醫師診療</strong>。</p>
            </Prose>
          </section>

          {/* 三、課程退費 */}
          <section id="course-refund" className="terms-section">
            <SectionTitle num="三" title="課程退費政策" />
            <Callout color="gold">
              依據《消費者保護法》第 19 條，通訊交易消費者享有 7 日猶豫期。本品牌線上課程依《通訊交易解除權合理例外情事適用準則》第 6 條，屬「一經提供即為完成之數位內容」，得於購買前明確告知不適用猶豫期。<strong>現場頌缽療癒體驗課程一旦服務開始執行，即不適用猶豫期規定。</strong>
            </Callout>
            <Prose>
              <h3>3.1 課程取消與退費標準（尚未上課者）</h3>
              <Table
                headers={['取消時間', '退費比例', '說明']}
                rows={[
                  ['課程開始前 7 天（含）以上', '全額退費', '退至原付款帳戶，處理時間 7 個工作天'],
                  ['課程開始前 3–6 天', '退 70%', '扣除 30% 行政與場地預留費用'],
                  ['課程開始前 1–2 天', '退 50%', '扣除 50% 費用'],
                  ['課程當天或未到場', '不予退費', '可申請改期一次（視名額）'],
                ]}
              />

              <h3>3.2 課程改期</h3>
              <ul>
                <li>每筆訂單限改期 <strong>1 次</strong>，需於原定課程前 <strong>48 小時</strong>提出申請。</li>
                <li>改期後之課程若再次無法出席，恕不再退費或改期。</li>
                <li>改期須以 LINE 或 Email 聯繫本品牌，並取得書面確認。</li>
              </ul>

              <h3>3.3 本品牌取消課程</h3>
              <p>若因不可抗力（颱風、天災、師資突發狀況）或場地因素，由本品牌主動取消課程：</p>
              <ul>
                <li>提供 <strong>全額退費</strong>，或</li>
                <li>依消費者意願安排改期（以同等課程為優先）</li>
                <li>本品牌不另行賠償交通、住宿等衍生費用</li>
              </ul>

              <h3>3.4 線上課程 / 錄影課程</h3>
              <p>若本品牌提供錄影課程或數位課程內容：</p>
              <ul>
                <li>購買前已明確告知不適用《消費者保護法》第 19 條猶豫期規定</li>
                <li>課程連結一經開通即視為服務交付完成，<strong>不受理退費</strong></li>
                <li>如發生技術性無法觀看問題，請於 3 日內聯繫本品牌，將協助排除或補償</li>
              </ul>
            </Prose>
          </section>

          {/* 四、實體商品 */}
          <section id="goods" className="terms-section">
            <SectionTitle num="四" title="實體商品（頌缽及周邊）購買條款" />
            <Prose>
              <p>本品牌銷售之實體商品包含但不限於：頌缽（西藏頌缽、水晶頌缽）、木槌、墊圈、精油、礦石、手作飾品、書籍及其他療癒周邊用品。</p>

              <h3>4.1 商品說明</h3>
              <ul>
                <li>所有實體商品之規格、重量、尺寸及圖片均以公告為準。</li>
                <li>頌缽為手工製品，每件音色與外觀略有差異，此為正常現象，不構成瑕疵。</li>
                <li>礦石、晶礦類商品顏色、紋路受天然材質影響，與圖片可能略有出入，不視為色差瑕疵。</li>
              </ul>

              <h3>4.2 訂單確認</h3>
              <ul>
                <li>下單後本品牌將以 LINE 或 Email 回覆確認庫存。</li>
                <li>庫存不足時將主動通知並協商退款或候補安排。</li>
              </ul>
            </Prose>
          </section>

          {/* 五、運送政策 */}
          <section id="shipping" className="terms-section">
            <SectionTitle num="五" title="運送政策" />
            <Prose>
              <h3>5.1 配送範圍</h3>
              <ul>
                <li><strong>台灣本島</strong>：宅配（黑貓宅急便 / 新竹物流）及超商取貨（7-ELEVEN、全家）</li>
                <li><strong>離島地區</strong>（澎湖、金門、馬祖）：限中華郵政郵寄，運費另計，配送時間較長</li>
                <li><strong>海外</strong>：目前不提供國際配送</li>
              </ul>

              <h3>5.2 出貨時間</h3>
              <ul>
                <li>確認付款後，<strong>3–5 個工作天</strong>內出貨（不含例假日及國定假日）</li>
                <li>客製化商品、預購商品依各商品頁公告為準</li>
                <li>例假日前後訂單可能延遲 1–2 個工作天，不另行通知</li>
              </ul>

              <h3>5.3 運費</h3>
              <Table
                headers={['配送方式', '費用', '備註']}
                rows={[
                  ['宅配（台灣本島）', 'NT$120', '訂單滿 NT$1,500 免運'],
                  ['超商取貨（台灣本島）', 'NT$80', '訂單滿 NT$1,200 免運'],
                  ['離島郵寄', 'NT$200 起', '依重量計算，另行告知'],
                ]}
              />

              <h3>5.4 收件注意</h3>
              <ul>
                <li>請於收件後 <strong>48 小時內</strong>檢查商品是否完好，如有問題請立即聯繫本品牌。</li>
                <li>頌缽等易碎品已加強包裝，如有運送損壞，請保留原始包裝並拍照，聯繫本品牌處理。</li>
              </ul>
            </Prose>
          </section>

          {/* 六、退換貨 */}
          <section id="goods-refund" className="terms-section">
            <SectionTitle num="六" title="實體商品退換貨政策" />
            <Callout color="gold">
              依據《消費者保護法》第 19 條，消費者於收到商品後 <strong>7 日內</strong>，得無條件解除契約（猶豫期）。商品需保持全新未使用狀態，並附原始包裝及發票。
            </Callout>
            <Prose>
              <h3>6.1 可申請退貨情況（7 日猶豫期內）</h3>
              <ul>
                <li>商品未拆封使用，保持全新狀態</li>
                <li>附原包裝、配件及購買憑證（發票或訂購確認截圖）</li>
                <li>退貨運費由<strong>消費者</strong>負擔</li>
              </ul>

              <h3>6.2 瑕疵品退換貨（7 日猶豫期後亦適用）</h3>
              <ul>
                <li>商品有明顯製造瑕疵或運送損壞</li>
                <li>請於收到商品 <strong>7 日內</strong>拍照並聯繫本品牌</li>
                <li>經確認後，由本品牌承擔退貨運費，提供換貨或全額退款</li>
              </ul>

              <h3>6.3 不適用退換貨之情況</h3>
              <ul>
                <li>商品已拆封使用（衛生疑慮商品，如精油、礦石配飾等）</li>
                <li>人為損壞、使用不當造成的毀損</li>
                <li>消費者主觀因素（如不喜歡音色、與預期不符）</li>
                <li>客製化商品（刻字、訂製尺寸等）</li>
                <li>逾 7 日猶豫期且無瑕疵之商品</li>
              </ul>

              <h3>6.4 退款流程</h3>
              <ol>
                <li>以 LINE 或 Email 告知退換貨原因，並提供照片及訂單資訊</li>
                <li>本品牌確認後，提供退貨寄送地址</li>
                <li>商品寄回並確認無誤後，<strong>7 個工作天</strong>內退款至原付款帳戶</li>
              </ol>
            </Prose>
          </section>

          {/* 七、付款 */}
          <section id="payment" className="terms-section">
            <SectionTitle num="七" title="付款方式" />
            <Prose>
              <p>本品牌目前接受以下付款方式：</p>
              <ul>
                <li><strong>銀行轉帳</strong>：確認付款後提供匯款帳號，請於 24 小時內完成匯款並回傳轉帳截圖</li>
                <li><strong>LINE Pay</strong>：透過 LINE 官方帳號連結進行付款</li>
                <li><strong>信用卡</strong>（線上金流）：依各期活動頁面顯示之金流方式為準</li>
                <li><strong>現場現金</strong>：課程現場可以現金支付（課程或工作坊適用）</li>
              </ul>
              <p>所有付款資訊均經加密處理，本品牌不儲存您的信用卡完整資料。</p>
            </Prose>
          </section>

          {/* 八、智財 */}
          <section id="ip" className="terms-section">
            <SectionTitle num="八" title="智慧財產權" />
            <Prose>
              <p>本網站所有內容，包含文字、圖片、影音、課程教材、品牌設計等，均屬本品牌或其授權方所有，受著作權法保護。</p>
              <ul>
                <li>未經書面授權，不得複製、重製、轉載或商業使用</li>
                <li>課程錄音、錄影（含個人體驗影片）需事先取得本品牌同意</li>
                <li>學員購買課程後取得的教材，僅供個人學習使用，不得轉讓或轉售</li>
              </ul>
            </Prose>
          </section>

          {/* 九、免責 */}
          <section id="disclaimer" className="terms-section">
            <SectionTitle num="九" title="免責聲明" />
            <Prose>
              <ul>
                <li>本品牌提供之頌缽療癒服務為<strong>輔助放鬆體驗</strong>，不具醫療、診斷或治療效果，不可取代專業醫療建議。</li>
                <li>消費者應如實告知身體健康狀況，因隱瞞病史造成的不適，本品牌不負賠償責任。</li>
                <li>本品牌對不可抗力因素（天災、疫情、政府命令等）導致之課程取消或延遲，不負損害賠償責任，但將盡力協助安排替代方案。</li>
                <li>本網站可能包含外部連結，本品牌不對第三方網站內容負責。</li>
              </ul>
            </Prose>
          </section>

          {/* 十、個資 */}
          <section id="privacy" className="terms-section">
            <SectionTitle num="十" title="個人資料保護" />
            <Callout color="parchment">
              依據《個人資料保護法》第 8 條，本品牌於蒐集個人資料前，告知以下事項：
            </Callout>
            <Prose>
              <h3>10.1 蒐集目的</h3>
              <ul>
                <li>課程預約確認與聯繫</li>
                <li>商品訂購處理與物流配送</li>
                <li>行銷活動與課程資訊通知（可隨時退訂）</li>
                <li>法律義務之遵守（如發票開立）</li>
              </ul>

              <h3>10.2 蒐集類別</h3>
              <p>姓名、電話、Email、LINE ID、收件地址、付款資訊（限必要範圍）</p>

              <h3>10.3 利用期間與範圍</h3>
              <ul>
                <li>利用期間：課程結束或訂購完成後 <strong>2 年</strong>，或至您要求刪除為止</li>
                <li>不對外販售或出租您的個人資料</li>
                <li>僅於必要時（如物流配送）提供給合作廠商，並要求其遵守保密義務</li>
              </ul>

              <h3>10.4 您的權利</h3>
              <p>依《個人資料保護法》第 3 條，您得行使以下權利，請 Email 至 {EMAIL}：</p>
              <ul>
                <li>查詢或閱覽個人資料</li>
                <li>製給複製本</li>
                <li>補充或更正個人資料</li>
                <li>停止蒐集、處理或利用</li>
                <li>刪除個人資料</li>
              </ul>
            </Prose>
          </section>

          {/* 十一、更新 */}
          <section id="update" className="terms-section">
            <SectionTitle num="十一" title="條款更新" />
            <Prose>
              <p>本品牌保留隨時修訂本條款之權利。修訂後之條款將公告於本頁面，重大變更將透過 LINE 官方帳號或 Email 通知。繼續使用本品牌服務，即視為接受修訂後之條款。</p>
            </Prose>
          </section>

          {/* 十二、聯絡 */}
          <section id="contact" className="terms-section">
            <SectionTitle num="十二" title="聯絡方式" />
            <Prose>
              <p>如對本條款有任何疑問，或需申請退換貨、退費，請透過以下方式聯繫：</p>
            </Prose>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1px',
              background: 'var(--mist)',
              marginTop: '1.5rem',
            }}>
              {[
                { label: 'LINE 官方帳號', value: '點此加入', href: LINE },
                { label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
                { label: '服務時間', value: '週一至週五 10:00–18:00', href: undefined },
              ].map(item => (
                <div key={item.label} style={{
                  background: 'var(--warm-white)',
                  padding: '1.5rem 1.8rem',
                  borderTop: '2px solid var(--gold)',
                }}>
                  <p style={{ fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--accent)', marginBottom: '0.5rem', fontWeight: 600 }}>
                    {item.label}
                  </p>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined}
                      style={{ color: 'var(--deep)', fontSize: '0.95rem', letterSpacing: '0.05em', textDecoration: 'none' }}>
                      {item.value}
                    </a>
                  ) : (
                    <p style={{ color: 'var(--deep)', fontSize: '0.95rem', letterSpacing: '0.05em' }}>{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </section>

        </div>{/* end sections flex */}

            {/* 返回首頁 */}
            <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--mist)', textAlign: 'center' }}>
              <Link href="/" style={{
                display: 'inline-block',
                padding: '0.9rem 2.5rem',
                background: 'var(--gold)',
                color: '#000',
                textDecoration: 'none',
                fontWeight: 700,
                letterSpacing: '0.1em',
                fontSize: '0.95rem',
                borderRadius: '4px',
              }}>
                ← 返回樺芯苑首頁
              </Link>
            </div>

          </div>{/* end 右側內文 */}
        </div>{/* end terms-layout */}

      </main>
    </div>
  )
}

// ─── Sub-components ──────────────────────────────────────

function SectionTitle({ num, title }: { num: string; title: string }) {
  return (
    <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'baseline', gap: '0.8rem' }}>
      <span style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '1.5rem',
        color: 'var(--gold)',
        fontWeight: 300,
        flexShrink: 0,
      }}>{num}</span>
      <h2 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
        fontWeight: 400,
        color: 'var(--deep)',
        margin: 0,
        letterSpacing: '0.04em',
      }}>{title}</h2>
    </div>
  )
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontSize: '0.95rem',
      color: 'var(--clay)',
      lineHeight: 2,
      letterSpacing: '0.04em',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    }}
      className="terms-prose"
    >
      {children}
    </div>
  )
}

function Callout({ children, color }: { children: React.ReactNode; color: 'gold' | 'parchment' }) {
  return (
    <div style={{
      background: color === 'gold' ? 'rgba(179,135,40,0.07)' : 'var(--parchment)',
      borderLeft: `4px solid var(--${color === 'gold' ? 'gold' : 'sand'})`,
      padding: '1.2rem 1.5rem',
      marginBottom: '1.5rem',
      fontSize: '0.9rem',
      color: 'var(--clay)',
      lineHeight: 1.9,
    }}>
      {children}
    </div>
  )
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div style={{ overflowX: 'auto', margin: '1rem 0' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
        <thead>
          <tr>
            {headers.map(h => (
              <th key={h} style={{
                textAlign: 'left', padding: '0.7rem 1rem',
                background: 'var(--deep)', color: 'var(--parchment)',
                fontWeight: 600, letterSpacing: '0.06em', fontSize: '0.8rem',
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? 'var(--warm-white)' : 'var(--parchment)' }}>
              {row.map((cell, j) => (
                <td key={j} style={{
                  padding: '0.7rem 1rem',
                  borderBottom: '1px solid var(--mist)',
                  color: j === 0 ? 'var(--deep)' : 'var(--clay)',
                  fontWeight: j === 0 ? 500 : 400,
                  lineHeight: 1.7,
                }}
                  dangerouslySetInnerHTML={{ __html: cell }}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
