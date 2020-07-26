var list=document.getElementById("list")




function add(){
    var toDo=document.getElementById("toDo")
    var li=document.createElement('li')
    var text=document.createTextNode(toDo.value)
    li.setAttribute("class","unlist")
    li.appendChild(text)

    var dlt=document.createElement('button')
    var dltText=document.createTextNode("Delete")
    dlt.appendChild(dltText)
    dlt.setAttribute("onclick","deleteItm(this)")
    dlt.setAttribute("class","delete")
    li.appendChild(dlt)

    var edit=document.createElement('button')
    var editText=document.createTextNode("Edit")
    edit.appendChild(editText)
    edit.setAttribute("onclick","editbtn(this)")
    edit.setAttribute("class","edit")
    li.appendChild(edit)

    list.appendChild(li)
    toDo.value=""
}
function deleteItm(e){
    e.parentNode.remove();
}
function deleteAll(){
    list.innerHTML=""
}
function editbtn(e){
    var a=prompt("Enter updated value",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue=a;
}
    