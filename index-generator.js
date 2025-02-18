(()=>{
  const sections = document.querySelectorAll('main>section');
  const nav = document.querySelector('nav');
  let indexes = '';
  sections.forEach((section, sectionIndex) => {
    const h2 = section.querySelector('h2');
    const h2Id = `idx${sectionIndex+1}`;
    h2.id = h2Id;
    indexes+=`<li><a href="#${h2Id}">${h2.textContent}</a>`;
    const subSections = section.querySelectorAll('section');
    if(subSections.length) {
      indexes += '<ul>';
      subSections.forEach((subSection, subSectionIndex) => {
        const h3 = subSection.querySelector('h3');
        const h3Id = `idx${sectionIndex+1}_${subSectionIndex+1}`;
        const h4s = subSection.querySelectorAll('h4');
        h3.id = h3Id;
        indexes += `<li><a href="#${h3Id}">${h3.textContent}</a>`;
        if(h4s.length) {
          indexes += '<ul>';
          h4s.forEach((h4,h4Index) => {
            const h4Id = `idx${sectionIndex+1}_${subSectionIndex+1}_${h4Index+1}`;
            h4.id = h4Id;
            indexes += `<li><a href="#${h4Id}">${h4.textContent}</a></li>`;
          }); // h4 loop
          indexes += '</ul>';
        }
        indexes += '</li>';
      }); // h3 loop
      indexes += '</ul>';
    }
    indexes += '</li>';
  }); // h2 loop
  
  nav.innerHTML+=`<h2>목차</h2>
  <ul class="custom index">
    ${indexes}
  </ul>`;
})();