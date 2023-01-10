function save(){
 
     ExpensesList2 = JSON.parse(localStorage.getItem('listItem4')) ?? []
        var id
        ExpensesList2.length != 0 ? ExpensesList.findLast((item) => id = item.id) : id = 0
        if(document.getElementById('inputId').value){
            ExpensesList2.forEach(value => {
                if(document.getElementById('inputId').value == value.id){
                    value.inputExpenses         = document.getElementById('inputExpenses').value, 
                    value.inputDescription        = document.getElementById('inputDescription').value, 
                    value.inputCategory          = document.getElementById('inputCategory').value
              
                }
            });
            document.getElementById('inputId').value = ''
        }else{
            var item = {
                id          : id + 1, 
                inputExpenses       : document.getElementById('inputExpenses').value, 
                inputDescription      : document.getElementById('inputDescription').value, 
                inputCategory        : document.getElementById('inputCategory').value, 
              
            }
            ExpensesList2.push(item)
        }
        localStorage.setItem('listItem4', JSON.stringify(ExpensesList2))
 
    allData()
    document.getElementById('form').reset()
}

function allData(){
            
    table.innerHTML = ``
    ExpensesList = JSON.parse(localStorage.getItem('listItem4')) ?? []
    ExpensesList.forEach(function (value, i){
       
        var table = document.getElementById('table')
       
        table.innerHTML += `
            <tr>
                <td>${i+1}</td>
                <td>${value.inputExpenses}</td>
                <td>${value.inputDescription}</td>
                <td>${value.inputCategory}</td>
                 
                <td>
                    <button class="btn btn-sm btn-success" onclick="find(${value.id})">
                        <i class="fa fa-edit"></i>
                    </button>
                </td>
                <td>
                    <button class="btn btn-sm btn-danger" onclick="removeData4(${value.id})">
                        <i class="fa fa-trash"></i>
                    </button>
                </td>
            </tr>`
       
    
    })
 
    
    
    
}
function removeData3(id){
    
    ExpensesList = JSON.parse(localStorage.getItem('listItem3')) ?? []
    ExpensesList = ExpensesList.filter(function(value){ 
        return value.id != id; 
    });
    
    localStorage.setItem('listItem3', JSON.stringify(ExpensesList))
    allData()
}
function removeData4(id){
    ExpensesList = JSON.parse(localStorage.getItem('listItem4')) ?? []
    ExpensesList = ExpensesList.filter(function(value){ 
        return value.id != id; 
    });
    localStorage.setItem('listItem4', JSON.stringify(ExpensesList))
    allData()
}
function find(id){
    ExpensesList = JSON.parse(localStorage.getItem('listItem4')) ?? []
    ExpensesList.forEach(function (value){
        if(value.id == id){
            console.log(id);
            document.getElementById('inputId').value = id
            document.getElementById('inputExpenses').value = value.inputExpenses
            document.getElementById('inputDescription').value = value.inputDescription 
            document.getElementById('inputCategory').value = value.inputCategory
        }
    })
}
 
 