console.log("hello worlds");
let songIndex=0;
let audio=new Audio('songs/1.mp3');
let playbutton=document.getElementById('playbutton');
let playingsong=document.getElementById("playingsong");
let range=document.getElementById('range');
let gif=document.getElementById('gif');
let songitem=Array.from(document.getElementsByClassName('song'));
let audios=[
    {songname:"Jai Shree Ram",FilePath:"songs/1.mp3",CoverPath:"img/adipurush.jpg"},
    {songname:"Neeve Neeve",FilePath:"songs/2.mp3",CoverPath:"img/darling.jpg"},
    {songname:"Dhoom Dham",FilePath:"songs/3.mp3",CoverPath:"img/dasara.jpg"},
    {songname:"Freak Out",FilePath:"songs/4.mp3",CoverPath:"img/discoraja.jpg"},
    {songname:"gang leader",FilePath:"songs/5.mp3",CoverPath:"img/gang leader.jpg"},
    {songname:"Hoyna Hoyna",FilePath:"songs/6.mp3",CoverPath:"img/gangleader.jpg"},
    {songname:"Krishna Trance",FilePath:"songs/7.mp3",CoverPath:"img/karthikeya.jpeg"},
    {songname:"Toofan Toofan",FilePath:"songs/8.mp3",CoverPath:"img/kgf.jpg"},
    {songname:"Ramam Raghavam",FilePath:"songs/9.mp3",CoverPath:"img/rrr.jpeg"},
    {songname:"Inthandam",FilePath:"songs/10.mp3",CoverPath:"img/sita ramam.jpeg"},
]
songitem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=audios[i].CoverPath;
    element.getElementsByClassName("songid")[0].innerText=audios[i].songname; 
})
playbutton.addEventListener('click',()=>{
    if(audio.paused || audio.currentTime<=0){
        audio.play();
        playbutton.classList.remove('fa-circle-play');
        playbutton.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audio.pause();
        playbutton.classList.add('fa-circle-play');
        playbutton.classList.remove('fa-circle-pause');
        gif.style.opacity=0;
    }
})
audio.addEventListener('timeupdate',()=>{
    progress=parseInt((audio.currentTime/audio.duration)*100);
    range.value=progress;
})
 range.addEventListener('click',()=>{
    audio.currentTime=range.value*audio.duration/100;
 })
 const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songplay')).forEach((element)=>{
        audio.pause();
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        
     })
 }
 Array.from(document.getElementsByClassName('songplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        playingsong.innerText=audios[songIndex].songname;
        audio.src = `songs/${songIndex+1}.mp3`;
        audio.currentTime=0;
        audio.play();
        gif.style.opacity=1;
        playbutton.classList.remove('fa-circle-play');
        playbutton.classList.add('fa-circle-pause');
        
    })
 })
 document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9)
    {
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audio.src = `songs/${songIndex+1}.mp3`;
    playingsong.innerText=audios[songIndex].songname;
    audio.currentTime=0;
    audio.play();
    gif.style.opacity=1;
    playbutton.classList.remove('fa-circle-play');
    playbutton.classList.add('fa-circle-pause');
 })
 document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    {
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audio.src = `songs/${songIndex+1}.mp3`;
    playingsong.innerText=audios[songIndex].songname;
    audio.currentTime=0;
    audio.play();
    gif.style.opacity=1;
    playbutton.classList.remove('fa-circle-play');
    playbutton.classList.add('fa-circle-pause');
 })