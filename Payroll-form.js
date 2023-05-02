window.addEventListener('DOMContentLoaded',(event) => {
const name = document.querySelector('#name');
const startdate = document.querySelector('#startdate');
const textError = document.querySelector('.text-error');
name.addEventListener('input',function(){
    if(name.value.length == 0){
        textError.textContent="";
        return;
    }
    try{
        (new EmployeeData()).name=name.value;;
        textError.textContent="";
    }
    catch (e){
        textError.textContent=e;
    }
});
const salary=document.querySelector('#salary');
const output=document.querySelector('.salary-output');
output.textContent=salary.value;
salary.addEventListener('input',function(){
    output.textContent=salary.value;

});
startdate.addEventListener('input',function(){
    
    try{
        (new EmployeeData()).startdate=startdate.value;;
        textError.textContent="";
    }
    catch (e){
        textError.textContent=e;
    }
});
});