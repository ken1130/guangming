<script setup>
import { ref } from 'vue'

const milestones = ref([
  { year: '1993', title: '光明清潔企業社創立', body: '李金榮先生於台中北屯創立光明清潔企業社，從衛生用品批發起家，深耕在地商家市場。' },
  { year: '2000', title: '業務擴展 · 全台中供應', body: '擴大產品線，增加工業用清潔用品供應，服務範圍涵蓋整個大台中區域。' },
  { year: '2010', title: '品質認證 · ISO 標準', body: '通過各項品質認證，多項清潔劑取得 ISO 認證，確保產品符合安全衛生標準。' },
  { year: '2015', title: '按摩護理用品產線', body: '因應北屯按摩產業蓬勃發展，擴充按摩油、乳液、毛巾寢具品項，服務上百家按摩會館。' },
  { year: '2020', title: '環保轉型 · 永續承諾', body: '引進環保清潔用品與可分解袋材，響應綠色環保理念，與商家一同推動永續經營。' },
  { year: '2028', title: '邁入第三十五載', body: '三十五年如一日，持續為飯店、按摩會館、商家企業提供最可靠的清潔用品與誠信服務。' }
])

const values = ref([
  { en: 'Quality',    zh: '品質', desc: '每一項進貨都親自挑選把關，耐用、耐髒、量足，才是商家要的。' },
  { en: 'Integrity',  zh: '誠信', desc: '不二價、不灌水、不推銷用不到的東西。做生意就是做人。' },
  { en: 'Reliable',   zh: '可靠', desc: '電話一通，常備品當日到貨。三十多年沒缺過貨，這是基本功。' },
  { en: 'Longevity',  zh: '長久', desc: '我們不追快，追久。和老客戶一起走過三十五年，還想再走三十年。' }
])
</script>

<template>
  <div class="about">
    <!-- 品牌故事 Hero -->
    <section class="about-hero">
      <div class="container">
        <div class="hero-grid">
          <div>
            <div class="eyebrow" style="margin-bottom:24px;">關於光明 · 品牌故事</div>
            <h1 class="h-display hero-title">
              一間開了<em>三十五年</em>的清潔用品行
            </h1>
            <p class="body-text hero-desc">
              從一台小貨車、幾箱衛生紙開始，到今天服務全台中超過 500 家商戶——
              我們做的不只是生意，是陪著在地商家一起走過三十五年的信任。
            </p>
            <p class="body-text hero-desc" style="margin-top:16px;">
              位於台中市北屯區的我們，由<strong>李金榮</strong>先生於 1993 年創立，
              專注於高品質清潔與衛生用品的 B2B 批發，服務飯店、按摩會館與在地商家企業。
            </p>
          </div>
          <div class="hero-visual">
            <div class="hero-visual-frame">
              <div class="hero-visual-inner">
                <div class="visual-label-lg">[ Photo ]</div>
                <div class="visual-label-sm">
                  創辦人 · 李金榮先生<br/>
                  1993 年店面老照片
                </div>
              </div>
            </div>
            <div class="seal-round hero-seal">
              <div>
                光明<br/>
                <span class="seal-mono">EST · MCMXCIII</span><br/>
                三十五載
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 發展歷程 -->
    <section class="timeline-section">
      <div class="container">
        <div style="margin-bottom:56px;">
          <div class="eyebrow" style="margin-bottom:16px;">品牌歷程 · Timeline</div>
          <h2 class="h-section">三十五年 · 一步一腳印</h2>
        </div>
        <div class="timeline">
          <div class="timeline-line"></div>
          <div
            v-for="(item, i) in milestones"
            :key="item.year"
            class="timeline-row"
          >
            <div class="timeline-year">{{ item.year }}</div>
            <div class="timeline-dot-col">
              <span
                class="timeline-dot"
                :class="{ 'dot-active': i === milestones.length - 1 }"
              ></span>
            </div>
            <div class="timeline-body">
              <h3 class="timeline-title">{{ item.title }}</h3>
              <p class="body-text" style="font-size:15px; max-width:620px;">{{ item.body }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 創辦人的話 -->
    <section class="founder-section">
      <div class="container">
        <div class="founder-grid">
          <div class="founder-visual">
            <div class="founder-frame">
              <div class="founder-frame-inner">
                <div class="visual-label-lg founder-label">[ Portrait ]</div>
                <div class="founder-mono">創辦人 · 李 金 榮</div>
              </div>
            </div>
          </div>
          <div>
            <div class="eyebrow founder-eyebrow">創辦人的話 · Founder's Note</div>
            <h2 class="founder-title">
              做生意，品質是<em>根</em>，<br/>誠信是<em>魂</em>
            </h2>
            <div class="founder-body">
              <p>三十五年前，我抱著一股衝勁開始這份生意，那時候只想著一件事——要讓台中的商家買到最實在的東西。</p>
              <p>幾十年過去了，配合的商家很多都是一起老去的朋友。他們相信我不是因為價格最便宜，而是因為東西從來不會出包、叫貨從來不會耽誤。</p>
              <p>時代在變，做生意的方式也要跟著變。但核心的東西沒變：賣好東西、說實在話、做長久的生意。這就是光明的招牌。</p>
            </div>
            <div class="founder-sign">
              <div class="sign-en">Li Jin-Rong</div>
              <div class="sign-zh">創辦人 · 李金榮</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心價值 -->
    <section id="values" class="values-section">
      <div class="container">
        <div style="margin-bottom:56px;">
          <div class="eyebrow" style="margin-bottom:16px;">我們的信念 · Values</div>
          <h2 class="h-section">四件事，三十五年沒變過</h2>
        </div>
        <div class="values-grid">
          <div
            v-for="(v, i) in values"
            :key="v.en"
            class="value-cell"
            :class="{ 'value-cream': i % 2 === 0, 'value-paper': i % 2 === 1 }"
          >
            <div class="value-en">O{{ i + 1 }} · {{ v.en }}</div>
            <div class="value-zh">{{ v.zh }}</div>
            <p class="value-desc">{{ v.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 聯絡資訊與地圖 (保留原本的地圖 iframe 與聯絡方式) -->
    <section id="contact" class="contact-section">
      <div class="container">
        <div class="contact-head">
          <div class="eyebrow" style="margin-bottom:20px;">聯絡我們 · Contact</div>
          <h2 class="h-section">有需求？<em>打一通電話</em>就對了</h2>
          <p class="body-text contact-lede">
            我們沒有線上購物車——因為每位客戶的批發量和配送需求都不一樣。
            直接打給李老闆，三十分鐘內給你最實在的報價。
          </p>
        </div>

        <div class="contact-grid">
          <div>
            <div class="contact-block">
              <div class="cb-num">O1</div>
              <div>
                <div class="cb-title-row">
                  <h3 class="cb-title">電話洽詢</h3>
                  <span class="cb-en">By Phone</span>
                </div>
                <div class="cb-highlight">04 — 22416726</div>
                <p class="cb-body">營業時間直接來電，通常十分鐘內可以給你報價。找李老闆或店長都可以。</p>
                <div class="cb-meta">週一 至 週日 · 08:30 – 21:00</div>
              </div>
            </div>

            <div class="contact-block">
              <div class="cb-num">O2</div>
              <div>
                <div class="cb-title-row">
                  <h3 class="cb-title">手機聯絡</h3>
                  <span class="cb-en">By Mobile</span>
                </div>
                <div class="cb-highlight">0988 — 335 — 658</div>
                <p class="cb-body">上下班時段、假日皆可聯絡。急單或臨時需求，手機是最快的管道。</p>
                <div class="cb-meta">24 小時訊息留言 · 上班時段回覆</div>
              </div>
            </div>

            <div class="contact-block">
              <div class="cb-num">O3</div>
              <div>
                <div class="cb-title-row">
                  <h3 class="cb-title">親自到店</h3>
                  <span class="cb-en">Visit Us</span>
                </div>
                <div class="cb-highlight">昌平路 2 段 10 巷 72 弄 113 號</div>
                <p class="cb-body">台中市北屯區，歡迎實際來看看商品、談談合作。老客戶來店咖啡招待。</p>
                <div class="cb-meta">門市備有樣品 · 北屯區地標</div>
              </div>
            </div>
          </div>

          <div>
            <div class="map-wrap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14559.161433504765!2d120.69272400000001!3d24.179084!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346917eba64b3b67%3A0x479649a865d67389!2zNDA25Y-w54Gj5Y-w5Lit5biC5YyX5bGv5Y2A5piM5bmz6Lev5LqM5q61MTDlt7c3MuW8hDExM-iZnw!5e0!3m2!1szh-TW!2sus!4v1753429700310!5m2!1szh-TW!2sus"
                width="600" height="450" style="border:0;"
                allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div class="store-card">
              <div class="eyebrow" style="margin-bottom:12px;">店面資訊 · Storefront</div>
              <div class="store-name">光明清潔企業社</div>
              <div class="store-rows">
                <div class="store-row">
                  <span class="store-label">ADDR</span>
                  <span>406 台中市北屯區<br/>昌平路 2 段 10 巷 72 弄 113 號 1 樓</span>
                </div>
                <div class="store-row">
                  <span class="store-label">TEL</span>
                  <span class="mono">04-22416726</span>
                </div>
                <div class="store-row">
                  <span class="store-label">MOBILE</span>
                  <span class="mono">0988-335-658</span>
                </div>
                <div class="store-row">
                  <span class="store-label">HOUR</span>
                  <span>週一至週日 08:30 – 21:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 服務承諾 -->
    <section class="commitment-section">
      <div class="container">
        <div class="eyebrow" style="margin-bottom:16px; color:rgba(245,239,225,0.6);">我們的承諾 · Commitment</div>
        <h2 class="h-section commitment-title">從下單到送達<br/>每一步都不馬虎</h2>
        <div class="commitment-grid">
          <div class="commitment-item">
            <div class="commit-num">壹</div>
            <h4>品質保證</h4>
            <p>所有產品均經過嚴格品質控管，多項清潔劑取得 ISO 認證，確保符合安全衛生標準。</p>
          </div>
          <div class="commitment-item">
            <div class="commit-num">貳</div>
            <h4>快速配送</h4>
            <p>大台中地區常備品當日下單、隔日到貨；急單下午五點前來電，當日即可配送。</p>
          </div>
          <div class="commitment-item">
            <div class="commit-num">參</div>
            <h4>專業諮詢</h4>
            <p>提供產品選擇建議，協助飯店、按摩會館、商家找到最合適的採購組合。</p>
          </div>
          <div class="commitment-item">
            <div class="commit-num">肆</div>
            <h4>售後服務</h4>
            <p>完善的售後與換貨機制，老客戶享有月結、長期配合價等優惠方案。</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* === 品牌故事 Hero === */
.about-hero {
  padding: 72px 0 56px;
  background: var(--cream);
  border-bottom: 1px solid var(--ink-line);
}
.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}
.hero-title {
  margin-bottom: 24px;
  font-size: clamp(36px, 4.5vw, 60px);
}
.hero-desc { font-size: 16px; max-width: 520px; }
.hero-desc strong { color: var(--ink); font-weight: 600; }

.hero-visual {
  position: relative;
  aspect-ratio: 1 / 1;
}
.hero-visual-frame {
  position: absolute;
  inset: 0;
  background: var(--paper-3);
  background-image: repeating-linear-gradient(45deg, var(--paper-3) 0 14px, var(--paper-2) 14px 28px);
  display: grid;
  place-items: center;
  border: 1px solid var(--ink-line);
}
.hero-visual-inner { text-align: center; }
.visual-label-lg {
  font-family: var(--display);
  font-size: 20px;
  color: var(--ink-mute);
  letter-spacing: 0.1em;
  margin-bottom: 12px;
  font-style: italic;
}
.visual-label-sm {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--ink-mute);
  letter-spacing: 0.2em;
  line-height: 1.8;
}
.hero-seal {
  position: absolute;
  right: -20px;
  bottom: -20px;
  width: 130px;
  height: 130px;
}
.seal-mono {
  font-family: var(--display);
  font-size: 10px;
  letter-spacing: 0.15em;
  font-style: italic;
}

/* === 發展歷程 === */
.timeline-section { padding: 96px 0; }
.timeline { position: relative; }
.timeline-line {
  position: absolute;
  left: 16.66%;
  top: 0; bottom: 0;
  width: 1px;
  background: var(--ink-line);
}
.timeline-row {
  display: grid;
  grid-template-columns: 1fr 1px 5fr;
  gap: 48px;
  padding: 36px 0;
  align-items: start;
}
.timeline-year {
  text-align: right;
  font-family: var(--display);
  font-size: 44px;
  color: var(--ink);
  line-height: 1;
  font-style: italic;
}
.timeline-dot-col {
  position: relative;
}
.timeline-dot {
  position: absolute;
  left: -6px;
  top: 18px;
  width: 13px; height: 13px;
  border-radius: 50%;
  background: var(--paper);
  border: 2px solid var(--ink-soft);
}
.timeline-dot.dot-active {
  background: var(--seal);
  border-color: var(--seal);
}
.timeline-body { padding-top: 12px; }
.timeline-title {
  font-family: var(--serif);
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 10px;
  letter-spacing: 0.03em;
}

/* === 創辦人 === */
.founder-section {
  background: var(--navy-deep);
  color: var(--cream);
  padding: 96px 0;
}
.founder-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 72px;
  align-items: center;
}
.founder-visual { position: relative; }
.founder-frame {
  aspect-ratio: 4 / 5;
  background: rgba(245,239,225,0.08);
  background-image: repeating-linear-gradient(45deg, rgba(245,239,225,0.04) 0 12px, rgba(245,239,225,0.08) 12px 24px);
  border: 1px solid rgba(245,239,225,0.2);
  display: grid;
  place-items: center;
}
.founder-frame-inner { text-align: center; color: rgba(245,239,225,0.6); }
.founder-label { color: rgba(245,239,225,0.6); }
.founder-mono {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.2em;
}
.founder-eyebrow { color: rgba(245,239,225,0.6); margin-bottom: 20px; }
.founder-eyebrow::before { background: rgba(245,239,225,0.6); }
.founder-title {
  font-family: var(--serif);
  font-size: clamp(28px, 3.8vw, 48px);
  font-weight: 500;
  line-height: 1.25;
  margin-bottom: 36px;
  letter-spacing: 0.02em;
}
.founder-title em {
  font-family: var(--display);
  font-style: italic;
  color: #d9b97a;
}
.founder-body {
  font-size: 16px;
  line-height: 1.85;
  color: rgba(245,239,225,0.85);
  text-wrap: pretty;
}
.founder-body p { margin-bottom: 18px; }
.founder-body p:last-child { margin-bottom: 0; }
.founder-sign {
  margin-top: 40px;
  padding-top: 24px;
  border-top: 1px solid rgba(245,239,225,0.2);
  display: flex;
  align-items: center;
  gap: 20px;
}
.sign-en {
  font-family: var(--display);
  font-size: 28px;
  color: #d9b97a;
  font-style: italic;
}
.sign-zh {
  font-family: var(--serif);
  font-size: 13px;
  color: rgba(245,239,225,0.6);
  letter-spacing: 0.15em;
}

/* === 核心價值 === */
.values-section { padding: 96px 0; background: var(--paper); }
.values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid var(--ink-line);
}
.value-cell {
  padding: 40px 32px;
  border-right: 1px solid var(--ink-line);
}
.value-cell:last-child { border-right: none; }
.value-cream { background: var(--cream); }
.value-paper { background: var(--paper); }
.value-en {
  font-family: var(--display);
  font-style: italic;
  font-size: 14px;
  color: var(--seal);
  letter-spacing: 0.15em;
  margin-bottom: 12px;
}
.value-zh {
  font-family: var(--serif);
  font-size: 30px;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 16px;
  letter-spacing: 0.08em;
}
.value-desc {
  font-size: 14px;
  line-height: 1.7;
  color: var(--ink-soft);
}

/* === 聯絡資訊與地圖 === */
.contact-section {
  padding: 96px 0;
  background: var(--paper-2);
  scroll-margin-top: 90px;
}
.contact-head { margin-bottom: 56px; max-width: 720px; }
.contact-head .h-section em {
  font-family: var(--display);
  font-style: italic;
  color: var(--seal);
}
.contact-lede { margin-top: 16px; font-size: 16px; }

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
}
.contact-block {
  padding: 24px 0;
  border-top: 1px solid var(--ink-line);
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 28px;
}
.contact-block:last-child { border-bottom: 1px solid var(--ink-line); }
.cb-num {
  font-family: var(--display);
  font-style: italic;
  font-size: 34px;
  color: var(--seal);
  line-height: 1;
  min-width: 48px;
}
.cb-title-row {
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 12px;
}
.cb-title {
  font-family: var(--serif);
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.03em;
}
.cb-en {
  font-family: var(--display);
  font-style: italic;
  font-size: 13px;
  color: var(--ink-mute);
  letter-spacing: 0.08em;
}
.cb-highlight {
  font-family: var(--serif);
  font-size: 24px;
  color: var(--ink);
  margin-bottom: 10px;
  font-weight: 500;
  letter-spacing: 0.02em;
}
.cb-body {
  font-size: 14px;
  color: var(--ink-soft);
  line-height: 1.7;
  margin-bottom: 10px;
}
.cb-meta {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--ink-mute);
  letter-spacing: 0.08em;
}

.map-wrap {
  aspect-ratio: 4 / 3;
  border: 1px solid var(--ink-line);
  overflow: hidden;
  background: var(--paper-3);
}
.map-wrap iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}
.store-card {
  margin-top: 20px;
  background: var(--cream);
  border: 1px solid var(--ink-line);
  padding: 24px 28px;
}
.store-name {
  font-family: var(--serif);
  font-size: 22px;
  margin-bottom: 14px;
  font-weight: 600;
}
.store-rows {
  font-size: 14px;
  color: var(--ink-soft);
  line-height: 1.8;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.store-row {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}
.store-label {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--ink-mute);
  min-width: 56px;
  letter-spacing: 0.15em;
  padding-top: 4px;
}
.mono { font-family: var(--mono); }

/* === 服務承諾 === */
.commitment-section {
  background: var(--navy-deep);
  color: var(--cream);
  padding: 96px 0;
}
.commitment-title { color: var(--cream); margin-bottom: 56px; }
.commitment-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  border: 1px solid rgba(245,239,225,0.2);
}
.commitment-item {
  padding: 40px 32px;
  border-right: 1px solid rgba(245,239,225,0.2);
}
.commitment-item:last-child { border-right: none; }
.commit-num {
  width: 44px; height: 44px;
  border: 1.5px solid #d9b97a;
  color: #d9b97a;
  display: grid;
  place-items: center;
  font-family: var(--serif);
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
}
.commitment-item h4 {
  font-family: var(--serif);
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
  letter-spacing: 0.05em;
  color: var(--cream);
}
.commitment-item p {
  font-size: 14px;
  color: rgba(245,239,225,0.7);
  line-height: 1.75;
}

/* === 響應式 === */
@media (max-width: 960px) {
  .hero-grid { grid-template-columns: 1fr; gap: 48px; }
  .hero-visual { max-width: 420px; }
  .founder-grid { grid-template-columns: 1fr; gap: 48px; }
  .founder-visual { max-width: 360px; }
  .values-grid { grid-template-columns: repeat(2, 1fr); }
  .value-cell:nth-child(2) { border-right: none; }
  .value-cell:nth-child(1), .value-cell:nth-child(2) { border-bottom: 1px solid var(--ink-line); }
  .contact-grid { grid-template-columns: 1fr; gap: 48px; }
  .commitment-grid { grid-template-columns: repeat(2, 1fr); }
  .commitment-item:nth-child(2) { border-right: none; }
  .commitment-item:nth-child(1), .commitment-item:nth-child(2) {
    border-bottom: 1px solid rgba(245,239,225,0.2);
  }
}
@media (max-width: 720px) {
  .timeline-line { left: 28%; }
  .timeline-row { grid-template-columns: 1fr 1px 3fr; gap: 24px; }
  .timeline-year { font-size: 32px; }
}
@media (max-width: 560px) {
  .values-grid { grid-template-columns: 1fr; }
  .value-cell { border-right: none; border-bottom: 1px solid var(--ink-line); }
  .value-cell:last-child { border-bottom: none; }
  .commitment-grid { grid-template-columns: 1fr; }
  .commitment-item { border-right: none; border-bottom: 1px solid rgba(245,239,225,0.2); }
  .commitment-item:last-child { border-bottom: none; }
  .hero-visual { max-width: 320px; margin: 0 auto; }
  .founder-visual { max-width: 280px; }
}
</style>
