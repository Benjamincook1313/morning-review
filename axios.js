
const itemInput = document.querySelector("input");

const result = {
  data: "bread"
}

function getItems(){
  axios.get("http://localhost:4040/api/items").then(result => {
    console.log(result.data);
    // add item to the dom 
  }).catch(err => console.log(err));
}

function getSingleItem(num){
  axios.get(`http://localhost:4040/api/item?itemId=${num}`).then((result) => {
    console.log(result.data);
  })
}

function addItem(){

  const body = {
    item: itemInput.value
  }

  axios.post("http://localhost:4040/api/item", body).then(result => {
    console.log(result.data);
  })
}

getItems();
getSingleItem(2);