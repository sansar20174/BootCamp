const apiUrl = "https://jsonplaceholder.typicode.com/todos";

fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {console.log(data);})
        .catch((error) => {console.error('Error fetching data:', error);});


function displayTable(el) {
    const row = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.innerText = el.id;

    const td2 = document.createElement("td");
    td2.innerText = el.userId;

    const td3 = document.createElement("td");
    td3.innerText = el.title;
    
    const td4 = document.createElement("td");
    td4.innerText = el.completed;

    row.append(td1, td2, td3, td4);
    document.querySelector("tbody").append(row);

}

