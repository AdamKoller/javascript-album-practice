// click album


// show user the selected album(make a class selected to the album div)



// create aray then add the selected album to that array



//  find the selected albums total



// save button click notification
var notify = document.querySelector('.notification')
var albums = document.querySelectorAll('.album')
var itemsTotal = document.querySelector('.items-total')
var saveButton = document.querySelector('.button')

var albumsSelected = []
var i = 0

while (i < albums.length) {
  albums[i].onclick = function(e) {
    var albumTitle = this.querySelector('.title').textContent
    console.log(albumTitle);
  }
  console.log(i);
  i++;
}
