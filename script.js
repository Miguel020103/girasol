document.addEventListener('DOMContentLoaded', () => {
  const onboarding = document.getElementById('onboarding');
  const seedWrapper = document.getElementById('seedWrapper');
  const seed = document.getElementById('seed');
  const soilHole = document.getElementById('soilHole');
  const stem = document.querySelector('.stem');
  const leaves = document.querySelectorAll('.leaf');
  const flower = document.querySelector('.flower');
  const card = document.getElementById('card');
  const bgMusic = document.getElementById('bgMusic');
  let started = false;
  seedWrapper.addEventListener('click', () => {
    if (started) return;
    started = true;
    bgMusic.currentTime = 0;
    bgMusic.play().catch(() => {});
    seed.classList.add('planting');
    seedWrapper.style.pointerEvents = 'none';
    setTimeout(() => soilHole.classList.add('active'), 200);
    setTimeout(() => seed.classList.add('planted'), 100);
    setTimeout(() => onboarding.classList.add('hidden'), 900);
    setTimeout(() => stem.classList.add('grown'), 1100);
    setTimeout(() => leaves.forEach(l => l.classList.add('visible')), 2800);
    setTimeout(() => flower.classList.add('bloomed'), 3600);
    setTimeout(() => card.classList.add('show'), 5400);
  });
  seedWrapper.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); seedWrapper.click(); }
  });
});
