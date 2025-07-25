<script setup>
// 關於我們頁面組件
import { ref } from 'vue'

const milestones = ref([
  {
    year: '1993',
    title: '公司成立',
    description: '光明清潔企業社正式成立，開始服務台中地區客戶'
  },
  {
    year: '2000',
    title: '業務擴展',
    description: '擴大產品線，增加工業用清潔用品供應'
  },
  {
    year: '2010',
    title: '品質認證',
    description: '通過各項品質認證，確保產品符合安全標準'
  },
  {
    year: '2020',
    title: '環保轉型',
    description: '引進環保清潔用品，響應綠色環保理念'
  }
])

const values = ref([
  {
    icon: '🎯',
    title: '專業品質',
    description: '堅持提供最優質的清潔用品，每個細節都精益求精'
  },
  {
    icon: '💚',
    title: '環保理念',
    description: '推廣環保清潔用品，為地球盡一份心力'
  },
  {
    icon: '🤝',
    title: '誠信服務',
    description: '以誠待客，建立長期信賴的合作關係'
  },
  {
    icon: '🚀',
    title: '持續創新',
    description: '不斷引進新產品新技術，滿足客戶多元需求'
  }
])
</script>

<template>
  <div class="about">
    <!-- 公司介紹 -->
    <section class="intro-section">
      <div class="container">
        <div class="intro-content">
          <div class="intro-text">
            <h1 class="page-title">關於光明清潔企業社</h1>
            <p class="intro-description">
              成立於1993年的光明清潔企業社，由<strong>李金榮</strong>先生創立，
              至今已有<strong>30年</strong>的專業經驗。我們專注於提供高品質的清潔用品，
              從家用衛生紙到按摩護理用品，始終堅持品質第一的經營理念。
            </p>
            <p class="intro-description">
              位於台中市北屯區的我們，服務範圍涵蓋整個台中地區，
              憑藉著專業的產品知識和優質的客戶服務，
              贏得了眾多客戶的信賴與支持。我們提供多元化的產品線，
              包括按摩護理用品、衛生清潔用品、毛巾寢具用品等。
            </p>
          </div>
          <div class="intro-image">
            <div class="intro-placeholder">
              🏢 光明清潔企業社
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 發展歷程 -->
    <section class="timeline-section">
      <div class="container">
        <h2 class="section-title">發展歷程</h2>
        <div class="timeline">
          <div 
            v-for="(milestone, index) in milestones" 
            :key="milestone.year"
            class="timeline-item"
            :class="{ 'timeline-item-right': index % 2 === 1 }"
          >
            <div class="timeline-year">{{ milestone.year }}</div>
            <div class="timeline-content">
              <h3 class="timeline-title">{{ milestone.title }}</h3>
              <p class="timeline-description">{{ milestone.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心價值 -->
    <section class="values-section">
      <div class="container">
        <h2 class="section-title">核心價值</h2>
        <div class="values-grid">
          <div 
            v-for="value in values" 
            :key="value.title"
            class="value-card"
          >
            <div class="value-icon">{{ value.icon }}</div>
            <h3 class="value-title">{{ value.title }}</h3>
            <p class="value-description">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 聯絡資訊與地圖 -->
    <section class="contact-section">
      <div class="container">
        <h2 class="section-title">聯絡我們</h2>
        <div class="contact-grid">
          <div class="contact-info">
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
            <div class="contact-item">
              <div class="contact-icon">🕒</div>
              <div class="contact-details">
                <h4>營業時間</h4>
                <p>週一至週五 08:00-18:00</p>
              </div>
            </div>
          </div>
          <div class="map-container">
            <h4>店面位置</h4>
            <div class="map-wrapper">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14559.161433504765!2d120.69272400000001!3d24.179084!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346917eba64b3b67%3A0x479649a865d67389!2zNDA25Y-w54Gj5Y-w5Lit5biC5YyX5bGv5Y2A5piM5bmz6Lev5LqM5q61MTDlt7c3MuW8hDExM-iZnw!5e0!3m2!1szh-TW!2sus!4v1753429700310!5m2!1szh-TW!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 服務承諾 -->
    <section class="commitment-section">
      <div class="container">
        <h2 class="section-title">我們的承諾</h2>
        <div class="commitment-grid">
          <div class="commitment-item">
            <h4>品質保證</h4>
            <p>所有產品均經過嚴格品質控管，確保符合安全標準</p>
          </div>
          <div class="commitment-item">
            <h4>快速配送</h4>
            <p>台中地區當日下單，隔日即可到貨</p>
          </div>
          <div class="commitment-item">
            <h4>專業諮詢</h4>
            <p>提供產品選擇建議，協助客戶找到最適合的解決方案</p>
          </div>
          <div class="commitment-item">
            <h4>售後服務</h4>
            <p>完善的售後服務，確保客戶使用無憂</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about {
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

/* 公司介紹區塊 */
.intro-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.intro-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.page-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.intro-description {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
  line-height: 1.8;
}

.intro-description strong {
  color: #ffd700;
  font-weight: 700;
}

.intro-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.intro-placeholder {
  background: rgba(255,255,255,0.1);
  padding: 80px 40px;
  border-radius: 20px;
  text-align: center;
  font-size: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.2);
}

/* 發展歷程 */
.timeline-section {
  padding: 100px 0;
  background: #f8f9fa;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
}

.timeline-item-right {
  flex-direction: row-reverse;
}

.timeline-year {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 15px 25px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.1rem;
  position: relative;
  z-index: 2;
  min-width: 120px;
  text-align: center;
}

.timeline-content {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  margin: 0 2rem;
  flex: 1;
}

.timeline-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.timeline-description {
  color: #6c757d;
  line-height: 1.6;
}

/* 核心價值 */
.values-section {
  padding: 100px 0;
  background: white;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.value-card {
  background: white;
  padding: 2.5rem 1.5rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  border-top: 4px solid transparent;
  background-clip: padding-box;
  position: relative;
}

.value-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px 15px 0 0;
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.value-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.value-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.value-description {
  color: #6c757d;
  line-height: 1.6;
}

/* 聯絡資訊與地圖 */
.contact-section {
  padding: 100px 0;
  background: #f8f9fa;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
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
  color: #2c3e50;
}

.contact-details p {
  color: #6c757d;
  line-height: 1.6;
}

.map-container h4 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

.map-wrapper {
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.map-wrapper iframe {
  width: 100%;
  height: 300px;
  border: none;
}

/* 服務承諾 */
.commitment-section {
  padding: 100px 0;
  background: #2c3e50;
  color: white;
}

.commitment-section .section-title {
  color: white;
}

.commitment-section .section-title::after {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.commitment-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.commitment-item {
  background: rgba(255,255,255,0.1);
  padding: 2rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.commitment-item:hover {
  background: rgba(255,255,255,0.15);
  transform: translateY(-3px);
}

.commitment-item h4 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #ecf0f1;
}

.commitment-item p {
  color: #bdc3c7;
  line-height: 1.6;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .intro-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .page-title {
    font-size: 2.5rem;
  }
  
  .timeline::before {
    left: 20px;
  }
  
  .timeline-item,
  .timeline-item-right {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 60px;
  }
  
  .timeline-year {
    position: absolute;
    left: 0;
    min-width: 80px;
    font-size: 0.9rem;
    padding: 10px 15px;
  }
  
  .timeline-content {
    margin: 1rem 0 0 0;
    width: 100%;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .values-grid,
  .commitment-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 2rem;
  }
  
  .container {
    padding: 0 15px;
  }
  
  .timeline-item,
  .timeline-item-right {
    padding-left: 50px;
  }
  
  .timeline-year {
    min-width: 70px;
    font-size: 0.8rem;
    padding: 8px 12px;
  }
}
</style>