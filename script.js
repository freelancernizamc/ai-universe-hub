/* 
All data: https://openapi.programming-hero.com/api/ai/tools

Single data details: https://openapi.programming-hero.com/api/ai/tool/${id}

Single data Example: https://openapi.programming-hero.com/api/ai/tool/01
*/




const dataLoad = async() =>{
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  const res = await fetch(url);
  const data = await res.json();
  displayData(data.data.tools.slice(0, 6));
};


const displayData = (tools) => {
  
  const universeContainer = document.getElementById('universe-hug');
  universeContainer.innerHTML = "";
  // display 20 phones only
  const showAll = document.getElementById('show-all');
  // tools = tools.slice(0, 6);
  
  
  tools.forEach (tool =>{
      const toolDiv = document.createElement('div');
      toolDiv.classList.add('col');
      toolDiv.innerHTML = `
          <div class="card p-4 h-full">
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
              <div class="d-flex justify-content-between">
              <span class="date"><i class="fa fa-calendar"></i> 11/01/2022</span>&emsp;
              <span onclick="displayDetails(${tool.id})" class="text-danger fw-bold" data-bs-toggle="modal"
              data-bs-target="#myModal"> &#x2192;</span>



              </div>


            </div>
          </div>
      `;
      universeContainer.appendChild(toolDiv);
  });
};









const showAllData = () =>{
  fetch("https://openapi.programming-hero.com/api/ai/tools")
  .then((res) => res.json())
  .then((data) => {
  console.log(data);
  displayData(data.data.tools);
});
}

const loadDetails = async () =>{
  const url =`https://openapi.programming-hero.com/api/ai/tool/01`;
  const res = await fetch(url);
  const data = await res.json();
  displayDetails(data.data.tools);
}


const displayDetails = (tools) => {
  const modalTitle = document.getElementById('myModalLabel2');
  const tooldetails = document.getElementById('details');
  let toolHTML = '';
  
  tools.forEach(tool => {
    toolHTML += `
      <div class="row g-0">
        <div class="col-md-4" id="img">
          <img src="${data.tool.image_link}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5>${tool.tool_name}</h5>
            <p>${tool.description}</p>
          </div>
        </div>
      </div>
    `;
  });

  tooldetails.innerHTML = toolHTML;

  // Show the modal
  const myModal = new bootstrap.Modal(document.getElementById('myModal'));
  myModal.show();
};


dataLoad();