var playlist = {artistName: "Milo",
                songTitle: "have fun"
};
function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = artistName;
  playlist[songTitle] = songTitle;
}

var removeFromPlaylist = function(playlist, artistName){

  delete playlist.artistName;
  delete playlist.songTitle;
  return playlist;
}
