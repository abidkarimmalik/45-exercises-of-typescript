// making of function 
function make_album(artist:string,album_title:string,tracks?:number){
let album:{artist_name:string,title:string,tracks?:number} = {
    artist_name:artist,
    title:album_title,
};
if(tracks!==undefined){
    album.tracks=tracks;
}
return album;
} 
//calling functions

let album1=make_album("atif aslam","album 1");

let album2=make_album("rahat fateh ali khan","album 2");

let album3=make_album("ali zafar","album 3",10);

///print album
console.log(album1);
console.log(album2);
console.log(album3);

//ABID KARIM