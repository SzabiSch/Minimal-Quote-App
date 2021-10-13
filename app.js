const chlickMe = document.querySelector("#reload");
chlickMe.addEventListener("click", useTheApi);

function useTheApi() {
  fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const textChange = document.querySelector("p");
      const writerChange = document.querySelector("small");

      //const textChangeFill = document.createElement("p");
      //const writerChangeFill = document.createElement("small");
      textChange.innerText = data.data[0].quoteText;
      writerChange.innerText = data.data[0].quoteAuthor;
      //textChangeFill.innerText = data.data[0].quoteText;
      //writerChangeFill.innerText = data.data[0].quoteAuthor;
      //const addlist = document.getElementById("list");
      //addlist.appendChild(textChangeFill);
      //addlist.appendChild(writerChangeFill);
    });
}
