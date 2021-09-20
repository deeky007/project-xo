let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume= document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');



let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');


//All songs list
let All_song = [
   {
     name: "Nothing Compares",
     path: "1.mp3",
     img: "1.jpg",
     singer: "The Weeknd"
   },
   {
     name: "Escape from LA",
     path: "2.mp3",
     img: "2.jpg",
     singer: "The Weeknd"
   },
   {
     name: "Wasted Times",
     path: "3.mp3",
     img: "3.jpg",
     singer: "The Weeknd"
   },
   {
     name: "Acquainted",
     path: "4.mp3",
     img: "4.jpg",
     singer: "The Weeknd"
   },
   {
     name: "Lost in the Fire",
     path: "5.mp3",
     img: "5.jpg",
     singer: "The Weeknd ft. Gessafalistien"
   }, 
      {
     name: "Scared to Live",
     path: "6.mp3",
     img: "7.jpg",
     singer: "The Weeknd"
   },
      {
     name: "After Hours",
     path: "7.mp3",
     img: "7.jpg",
     singer: "The Weeknd"
   },
      {
     name: "Die For You",
     path: "8.mp3",
     img: "8.jpg",
     singer: "The Weeknd"
   },
   
   
         {
     name: "Blinding Lights",
     path: "9.mp3",
     img: "7.jpg",
     singer: "The Weeknd"
   },
   
         {
     name: "Save Your Tears",
     path: "10.mp3",
     img: "7.jpg",
     singer: "The Weeknd"
   },
   
         {
     name: "In Your Eyes",
     path: "11.mp3",
     img: "7.jpg",
     singer: "The Weeknd"
   },
   
         {
     name: "Can't feel my face",
     path: "12.mp3",
     img: "10.png",
     singer: "The Weeknd"
   },
   
         {
     name: "I feel it coming",
     path: "13.mp3",
     img: "11.png",
     singer: "The Weeknd"
   },
   
         {
     name: "Starboy",
     path: "14.mp3",
     img: "11.png",
     singer: "The Weeknd"
   },
   
   
         {
     name: "Heartless",
     path: "15.mp3",
     img: "7.jpg",
     singer: "The Weeknd"
   },
   
   
        {
     name: "Often",
     path: "16.mp3",
     img: "10.png",
     singer: "The Weeknd"
   }, 
   
   
         {
     name: "The Hills",
     path: "17.mp3",
     img: "10.png",
     singer: "The Weeknd"
   },
   
         {
     name: "Call out my name",
     path: "18.mp3",
     img: "3.jpg",
     singer: "The Weeknd"
   },
   
         {
     name: "Love Me Harder",
     path: "19.mp3",
     img: "9.png",
     singer: "Ariana Grande ft. The Weeknd"
   },
   
         {
     name: "Out of Table",
     path: "20.mp3",
     img: "9.png",
     singer: "Ariana Grande ft. The Weeknd"
   },

          {
     name: "Die For The Moon",
     path: "21.mp3",
     img: "21.png",
     singer: "The Weeknd,Bruno Mars ft. Michael Jackson"
   },
   
   
   ];


// All functions


// function load the track
function load_track(index_no){
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;	
	track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

	timer = setInterval(range_slider ,1000);
	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);


//mute sound function
function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}


// checking.. the song is playing or not
 function justplay(){
 	if(Playing_song==false){
 		playsong();

 	}else{
 		pausesong();
 	}
 }


// reset song slider
 function reset_slider(){
 	slider.value = 0;
 }

// play song
function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//pause song
function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}


// next song
function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}


// previous song
function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}


// change volume
function volume_change(){
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

// change slider position 
function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch(){
	if (autoplay==1){
       autoplay = 0;
       auto_play.style.background = "rgba(0,0,0,0.2)";
	}else{
       autoplay = 1;
       auto_play.style.background = "rgb(224,0,0)";
	}
}


function range_slider(){
	let position = 0;
        
        // update slider position
		if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
		   slider.value =  position;
	      }

       
       // function will run when the song is over
       if(track.ended){
       	 play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
           if(autoplay==1){
		       index_no += 1;
		       load_track(index_no);
		       playsong();
           }
	    }
     }
