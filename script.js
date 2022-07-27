let list = "";
let subject = "";
let description = "";
let date = "";

const mySubmit = (event) => {

    event.preventDefault();
    

    subject = document.getElementById("subject").value;
    description = document.getElementById("description").value;
    
    if (subject === "" || description === ""){
        return alert("Please fill all spaces");
    }  {
        myDisplay(), myInputRefresh()
    }
};



const myDisplay = () => {
    
    document.getElementById("list").innerHTML += `
    
    <tr>
    <td>${subject}</td>
    <td>${description}</td>
    <td>${date}</td>
    <td><button onclick="myEdit()">Edit</button><button onclick="myDelete(this)">Delete</button></td>
    </tr>
    `;   
};



const myDelete = (node) => {

    r=node.parentNode.parentNode;
    r.parentNode.removeChild(r);
};

const myInputRefresh = () => {
    document.getElementById("inputform").reset();
  };

const myEdit = () => {
    let popup = document.getElementById("popup");
    
    return (popup.style.display === "none") ? popup.style.display = "block"
    : popup.style.display = "block";
};

const xButton = () => {
    let popup = document.getElementById("popup");

    
    return (popup.style.display === "block") ? popup.style.display = "none"
    : popup.style.display = "none";
};

const editSubmit = () => {
    let popup = document.getElementById("popup");
    
    let subjectEdit = document.getElementById("subjectEdit").value;

    
    if(popup.style.display === "block"){
        popup.style.display = "none"
    }popup.style.display = "none"
};