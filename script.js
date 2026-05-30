const works = [
  {
    title: 'Uzak Şehir',
    year: '2024–',
    type: 'tv',
    role: 'Cihan Albora',
    text: 'Drama series where Akbaba plays Cihan Albora, head of the Albora family.'
  },
  {
    title: 'Ben Bu Cihana Sığmazam',
    year: '2023',
    type: 'tv',
    role: 'Gardaşov',
    text: 'Joined the ATV action drama as the character Gardaşov.'
  },
  {
    title: 'Kasaba Doktoru',
    year: '2022–2023',
    type: 'tv',
    role: 'Hakan Aydıner / Kemal Demir',
    text: 'TRT medical drama about idealistic doctors in a remote town hospital.'
  },
  {
    title: 'Eşkıya Dünyaya Hükümdar Olmaz',
    year: '2015–2021',
    type: 'tv',
    role: 'İlyas Çakırbeyli',
    text: 'One of his most recognized roles, making him widely known to Turkish TV audiences.'
  },
  {
    title: 'Poyraz Karayel',
    year: '2015',
    type: 'tv',
    role: 'Taner',
    text: 'Appeared in the popular crime-drama series.'
  },
  {
    title: 'Kuzey Güney',
    year: '2012–2013',
    type: 'tv',
    role: 'Sümer Tezkan',
    text: 'Part of the cast of the well-known Turkish drama.'
  },
  {
    title: 'Abluka / Frenzy',
    year: '2015',
    type: 'film',
    role: 'Ali',
    text: 'Feature film credit in Emin Alper’s political thriller.'
  },
  {
    title: 'Anka / Phoenix',
    year: '2022',
    type: 'film',
    role: 'Murat',
    text: 'Film project in which Akbaba is credited as actor and writer.'
  },
  {
    title: 'Aman Reis Duymasın',
    year: '2019',
    type: 'film',
    role: 'İlyas Çakırbeyli',
    text: 'A film connected to the EDHO universe and characters.'
  }
];

const worksGrid = document.querySelector('#worksGrid');
const filterButtons = document.querySelectorAll('.filter-btn');

function renderWorks(filter = 'all') {
  worksGrid.innerHTML = '';
  const filtered = filter === 'all' ? works : works.filter(work => work.type === filter);
  filtered.forEach(work => {
    const card = document.createElement('article');
    card.className = 'work-card reveal visible';
    card.innerHTML = `
      <div>
        <div class="work-meta"><span>${work.year}</span><span>${work.type}</span></div>
        <h3>${work.title}</h3>
        <p>${work.text}</p>
      </div>
      <span class="tag">${work.role}</span>
    `;
    worksGrid.appendChild(card);
  });
}

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    renderWorks(button.dataset.filter);
  });
});

renderWorks();

const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.14 });
revealElements.forEach(element => observer.observe(element));

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => navLinks.classList.remove('open')));

const toTop = document.querySelector('.to-top');
window.addEventListener('scroll', () => {
  toTop.classList.toggle('show', window.scrollY > 600);
});
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
