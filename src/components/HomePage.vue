<template>
  <div class="home">
    <!-- 圖片放大模態視窗 -->
    <div v-if="showImageModal" class="image-modal-overlay" @click="closeImageModal">
      <div class="image-modal" @click.stop>
        <button class="modal-close-btn" @click="closeImageModal">
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
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">光明清潔企業社</h1>
          <p class="hero-subtitle">35年專業經驗 · 品質值得信賴</p>
          <p class="hero-description">
            專業提供各式清潔用品，從按摩護理用品到衛生清潔用品，滿足您的各種需求
          </p>
          <div class="hero-actions">
            <button @click="smoothScrollTo('products')" class="btn-primary">查看產品</button>
            <button @click="smoothScrollTo('contact')" class="btn-secondary">聯絡我們</button>
          </div>
        </div>
        <div class="hero-image">
          <div class="hero-placeholder">
            🧹 專業清潔用品供應商
          </div>
        </div>
      </div>
    </section>

    <!-- 公司特色 -->
    <section class="features-section">
      <div class="container">
        <h2 class="section-title">為什麼選擇我們</h2>
        <div class="features-grid">
          <div 
            v-for="feature in features" 
            :key="feature.title"
            class="feature-card"
          >
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 主要產品 -->
    <section id="products" class="products-section">
      <div class="container">
        <h2 class="section-title">產品分類</h2>
        <div class="products-grid">
          <div 
            v-for="category in productCategories" 
            :key="category.id"
            class="product-card"
          >
            <div class="product-header">
              <div class="product-icon">{{ category.icon }}</div>
              <h3 class="product-category">{{ category.category }}</h3>
              <p class="product-count">{{ category.products.length }} 種產品</p>
            </div>
            
            <!-- 顯示所有產品圖片 -->
            <div class="product-images">
              <div 
                v-for="product in category.products" 
                :key="product.name"
                class="product-image-item"
              >
                <img 
                  :src="getImageUrl(product.image)" 
                  :alt="product.name" 
                  class="product-image clickable-image" 
                  @error="handleImageError"
                  @click="openImageModal(product.image, product.name)"
                />
                <span class="product-name">{{ product.name }}</span>
              </div>
            </div>
            
            <div class="product-footer">
              <button @click="smoothScrollTo('contact')" class="product-btn">詳細諮詢</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 聯絡資訊 -->
    <section id="contact" class="contact-section">
      <div class="container">
        <h2 class="section-title">聯絡我們</h2>
        <div class="contact-info-grid">
          <div class="contact-item">
            <div class="contact-icon">📍</div>
            <div class="contact-details">
              <h4>公司地址</h4>
              <p>台中市北屯區昌平路2段10巷72弄113號1樓</p>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">📞</div>
            <div class="contact-details">
              <h4>聯絡電話</h4>
              <p>04-22416726</p>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">📱</div>
            <div class="contact-details">
              <h4>手機號碼</h4>
              <p>0988-335-658</p>
            </div>
          </div>
        </div>
        <div class="contact-actions">
          <a href="tel:04-22416726" class="btn-primary">撥打電話</a>
          <a href="tel:0988335658" class="btn-secondary">手機聯絡</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 光明清潔企業社首頁組件
import { ref } from 'vue'

// 圖片放大模態視窗相關
const showImageModal = ref(false)
const modalImage = ref({
  src: '',
  alt: '',
  name: ''
})

// 打開圖片放大模態視窗
const openImageModal = (imageName, productName) => {
  modalImage.value = {
    src: getImageUrl(imageName),
    alt: productName,
    name: productName
  }
  showImageModal.value = true
  // 防止背景滾動
  document.body.style.overflow = 'hidden'
}

// 關閉圖片放大模態視窗
const closeImageModal = () => {
  showImageModal.value = false
  modalImage.value = { src: '', alt: '', name: '' }
  // 恢復背景滾動
  document.body.style.overflow = 'auto'
}

// 按 ESC 鍵關閉模態視窗
const handleKeyDown = (event) => {
  if (event.key === 'Escape' && showImageModal.value) {
    closeImageModal()
  }
}

// 監聽鍵盤事件
document.addEventListener('keydown', handleKeyDown)

// 平滑滾動函數
const smoothScrollTo = (targetId) => {
  const element = document.getElementById(targetId)
  if (element) {
    const offsetTop = element.offsetTop - 100 // 減去導航列高度
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    })
  }
}

// 產品資料
const productCategories = ref([

{
    id: 1,
    category: '紙杯專用',
    icon: '🥤',
    products: [
      { name: '空白紙杯6.5oz', image: '空白紙杯6.5oz.png' },
      { name: '空白紙杯7oz', image: '空白紙杯7oz.png' },
      { name: '空白紙杯9oz', image: '空白紙杯9oz.png' },
      { name: '空白紙杯樣式', image: '白杯sample.jpg' },
      { name: '塑膠杯', image: '塑膠杯.jpg' },
      { name: '縮小紙杯', image: '縮小紙杯.jpg' },
    ]
  },
  {
    id: 2,
    category: '衛生清潔用品',
    icon: '🧻',
    products: [
      { name: '擦手紙(厚)', image: '高品質.jpg' },
      { name: '優活大抽衛生紙', image: '優活衛生紙.webp' },
      { name: '優活大捲衛生紙', image: '優活大捲衛生紙.webp' },
      { name: '優活小捲衛生紙', image: '優活小捲衛生紙.webp' },
      { name: '優活小抽', image: '小抽衛生紙(優活).webp' },
      { name: '嬌采抽取式衛生紙', image: '嬌采.jpg' },
      { name: '平板衛生紙', image: '平板衛生紙.webp' },
      { name: '紙毛巾', image: '紙毛巾.webp' },
      { name: '嬌采大捲衛生紙', image: '嬌采大捲衛生紙.jpg' },
    ]
  },
  {
    id: 3,
    category: '垃圾袋',
    icon: '🗑️',
    products: [
      { name: '垃圾袋(小)', image: '垃圾袋小.jpg' },
      { name: '垃圾袋(中)', image: '垃圾袋中.jpg' },
      { name: '垃圾袋(大)', image: '垃圾袋大.jpg' },
      { name: '垃圾袋(特大)', image: '垃圾袋特大.jpg' },
      { name: '捲筒清潔袋(超大)(黑色&灰色)', image: '捲筒清潔袋(超大)(黑色&灰色).webp' },
    ]
  },
  {
    id: 4,
    category: '按摩護理用品',
    icon: '💆‍♀️',
    products: [
      { name: '1+2+1油壓包', image: '油壓包.webp' },
      { name: '康禮士水果油', image: '康禮士水國油.webp' },
      { name: '水果油', image: '水果油.webp' },
      { name: '沐浴乳(無香味)', image: '沐浴乳.webp' },
    ]
  },
  {
    id: 5,
    category: '清潔用品',
    icon: '🧽',
    products: [
      { name: '洗潔精', image: '洗潔精.webp' },
      { name: '漂白水', image: '漂白水.webp' },
      { name: '地板清潔劑', image: '地板清潔劑.jpg' },
      { name: '玻璃清潔劑', image: '玻璃清潔劑.jpg' },
      { name: '浴廁清潔劑', image: '浴廁清潔劑.jpg' },
      { name: '潤膚洗手乳', image: '潤膚洗手乳.jpg' },
      { name: '強效泡沫除油劑(焦炭剋星)', image: '強效泡沫除油劑(焦炭剋星).webp' },
      { name: '妙管家洗衣粉', image: '妙管家洗衣粉.webp' }
    ]
  },
  {
    id: 6,
    category: '毛巾寢具用品',
    icon: '🛏️',
    products: [
      { name: '布織布浴巾', image: '布織布浴巾.webp' },
      { name: '無塵紙浴巾', image: '無塵紙浴巾.webp' },
      { name: '布織布(箱)', image: '布織布(箱).jpg' },
      { name: '紙浴巾(箱)', image: '紙浴巾(箱).jpg' },
      { name: '床巾(80*180cm)', image: '床斤.webp' }
    ]
  },
])

// 公司特色
const features = ref([
  {
    icon: '🏆',
    title: '35年經驗',
    description: '累積35年的專業經驗與信譽'
  },
  {
    icon: '✅',
    title: '品質保證',
    description: '嚴格品管，確保產品品質'
  },
  {
    icon: '🚚',
    title: '快速配送',
    description: '台中地區快速到貨服務'
  },
  {
    icon: '💝',
    title: '客戶至上',
    description: '用心服務每一位客戶'
  }
])

const getImageUrl = (imageName) => {
  return `/images/${imageName}`
}

const handleImageError = (event) => {
  event.target.style.display = 'none'
}
</script>

<style scoped>
/* 全域樣式 */
* {
  box-sizing: border-box;
}

.home {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #2c3e50;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 2px;
}

/* 圖片放大模態視窗樣式 */
.image-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
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
  animation: modalFadeIn 0.3s ease-out;
}

@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.modal-close-btn {
  position: absolute;
  top: -50px;
  right: 0;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.modal-close-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.modal-image {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.modal-caption {
  margin-top: 20px;
  text-align: center;
  color: white;
}

.modal-caption h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: #fff;
}

.modal-caption p {
  font-size: 0.9rem;
  margin: 0;
  opacity: 0.7;
}

/* 可點擊圖片樣式 */
.clickable-image {
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
}

.clickable-image:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.clickable-image::after {
  content: '🔍';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.clickable-image:hover::after {
  opacity: 1;
}

/* 英雄區塊 */
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 120px 0;
  min-height: 80vh;
  display: flex;
  align-items: center;
}

.hero-section .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  width: 100%;
}

.hero-content {
  max-width: none;
  padding: 0;
  margin: 0;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

.hero-description {
  font-size: 1.1rem;
  margin-bottom: 2.5rem;
  opacity: 0.8;
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-primary, .btn-secondary {
  padding: 15px 30px;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.btn-primary {
  background: white;
  color: #667eea;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.3);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: #667eea;
  transform: translateY(-2px);
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-placeholder {
  background: rgba(255,255,255,0.1);
  padding: 80px 40px;
  border-radius: 20px;
  text-align: center;
  font-size: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.2);
  width: 100%;
  max-width: 400px;
}

/* 公司特色區塊 */
.features-section {
  padding: 100px 0;
  background: #f8f9fa;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2.5rem 1.5rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.feature-description {
  color: #6c757d;
  line-height: 1.6;
}

/* 產品區塊 */
.products-section {
  padding: 100px 0;
  background: white;
  scroll-margin-top: 100px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.product-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.product-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1.5rem;
  text-align: center;
  color: white;
}

.product-icon {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.product-category {
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
}

.product-count {
  font-size: 0.9rem;
  opacity: 0.9;
  margin: 0;
}

.product-images {
  flex: 1;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  transition: all 0.3s ease;
}

.product-image-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;
}

.product-image {
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
}

.product-image:hover {
  transform: scale(1.05);
}

.product-name {
  font-size: 0.9rem;
  color: #555;
  line-height: 1.3;
  height: auto;
  display: flex;
  align-items: center;
  text-align: center;
  flex-grow: 1;
}

.product-footer {
  padding: 0 1.5rem 1.5rem;
}

.product-btn {
  background: #667eea;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  width: 100%;
  font-size: 1rem;
}

.product-btn:hover {
  background: #5a6fd8;
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

/* 聯絡區塊 */
.contact-section {
  padding: 100px 0;
  background: #2c3e50;
  color: white;
  scroll-margin-top: 100px;
}

.contact-section .section-title {
  color: white;
}

.contact-section .section-title::after {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.contact-info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  background: rgba(255,255,255,0.1);
  padding: 2rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.contact-item:hover {
  background: rgba(255,255,255,0.15);
  transform: translateY(-3px);
}

.contact-icon {
  font-size: 1.5rem;
  margin-right: 1rem;
  margin-top: 0.2rem;
}

.contact-details h4 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #ecf0f1;
}

.contact-details p {
  color: #bdc3c7;
  line-height: 1.6;
}

.contact-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .hero-section {
    padding: 80px 0;
    min-height: 70vh;
  }
  
  .hero-section .container {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-actions {
    justify-content: center;
  }
  
  .hero-placeholder {
    padding: 60px 30px;
    font-size: 1.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .contact-info-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .features-grid, .products-grid {
    grid-template-columns: 1fr;
  }
  
  .product-images {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 0.8rem;
    padding: 1rem;
  }
  
  .product-image {
    height: 80px;
  }
  
  .product-name {
    font-size: 0.8rem;
  }
  
  /* 模態視窗在平板上的調整 */
  .modal-close-btn {
    top: -40px;
    width: 35px;
    height: 35px;
    font-size: 20px;
  }
  
  .modal-image {
    max-height: 60vh;
  }
  
  .modal-caption h3 {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 60px 0;
    min-height: 60vh;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
  
  .btn-primary, .btn-secondary {
    padding: 12px 24px;
    font-size: 1rem;
  }
  
  .hero-placeholder {
    padding: 40px 20px;
    font-size: 1.2rem;
  }
  
  .container {
    padding: 0 15px;
  }
  
  .products-section {
    padding: 60px 0;
  }
  
  .product-images {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
    padding: 1rem;
  }
  
  .product-image {
    height: 70px;
  }
  
  .product-name {
    font-size: 0.75rem;
    line-height: 1.2;
  }
  
  .product-header {
    padding: 1rem;
  }
  
  .product-icon {
    font-size: 2rem;
  }
  
  .product-category {
    font-size: 1.1rem;
  }
  
  /* 手機版模態視窗優化 */
  .image-modal-overlay {
    padding: 20px;
  }
  
  .image-modal {
    max-width: 95vw;
    max-height: 85vh;
  }
  
  .modal-close-btn {
    top: -35px;
    right: -10px;
    width: 30px;
    height: 30px;
    font-size: 18px;
  }
  
  .modal-image {
    max-height: 50vh;
    border-radius: 8px;
  }
  
  .modal-caption {
    margin-top: 15px;
  }
  
  .modal-caption h3 {
    font-size: 1.1rem;
  }
  
  .modal-caption p {
    font-size: 0.8rem;
  }
  
  .clickable-image::after {
    width: 25px;
    height: 25px;
    font-size: 10px;
  }
}
</style>