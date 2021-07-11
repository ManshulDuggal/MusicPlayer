import { v4 as uuidv4 } from "uuid";

function getTrack() {
  return [
    {
      name: "NITROUS",
      artist: "Joji",
      cover: "https://wallpaperaccess.com/full/2246805.jpg",
      audio:
        "http://www.stannovastore.com/wp-content/uploads/2020/09/Joji_-_NITROUS_stannovastore.com.mp3",
      color: ["#434343", "#ffffff"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Pretty Boy",
      artist: "Joji",
      cover:
        "https://i.pinimg.com/564x/2a/06/2b/2a062b23690c4fcc9bf8a58b6acaa3b5.jpg",
      audio:
        "http://www.stannovastore.com/wp-content/uploads/2020/09/Joji_Ft_Lil_Yachty_-_Pretty_Boy_stannovastore.com.mp3",
      color: ["#C578C6", "#085789"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Blue Moon",
      artist: "CYGN",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=14991",
      color: ["#945F9E", "#29242A"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Rainbow Bap",
      artist: "Jaden",
      cover:
        "https://static.billboard.com/files/media/jaden-smith-press-rocnation-2018-billboard-1548-compressed.jpg",
      audio:
        "https://vevosongs.com/wp-content/uploads/2020/08/Jaden_-_Rainbow_Bap.mp3",
      color: ["#C280BF", "#17171E"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "On My Own",
      artist: "Jaden ft. Kid Cudi",
      cover: "https://media.wonderlandmagazine.com/uploads/2021/03/LOOK-7.jpg",
      audio:
        "https://vevosongs.com/wp-content/uploads/2021/01/Jaden_Smith_Ft_Kid_Cudi_-_On_My_Own.mp3",
      color: ["#E39345", "#2E2724"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Dame Dame ft. Lunis",
      artist: "Beggin",
      cover: "https://i.scdn.co/image/ab67616d0000b2737260c2df3c14928c7103ef31",
      audio:
        "https://hitsongz.com/wp-content/uploads/2021/01/Dame_Dame_ft_Lunis_-_Beggin_hitsongz.com.mp3",
      color: ["#6D2413", "#A1AAA9"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "8 Legged Dreams",
      artist: "Unlike Pluto",
      cover: "https://www.buscaletras.com/photos/artists/max/unlike-pluto.jpg",
      audio:
        "https://vevosongs.com/wp-content/uploads/2020/08/Unlike_Pluto_-_8_Legged_Dreams.mp3",
      color: ["#1D1D1D", "#CECECE"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Down",
      artist: "Marian Hill",
      cover: "https://m.media-amazon.com/images/I/51N4pVMkZpL._SS500_.jpg",
      audio: "https://data.mymp3app.com/320/marian-hill-down.mp3",
      color: ["#907B34", "#0D0D0D"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Infinity",
      artist: "The xx",
      cover: "https://i.ytimg.com/vi/d5PacNNvlEs/maxresdefault.jpg",
      audio: "https://download.my-free-music.icu/s/The-xx-Intro.mp3",
      color: ["#78D2C4", "#D2B2B3"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Frequency",
      artist: "Kid Cudi",
      cover:
        "https://djbooth.net/.image/t_share/MTU2NTkxMjgzOTcwNzc4MjAz/kid-cudi-love-lonliness.jpg",
      audio: "https://download.mp3oops.fun/s/Kid-Cudi-Frequency.mp3",
      color: ["#D7744C", "#1E373D"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Lie",
      artist: "Jimin",
      cover:
        "https://i.pinimg.com/736x/91/5f/2d/915f2d6cd1921b1fbb6419bbf888d562.jpg",
      audio: "https://download.mp3oops.fun/s/BTS-Lie.mp3",
      color: ["#e0d2cc9e", "#02080a"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default getTrack;
