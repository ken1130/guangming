<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const goto = (path, hash) => {
  if (hash) {
    if (route.path === path) {
      const el = document.getElementById(hash)
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 90
        window.scrollTo({ top, behavior: 'smooth' })
      }
    } else {
      router.push(path).then(() => {
        setTimeout(() => {
          const el = document.getElementById(hash)
          if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 90
            window.scrollTo({ top, behavior: 'smooth' })
          }
        }, 80)
      })
    }
  } else {
    router.push(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const isActive = (path) => route.path === path
</script>

<template>
  <div id="app" class="paper-bg">
    <!-- 網站頁首 -->
    <header class="site-header">
      <div class="inner">
        <div class="brand" @click="goto('/')">
          <div class="brand-seal">光</div>
          <div class="brand-text">
            <span class="brand-zh">光明清潔企業社</span>
            <span class="brand-en">GUANG MING · EST.1993</span>
          </div>
        </div>
        <nav class="nav-main">
          <button :class="{ active: isActive('/') }" @click="goto('/')">首頁</button>
          <button :class="{ active: isActive('/about') }" @click="goto('/about')">關於我們</button>
          <button @click="goto('/', 'products')">產品目錄</button>
          <button @click="goto('/about', 'contact')">聯絡我們</button>
        </nav>
        <div class="header-contact">
          <div class="tel-block">
            <div class="tel-label">營業專線</div>
            <div class="tel">04-22416726</div>
          </div>
          <a href="tel:0988335658" class="btn btn-seal">立即詢價</a>
        </div>
      </div>
    </header>

    <main>
      <router-view />
    </main>

    <!-- 網站頁尾 -->
    <footer class="site-footer">
      <div class="inner">
        <div class="footer-grid">
          <div class="footer-col">
            <div class="footer-brand-name">光明清潔企業社</div>
            <div class="footer-brand-en">GUANG MING CLEANING · EST. 1993</div>
            <p class="footer-desc">
              三十五載專注於清潔與衛生用品批發，服務全台中飯店、按摩會館、商家企業。品質第一，誠信為本。
            </p>
          </div>
          <div class="footer-col">
            <h4>產品類別</h4>
            <ul>
              <li><a @click="goto('/', 'products')">衛生清潔用品</a></li>
              <li><a @click="goto('/', 'products')">紙杯專用</a></li>
              <li><a @click="goto('/', 'products')">環保垃圾袋</a></li>
              <li><a @click="goto('/', 'products')">按摩護理用品</a></li>
              <li><a @click="goto('/', 'products')">毛巾寢具</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>關於光明</h4>
            <ul>
              <li><a @click="goto('/about')">品牌故事</a></li>
              <li><a @click="goto('/about')">發展歷程</a></li>
              <li><a @click="goto('/about', 'values')">核心價值</a></li>
              <li><a @click="goto('/about', 'contact')">門市地圖</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>聯絡資訊</h4>
            <ul>
              <li class="mono">TEL · 04-22416726</li>
              <li class="mono">MOBILE · 0988-335-658</li>
              <li style="line-height:1.5;">台中市北屯區<br/>昌平路2段10巷72弄113號1樓</li>
              <li>週一至週日 08:30–21:00</li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <div>© 1993 – {{ new Date().getFullYear() }} GUANG MING CLEANING ENTERPRISE</div>
          <div>SINCE · MCMXCIII · 臺中 · 北屯</div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
/* === 光明清潔企業社 - 設計系統 === */
:root {
  --ink: #1d1d1b;
  --ink-soft: #3a3a36;
  --ink-mute: #6b6a64;
  --ink-line: #d8d2c4;

  --paper: #f5efe1;
  --paper-2: #efe8d6;
  --paper-3: #ebe3ce;
  --cream: #faf6ea;
  --white: #fffdf6;

  --navy: #1a3a6b;
  --navy-deep: #0f2547;
  --navy-soft: #2f527f;

  --seal: #b8372f;
  --seal-deep: #8f231c;

  --gold: #a88339;
  --green-soft: #7d9669;

  --serif: "Noto Serif TC", "Songti TC", "Source Han Serif TC", serif;
  --sans: "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif;
  --display: "Instrument Serif", "Noto Serif TC", serif;
  --mono: "JetBrains Mono", "Courier New", monospace;

  --max: 1280px;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

html, body {
  background: var(--paper);
  color: var(--ink);
  font-family: var(--sans);
  font-size: 16px;
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

html { scroll-behavior: smooth; }

img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; cursor: pointer; }
button { font: inherit; cursor: pointer; border: none; background: none; color: inherit; }

#app { min-height: 100vh; display: flex; flex-direction: column; }
#app > main { flex: 1; }

/* 紙張紋理背景 */
.paper-bg {
  background-color: var(--paper);
  background-image:
    radial-gradient(ellipse at 20% 30%, rgba(168,131,57,0.04) 0%, transparent 40%),
    radial-gradient(ellipse at 80% 70%, rgba(26,58,107,0.03) 0%, transparent 40%),
    repeating-linear-gradient(0deg, transparent 0, transparent 2px, rgba(0,0,0,0.008) 2px, rgba(0,0,0,0.008) 3px);
}

.container {
  max-width: var(--max);
  margin: 0 auto;
  padding: 0 32px;
}

/* === Header === */
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--paper);
  border-bottom: 1px solid var(--ink-line);
}
.site-header .inner {
  max-width: var(--max);
  margin: 0 auto;
  padding: 16px 32px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 32px;
}
@media (max-width: 1080px) {
  .site-header .inner { gap: 20px; padding: 14px 24px; }
  .nav-main { gap: 22px !important; }
}
@media (max-width: 900px) {
  .site-header .inner {
    grid-template-columns: auto auto;
    gap: 16px;
  }
  .nav-main {
    grid-column: 1 / -1;
    order: 3;
    justify-content: flex-start !important;
    gap: 18px !important;
    border-top: 1px solid var(--ink-line);
    padding-top: 10px;
    margin-top: 2px;
  }
  .header-contact .tel-block { display: none !important; }
}

.brand { display: flex; align-items: center; gap: 12px; cursor: pointer; }
.brand-seal {
  width: 44px; height: 44px;
  background: var(--seal);
  color: var(--cream);
  display: grid; place-items: center;
  font-family: var(--serif);
  font-weight: 700;
  font-size: 22px;
  letter-spacing: -0.02em;
  border-radius: 2px;
  box-shadow: inset 0 0 0 2px rgba(255,255,255,0.15), 0 1px 0 rgba(0,0,0,0.08);
}
.brand-text { display: flex; flex-direction: column; line-height: 1.1; }
.brand-zh {
  font-family: var(--serif);
  font-weight: 700;
  font-size: 19px;
  color: var(--ink);
  letter-spacing: 0.02em;
}
.brand-en {
  font-family: var(--display);
  font-size: 12px;
  color: var(--ink-mute);
  font-style: italic;
  letter-spacing: 0.1em;
}

.nav-main { display: flex; gap: 36px; justify-content: center; }
.nav-main button {
  font-family: var(--serif);
  font-size: 15px;
  color: var(--ink-soft);
  padding: 8px 0;
  position: relative;
  letter-spacing: 0.05em;
}
.nav-main button.active { color: var(--ink); }
.nav-main button.active::after {
  content: "";
  position: absolute;
  left: 50%; bottom: -2px;
  transform: translateX(-50%);
  width: 4px; height: 4px;
  background: var(--seal);
  border-radius: 50%;
}
.nav-main button:hover { color: var(--ink); }

.header-contact {
  display: flex; align-items: center; gap: 18px;
  font-family: var(--mono);
  font-size: 13px;
  color: var(--ink-soft);
}
.header-contact .tel { font-weight: 500; white-space: nowrap; }
.header-contact .tel-label {
  font-family: var(--serif);
  font-size: 11px;
  color: var(--ink-mute);
  letter-spacing: 0.15em;
}

/* === 通用排版 === */
section { padding: 80px 0; }
.section-padding-lg { padding: 120px 0; }

.eyebrow {
  font-family: var(--mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  color: var(--ink-mute);
  display: inline-flex; align-items: center; gap: 12px;
}
.eyebrow::before {
  content: "";
  width: 24px; height: 1px;
  background: var(--ink-soft);
}

.h-display {
  font-family: var(--serif);
  font-weight: 500;
  font-size: clamp(40px, 5vw, 72px);
  line-height: 1.1;
  letter-spacing: 0.02em;
  color: var(--ink);
}
.h-display em {
  font-family: var(--display);
  font-style: italic;
  font-weight: 400;
  color: var(--seal);
}

.h-section {
  font-family: var(--serif);
  font-weight: 500;
  font-size: clamp(28px, 3.5vw, 44px);
  line-height: 1.2;
  letter-spacing: 0.01em;
}

.body-text {
  font-family: var(--sans);
  font-size: 15px;
  line-height: 1.75;
  color: var(--ink-soft);
  text-wrap: pretty;
}

/* === 印章樣式 === */
.seal-stamp {
  display: inline-block;
  padding: 8px 14px;
  border: 1.5px solid var(--seal);
  color: var(--seal);
  font-family: var(--serif);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.2em;
  background: transparent;
  transform: rotate(-2deg);
  position: relative;
}
.seal-stamp::before, .seal-stamp::after {
  content: "";
  position: absolute;
  background: var(--seal);
  opacity: 0.4;
}
.seal-stamp::before { left: 2px; top: -3px; width: 20%; height: 2px; }
.seal-stamp::after { right: 4px; bottom: -2px; width: 30%; height: 2px; }

.seal-round {
  width: 110px; height: 110px;
  border-radius: 50%;
  border: 2px solid var(--seal);
  display: grid; place-items: center;
  color: var(--seal);
  font-family: var(--serif);
  font-weight: 700;
  text-align: center;
  line-height: 1.15;
  font-size: 14px;
  letter-spacing: 0.15em;
  position: relative;
  background: var(--cream);
  transform: rotate(-6deg);
}
.seal-round::before {
  content: "";
  position: absolute;
  inset: 6px;
  border: 1px solid var(--seal);
  border-radius: 50%;
  opacity: 0.5;
}

/* === Buttons === */
.btn {
  display: inline-flex; align-items: center; gap: 10px;
  padding: 14px 24px;
  font-family: var(--serif);
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.08em;
  transition: background 0.2s, color 0.2s, transform 0.15s;
  white-space: nowrap;
}
.btn-primary { background: var(--ink); color: var(--cream); border-radius: 2px; }
.btn-primary:hover { background: var(--navy-deep); }
.btn-outline { border: 1px solid var(--ink); color: var(--ink); border-radius: 2px; }
.btn-outline:hover { background: var(--ink); color: var(--cream); }
.btn-seal { background: var(--seal); color: var(--cream); border-radius: 2px; }
.btn-seal:hover { background: var(--seal-deep); }

.arrow-e { display: inline-block; transition: transform 0.2s; }
.btn:hover .arrow-e { transform: translateX(3px); }

/* === 分隔線 === */
.rule { height: 1px; background: var(--ink-line); width: 100%; }

/* === 豎排中文 === */
.vertical-zh {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-family: var(--serif);
}

/* === 頁尾 === */
.site-footer {
  background: var(--navy-deep);
  color: var(--paper-2);
  padding: 72px 0 28px;
}
.site-footer .inner {
  max-width: var(--max);
  margin: 0 auto;
  padding: 0 32px;
}
.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1.1fr;
  gap: 48px;
}
.footer-col h4 {
  font-family: var(--serif);
  font-size: 14px;
  letter-spacing: 0.2em;
  color: var(--cream);
  margin-bottom: 18px;
  font-weight: 600;
}
.footer-col ul { list-style: none; }
.footer-col li {
  font-size: 14px;
  color: rgba(245,239,225,0.6);
  margin-bottom: 10px;
  line-height: 1.6;
}
.footer-col li.mono { font-family: var(--mono); }
.footer-col a { cursor: pointer; }
.footer-col a:hover { color: var(--cream); }

.footer-brand-name {
  font-family: var(--serif);
  font-size: 22px;
  color: var(--cream);
  margin-bottom: 8px;
}
.footer-brand-en {
  font-family: var(--display);
  font-style: italic;
  font-size: 13px;
  color: rgba(245,239,225,0.5);
  letter-spacing: 0.1em;
  margin-bottom: 16px;
}
.footer-desc {
  font-size: 13px;
  color: rgba(245,239,225,0.55);
  line-height: 1.75;
  max-width: 320px;
}

.footer-bottom {
  margin-top: 56px;
  padding-top: 24px;
  border-top: 1px solid rgba(245,239,225,0.15);
  display: flex;
  justify-content: space-between;
  font-family: var(--mono);
  font-size: 11px;
  color: rgba(245,239,225,0.4);
  letter-spacing: 0.1em;
}

@media (max-width: 900px) {
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 36px; }
  .footer-bottom { flex-direction: column; gap: 10px; }
}
@media (max-width: 560px) {
  .footer-grid { grid-template-columns: 1fr; gap: 32px; }
  section { padding: 60px 0; }
  .container { padding: 0 20px; }
}
</style>
