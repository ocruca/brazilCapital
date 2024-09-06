// for (let index = 0; index < data.length; index++) {
//     console.log(data[index].name);
// }


function search() {
    let section = document.getElementById("result")
    let shField = document.getElementById("search_field").value
    let results = ""

    if (shField.length < 2){
        section.innerHTML =
        `<div class="result-item">
        <p class="result-desc">Digite dois caracteres ao menos</p>
        </div>`
        return
    }

    for (let line of data) {
        if ( line.name.toLowerCase().includes(shField.toLowerCase()) ||
             line.uf.toLowerCase().includes(shField.toLowerCase())  ) {
            results +=
                `<div class="result-item">
                <h2><a href="#" target="_blank">${line.name}</a></h2>
                <p class="result-desc">${line.uf} - ${line.capital} - ${line.region}</p>
            </div>`
        }
    }
    if (results) {
        section.innerHTML = results
    } else {
        section.innerHTML =
        `<div class="result-item">
        <p class="result-desc">Nada foi encontrado</p>
    </div>`
    }
}
function clear() {
    document.getElementById("result").value = ""
}