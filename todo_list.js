
const todoList=[{name:'dance',
dueDate:'2022-12-22'},{name:'sing',dueDate:'2023-04-26'}];
render();
function addTodo(){
    const inputElement=document.querySelector('.input');
     const dateInputElement=document.querySelector('.date');
   const  name=inputElement.value;
   const dueDate=dateInputElement.value;
   todoList.push({name:name,dueDate:dueDate});//{name,dueDate} if property and values are same in name
   console.log(todoList);
   inputElement.value='';
   
   render();
  
}
function render()
{
let todoListHTML='';

for(let i=0;i<todoList.length;i++)
{
//    todoListHTML+=todoList[i];
   //    second element in splice is how many values we have to remove 
 const todoObject=todoList[i];
//  const name=todoObject.name; //const{name}=todoObject;-->shortcut
//  const dueDate=todoObject.dueDate;
   const{name,dueDate}=todoObject;
  const html=`<div>${name}</div>
       <div>${dueDate}</div>
    <button onclick="
    todoList.splice(${i},1);
    render();
    " class="delete">Delete</button>`;
 todoListHTML+=html;
}
console.log(todoListHTML);
document.querySelector('.div').innerHTML=todoListHTML;
}
