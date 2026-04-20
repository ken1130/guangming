// 公司年資計算工具
// 創辦於 1993 年，依當下年份動態計算年資，避免文案寫死

export const FOUNDING_YEAR = 1993

const digits = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']

// 阿拉伯數字轉中文數字（支援 0–99）
export function toChineseNumeral(n) {
  if (n < 10) return digits[n]
  if (n === 10) return '十'
  if (n < 20) return '十' + digits[n - 10]
  const tens = Math.floor(n / 10)
  const ones = n % 10
  return digits[tens] + '十' + (ones === 0 ? '' : digits[ones])
}

// 自創立以來的年數
export function yearsSinceFounding() {
  return new Date().getFullYear() - FOUNDING_YEAR
}

// 中文數字版本 (e.g. 33 → "三十三")
export function yearsSinceFoundingZh() {
  return toChineseNumeral(yearsSinceFounding())
}

// 每字間空格的寬鬆排版版本 (e.g. "三 十 三")
export function yearsSinceFoundingZhSpaced() {
  return yearsSinceFoundingZh().split('').join(' ')
}
