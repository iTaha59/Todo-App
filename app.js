var getOl = document.getElementById('ol');
var getInp;
var createLi;
var liText;
var createBtn;
var createI;
var tab = '\u00a0\u00a0\u00a0\u00a0';
var getP;
var getUpdate;

function add(){
    getInp = document.getElementById('inp');
    if(getInp.value==''){
        alert("please write something")
    }
    else{
        createLi = document.createElement('li');
        liText = document.createTextNode(getInp.value+tab);
        createLi.appendChild(liText)
        getOl.appendChild(createLi)
        getInp.value = ""
        createI = document.createElement('i')
        createI.setAttribute('class', 'fa-solid fa-circle-xmark')
        createI.setAttribute('style', 'color: #ff0000;')
        createI.setAttribute('onclick', 'del(this)')
        createLi.appendChild(createI)
    }  
}

function delAll(){
    getOl.innerHTML = ''
}

function del(e){
    e.parentNode.remove()
}

function edit(){
    getP = getInp.value
    getP = +prompt("Enter S.NO of text you want to Edit")
    getUpdate = prompt("Enter updated text", getOl.children[getP-1].firstChild.textContent)
    getOl.children[getP-1].firstChild.textContent = getUpdate+tab
    // console.log(getOl.children)
    // console.log(getOl.children[0].firstChild)
}