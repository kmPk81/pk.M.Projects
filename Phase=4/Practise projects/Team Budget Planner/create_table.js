class Deal{
 constructor(dealId, client_name, project_name, project_manager, project_cost){
 this.dealId = dealId;
 this.client_name = client_name;
 this.project_name = project_name;
 this.project_manager = project_manager;
 this.project_cost = project_cost;
 } 
} 
var currentDealId =0;
var myData = null;
function initialize(){
 if (localStorage.getItem("myData") ===null){
 //alert("inside if")
 myData = [new Deal(0,"Microsoft","Apollo Project","Mary",1000),
 new Deal(1,"Intel","Hermes Project","Bob",10000),
 new Deal(2,"Apple","Zeus Project","Jane",100000)
 ] 
 currentDealId = myData.length;
 localStorage.setItem("myData", JSON.stringify(myData));
 }else{ 
 myData = JSON.parse(localStorage.getItem("myData"));
 currentDealId = myData.length;
 } 
} 