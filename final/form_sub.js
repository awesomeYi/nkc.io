window.onload = init;

function init() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("Data passes initial validation tests");
      return false;
   }
   
   document.getElementById("delivery").onclick = turnOnDelivery;
   document.getElementById("pickup").onclick=turnOnPickup;
}

function turnOnDelivery() {
   document.getElementById("addressBox").disabled=false;
   document.getElementById("delBox").disabled=false;
   document.getElementById("pickupBox").disabled=true;
}

function turnOnPickup() {
   document.getElementById("addressBox").disabled=true;
   document.getElementById("delBox").disabled=true;
   document.getElementById("pickupBox").disabled=false;
}

function readtext(){
   var name = document.getElementById("nameBox").innerHTML +value;
   
   var phone = document.getElementById("phoneBox").value;
   
}

let carts = document.querySelectorAll('.add');

refreshCart();//load local data
let products = [
   {
      name: 'GRILLED ASPARAGUS',
      price: 9,
      incart: 0,
   },
   {
      name: 'CREOLE OKRA | 10',
      price: 10,
      incart: 0,
   },
   {
      name: 'BRUSSELS SPROUTS | 11',
      price: 11,
      incart: 0,
   },
   {
      name: 'CAULIFLOWER AU GRATIN | 9',
      price: 9,
      incart: 0,
   },
   {
      name: 'Shrimp pat | 13.99',
      price: 13.99,
      incart: 0,
   },
   {
      name: 'Crawfish | 12.88/lb',
      price: 12.88,
      incart: 0,
   },
   {
      name: 'Gumbo | 11',
      price: 11,
      incart: 0,
   },
   {
      name: 'Fried Cumbo | 9',
      price: 9,
      incart: 0,
   },
   {
      name: ' SEAFOOD SALAD* 22',
      price: 22,
      incart: 0,
   },
   {
      name: 'GRILLED SEAFOOD SALAD* 23',
      price: 23,
      incart: 0,
   },
   {
      name: 'SHRIMP SALAD* 16',
      price: 16,
      incart: 0,
   },
   {
      name: 'GRILLED CHINCHEN SALAD* 23',
      price: 23,
      incart: 0,
   },
   {
      name: 'CRAWFISH, SHRIMP, CHICKEN, OR SEAFOOD(SHRIMP, CRAWFISH, AND CRAD) *26',
      price: 26,
      incart: 0,
   },
   {
      name: 'FRIED SHRIMP* 21',
      price: 21,
      incart: 0,
   },
   {
      name: 'FRIED OYSTERS(8) * 23',
      price: 23,
      incart: 0,
   },
   {
      name: 'FRIED CATFISH* 23',
      price: 23,
      incart: 0,
   },
   {
      name: 'STUFFED SHRIMP* 23',
      price: 23,
      incart: 0,
   },
   {
      name: 'BREAD PUDDING* 8',
      price: 8,
      incart: 0,
   },
   {
      name: 'PECAN PIE* 8',
      price: 8,
      incart: 0,
   },
   {
      name: 'CHEESECAKE* 8',
      price: 8,
      incart: 0,
   },
];
