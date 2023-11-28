const textbox=document.getElementById('textbox')
const options=document.getElementById('options')
const btn=document.getElementById('clickbtn')

function addlist(){
    if(textbox.value ==''){
        alert('list required')
    } else{
        let li=document.createElement('li')
    li.innerHTML=textbox.value;
    options.append(li);

    let span = document.createElement('span');
        span.innerHTML = '&#x2716;'
        li.append(span);

        
        textbox.tabIndex=0;
        textbox.value = '';

    }
    savedata();
}

function savedata(){
    localStorage.setItem('data', options.innerHTML);
}
function showdata(){
    options.innerHTML = localStorage.getItem('data');
};
showdata();

//    btn.addEventListener('click', addlist);

options.addEventListener('click', function(e){
    if (e.target.tagName === 'LI'){
        e.target.classList.toggle('liststylechecked');
    }else if(e.target.tagName ==='SPAN'){
        e.target.parentElement.remove();
    }
    savedata();
})