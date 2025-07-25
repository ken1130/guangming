<script setup>
// 光明清潔企業社首頁組件
import { ref } from 'vue'

// 產品資料
const productCategories = ref([
  {
    id: 1,
    category: '按摩護理用品',
    icon: '💆‍♀️',
    products: [
      '油壓巾組合包',
      '純天然按摩油（水性）',
      '指壓乳液',
      '嬰兒油（油性）',
      '沐浴乳',
      '熱敷霜'
    ]
  },
  {
    id: 2,
    category: '衛生清潔用品',
    icon: '🧻',
    products: [
      '衛生紙',
      '紙褲',
      '紙杯',
      '紙拖鞋',
      '洗潔精',
      '漂白水',
      '衣物柔軟精（淡香）'
    ]
  },
  {
    id: 3,
    category: '毛巾寢具用品',
    icon: '🛏️',
    products: [
      '浴巾',
      '床巾',
      '塑膠杯',
      '茶包'
    ]
  },
  {
    id: 4,
    category: '環保清潔用品',
    icon: '♻️',
    products: [
      '捲筒垃圾袋',
      '芳香劑'
    ]
  }
])

// 公司特色
const features = ref([
  {
    icon: '🏆',
    title: '30年經驗',
    description: '累積30年的專業經驗與信譽'
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
</script>

<template>
  <div class="home">
    <!-- 英雄區塊 -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">光明清潔企業社</h1>
          <p class="hero-subtitle">30年專業經驗 · 品質值得信賴</p>
          <p class="hero-description">
            專業提供各式清潔用品，從按摩護理用品到衛生清潔用品，滿足您的各種需求
          </p>
          <div class="hero-actions">
            <button class="btn-primary">查看產品</button>
            <button class="btn-secondary">聯絡我們</button>
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
    <section class="products-section">
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
            </div>
            <div class="product-list">
              <ul>
                <li v-for="product in category.products" :key="product">
                  {{ product }}
                </li>
              </ul>
            </div>
            <div class="product-footer">
              <button class="product-btn">詳細諮詢</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 聯絡資訊 -->
    <section class="contact-section">
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
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
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
  padding: 2rem 1.5rem 1rem;
  text-align: center;
  color: white;
}

.product-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.product-category {
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0;
}

.product-list {
  flex: 1;
  padding: 1.5rem;
}

.product-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.product-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #f0f0f0;
  color: #555;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
}

.product-list li:last-child {
  border-bottom: none;
}

.product-list li:before {
  content: '✓';
  color: #667eea;
  font-weight: bold;
  margin-right: 0.5rem;
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
}
</style>


