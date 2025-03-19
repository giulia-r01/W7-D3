const getBooksCards = function () {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error("Qualcosa non va")
      }
    })
    .then((data) => {
      console.log("Dati ricevuti:", data)
      const createContainerCards = function (books) {
        const container = document.getElementById("containerCards")
        container.innerHTML = ""

        books.forEach((book) => {
          const card = document.createElement("div")
          card.classList.add("col-6", "col-md-4", "col-lg-3", "col-xl-3")

          card.innerHTML = `
              <div class="card h-100 shadow-sm">
                <img src="${book.img}" class="card-img-top" alt="${book.title}">
                <div class="card-body bg-dark text-white">
                  <h5 class="card-title">${book.title}</h5>
                  <p class="card-text">Prezzo: €${book.price}</p>
                  <div>
                  <button class="btn btn-outline-success">Compra</button>
                  <button class="btn btn-outline-danger" onclick="removeCard(this)">Scarta</button>
                  </div>
                </div>
              </div>
            `

          container.appendChild(card)
        })
      }

      createContainerCards(data)
    })
    .catch((err) => {
      console.log("Errore:", err)
    })
}

// Funzione per rimuovere una card dal DOM
const removeCard = function (button) {
  button.closest(".col-6", ".col-md-4", ".col-lg-3", ".col-xl-3").remove()
}

getBooksCards()
