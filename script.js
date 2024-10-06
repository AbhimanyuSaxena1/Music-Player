var flag = 0;
var arr = [
    {name:"RAABTA" , image:"https://pagalnew.com/coverimages/Raabta-Agent-Vinod-500-500.jpg" , url:"Raabta (Agent Vinod)_128-(PagalWorld.Ink).mp3" , duration:"3:43" },
    {name:"Ek Varri Aa" , image:"https://pagalworld.ink/siteuploads/thumb/sft7/3198_6_resize1x_200x200.webp" , url:"Ik Vaari Aa (Raabta)-(PagalWorld.Ink).mp3" , duration:"3:45" },
    {name:"Chokra Jawan Re" , image:"https://pagalworld.ink/siteuploads/thumb/sft17/8146_6_resize1x_200x200.webp" , url:"Chokra Jawaan (Ishaqzaade)-(PagalWorld.Ink).mp3" , duration:"4:00" },
    {name:"Ram Siya Ram" , image:"https://th.bing.com/th/id/OIP.CpcX8KmzL1KAGddThMS5WwHaHa?rs=1&pid=ImgDetMain" , url:"Ram-Siya-Ram-(Adipurush)(PagalWorldl).mp3" , duration:"3:50" }
];
var audio = new Audio();
var allSongs = document.querySelector("#all-songs");
var poster = document.querySelector("#left");
var play = document.querySelector("#play");
var backward = document.querySelector("#back");
var forward = document.querySelector("#forward");

var selectedSong = 0;

function AllSongs(){
    var clutter = "";
    arr.forEach(function(elem, index){
        clutter += `<div class="song-card" id="${index}">
                        <div class="part-1">
                            <img src="${elem.image}" alt="">
                            <h1>${elem.name}</h1>
                        </div>
                        <div class="song-duration">
                            <h6>${elem.duration}</h6>
                        </div>
                    </div>`;
    });
    audio.src = arr[selectedSong].url;
    allSongs.innerHTML = clutter;
    poster.style.backgroundImage = `url(${arr[selectedSong].image})`;
}

function playaudio(){
    allSongs.addEventListener("click", function(dets){
        var songCard = dets.target.closest(".song-card");
        if (songCard) {
            selectedSong = songCard.id;
            play.innerHTML = `<i class="ri-pause-mini-line"></i>`;
            AllSongs();
            flag = 1;        
            audio.play();
        }
    });
}

function Play(){
    play.addEventListener("click", function(){
        if(flag == 0) {
            play.innerHTML = `<i class="ri-pause-mini-line"></i>`;
            AllSongs();
            audio.play();
            flag = 1;
        } else {
            play.innerHTML = `<i class="ri-play-mini-line"></i>`;
            AllSongs();
            audio.pause();
            flag = 0;
        }
    });
}

function Forward(){
    forward.addEventListener("click", function(){
        if(selectedSong < arr.length - 1) {
            selectedSong++;
            play.innerHTML = `<i class="ri-pause-mini-line"></i>`;
            AllSongs();
            flag = 0;        
            audio.play();
            forward.style.opacity = 1;
        } else {   
            forward.style.opacity = 0.3;
        }
    });
}

function BackWard(){
    backward.addEventListener("click", function(){
        if(selectedSong > 0) {
            selectedSong--;
            play.innerHTML = `<i class="ri-pause-mini-line"></i>`;
            AllSongs();
            flag = 1;        
            audio.play();
            backward.style.opacity = 1;
        } else {
            backward.style.opacity = 0.3;
        }
        
    });
}

Forward();
BackWard();
Play();
playaudio();
AllSongs();
