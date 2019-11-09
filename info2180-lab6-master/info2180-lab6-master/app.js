
const x = document.getElementById("button"); //Get the Button object and save to a variable
x.onclick = RespondClick; //function call to RespondClick when button is clicked
let svalue = ""; //declaration of sanitized input variable 

const searchInput = document.getElementById("search"); //Save search Input as a variable
searchInput.addEventListener("input", (event) => { // add event listener to search box
    const value = (event.target.value);   // save user input
    function encodeHTML(s) {      //helper function to sanitize user input (remove special character)
        return s.replace(/[^a-zA-Z '-]/g,'');
    }
    svalue = encodeHTML(value); // function call to sanitize function

});
function RespondClick() {  // This function create new XMLHttpRequest object
    const xhr = new XMLHttpRequest ();
    const url = 'http://localhost:8080/superheroes.php?query='; //Url to server
    
    xhr.onreadystatechange = dosomething;
    function dosomething (){
        if (xhr.readyState === 4){
            if(xhr.status === 200){                
                var response = xhr.responseText;
                document.getElementById("result").innerHTML=response;
            }else{
                alert("File not found");
        }
    }
}

xhr.open('GET',url+svalue,true);
xhr.send();     
} 

