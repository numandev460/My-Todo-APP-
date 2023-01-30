let dataArray = []
// var randomNumber = Math.floor(Math.random()*5);  
//     alert(randomNumber)
let input = document.getElementById("input")
let todoList = document.getElementById("todoList")
function addData() {
    inputValue = input.value

    if (inputValue == '') {
        alert("Enter something your input is Empty")
    } else {
        let id = Math.floor(Math.random() * Date.now()).toString()
        dataArray.push({ inputValue , id})
        renderData()
        
    }
    document.getElementById("input").value = ''
}
function renderData() {
    console.log(dataArray);
    todoList.innerHTML = '';
    dataArray.forEach((todo) => {
        todoList.innerHTML += ` 
        <div class="flex justify-between mx-6  py-2 shadow-lg mt-4" >
        <div class="flex items-center">
            <i class="fa-regular fa-star"></i>
            <span class="ml-4">
                <h1 id="output">${todo.inputValue}</h1>
                
            </span>
        </div>
        <div>
            <i class="fa-solid fa-pen-to-square mr-6" onclick="editData(${todo.id})"></i>
            <i class="fa-solid fa-trash" onclick="dellData(${todo.id})" ></i>
        </div>
    </div>
        `
    })
}
    function dellData(id) {
        dataArray = dataArray.filter( item => item.id != id )
        renderData()
    }
    function editData(id) {
        let a = document.getElementById("output").innerHTML 
        document.getElementById("input").value = a
        
        dataArray = dataArray.filter( item => item.id != id )
        renderData()
    }



function setDate() {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = day + "/" + month + "/" + year;
    document.getElementById("dateDiv").innerHTML = currentDate
}
setDate()