let myLibrary = []

const openBtnEl = document.getElementById("openbtn")
const newAlbumFormEl = document.getElementById('newAlbumForm')
const closebtn = document.getElementById('closebtn')
const submitbtn = document.getElementById('submitbtn')
const albumsEl = document.getElementById('albums-el')

openBtnEl.addEventListener('click', () => {
    console.log("clicked")
    newAlbumFormEl.style.display = "block"
})

closebtn.addEventListener('click', () => {
    closeForm()
})


submitbtn.addEventListener('click', () => {
    const titleEl = document.getElementById('title-input').value
    const artistEl = document.getElementById('artist-input').value
    const yearEl = document.getElementById('year-input').value


    addAlbumToLibrary(titleEl,artistEl,yearEl)
    
    renderAlbums()

    closeForm()
})

function closeForm() {
    newAlbumFormEl.style.display = "none"
    console.log('form closed')
}

function addAlbumToLibrary(titleEl,artistEl,yearEl) {
    let title = titleEl
    let artist = artistEl
    let year = yearEl

    myLibrary.push(new Album(title, artist, year))
    console.log(myLibrary)

}

function Album(title, artist, year) {
    this.title = title
    this.artist = artist
    this.year = year
}

function renderAlbums() {

    for(let i = 0; i < myLibrary.length; i++) {
        const newAlbum = document.createElement('div')
        
        const newTitle = document.createElement('h3')
        newTitle.innerText = myLibrary[i].title
        newAlbum.appendChild(newTitle)

        const newArtist = document.createElement('p')
        newArtist.innerText = myLibrary[i].artist
        newAlbum.appendChild(newArtist)

        const newYear = document.createElement('p')
        newYear.innerText = myLibrary[i].year
        newAlbum.appendChild(newYear)

        albumsEl.appendChild(newAlbum)

        console.log('one album rendered')
    }

console.log('albums fully rendered')

}