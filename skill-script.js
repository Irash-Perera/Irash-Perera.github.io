const skills = [
  { name: 'Python', level: 'Experienced', category: 'Languages', logo: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/python-dark.svg' },
  { name: 'Java', level: 'Experienced', category: 'Languages', logo: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/java-dark.svg' },
  { name: 'C++', level: 'Experienced', category: 'Languages', logo: 'https://skillicons.dev/icons?i=cpp' },
  { name: 'C', level: 'Experienced', category: 'Languages', logo: 'https://skillicons.dev/icons?i=c' },
  { name: 'JavaScript', level: 'Intermediate', category: 'Languages', logo: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/javascript.svg' },
  { name: 'TypeScript', level: 'Basic', category: 'Languages', logo: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/typescript.svg' },
  { name: 'HTML', level: 'Experienced', category: 'Languages', logo: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/html.svg' },
  { name: 'PUG', level: 'Intermediate', category: 'Languages', logo: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/pug.svg' },
  { name: 'CSS', level: 'Experienced', category: 'Languages', logo: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/css.svg' },
  { name: 'Arduino', level: 'Experienced', category: 'Languages', logo: 'https://skillicons.dev/icons?i=arduino' },
  { name: 'Scikit-learn', level: 'Experienced', category: 'Machine Learning & Data Manipulation', logo: 'https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/SciKitLearn-Light.svg' },
  { name: 'Keras', level: 'Basic', category: 'Machine Learning & Data Manipulation', logo: 'https://avatars.githubusercontent.com/u/34455048?s=200&v=4' },
  { name: 'TensorFlow', level: 'Basic', category: 'Machine Learning & Data Manipulation', logo: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/tensorflow.svg' },
  { name: 'NumPy', level: 'Experienced', category: 'Machine Learning & Data Manipulation', logo: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/numpy.svg' },
  { name: 'Pandas', level: 'Experienced', category: 'Machine Learning & Data Manipulation', logo: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/pandas.svg' },
  { name: 'Langchain', level: 'Intermediate', category: 'Machine Learning & Data Manipulation', logo: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/langchain.svg' },
  { name: 'Chroma', level: 'Basic', category: 'Machine Learning & Data Manipulation', logo: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/chroma-dark.svg' },
  { name: 'OpenCV', level: 'Intermediate', category: 'Machine Learning & Data Manipulation', logo: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/opencv-dark.svg' },
  { name: 'Node.js', level: 'Intermediate', category: 'Web Development', logo: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/node.svg' },
  { name: 'Express.js', level: 'Intermediate', category: 'Web Development', logo: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/expressjs.svg' },
  { name: 'React', level: 'Intermediate', category: 'Web Development', logo: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/react-dark.svg' },
  { name: 'Streamlit', level: 'Experienced', category: 'Web Development', logo: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/streamlit.svg' },
  { name: 'Git', level: 'Experienced', category: 'Web Development', logo: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/git.svg' },
  { name: 'MongoDB', level: 'Experienced', category: 'Web Development', logo: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/mongodb-dark.svg' },
  { name: 'MySQL', level: 'Experienced', category: 'Web Development', logo: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/mysql.svg' },
  { name: 'Firebase', level: 'Intermediate', category: 'Web Development', logo: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/firebase-light.svg' },
  
];

const skillsScroll = document.querySelector('.skills-scroll');
const categoryButtons = document.querySelectorAll('.category-btn');

let activeCategory = 'Languages';

function createSkillCard(skill) {
  const card = document.createElement('div');
  card.className = 'skill-card';
  card.innerHTML = `
      <img src="${skill.logo}" alt="${skill.name} logo">
      <h3>${skill.name}</h3>
      <span class="skill-level ${skill.level}">${skill.level}</span>
  `;
  return card;
}

function renderSkills() {
  skillsScroll.innerHTML = '';
  const filteredSkills = skills.filter(skill => skill.category === activeCategory);
  filteredSkills.forEach(skill => {
      skillsScroll.appendChild(createSkillCard(skill));
  });
}

function setActiveCategory(category) {
  activeCategory = category;
  categoryButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.category === category);
  });
  renderSkills();
  skillsScroll.scrollLeft = 0;
}

categoryButtons.forEach(btn => {
  btn.addEventListener('click', () => setActiveCategory(btn.dataset.category));
});
renderSkills();