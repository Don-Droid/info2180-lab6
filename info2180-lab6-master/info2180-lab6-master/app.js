
const x = document.getElementById("button"); 
x.onclick = RespondClick;

function RespondClick() {
    const xhr = new XMLHttpRequest ();
    const url = 'http://localhost:8080/superheroes.php';

    xhr.onreadystatechange = dosomething;
    function dosomething (){
        if (xhr.readyState === 4){
            if(xhr.status === 200){                
                var response = xhr.responseText;
                alert(response);
            }else{
                alert("File not found");
        }
    }
}

xhr.open('GET',url,true);
xhr.send();     
} 

