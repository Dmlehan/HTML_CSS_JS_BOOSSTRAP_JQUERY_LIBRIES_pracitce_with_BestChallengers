//DOM select

var h1_Elements=document.getElementsByTagName("h1");//select Element using tagname
console.log(h1_Elements);

var first_item=h1_Elements[0];
console.log(first_item.innerText);//get inner content as a text
console.log(first_item.innerHTML);//get inner content as HTML


first_item.innerText="Hi frontend!";
first_item.innerHTML="<i>Hello world </i>";


//getElementById("Id name");

var id_element=document.getElementById("myId");
console.log(first_item.innerText);//get inner content as a text
console.log(first_item.innerHTML);//get inner content as HTML

id_element.innerText="Let's learn c#";
id_element.innerHTML="Let's go java Script <u>softaware development</u>"

//querySelector("query)

var query_selector_element=document.querySelector("h6>p");
console.log(query_selector_element);

//querySelectorAll("Query)
var all_selected_elements= document.querySelectorAll("p");
console.log(all_selected_elements);

