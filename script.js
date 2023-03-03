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
              <span onclick="displayDetails(${tool.id})" class="text-danger fw-bold"> &#x2192;</span>


              </div>


            </div>
          </div>
      `;
      universeContainer.appendChild(toolDiv);
  });
};


const loadDetails = async id =>{
  const url =`https://openapi.programming-hero.com/api/ai/tool/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayDetails(data.data.tool);

}

const displayDetails = (tool) => {
  const modalTitle = document.getElementById('myModalLabel2');
  modalTitle.innerText = tool.name;
  const toolImage = document.querySelector('#img .img-fluid');
  toolImage.setAttribute('src', tool.image);
  const toolDetails = document.getElementById('details');
  toolDetails.innerHTML = `
    <p>Release Date: ${tool.releaseDate ? tool.releaseDate : 'No Release Date Found'}</p>
    <p>Others: ${tool.features['1'] ? tool.features['1'] : 'No information'}</p>
    <p>Storage: ${tool.mainFeatures ? tool.mainFeatures.storage : 'No storage information'}</p>
    <p>Sensor: ${tool.mainFeatures && tool.mainFeatures.sensors ? tool.mainFeatures.sensors[0] : 'No sensor'}</p>
  `;

  // Show the modal
  const myModal = new bootstrap.Modal(document.getElementById('myModal'));
  myModal.show();
};



dataLoad();

const showAllData = () =>{
  fetch("https://openapi.programming-hero.com/api/ai/tools")
  .then((res) => res.json())
  .then((data) => {
  console.log(data);
  displayData(data.data.tools);
});
}
