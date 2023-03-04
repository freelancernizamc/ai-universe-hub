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
            <ul><li>${tool.features}<li></ul>
              
              <hr>
              
              <h5 class="card-text">${tool.name}</h5>
              <div class="d-flex justify-content-between">
              <span class="date"><i class="fa fa-calendar"></i>  ${tool.published_in}</span>&emsp;
              <span onclick="loadDetails('${tool}')" class="text-danger fw-bold" data-bs-toggle="modal"
              data-bs-target="#myModal"> &#x2192;</span>

            </div>


            </div>
          </div>
      `;
      universeContainer.appendChild(toolDiv);
  });
  // stop loader
  toggleSpinner(false);
};

dataLoad();



const showAllData = () =>{
  fetch("https://openapi.programming-hero.com/api/ai/tools")
  .then((res) => res.json())
  .then((data) => {
  console.log(data);
  displayData(data.data.tools);
});


function loadMoreData() {
  
  let loadedDataCount = 0;
  
  if (loadedDataCount >= totalDataCount) {
    // Hide the "Show All" button
    document.getElementById("show-all").style.display = "none";
  }
}



  document.getElementById("show-all").addEventListener("click", loadMoreData);
}



// spinner
const toggleSpinner = isLoading => {
  const loaderSection = document.getElementById('loader');
  if(isLoading){
      loaderSection.classList.remove('d-none')
  }
  else{
      loaderSection.classList.add('d-none');
  }
}

toggleSpinner(true);



const loadDetails = async () => {
  const url = `https://openapi.programming-hero.com/api/ai/tool/02`;
  const res = await fetch(url);
  const data = await res.json();
  displayDetails(data.data);

};

const displayDetails = (data,tool) => {
  const modalTitle = document.getElementById('myModalLabel2');
  const cardDetails = document.getElementById('details');
  let toolHTML = '';
  console.log(data);
  toolHTML += `
    <div class="row g-0 modal-xl">
    <div class="col-md-8">
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        <div class="card-body border border-danger">
          <h5>${data.description}</h5>
          <div class="d-flex">

          <div class="text-success text-center w-25 shadow"><p>Free of Cost/Basic</p></div>
          <div class="text-warning text-center w-25 shadow"><p>Free Of Cost/Pro</p></div>
          <div class="text-danger text-center w-25 shadow"><p>Free of Cost /Enterprise</p></div>
          </div>
          <div class="d-flex">
          <div>
          <h6>Feature</h6>
          <ul><li>${data.features}</li></ul>
          </div>
          <div>
          <h6>Integrations</h6>
          <ul>
           ${data.integrations}
           </ul>
        </div>
        </div>
      </div>
    </div>
      <div class="col-md-4" id="img">
     <img src = "${data.image_link}">
      
      </div>
      
  `;
 
  cardDetails.innerHTML = toolHTML;
 
  // Show the modal
  const myModal = new bootstrap.Modal(document.getElementById('myModal'));
  myModal.show();
};



// short by date
document.getElementById('shortByDate').addEventListener('click', function(e){
  const sortedTools = data.data.tools.sort((a, b) => new Date(a.published_in) - new Date(b.published_in));
  displayData(sortedTools);
});

