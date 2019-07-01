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
    if (this.classList.contains('selected') !== true) {
      this.classList.add('selected');
      albumsSelected.push(albumTitle);
    } else {
      this.classList.remove('selected');
      albumsSelected = albumsSelected.filter(function(item) {
        return item !== albumTitle
      })
    }
    console.log(i);
  }
  i++;
}

saveButton.onclick = function() {
  itemsTotal.textContent = albumsSelected.length + ' Items Saved';
  notify.classList.add('active');

  setTimeout(function() {
    notify.classList.remove('active')
  }, 2000)
  console.log('Saved');
}
