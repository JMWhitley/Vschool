const books = document.getElementById("new-input-form")
console.log(books)

function getData() {
  axios
    .get("https://api.vschool.io/johnwhitley/todo/")
    .then((res) => listData(res.data))
    .catch((err) => console.log(err));
}

document.getElementById("new-input-form").addEventListener("submit", function (e) {
  e.preventDefault()
  console.log("yes")
  const updatedInfo = {
    title: document.getElementById("title-input").value,
    description: document.getElementById("description-input").value,
    price: document.getElementById("price-input").value,
    imgUrl: document.getElementById("imgUrl-input").value,
  };

  console.log("updatedInfo: ", updatedInfo);

  axios
    .post(`https://api.vschool.io/johnwhitley/todo`, updatedInfo)
    .then((response) => getData())
    .catch((err) => console.log(err));
});

function clearListData() {
  const list = document.getElementById("list");
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

function listData(data) {
  clearListData();
  console.log(data)
  const list = document.getElementById("list");
  for (let i = 0; i < data.length; i++) {
    const iD = data[i]._id;

    const div = document.createElement("div");
    div.id = data[i]._id

    list.appendChild(div);
    const h1 = document.createElement("h1");
    h1.textContent = data[i].title;
    h1.className = "todo-item-title";
    div.appendChild(h1);
    div.className = "todo-item";

    const p = document.createElement("p");
    p.textContent = data[i].description;
    div.appendChild(p);
    p.className = "todo-item-details";

    const p2 = document.createElement("p");
    p2.textContent = data[i].price;
    div.appendChild(p2);
    p2.className = "todo-item-details";

    const img = document.createElement("img");
    img.src = data[i].imgUrl;
    div.appendChild(img);
    img.className = "todo-item-img";

    const buttonDiv = document.createElement("div");
    buttonDiv.className = "button-div";
    div.appendChild(buttonDiv);

    const delButton = document.createElement("button");
    delButton.textContent = "Delete";
    buttonDiv.appendChild(delButton);
    delButton.className = "todo-item-buttons";
    delButton.addEventListener("click", (e) => {
      axios
        .delete(`https://api.vschool.io/johnwhitley/todo/${data[i]._id}`)
        .then((response) => {
          const element = document.getElementById(data[i]._id)
          element.remove()
        })
        .catch((err) => console.log(err));
    }) 


    const button2 = document.createElement("button");
    button2.textContent = "Edit";
    buttonDiv.appendChild(button2);
    button2.className = "todo-item-buttons";

    const label = document.createElement("label");
    label.textContent = "Completed";
    div.appendChild(label);

    if(data[i].completed){
      h1.style.textDecoration = "line-through";
      p.style.textDecoration = "line-through";
      p2.style.textDecoration = "line-through";
      h1.style.textDecorationColor = "black";
      p.style.textDecorationColor = "black";
      p2.style.textDecorationColor = "black";
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    div.appendChild(checkbox);
    checkbox.className = "checkbox";
    checkbox.addEventListener("change", (e) => {
    console.log("change")  
      if (e.target.checked)
      { 
      axios
      .put(`https://api.vschool.io/johnwhitley/todo/${data[i]._id}`, {completed: true})
      .then(response => {
        h1.style.textDecoration = "line-through";
      p.style.textDecoration = "line-through";
      p2.style.textDecoration = "line-through";
      h1.style.textDecorationColor = "black";
      p.style.textDecorationColor = "black";
      p2.style.textDecorationColor = "black";
      }) 
    }
      else{
        axios
        .put(`https://api.vschool.io/johnwhitley/todo/${data[i]._id}`, {completed: false})
        .then(respone => {
          h1.style.textDecoration = "none";
          p.style.textDecoration = "none";
          p2.style.textDecoration = "none";
        })
      }
    })

    button2.addEventListener("click", () => {
      h1.remove(this);
      p.remove(this);
      p2.remove(this);
      img.remove(this);

      const imgEdit = document.createElement("input");
      imgEdit.value = img.src;
      div.prepend(imgEdit);
      imgEdit.setAttribute("class", "editInput");
      imgEdit.readOnly = true;

      const descriptionEdit = document.createElement("input");
      descriptionEdit.value = p.textContent;
      div.prepend(descriptionEdit);
      descriptionEdit.setAttribute("class", "editInput");
      descriptionEdit.readOnly = true;

      const priceEdit = document.createElement("input");
      priceEdit.value = p2.textContent;
      div.prepend(priceEdit);
      priceEdit.setAttribute("type", "number");
      priceEdit.readOnly = true;

      const titleEdit = document.createElement("input");
      titleEdit.value = h1.textContent;
      div.prepend(titleEdit);
      titleEdit.setAttribute("class", "editInput");
      titleEdit.readOnly = true;

      button2.remove(this);
      const saveBtn = document.createElement("button");
      saveBtn.textContent = "Save";
      div.appendChild(saveBtn);


    });



    //submit // post // add todo
  }
}
getData();
