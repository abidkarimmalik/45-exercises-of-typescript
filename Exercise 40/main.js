// making of function 
function make_album(artist, album_title, tracks) {
    var album = {
        artist_name: artist,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//calling functions
var album1 = make_album("atif aslam", "album 1");
var album2 = make_album("rahat fateh ali khan", "album 2");
var album3 = make_album("ali zafar", "album 3", 10);
///print album
console.log(album1);
console.log(album2);
console.log(album3);
