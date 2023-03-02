/* 
All data: https://openapi.programming-hero.com/api/ai/tools

Single data details: https://openapi.programming-hero.com/api/ai/tool/${id}

Single data Example: https://openapi.programming-hero.com/api/ai/tool/01
*/

function dataLoad(){
    fetch(' https://openapi.programming-hero.com/api/ai/tools')
    .then(response => response.json())
    .then(data => console.log(data))
}
dataLoad();