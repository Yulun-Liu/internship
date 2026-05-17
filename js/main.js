/* main.js — 共用腳本 */

// 折疊 / 展開 section
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.section-title').forEach(title => {
    title.addEventListener('click', () => {
      const section = title.closest('.section');
      section.classList.toggle('collapsed');
    });
  });

  // 入場動畫：student cards 錯開
  document.querySelectorAll('.student-card').forEach((card, i) => {
    card.style.animationDelay = `${0.1 + i * 0.12}s`;
    card.style.animation = 'fadeUp 0.6s ease both';
  });

  // 入場動畫：sections 錯開
  document.querySelectorAll('.section').forEach((sec, i) => {
    sec.style.animationDelay = `${0.05 + i * 0.08}s`;
    sec.style.animation = 'fadeUp 0.6s ease both';
  });
});
