<template>
  <div class="home">
    <!-- 圖片放大模態視窗 -->
    <div v-if="showImageModal" class="image-modal-overlay" @click="closeImageModal">
      <div class="image-modal" @click.stop>
        <button class="modal-close-btn" @click="closeImageModal" aria-label="關閉">
          <span>&times;</span>
        </button>
        <img
          :src="modalImage.src"
          :alt="modalImage.alt"
          class="modal-image"
          @error="handleImageError"
        />
        <div class="modal-caption">
          <h3>{{ modalImage.name }}</h3>
          <p>點擊背景或按 ESC 鍵關閉</p>
        </div>
      </div>
    </div>

    <!-- 英雄區塊 -->
    <section class="hero">
      <div class="vertical-zh hero-vertical" aria-hidden="true">
        光明清潔企業社 · 台中北屯 · 自 一九九三 年
      </div>
      <div class="container hero-inner">
        <div class="hero-meta">
          <div class="eyebrow">創立於 1993 · 台中北屯</div>
          <div class="hero-meta-right">
            <span>N0 · 001</span>
            <span class="dot"></span>
            <span>ESTABLISHED MCMXCIII</span>
          </div>
        </div>

        <div class="hero-center">
          <div class="hero-subtitle">{{ yearsZhSpaced }} 載 · 誠 信 批 發</div>
          <h1 class="hero-title">專業清潔衛生用品</h1>

          <div class="hero-rule">
            <span class="hairline"></span>
            <span class="hero-rule-label">台中 · 光明</span>
            <span class="seal-stamp" style="font-size:11px; white-space:nowrap;">老字號</span>
            <span class="hairline"></span>
          </div>

          <p class="hero-desc body-text">
            自 1993 年由<strong>李金榮</strong>先生創立，光明清潔企業社專注於提供高品質的清潔與衛生用品。
            從家用衛生紙、環保垃圾袋，到飯店毛巾寢具、按摩護理油品——始終堅持品質第一，
            深耕台中 B2B 批發市場。
          </p>

          <div class="hero-ctas">
            <button class="btn btn-primary" @click="smoothScrollTo('products')">
              瀏覽產品目錄 <span class="arrow-e">→</span>
            </button>
            <a href="tel:04-22416726" class="btn btn-outline">撥打詢價專線</a>
          </div>
        </div>

        <div class="stat-strip">
          <div class="stat">
            <div class="stat-num-row"><span class="stat-num">{{ years }}</span><span class="stat-unit">年</span></div>
            <div class="stat-label">專業經驗</div>
          </div>
          <div class="stat">
            <div class="stat-num-row"><span class="stat-num">6</span><span class="stat-unit">大類</span></div>
            <div class="stat-label">產品線</div>
          </div>
          <div class="stat">
            <div class="stat-num-row"><span class="stat-num">500+</span><span class="stat-unit">家</span></div>
            <div class="stat-label">合作商家</div>
          </div>
          <div class="stat">
            <div class="stat-num-row"><span class="stat-num">4.9</span><span class="stat-unit">★</span></div>
            <div class="stat-label">Google 評分</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 創辦人引言 -->
    <section class="intro-quote">
      <div class="container quote-inner">
        <div class="quote-mark">“</div>
        <div class="quote-body">
          <p>品質第一，誠信為本；<br/>{{ yearsZh }}年如一日，為台中商家提供最可靠的清潔用品。</p>
          <div class="quote-author">—— 創辦人 · 李 金 榮</div>
        </div>
        <div class="seal-stamp" style="font-size:11px;">誠信經營</div>
      </div>
    </section>

    <!-- 產品總覽區塊 -->
    <section id="products" class="products-section">
      <div class="container">
        <div class="section-head">
          <div>
            <div class="eyebrow" style="margin-bottom:20px;">產品目錄 · 第 O1 章</div>
            <h2 class="h-section">從採購到補貨<br/>我們都是你的<em>老班底</em></h2>
          </div>
          <a href="#products-detail" class="btn btn-outline" @click.prevent="smoothScrollTo('products-detail')">
            看完整目錄 <span class="arrow-e">→</span>
          </a>
        </div>

        <div class="cat-grid">
          <div
            v-for="(category, idx) in productCategories"
            :key="category.id"
            class="cat-card"
            @click="smoothScrollTo('cat-' + category.id)"
          >
            <div class="cat-img-wrap">
              <img
                :src="getImageUrl(category.products[0].image)"
                :alt="category.category"
                class="cat-img"
                @error="handleImageError"
              />
              <div class="cat-img-badge">0{{ idx + 1 }} / 0{{ productCategories.length }}</div>
            </div>
            <div class="cat-body">
              <div class="cat-title-row">
                <h3 class="cat-title">{{ category.category }}</h3>
                <span class="cat-count">{{ category.products.length }} 項</span>
              </div>
              <div class="cat-en">{{ category.en }}</div>
              <p class="cat-desc">{{ category.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 為何選擇光明 -->
    <section class="why">
      <div class="container">
        <div class="why-grid">
          <div class="why-left">
            <div class="eyebrow" style="margin-bottom:20px;">為何選擇光明 · 第 O2 章</div>
            <h2 class="h-section">{{ yearsZh }}年<br/>不是口號</h2>
            <p class="body-text" style="margin-top:24px; max-width:380px;">
              在這個什麼都講速成的年代，我們只做一件事：把清潔用品這門生意做好、做久。
            </p>
            <div class="why-stamps">
              <div class="seal-stamp">老字號</div>
              <div class="seal-stamp stamp-navy">台中深耕</div>
            </div>
          </div>
          <div class="why-right">
            <div
              v-for="(item, i) in whyItems"
              :key="i"
              class="why-item"
              :class="{ 'no-border': i === whyItems.length - 1 }"
            >
              <div class="why-num">{{ item.num }}</div>
              <div>
                <h3 class="why-title">{{ item.title }}</h3>
                <p class="body-text" style="font-size:15px;">{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 完整產品目錄 (按類別) -->
    <section id="products-detail" class="products-detail">
      <div class="container">
        <div class="eyebrow" style="margin-bottom:16px;">完整產品目錄 · Full Catalog</div>
        <h2 class="h-section" style="margin-bottom:48px;">六大類 · 全品項一覽</h2>

        <div
          v-for="category in productCategories"
          :id="'cat-' + category.id"
          :key="category.id"
          class="cat-block"
        >
          <div class="cat-block-head">
            <div>
              <div class="cat-block-en">{{ category.en }}</div>
              <h3 class="cat-block-title">{{ category.category }}</h3>
            </div>
            <div class="cat-block-meta">{{ category.products.length }} 項商品</div>
          </div>
          <div class="product-images">
            <div
              v-for="product in category.products"
              :key="product.name"
              class="product-image-item"
              @click="openImageModal(product.image, product.name)"
            >
              <div class="product-image-wrap">
                <img
                  :src="getImageUrl(product.image)"
                  :alt="product.name"
                  class="product-image"
                  @error="handleImageError"
                />
              </div>
              <span class="product-name">{{ product.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 客戶評價 -->
    <section class="reviews-section">
      <div class="container">
        <div class="reviews-head">
          <div>
            <div class="eyebrow" style="margin-bottom:20px;">客戶評價 · 第 O3 章</div>
            <h2 class="h-section">來自台中商家的<br/>真實回饋</h2>
          </div>
          <div class="reviews-rating">
            <div class="rating-text">
              <div class="rating-stars">
                <svg v-for="n in 5" :key="n" width="14" height="14" viewBox="0 0 24 24" fill="var(--seal)">
                  <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18.2 22 12 18.3 5.8 22l1.7-7.2L2 10l7.1-1.1z"/>
                </svg>
              </div>
              <div class="rating-meta">GOOGLE 4.9 · 112 則評論</div>
            </div>
            <div class="rating-num">4.9</div>
          </div>
        </div>

        <div class="reviews-grid">
          <div
            v-for="(r, i) in reviews"
            :key="i"
            class="review-card"
          >
            <div class="review-head">
              <div class="review-stars">
                <svg v-for="n in r.stars" :key="n" width="14" height="14" viewBox="0 0 24 24" fill="var(--seal)">
                  <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18.2 22 12 18.3 5.8 22l1.7-7.2L2 10l7.1-1.1z"/>
                </svg>
              </div>
              <div class="review-date">{{ r.date }}</div>
            </div>
            <p class="review-text">「{{ r.text }}」</p>
            <div class="review-foot">
              <div class="review-name">{{ r.name }}</div>
              <div class="review-role">{{ r.role }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA 聯絡區 -->
    <section id="contact" class="cta-banner">
      <div class="container cta-inner">
        <div class="cta-eyebrow">—— 即刻開始合作 ——</div>
        <h2 class="cta-title">
          有任何清潔用品需求，<br/>
          <em>打通電話</em>就有答案
        </h2>
        <p class="cta-desc">
          無論是長期配合的飯店、按摩會館，或是剛起步的小店家，都歡迎來電詢問。我們會根據你的需求提供最合適的報價。
        </p>
        <div class="cta-contacts">
          <div class="cta-contact">
            <div class="cta-c-icon">TEL</div>
            <div class="cta-c-big">04-22416726</div>
            <div class="cta-c-small">週一至週日 08:30 – 21:00</div>
          </div>
          <div class="cta-divider"></div>
          <div class="cta-contact">
            <div class="cta-c-icon">MOBILE</div>
            <div class="cta-c-big">0988-335-658</div>
            <div class="cta-c-small">手機聯絡 · 隨時可撥</div>
          </div>
          <div class="cta-divider"></div>
          <div class="cta-contact">
            <div class="cta-c-icon">ADDR</div>
            <div class="cta-c-big">昌平路 2 段 10 巷</div>
            <div class="cta-c-small">台中市北屯區 · 72 弄 113 號 1 樓</div>
          </div>
        </div>
        <div class="cta-actions">
          <a href="tel:04-22416726" class="btn btn-seal">撥打電話詢價 <span class="arrow-e">→</span></a>
          <router-link to="/about" class="btn btn-outline cta-outline" @click="scrollTop">查看完整聯絡資訊</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 光明清潔企業社首頁組件
import { ref, onMounted, onUnmounted } from 'vue'
import { yearsSinceFounding, yearsSinceFoundingZh, yearsSinceFoundingZhSpaced } from '../utils/years'

const years = yearsSinceFounding()
const yearsZh = yearsSinceFoundingZh()
const yearsZhSpaced = yearsSinceFoundingZhSpaced()

// 圖片放大模態視窗
const showImageModal = ref(false)
const modalImage = ref({ src: '', alt: '', name: '' })

const openImageModal = (imageName, productName) => {
  modalImage.value = {
    src: getImageUrl(imageName),
    alt: productName,
    name: productName
  }
  showImageModal.value = true
  document.body.style.overflow = 'hidden'
}

const closeImageModal = () => {
  showImageModal.value = false
  modalImage.value = { src: '', alt: '', name: '' }
  document.body.style.overflow = 'auto'
}

const handleKeyDown = (event) => {
  if (event.key === 'Escape' && showImageModal.value) closeImageModal()
}

onMounted(() => document.addEventListener('keydown', handleKeyDown))
onUnmounted(() => document.removeEventListener('keydown', handleKeyDown))

// 平滑滾動
const smoothScrollTo = (targetId) => {
  const el = document.getElementById(targetId)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 90
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

// 產品資料（保留原本客戶提供的所有品項）
const productCategories = ref([
  {
    id: 1,
    category: '紙杯專用',
    en: 'Paper Cups',
    desc: '營業用飲水紙杯、耐熱杯、塑膠杯、縮小紙杯一應俱全',
    products: [
      { name: '空白紙杯6.5oz', image: '空白紙杯6.5oz.png' },
      { name: '空白紙杯7oz', image: '空白紙杯7oz.png' },
      { name: '空白紙杯9oz', image: '空白紙杯9oz.png' },
      { name: '空白紙杯樣式', image: '白杯sample.jpg' },
      { name: '塑膠杯', image: '塑膠杯.jpg' },
      { name: '縮小紙杯', image: '縮小紙杯.jpg' }
    ]
  },
  {
    id: 2,
    category: '衛生清潔用品',
    en: 'Hygiene',
    desc: '高品質衛生紙、擦手紙、紙毛巾，品項齊全穩定供貨',
    products: [
      { name: '擦手紙(厚)', image: '高品質.jpg' },
      { name: '優活大抽衛生紙', image: '優活衛生紙.webp' },
      { name: '優活大捲衛生紙', image: '優活大捲衛生紙.webp' },
      { name: '優活小捲衛生紙', image: '優活小捲衛生紙.webp' },
      { name: '優活小抽', image: '小抽衛生紙(優活).webp' },
      { name: '嬌采抽取式衛生紙', image: '嬌采.jpg' },
      { name: '平板衛生紙', image: '平板衛生紙.webp' },
      { name: '紙毛巾', image: '紙毛巾.webp' },
      { name: '嬌采大捲衛生紙', image: '嬌采大捲衛生紙.jpg' }
    ]
  },
  {
    id: 3,
    category: '環保垃圾袋',
    en: 'Eco Bags',
    desc: '袋王系列 S / M / L / XL / XXL 全尺寸供應',
    products: [
      { name: '垃圾袋(小)', image: '垃圾袋小.jpg' },
      { name: '垃圾袋(中)', image: '垃圾袋中.jpg' },
      { name: '垃圾袋(大)', image: '垃圾袋大.jpg' },
      { name: '垃圾袋(特大)', image: '垃圾袋特大.jpg' },
      { name: '捲筒清潔袋(超大)(黑色&灰色)', image: '捲筒清潔袋(超大)(黑色&灰色).webp' }
    ]
  },
  {
    id: 4,
    category: '按摩護理用品',
    en: 'Massage Care',
    desc: '按摩油、乳液、水果油、沐浴乳—會館專用規格',
    products: [
      { name: '1+2+1油壓包', image: '油壓包.webp' },
      { name: '康禮士水果油', image: '康禮士水國油.webp' },
      { name: '水果油', image: '水果油.webp' },
      { name: '沐浴乳(無香味)', image: '沐浴乳.webp' }
    ]
  },
  {
    id: 5,
    category: '清潔用品',
    en: 'Cleaning',
    desc: '洗劑、漂白水、除油劑、洗衣粉—商用清潔全包',
    products: [
      { name: '洗潔精', image: '洗潔精.webp' },
      { name: '漂白水', image: '漂白水.webp' },
      { name: '地板清潔劑(ISO認證)', image: '地板清潔劑.jpg' },
      { name: '玻璃清潔劑(ISO認證)', image: '玻璃清潔劑.jpg' },
      { name: '浴廁清潔劑(ISO認證)', image: '浴廁清潔劑.jpg' },
      { name: '潤膚洗手乳(ISO認證)', image: '潤膚洗手乳.jpg' },
      { name: '強效泡沫除油劑(焦炭剋星)', image: '強效泡沫除油劑(焦炭剋星).webp' },
      { name: '妙管家洗衣粉', image: '妙管家洗衣粉.webp' }
    ]
  },
  {
    id: 6,
    category: '毛巾寢具用品',
    en: 'Linen',
    desc: '布織布浴巾、紙浴巾、床巾—飯店民宿指定品項',
    products: [
      { name: '布織布浴巾', image: '布織布浴巾.webp' },
      { name: '無塵紙浴巾', image: '無塵紙浴巾.webp' },
      { name: '布織布(箱)', image: '布織布(箱).jpg' },
      { name: '紙浴巾(箱)', image: '紙浴巾(箱).jpg' },
      { name: '床巾(80*180cm)', image: '床斤.webp' }
    ]
  }
])

// 客戶評價
const reviews = [
  { stars: 5, text: '合作十幾年了，李老闆做生意實在，叫貨從沒缺過。衛生紙品質穩定，我們飯店一直用同一款。', name: '陳小姐', role: '某汽車旅館 採購經理', date: '2025.08' },
  { stars: 5, text: '按摩油系列選擇多，價格合理。老闆很熱心，初次進貨還給我們介紹最適合的品項，像老朋友在照顧。', name: '林師傅', role: '北屯按摩會館 負責人', date: '2025.06' },
  { stars: 5, text: '北屯這邊的商家幾乎都跟光明拿貨，品質有保障，老闆人又好，有問題隨時可以打電話問。', name: '王先生', role: '餐廳', date: '2025.03' },
  { stars: 5, text: '大量訂購垃圾袋，袋王的品質比別家好很多，規格齊全從 S 到 XXL 都有。下次還會繼續訂。', name: '李小姐', role: '診所', date: '2024.12' }
]

// 為何選擇光明
const whyItems = [
  { num: '壹', title: `${yearsZh}載不變的堅持`, desc: '自 1993 年創立，深耕台中。時間會淘汰所有浮誇，留下來的都是真材實料。' },
  { num: '貳', title: '在地深耕 · 即時供貨', desc: '門市設於台中北屯，服務範圍涵蓋大台中地區。電話一通，常備品最快當日送達。' },
  { num: '參', title: 'B2B 批發 · 誠信報價', desc: '專注商家、診所、按摩店批發。長期合作提供穩定價格，量大從優，不二價、不灌水。' },
  { num: '肆', title: '全品項一站採購', desc: '衛生紙、紙杯、垃圾袋、毛巾、按摩油—一家就搞定，不需要比十家、問十家。' }
]

const getImageUrl = (imageName) => `/images/${imageName}`
const handleImageError = (event) => {
  event.target.style.opacity = '0.3'
}
</script>

<style scoped>
/* === 英雄區塊 === */
.hero {
  padding: 72px 0 96px;
  position: relative;
  overflow: hidden;
}
.hero-vertical {
  position: absolute;
  right: 4%;
  top: 60px; bottom: 60px;
  font-size: 13px;
  color: var(--ink-line);
  letter-spacing: 0.6em;
  font-weight: 500;
  pointer-events: none;
}
.hero-inner { position: relative; }

.hero-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 72px;
  flex-wrap: wrap;
  gap: 16px;
}
.hero-meta-right {
  display: flex; align-items: center; gap: 14px;
  font-family: var(--mono);
  font-size: 11px;
  color: var(--ink-mute);
  letter-spacing: 0.2em;
}
.hero-meta-right .dot {
  width: 4px; height: 4px; border-radius: 50%;
  background: var(--seal);
}

.hero-center {
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
  position: relative;
}
.hero-subtitle {
  font-family: var(--serif);
  font-weight: 500;
  font-size: clamp(14px, 1.2vw, 17px);
  letter-spacing: 1.2em;
  color: var(--ink-soft);
  padding-left: 1.2em;
  margin-bottom: 28px;
}
.hero-title {
  font-family: var(--serif);
  font-weight: 700;
  font-size: clamp(48px, 8.2vw, 128px);
  line-height: 0.98;
  letter-spacing: 0.03em;
  color: var(--ink);
  margin-bottom: 20px;
  white-space: nowrap;
}
.hero-rule {
  display: flex; align-items: center; justify-content: center;
  gap: 20px; margin-bottom: 44px; flex-wrap: wrap;
}
.hairline {
  flex: 0 1 80px;
  min-width: 40px;
  height: 1px;
  background: var(--ink-line);
}
.hero-rule-label {
  font-family: var(--serif);
  font-weight: 500;
  font-size: clamp(14px, 1.3vw, 18px);
  color: var(--seal);
  letter-spacing: 0.35em;
  padding-left: 0.35em;
  white-space: nowrap;
}
.hero-desc {
  max-width: 640px;
  margin: 0 auto 44px;
  font-size: 16.5px;
  color: var(--ink-soft);
  text-wrap: pretty;
}
.hero-desc strong {
  color: var(--ink);
  font-weight: 600;
}
.hero-ctas {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 64px;
}

/* Stat strip */
.stat-strip {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid var(--ink-line);
  border-bottom: 1px solid var(--ink-line);
  max-width: 1040px;
  margin: 0 auto;
}
.stat {
  padding: 28px 20px;
  border-right: 1px solid var(--ink-line);
  text-align: center;
}
.stat:last-child { border-right: none; }
.stat-num-row {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 4px;
  margin-bottom: 6px;
}
.stat-num {
  font-family: var(--serif);
  font-weight: 600;
  font-size: 44px;
  color: var(--ink);
  line-height: 1;
  letter-spacing: -0.02em;
}
.stat-unit {
  font-family: var(--serif);
  font-size: 14px;
  color: var(--ink-soft);
}
.stat-label {
  font-family: var(--serif);
  font-size: 12px;
  color: var(--ink-mute);
  letter-spacing: 0.2em;
}

/* === 創辦人引言 === */
.intro-quote {
  padding: 80px 0;
  background: var(--cream);
  border-top: 1px solid var(--ink-line);
  border-bottom: 1px solid var(--ink-line);
}
.quote-inner {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 64px;
}
.quote-mark {
  font-family: var(--display);
  font-size: 88px;
  color: var(--seal);
  line-height: 0.9;
  font-style: italic;
}
.quote-body p {
  font-family: var(--serif);
  font-size: 26px;
  line-height: 1.6;
  color: var(--ink);
  letter-spacing: 0.02em;
  text-wrap: balance;
}
.quote-author {
  margin-top: 20px;
  font-family: var(--serif);
  font-size: 13px;
  color: var(--ink-mute);
  letter-spacing: 0.2em;
}

/* === 產品區 section head === */
.products-section { scroll-margin-top: 90px; }
.section-head {
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin-bottom: 48px;
  gap: 32px;
  flex-wrap: wrap;
}
.section-head .h-section em {
  font-family: var(--display);
  font-style: italic;
  color: var(--seal);
}

/* 類別卡片 */
.cat-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}
.cat-card {
  cursor: pointer;
  background: var(--cream);
  border: 1px solid var(--ink-line);
  transition: all 0.25s;
  position: relative;
  overflow: hidden;
}
.cat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px -20px rgba(29,29,27,0.2);
}
.cat-img-wrap {
  aspect-ratio: 4 / 3;
  background: var(--paper-2);
  border-bottom: 1px solid var(--ink-line);
  position: relative;
  overflow: hidden;
  display: grid;
  place-items: center;
}
.cat-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.cat-img-badge {
  position: absolute;
  top: 12px; left: 12px;
  font-family: var(--mono);
  font-size: 11px;
  background: var(--cream);
  padding: 4px 8px;
  letter-spacing: 0.1em;
  color: var(--ink-soft);
}
.cat-body { padding: 22px 24px 26px; }
.cat-title-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 6px;
}
.cat-title {
  font-family: var(--serif);
  font-size: 21px;
  font-weight: 600;
  letter-spacing: 0.05em;
}
.cat-count {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--ink-mute);
}
.cat-en {
  font-family: var(--display);
  font-style: italic;
  font-size: 13px;
  color: var(--ink-mute);
  letter-spacing: 0.08em;
  margin-bottom: 10px;
}
.cat-desc {
  font-size: 13.5px;
  color: var(--ink-soft);
  line-height: 1.65;
}

/* === Why section === */
.why { background: var(--paper-2); }
.why-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 80px;
  align-items: start;
}
.why-left { position: sticky; top: 120px; }
.why-stamps {
  margin-top: 40px;
  display: flex;
  gap: 12px;
  align-items: center;
}
.stamp-navy {
  border-color: var(--navy) !important;
  color: var(--navy) !important;
}
.stamp-navy::before, .stamp-navy::after { background: var(--navy) !important; }

.why-item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 32px;
  padding: 36px 0;
  border-bottom: 1px solid var(--ink-line);
}
.why-item.no-border { border-bottom: none; }
.why-num {
  width: 56px; height: 56px;
  border: 1.5px solid var(--seal);
  color: var(--seal);
  display: grid;
  place-items: center;
  font-family: var(--serif);
  font-size: 24px;
  font-weight: 700;
}
.why-title {
  font-family: var(--serif);
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 12px;
  letter-spacing: 0.03em;
}

/* === 完整產品目錄 === */
.products-detail { scroll-margin-top: 90px; }
.cat-block {
  padding: 48px 0;
  border-top: 1px solid var(--ink-line);
  scroll-margin-top: 90px;
}
.cat-block:first-of-type { border-top: none; padding-top: 0; }
.cat-block-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 32px;
  gap: 24px;
  flex-wrap: wrap;
}
.cat-block-en {
  font-family: var(--display);
  font-style: italic;
  font-size: 14px;
  color: var(--seal);
  letter-spacing: 0.15em;
  margin-bottom: 6px;
}
.cat-block-title {
  font-family: var(--serif);
  font-size: 30px;
  font-weight: 600;
  color: var(--ink);
  letter-spacing: 0.05em;
}
.cat-block-meta {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--ink-mute);
  letter-spacing: 0.15em;
}

.product-images {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
}
.product-image-item {
  cursor: pointer;
  background: var(--cream);
  border: 1px solid var(--ink-line);
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
}
.product-image-item:hover {
  transform: translateY(-2px);
  border-color: var(--ink);
  box-shadow: 0 14px 28px -18px rgba(29,29,27,0.25);
}
.product-image-wrap {
  aspect-ratio: 1;
  overflow: hidden;
  background: var(--paper-2);
  border-bottom: 1px solid var(--ink-line);
}
.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.product-image-item:hover .product-image { transform: scale(1.04); }
.product-name {
  font-family: var(--serif);
  font-size: 14px;
  color: var(--ink);
  padding: 12px 14px;
  line-height: 1.4;
  text-align: left;
}

/* === 客戶評價 === */
.reviews-section { padding: 96px 0; }
.reviews-head {
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin-bottom: 56px;
  gap: 32px;
  flex-wrap: wrap;
}
.reviews-rating {
  display: flex;
  align-items: center;
  gap: 20px;
}
.rating-text { text-align: right; }
.rating-stars {
  display: flex;
  gap: 2px;
  justify-content: flex-end;
  margin-bottom: 4px;
}
.rating-meta {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--ink-mute);
  letter-spacing: 0.1em;
}
.rating-num {
  font-family: var(--display);
  font-style: italic;
  font-size: 56px;
  color: var(--ink);
  line-height: 1;
  border-left: 1px solid var(--ink-line);
  padding-left: 20px;
}
.reviews-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
.review-card {
  background: var(--cream);
  border: 1px solid var(--ink-line);
  padding: 28px 30px;
}
.review-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}
.review-stars { display: flex; gap: 2px; }
.review-date {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--ink-mute);
}
.review-text {
  font-family: var(--serif);
  font-size: 16px;
  line-height: 1.75;
  color: var(--ink);
  margin-bottom: 22px;
  text-wrap: pretty;
}
.review-foot {
  border-top: 1px solid var(--ink-line);
  padding-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.review-name {
  font-family: var(--serif);
  font-size: 14px;
  font-weight: 600;
}
.review-role {
  font-size: 12px;
  color: var(--ink-mute);
}

/* === CTA 聯絡區 === */
.cta-banner {
  background: var(--navy-deep);
  color: var(--cream);
  padding: 96px 0;
  scroll-margin-top: 90px;
}
.cta-inner { text-align: center; }
.cta-eyebrow {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.3em;
  color: rgba(245,239,225,0.5);
  margin-bottom: 24px;
}
.cta-title {
  font-family: var(--serif);
  font-size: clamp(32px, 4.5vw, 60px);
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 28px;
  letter-spacing: 0.02em;
}
.cta-title em {
  font-family: var(--display);
  font-style: italic;
  color: #d9b97a;
}
.cta-desc {
  font-size: 16px;
  color: rgba(245,239,225,0.7);
  max-width: 560px;
  margin: 0 auto 44px;
  line-height: 1.75;
}
.cta-contacts {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 44px;
  flex-wrap: wrap;
}
.cta-contact { text-align: left; }
.cta-c-icon {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.25em;
  color: rgba(245,239,225,0.5);
  margin-bottom: 8px;
}
.cta-c-big {
  font-family: var(--serif);
  font-size: 22px;
  color: var(--cream);
  font-weight: 500;
  margin-bottom: 4px;
}
.cta-c-small {
  font-size: 12px;
  color: rgba(245,239,225,0.6);
}
.cta-divider {
  width: 1px;
  background: rgba(245,239,225,0.15);
}
.cta-actions {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
}
.cta-outline {
  border-color: rgba(245,239,225,0.4);
  color: var(--cream);
}
.cta-outline:hover {
  background: var(--cream);
  color: var(--navy-deep);
}

/* === 模態視窗 === */
.image-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(15, 37, 71, 0.88);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  cursor: pointer;
  backdrop-filter: blur(5px);
}
.image-modal {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: default;
  animation: modalFadeIn 0.25s ease-out;
}
@keyframes modalFadeIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}
.modal-close-btn {
  position: absolute;
  top: -50px;
  right: 0;
  background: rgba(245,239,225,0.15);
  color: var(--cream);
  width: 40px; height: 40px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}
.modal-close-btn:hover {
  background: var(--seal);
  transform: scale(1.05);
}
.modal-image {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
  background: var(--cream);
  border: 1px solid rgba(245,239,225,0.2);
}
.modal-caption {
  margin-top: 20px;
  text-align: center;
  color: var(--cream);
  font-family: var(--serif);
}
.modal-caption h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 8px;
  letter-spacing: 0.05em;
}
.modal-caption p {
  font-family: var(--mono);
  font-size: 11px;
  opacity: 0.6;
  letter-spacing: 0.15em;
}

/* === 響應式 === */
@media (max-width: 960px) {
  .why-grid { grid-template-columns: 1fr; gap: 40px; }
  .why-left { position: static; }
  .cat-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 900px) {
  .hero-title { white-space: normal; }
}
@media (max-width: 720px) {
  .hero { padding: 48px 0 72px; }
  .hero-meta { margin-bottom: 48px; }
  .hero-subtitle { letter-spacing: 0.8em; padding-left: 0.8em; }
  .quote-inner { grid-template-columns: 1fr; gap: 24px; text-align: left; }
  .quote-mark { font-size: 64px; }
  .quote-body p { font-size: 20px; }
  .stat-strip { grid-template-columns: repeat(2, 1fr); }
  .stat { padding: 22px 12px; }
  .stat-num { font-size: 36px; }
  .stat:nth-child(2) { border-right: none; }
  .stat:nth-child(1), .stat:nth-child(2) { border-bottom: 1px solid var(--ink-line); }
  .cat-grid { grid-template-columns: 1fr; }
  .cta-divider { display: none; }
  .cta-contacts { gap: 28px; }
  .cat-block-title { font-size: 24px; }
  .section-head { gap: 20px; }
  .reviews-grid { grid-template-columns: 1fr; }
  .reviews-head { gap: 24px; }
  .rating-num { font-size: 44px; }
}
@media (max-width: 480px) {
  .hero-vertical { display: none; }
  .hero-subtitle { letter-spacing: 0.5em; padding-left: 0.5em; font-size: 12px; }
  .hero-rule { gap: 12px; }
  .hairline { flex-basis: 40px; }
  .hero-rule-label { font-size: 13px; letter-spacing: 0.25em; padding-left: 0.25em; }
  .hero-desc { font-size: 15px; }
  .stat-num { font-size: 30px; }
  .stat-label { font-size: 11px; letter-spacing: 0.12em; }
  .product-images { grid-template-columns: repeat(2, 1fr); gap: 12px; }
  .product-name { font-size: 12px; padding: 10px; }
  .cta-title { font-size: 28px; }
  .cta-contacts { gap: 22px; }
  .cta-c-big { font-size: 18px; }
  .modal-close-btn { top: -44px; right: -8px; width: 34px; height: 34px; font-size: 20px; }
}
</style>
