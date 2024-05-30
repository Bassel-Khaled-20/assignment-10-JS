var SiteName=document.getElementById("SiteName")
var SiteURL=document.getElementById("SiteURL")
var arrcartona=[]
function getvalue(){
    if (validate(SiteName)&&
    (validate(SiteURL))
    ){
    var value={
        name: SiteName.value,
        URL:SiteURL.value
    }
    arrcartona.push(value)
    localStorage.setItem("name",JSON.stringify(arrcartona))
    console.log(arrcartona)
    clear()
    display()
}
else{
    Swal.fire({
        icon: "error",
        title: "Site Name or Url is not valid, Please follow the rules below :",
        text: `Site name must contain at least 3 characters.

        Site URL must be a valid one.`
      });
}
}
function clear(){
       SiteName.value=null
        SiteURL.value=null
}
if(localStorage.getItem("name")!=null){
   arrcartona=JSON.parse(localStorage.getItem("name"))
    display()
}
function display(){
 cartona="";
 for(var i=0 ;i<arrcartona.length;i++){
    cartona+=`    <tr class="line2 position-relative">
     <td>${i+1}</td>
    <td >${arrcartona[i].name}</td>
    <td  class="py-4"><a class=" visit "  href="${arrcartona[i].URL}" target="_blank"><i class="fa-solid fa-eye pe-2"></i> Visit</a></td>
    <td class="py-4"><button class="btn btn-danger"  onclick="Delete(${i})"  ><i class="fa-solid fa-trash-can"></i> Delete</button></td>       
    </tr>`
 }
 document.getElementById("display").innerHTML=cartona
}
function Delete(num){
    arrcartona.splice(num,1)
    display()
    localStorage.setItem("name",JSON.stringify(arrcartona))
}
function validate(eid){
    var regex={
        SiteName:/^[a-zA-Z0-9]{3,}/,
        SiteURL:/^(?:(?:https?|ftp):\/\/)?(?:www\.)?[a-z0-9-]+(?:\.[a-z0-9-]+)+[^\s]*$/}
        console.log(eid)
   if(regex[eid.id].test(eid.value)){
    eid.classList.add("is-valid");
    eid.classList.remove("is-invalid");
    return true;
   }
   else{
    eid.classList.add("is-invalid");
    eid.classList.remove("is-valid");
    return false
   }
}