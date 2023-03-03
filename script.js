/* 
All data: https://openapi.programming-hero.com/api/ai/tools

Single data details: https://openapi.programming-hero.com/api/ai/tool/${id}

Single data Example: https://openapi.programming-hero.com/api/ai/tool/01
*/




const dataLoad = async() =>{
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  const res = await fetch(url);
  const data = await res.json();
  displayData(data.data.tools);
};

const displayData = tools => {
  
  const universeContainer = document.getElementById('universe-hug');
  universeContainer.innerHTML = "";
 
  tools.forEach (tool =>{
      const toolDiv = document.createElement('div');
      toolDiv.classList.add('col');
      toolDiv.innerHTML = `
          <div class="card">
            <img src="${tool.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5>Feature</h5>
              <ol>
              <li>Natural language processing</li>
              <li>Contextual understanding</li>
              <li>Text generation </li>
              </ol>
              <hr>
              
              <h5 class="card-text">${tool.name}</h5>
              <span class="date"><i class="fa fa-calendar"></i> 11/01/2022</span>

            </div>
          </div>
      `;
      universeContainer.appendChild(toolDiv);
  });
};

dataLoad();


