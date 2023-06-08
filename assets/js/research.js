/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Web Development",

    conferences:
      "I am incredibly passionate about web development, eagerly immersing myself in the ever-evolving landscape of coding, design, and user experience, as I strive to create captivating and impactful online solutions.",
    researchYr: 2023,
  
    image: "projects/Untitled.jpg   ",
    citation: {
     },
  
  },
  {
    title: "Programming",

    conferences:
    "I am deeply fascinated by the limitless possibilities of programming, constantly fueled by the thrill of solving complex problems, pushing boundaries, and transforming abstract ideas into tangible, functional software solutions.",
     researchYr: 2023,
  
    image: "projects/programming.jpg  ",
    citation: {
     },
  
  },
  {
    title: "Volleyball",

    conferences:
    "I am wholeheartedly captivated by the dynamic sport of volleyball, where the combination of teamwork, strategy, and athleticism creates an electrifying atmosphere that fuels my passion for the game.",
    researchYr: 2023,
  
    image: " projects/vb.jpg  ",
    citation: {
     },
  
  },
  {
    title: "Basketball",

    conferences:
    "Basketball holds a special place in my heart, igniting an unwavering passion within me as I immerse myself in the fast-paced action, the strategic maneuvers, and the exhilarating team dynamics that define this beloved sport.",
     researchYr: 2023,
  
    image: " projects/basket.jpg ",
    citation: {
     },
  
  },


];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                   
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                 
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
