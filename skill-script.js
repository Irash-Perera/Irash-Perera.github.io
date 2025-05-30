// const skills = [
//   { name: 'Python', level: 'Experienced', category: 'Languages', logo: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/python-dark.svg' },
//   { name: 'Java', level: 'Experienced', category: 'Languages', logo: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/java-dark.svg' },
//   { name: 'C++', level: 'Experienced', category: 'Languages', logo: 'https://skillicons.dev/icons?i=cpp' },
//   { name: 'C', level: 'Experienced', category: 'Languages', logo: 'https://skillicons.dev/icons?i=c' },
//   { name: 'JavaScript', level: 'Intermediate', category: 'Languages', logo: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/javascript.svg' },
//   { name: 'TypeScript', level: 'Basic', category: 'Languages', logo: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/typescript.svg' },
//   { name: 'HTML', level: 'Experienced', category: 'Languages', logo: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/html.svg' },
//   { name: 'PUG', level: 'Intermediate', category: 'Languages', logo: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/pug.svg' },
//   { name: 'CSS', level: 'Experienced', category: 'Languages', logo: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/css.svg' },
//   { name: 'Arduino', level: 'Experienced', category: 'Languages', logo: 'https://skillicons.dev/icons?i=arduino' },
//   { name: 'Scikit-learn', level: 'Experienced', category: 'Machine Learning & Data Manipulation', logo: 'https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/SciKitLearn-Light.svg' },
//   { name: 'Keras', level: 'Basic', category: 'Machine Learning & Data Manipulation', logo: 'https://avatars.githubusercontent.com/u/34455048?s=200&v=4' },
//   { name: 'TensorFlow', level: 'Basic', category: 'Machine Learning & Data Manipulation', logo: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/tensorflow.svg' },
//   { name: 'NumPy', level: 'Experienced', category: 'Machine Learning & Data Manipulation', logo: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/numpy.svg' },
//   { name: 'Pandas', level: 'Experienced', category: 'Machine Learning & Data Manipulation', logo: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/pandas.svg' },
//   { name: 'Langchain', level: 'Intermediate', category: 'Machine Learning & Data Manipulation', logo: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/langchain.svg' },
//   { name: 'Chroma', level: 'Basic', category: 'Machine Learning & Data Manipulation', logo: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/chroma-dark.svg' },
//   { name: 'OpenCV', level: 'Intermediate', category: 'Machine Learning & Data Manipulation', logo: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/opencv-dark.svg' },
//   { name: 'Node.js', level: 'Intermediate', category: 'Web Development', logo: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/node.svg' },
//   { name: 'Express.js', level: 'Intermediate', category: 'Web Development', logo: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/expressjs.svg' },
//   { name: 'React', level: 'Intermediate', category: 'Web Development', logo: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/react-dark.svg' },
//   { name: 'Streamlit', level: 'Experienced', category: 'Web Development', logo: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/streamlit.svg' },
//   { name: 'Git', level: 'Experienced', category: 'Web Development', logo: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/git.svg' },
//   { name: 'MongoDB', level: 'Experienced', category: 'Web Development', logo: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/mongodb-dark.svg' },
//   { name: 'MySQL', level: 'Experienced', category: 'Web Development', logo: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/mysql.svg' },
//   { name: 'Firebase', level: 'Intermediate', category: 'Web Development', logo: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/firebase-light.svg' },
  
// ];

// const skillsScroll = document.querySelector('.skills-scroll');
// const categoryButtons = document.querySelectorAll('.category-btn');

// let activeCategory = 'Languages';

// function createSkillCard(skill) {
//   const card = document.createElement('div');
//   card.className = 'skill-card';
//   card.innerHTML = `
//       <img src="${skill.logo}" alt="${skill.name} logo">
//       <h3>${skill.name}</h3>
//       <span class="skill-level ${skill.level}">${skill.level}</span>
//   `;
//   return card;
// }

// function renderSkills() {
//   skillsScroll.innerHTML = '';
//   const filteredSkills = skills.filter(skill => skill.category === activeCategory);
//   filteredSkills.forEach(skill => {
//       skillsScroll.appendChild(createSkillCard(skill));
//   });
// }

// function setActiveCategory(category) {
//   activeCategory = category;
//   categoryButtons.forEach(btn => {
//       btn.classList.toggle('active', btn.dataset.category === category);
//   });
//   renderSkills();
//   skillsScroll.scrollLeft = 0;
// }

// categoryButtons.forEach(btn => {
//   btn.addEventListener('click', () => setActiveCategory(btn.dataset.category));
// });
// renderSkills();


const skillsData = {
  'Languages': [
    { name: 'Python', level: 'Experienced',   icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/python-dark.svg' },
    { name: 'Java', level: 'Experienced',   icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/java-dark.svg' },
    { name: 'C++', level: 'Experienced',   icon: 'https://skillicons.dev/icons?i=cpp' },
    { name: 'C', level: 'Experienced',   icon: 'https://skillicons.dev/icons?i=c' },
    { name: 'JavaScript', level: 'Intermediate',   icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/javascript.svg' },
    { name: 'TypeScript', level: 'Basic',   icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/typescript.svg' },
    { name: 'HTML', level: 'Experienced',   icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/html.svg' },
    { name: 'PUG', level: 'Intermediate',   icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/pug.svg' },
    { name: 'CSS', level: 'Experienced',   icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/css.svg' },
        { name: 'Arduino', level: 'Experienced', icon: 'https://skillicons.dev/icons?i=arduino' },
        { name: 'Ballerina', level: 'Basic', icon: "https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/ballerina.svg" },
        { name: 'Bash', level: 'Intermediate',   icon: "https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/bash-light.svg"}
    
  ],
  'Machine Learning & Data': [
    { name: 'Scikit-learn', level: 'Experienced',   icon: 'https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/SciKitLearn-Light.svg' },
    { name: 'Keras', level: 'Experienced',   icon: 'https://avatars.githubusercontent.com/u/34455048?s=200&v=4' },
    { name: 'TensorFlow', level: 'Experienced',   icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/tensorflow.svg' },
    { name: 'NumPy', level: 'Experienced',   icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/numpy.svg' },
    { name: 'Pandas', level: 'Experienced',   icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/pandas.svg' },
    { name: 'Langchain', level: 'Intermediate',   icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/langchain.svg' },
    { name: 'Chroma', level: 'Experienced',   icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/chroma-dark.svg' },
    { name: 'OpenCV', level: 'Intermediate', icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/opencv-dark.svg' },
    { name: 'RAGAS', level: 'Intermediate', icon: 'https://docs.ragas.io/en/stable/_static/imgs/ragas-logo.png' },
      { name: 'LangFuse', level: 'Experienced', icon: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/langfuse-color.png' },
    { name: 'ONNX', level: 'Experienced',   icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/onnx.svg' },
    
    
  ],
  'Web Development': [
    { name: 'Node.js', level: 'Intermediate',   icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/node.svg' },
    { name: 'Express.js', level: 'Intermediate',   icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/expressjs.svg' },
    { name: 'React', level: 'Intermediate',   icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/react-dark.svg' },
    { name: 'Streamlit', level: 'Experienced',   icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/streamlit.svg' },
    { name: 'Git', level: 'Experienced',   icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/git.svg' },
    { name: 'MongoDB', level: 'Experienced',   icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/mongodb-dark.svg' },
    { name: 'MySQL', level: 'Experienced',   icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/mysql.svg' },
    { name: 'Firebase', level: 'Intermediate', icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/firebase-light.svg' },
    { name: 'PostgresSQL', level: 'Intermediate', icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/postgressql-dark.svg' },
    { name: 'FastAPI', level: 'Experienced', icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/fastapi.svg' },
    { name: 'GraphQL', level: 'Experienced', icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/graphql.svg' },
    { name: 'Docker', level: 'Intermediate', icon: 'https://raw.githubusercontent.com/onemarc/tech-icons/main/icons/docker.svg' },
    
  ]
};

        function createTechIcon(name, icon, level) {
            const div = document.createElement('div');
            div.className = 'tech-icon';
            div.innerHTML = `
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg" alt="${name}" onerror="this.onerror=null; this.src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-plain.svg'">
                <span>${name}</span>
                <div class="experience-level">${level}</div>
            `;
            return div;
        }

        function createPyramid(skills) {
            const container = document.getElementById('skillsContainer');
            container.innerHTML = '';
            
            let rowSizes = [6, 5, 4];
            let skillIndex = 0;

            for (let rowSize of rowSizes) {
                if (skillIndex >= skills.length) break;

                const rowDiv = document.createElement('div');
                rowDiv.className = 'skills-row';

                for (let i = 0; i < rowSize && skillIndex < skills.length; i++) {
                    const skill = skills[skillIndex];
                    rowDiv.appendChild(createTechIcon(skill.name, skill.icon, skill.level));
                    skillIndex++;
                }

                container.appendChild(rowDiv);
            }

            // If there are remaining skills, add them to additional rows
            while (skillIndex < skills.length) {
                const rowDiv = document.createElement('div');
                rowDiv.className = 'skills-row';

                for (let i = 0; i < 6 && skillIndex < skills.length; i++) {
                    const skill = skills[skillIndex];
                    rowDiv.appendChild(createTechIcon(skill.name, skill.icon, skill.level));
                    skillIndex++;
                }

                container.appendChild(rowDiv);
            }

            // Trigger animation after a short delay
            setTimeout(() => {
                document.querySelectorAll('.skills-row').forEach((row, index) => {
                    setTimeout(() => {
                        row.classList.add('show');
                    }, index * 100);
                });
            }, 50);
        }

        function setActiveCategory(category) {
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
                if (btn.dataset.category === category) {
                    btn.classList.add('active');
                }
            });
            createPyramid(skillsData[category]);
        }

        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', () => setActiveCategory(btn.dataset.category));
        });

        // Initialize with the first category
        setActiveCategory('Languages');
        function createTechIcon(name, icon, level) {
            const div = document.createElement('div');
            div.className = 'tech-icon';
            div.innerHTML = `
                <img src=${icon}>
                <span>${name}</span>
                <div class="experience-level">${level}</div>
            `;
            return div;
        }

        function createPyramid(skills) {
            const container = document.getElementById('skillsContainer');
            container.innerHTML = '';
            
            let rowSizes = [6,5,4];
            let skillIndex = 0;

            for (let rowSize of rowSizes) {
                if (skillIndex >= skills.length) break;

                const rowDiv = document.createElement('div');
                rowDiv.className = 'skills-row';

                for (let i = 0; i < rowSize && skillIndex < skills.length; i++) {
                    const skill = skills[skillIndex];
                    rowDiv.appendChild(createTechIcon(skill.name, skill.icon, skill.level));
                    skillIndex++;
                }

                container.appendChild(rowDiv);
            }

            // If there are remaining skills, add them to additional rows
            while (skillIndex < skills.length) {
                const rowDiv = document.createElement('div');
                rowDiv.className = 'skills-row';

                for (let i = 0; i < 6 && skillIndex < skills.length; i++) {
                    const skill = skills[skillIndex];
                    rowDiv.appendChild(createTechIcon(skill.name, skill.icon, skill.level));
                    skillIndex++;
                }

                container.appendChild(rowDiv);
            }

            // Trigger animation after a short delay
            setTimeout(() => {
                document.querySelectorAll('.skills-row').forEach((row, index) => {
                    setTimeout(() => {
                        row.classList.add('show');
                    }, index * 100);
                });
            }, 50);
        }

        function setActiveCategory(category) {
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
                if (btn.dataset.category === category) {
                    btn.classList.add('active');
                }
            });
            createPyramid(skillsData[category]);
        }

        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', () => setActiveCategory(btn.dataset.category));
        });

        // Initialize with the first category
        setActiveCategory('Languages');