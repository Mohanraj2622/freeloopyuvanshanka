document.addEventListener("DOMContentLoaded", () => {
  const savedTrack = localStorage.getItem("currentTrack");
  if (savedTrack) {
    const track = JSON.parse(savedTrack);
    playSong(track);
    localStorage.removeItem("currentTrack"); // Remove to prevent replay
  }
});

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && (event.key === "=" || event.key === "-" || event.key === "0")) {
    event.preventDefault();
  }
});

document.addEventListener("wheel", function (event) {
  if (event.ctrlKey) {
    event.preventDefault();
  }
}, { passive: false });

// WebViewString Communication with MIT App Inventor
function updateAppInventorState(state) {
  if (window.AppInventor) {
    window.AppInventor.setWebViewString(state);
  }
}

// Function to send a message to MIT App Inventor about Media Session status
function updateAppInventorWithMediaSessionStatus(status) {
  if (window.AppInventor) {
    window.AppInventor.setWebViewString("MediaSessionStatus: " + status);
  }
}
  fetch("https://script.google.com/macros/s/AKfycbwRTuXI4PMjGI9lIqwK4Pih00i0kHsLw2pudIFLs13ESrXbfFGjIpFWP3qn8qCkiLbI8A/exec")
    .then(response => response.text())
    .then(count => {
      document.getElementById("visit-count").textContent = count;
    })
    .catch(error => console.error("Error fetching visit count:", error));

// Media Session API Integration
function setupMediaSession() {
  if ('mediaSession' in navigator) {
    navigator.mediaSession.setActionHandler("play", playSong);
    navigator.mediaSession.setActionHandler("pause", pauseSong);
    navigator.mediaSession.setActionHandler("nexttrack", playNextSong);
    navigator.mediaSession.setActionHandler("previoustrack", playPrevSong);

    // Inform App Inventor that the Media Session is enabled
    updateAppInventorWithMediaSessionStatus("Media Session Enabled");
  } else {
    // Inform App Inventor that the Media Session is not supported
    updateAppInventorWithMediaSessionStatus("Media Session Not Supported");
  }
}

// Existing code remains the same
const SONGS = [
  // 1 list
  {
    title: "18-Vayathil",
    artist: "Yuvan Shankar",
    url: "18-Vayathil.mp3",
    coverUrl: "yuvan cover-1.png",
  },

  {
    title: "Aadatha-Aatamellam",
    artist: "Yuvan Shankar",
    url: "Aadatha-Aatamellam.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Aadham-Yevaal",
    artist: "Yuvan Shankar",
    url: "Aadham-Yevaal-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Aagaatha-Kaalam",
    artist: "Yuvan Shankar",
    url: "Aagaatha-Kaalam.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Aambalaikum-Pombalaikum",
    artist: "Yuvan Shankar",
    url: "Aambalaikum-Pombalaikum.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Aandipatti",
    artist: "Yuvan Shankar",
    url: "Aandipatti.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Aasai-Nooru-Vagai",
    artist: "Yuvan Shankar",
    url: "Aasai-Nooru-Vagai-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Aathadi-Manasudhan",
    artist: "Yuvan Shankar",
    url: "Aathadi-Manasudhan-II.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Aayiram-Mugangal",
    artist: "Yuvan Shankar",
    url: "Aayiram-Mugangal-MassTamilan.io.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Ada-Boss-Boss",
    artist: "Yuvan Shankar",
    url: "Ada-Boss-Boss.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Adada-Mazhaida",
    artist: "Yuvan Shankar",
    url: "Adada-Mazhaida.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Adadaa Adadaa Ennai",
    artist: "Yuvan Shankar",
    url: "Adadaa Adadaa Ennai.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Adadada-Arrambame",
    artist: "Yuvan Shankar",
    url: "Adadada-Arrambame-MassTamilan.dev.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Adi-Kavakara-Kiliye",
    artist: "Yuvan Shankar",
    url: "Adi-Kavakara-Kiliye.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Adi-Yendi-Pulla",
    artist: "Yuvan Shankar",
    url: "Adi-Yendi-Pulla-MassTamilan.org.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Adida-Nayaandiya",
    artist: "Yuvan Shankar",
    url: "Adida-Nayaandiya.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Adiyaathi-",
    artist: "Yuvan Shankar",
    url: "Adiyaathi-MassTamilan.dev.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Aeroplanil Yeri",
    artist: "Yuvan Shankar",
    url: "Aeroplanil Yeri.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "All-Day-Jolly-Day",
    artist: "Yuvan Shankar",
    url: "All-Day-Jolly-Day-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Allola-Kallolam-",
    artist: "Yuvan Shankar",
    url: "Allola-Kallolam-MassTamilan.io.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Amani-Rukkumaṇi-",
    artist: "Yuvan Shankar",
    url: "Amani-Rukkumaṇi-MassTamilan.dev.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Amma-Song-",
    artist: "Yuvan Shankar",
    url: "Amma-Song-MassTamilan.io.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Ammadi-Athadi-(Movie-Version)",
    artist: "Yuvan Shankar",
    url: "Ammadi-Athadi-(Movie-Version)-MassTamilan.org.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Anbae-Peranbae",
    artist: "Yuvan Shankar",
    url: "Anbae-Peranbae-MassTamilan.org.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Anbulla-Sandhya",
    artist: "Yuvan Shankar",
    url: "Anbulla-Sandhya.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Angry-Bird-Aana-Aala-",
    artist: "Yuvan Shankar",
    url: "Angry-Bird-Aana-Aala-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Annamalai-Thambi",
    artist: "Yuvan Shankar",
    url: "Annamalai-Thambi-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Arabu-Naade",
    artist: "Yuvan Shankar",
    url: "Arabu-Naade.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Ariyadha-Vayasu",
    artist: "Yuvan Shankar",
    url: "Ariyadha-Vayasu.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Arupadhu-Aayidichu",
    artist: "Yuvan Shankar",
    url: "Arupadhu-Aayidichu.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Asaivindri-",
    artist: "Yuvan Shankar",
    url: "Asaivindri-MassTamilan.dev.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Ashwin-Thatha-Theme",
    artist: "Yuvan Shankar",
    url: "Ashwin-Thatha-Theme-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Athuvana-Katrukku",
    artist: "Yuvan Shankar",
    url: "Athuvana-Katrukku.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Avanapathi",
    artist: "Yuvan Shankar",
    url: "Avanapathi.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Azamanjakaari",
    artist: "Yuvan Shankar",
    url: "Azamanjakaari-MassTamilan.org.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Azhagae-Pozhikiraai-Arugae",
    artist: "Yuvan Shankar",
    url: "Azhagae-Pozhikiraai-Arugae-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Azhagana-Sooriyan-",
    artist: "Yuvan Shankar",
    url: "Azhagana-Sooriyan-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Azhaikkatuma-",
    artist: "Yuvan Shankar",
    url: "Azhaikkatuma-MassTamilan.org.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Baby-Baby",
    artist: "Yuvan Shankar",
    url: "Baby-Baby.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Baby-Gurl-(Reprise)",
    artist: "Yuvan Shankar",
    url: "Baby-Gurl-(Reprise)-MassTamilan.dev.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Baby-Gurl-",
    artist: "Yuvan Shankar",
    url: "Baby-Gurl-MassTamilan.dev.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "BAD - Gangs Of Godavari ",
    artist: "Yuvan Shankar",
    url: "BAD - Gangs Of Godavari Theme.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Bakkunu Suthureney Aiyo Aiyayo",
    artist: "Yuvan Shankar",
    url: "Bakkunu Suthureney Aiyo Aiyayo.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Balle-Lakka",
    artist: "Yuvan Shankar",
    url: "Balle-Lakka.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Bang-Bang-Bang",
    artist: "Yuvan Shankar",
    url: "Bang-Bang-Bang.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Billa-2-Theme-Music",
    artist: "Yuvan Shankar",
    url: "Billa-2-Theme-Music.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Bommalattam-",
    artist: "Yuvan Shankar",
    url: "Bommalattam-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Briyani",
    artist: "Yuvan Shankar",
    url: "Briyani.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "CANDY-(Tamil)-",
    artist: "Yuvan Shankar",
    url: "CANDY-(Tamil)-MassTamilan.so.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "CBI-Enge-Theda",
    artist: "Yuvan Shankar",
    url: "CBI-Enge-Theda.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Chinna Chinna Kangal",
    artist: "Yuvan Shankar",
    url: "Chinna Chinna Kangal.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Chinna-Chinnathai-Penne",
    artist: "Yuvan Shankar",
    url: "Chinna-Chinnathai-Penne.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Chudithar-Aninthu-Vantha",
    artist: "Yuvan Shankar",
    url: "Chudithar-Aninthu-Vantha.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Closing-All-Differences-",
    artist: "Yuvan Shankar",
    url: "Closing-All-Differences-MassTamilan.io.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Color-Color-Malar-",
    artist: "Yuvan Shankar",
    url: "Color-Color-Malar-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Con-Man-Theme",
    artist: "Yuvan Shankar",
    url: "Con-Man-Theme.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Corrected-Machi",
    artist: "Yuvan Shankar",
    url: "Corrected-Machi-MassTamilan.io.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Cycle-Wheela-Pola",
    artist: "Yuvan Shankar",
    url: "Cycle-Wheela-Pola-MassTamilan.io.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Dead-End---Theme-",
    artist: "Yuvan Shankar",
    url: "Dead-End---Theme-MassTamilan.fm.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Dei-Namma-Melam-Edutha",
    artist: "Yuvan Shankar",
    url: "Dei-Namma-Melam-Edutha-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Deiveega-Raagam-",
    artist: "Yuvan Shankar",
    url: "Deiveega-Raagam-MassTamilan.dev.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Devathai",
    artist: "Yuvan Shankar",
    url: "Devathai.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Devathayai-Kanden",
    artist: "Yuvan Shankar",
    url: "Devathayai-Kanden.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Dhanush-Kodi's-Theme-",
    artist: "Yuvan Shankar",
    url: "Dhanush-Kodi's-Theme-MassTamilan.fm.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Dhavanipotta-Deepavali",
    artist: "Yuvan Shankar",
    url: "Dhavanipotta-Deepavali.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Dheivangal-Ellaam",
    artist: "Yuvan Shankar",
    url: "Dheivangal-Ellaam.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Dia-Dia-Dole",
    artist: "Yuvan Shankar",
    url: "Dia-Dia-Dole.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Doli-Doli-",
    artist: "Yuvan Shankar",
    url: "Doli-Doli-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Dope-Track",
    artist: "Yuvan Shankar",
    url: "Dope-Track-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Edhirthu-Nil",
    artist: "Yuvan Shankar",
    url: "Edhirthu-Nil.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Eerakkathe",
    artist: "Yuvan Shankar",
    url: "Eerakkathe.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Eh-Nanbane-Kopam",
    artist: "Yuvan Shankar",
    url: "Eh-Nanbane-Kopam.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Elaiudhir Kaalam",
    artist: "Yuvan Shankar",
    url: "Elaiudhir Kaalam.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "En Kannodu",
    artist: "Yuvan Shankar",
    url: "En Kannodu.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "En-Anbae-En-Anbae",
    artist: "Yuvan Shankar",
    url: "En-Anbae-En-Anbae.mp3",
    coverUrl: "yuvan cover-1.png",
  },
   {
    title: "En-Fuse-Pochu-",
    artist: "Yuvan Shankar",
    url: "En-Fuse-Pochu-MassTamilan.dev.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "En-Iniya-Pon-Nila",
    artist: "Yuvan Shankar",
    url: "En-Iniya-Pon-Nila-MassTamilan.dev.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "En-Kadhal-Solla",
    artist: "Yuvan Shankar",
    url: "En-Kadhal-Solla.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "En-Nenjil-Ningalane",
    artist: "Yuvan Shankar",
    url: "En-Nenjil-Ningalane.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "En-Nenjil",
    artist: "Yuvan Shankar",
    url: "En-Nenjil.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "En-Pondaati-Ooruku-Poita",
    artist: "Yuvan Shankar",
    url: "En-Pondaati-Ooruku-Poita.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Enadhuyir-Enge-",
    artist: "Yuvan Shankar",
    url: "Enadhuyir-Enge-MassTamilan.dev.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Endha-Pakkam",
    artist: "Yuvan Shankar",
    url: "Endha-Pakkam.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Endha-Vazhi",
    artist: "Yuvan Shankar",
    url: "Endha-Vazhi.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Endhan-Kangalai-",
    artist: "Yuvan Shankar",
    url: "Endhan-Kangalai-MassTamilan.org.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Engengo-Kaalgal-Sellum",
    artist: "Yuvan Shankar",
    url: "Engengo-Kaalgal-Sellum.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Enna-Enna-Aagiraen",
    artist: "Yuvan Shankar",
    url: "Enna-Enna-Aagiraen.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Enna-Nadakudhu-",
    artist: "Yuvan Shankar",
    url: "Enna-Nadakudhu-MassTamilan.so.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Ennai-Vittu-(Yuvanshankar-Raja-Version)",
    artist: "Yuvan Shankar",
    url: "Ennai-Vittu-(Yuvanshankar-Raja-Version)-MassTamilan.dev.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Ennamo-Nadakkirathe",
    artist: "Yuvan Shankar",
    url: "Ennamo-Nadakkirathe.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Eppadio-Mattikiten",
    artist: "Yuvan Shankar",
    url: "Eppadio-Mattikiten.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Erimalai-Naane",
    artist: "Yuvan Shankar",
    url: "Erimalai-Naane-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Ettu-Thisai-Ellam",
    artist: "Yuvan Shankar",
    url: "Ettu-Thisai-Ellam-MassTamilan.dev.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Folk-Instrumental",
    artist: "Yuvan Shankar",
    url: "Folk-Instrumental-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Follow-my-lead-",
    artist: "Yuvan Shankar",
    url: "Follow-my-lead---Theme-MassTamilan.fm.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Friendship-Paattu",
    artist: "Yuvan Shankar",
    url: "Friendship-Paattu-MassTamilan.io.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Gangster",
    artist: "Yuvan Shankar",
    url: "Gangster.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Glimpse of Garudan",
    artist: "Yuvan Shankar",
    url: "Glimpse of Garudan.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Goa-Club-Mix",
    artist: "Yuvan Shankar",
    url: "Goa-Club-Mix.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Goa",
    artist: "Yuvan Shankar",
    url: "Goa.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Gumthalakkadi-Gana",
    artist: "Yuvan Shankar",
    url: "Gumthalakkadi-Gana.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Hare-Rama",
    artist: "Yuvan Shankar",
    url: "Hare-Rama-MassTamilan.dev.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Harla-Farla-",
    artist: "Yuvan Shankar",
    url: "Harla-Farla-MassTamilan.io.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Hello-",
    artist: "Yuvan Shankar",
    url: "Hello-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Hi-Hello-",
    artist: "Yuvan Shankar",
    url: "Hi-Hello-MassTamilan.dev.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "High-On-Love-",
    artist: "Yuvan Shankar",
    url: "High-On-Love-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Hold-Me-Now-",
    artist: "Yuvan Shankar",
    url: "Hold-Me-Now-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "I-Will-Never-Let-You-Go",
    artist: "Yuvan Shankar",
    url: "I-Will-Never-Let-You-Go-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Iayyayo",
    artist: "Yuvan Shankar",
    url: "Iayyayo.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Idaivazhi-Oru",
    artist: "Yuvan Shankar",
    url: "Idaivazhi-Oru.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Idhayam",
    artist: "Yuvan Shankar",
    url: "Idhayam.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Idhu-Pola",
    artist: "Yuvan Shankar",
    url: "Idhu-Pola-MassTamilan.dev.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Ilamai-Oorai-Sutrum",
    artist: "Yuvan Shankar",
    url: "Ilamai-Oorai-Sutrum.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Ilaratham-Sodera",
    artist: "Yuvan Shankar",
    url: "Ilaratham-Sodera.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Indha-Kadhalil-",
    artist: "Yuvan Shankar",
    url: "Indha-Kadhalil-MassTamilan.dev.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Ippadiye",
    artist: "Yuvan Shankar",
    url: "Ippadiye.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Irava-Pagala",
    artist: "Yuvan Shankar",
    url: "Irava-Pagala.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Iruthiyai Nee",
    artist: "Yuvan Shankar",
    url: "Iruthiyai Nee.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Its-Over-",
    artist: "Yuvan Shankar",
    url: "Its-Over-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Iyley-Iyley",
    artist: "Yuvan Shankar",
    url: "Iyley-Iyley.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Jalsa-Pannungada",
    artist: "Yuvan Shankar",
    url: "Jalsa-Pannungada.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Jigiruthaanda-",
    artist: "Yuvan Shankar",
    url: "Jigiruthaanda-MassTamilan.io.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Kaadhalai Pirippadhu",
    artist: "Yuvan Shankar",
    url: "Kaadhalai Pirippadhu.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Kaatrin-Viral-",
    artist: "Yuvan Shankar",
    url: "Kaatrin-Viral-MassTamilan.dev.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Kadhal-Aasai",
    artist: "Yuvan Shankar",
    url: "Kadhal-Aasai.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Kadhal-Konden",
    artist: "Yuvan Shankar",
    url: "Kadhal-Konden.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Kadhal-Mattum-Purivathillai",
    artist: "Yuvan Shankar",
    url: "Kadhal-Mattum-Purivathillai.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Kadhal-Vandhale-",
    artist: "Yuvan Shankar",
    url: "Kadhal-Vandhale-MassTamilan.org.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Kadhal-Vanthiruchi-",
    artist: "Yuvan Shankar",
    url: "Kadhal-Vanthiruchi-MassTamilan.org.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Kambathu-Ponnu-",
    artist: "Yuvan Shankar",
    url: "Kambathu-Ponnu-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Kanavae Kalaigirathe",
    artist: "Yuvan Shankar",
    url: "Kanavae Kalaigirathe.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Kanda-Naal-Mudhalai-",
    artist: "Yuvan Shankar",
    url: "Kanda-Naal-Mudhalai-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Kannai-Vittu-Kann-Imaigal-(Remix)",
    artist: "Yuvan Shankar",
    url: "Kannai-Vittu-Kann-Imaigal-(Remix)-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Kannil Kodi",
    artist: "Yuvan Shankar",
    url: "Kannil Kodi.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Kannil-Kanthamey-Vendam",
    artist: "Yuvan Shankar",
    url: "Kannil-Kanthamey-Vendam.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Kathal-Website-Ondru",
    artist: "Yuvan Shankar",
    url: "Kathal-Website-Ondru.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Kattikko-Rappa-Rappa-",
    artist: "Yuvan Shankar",
    url: "Kattikko-Rappa-Rappa-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Kombu Vacha",
    artist: "Yuvan Shankar",
    url: "Kombu Vacha.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Kondattame",
    artist: "Yuvan Shankar",
    url: "Kondattame.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Konjam Konjam",
    artist: "Yuvan Shankar",
    url: "Konjam Konjam.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Koo-Koovena-",
    artist: "Yuvan Shankar",
    url: "Koo-Koovena-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Kupathu-Rajakal.",
    artist: "Yuvan Shankar",
    url: "Kupathu-Rajakal.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Kurunthogai",
    artist: "Yuvan Shankar",
    url: "Kurunthogai.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Kutti-Kutti-Pani-",
    artist: "Yuvan Shankar",
    url: "Kutti-Kutti-Pani-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Lets-be-Friends-",
    artist: "Yuvan Shankar",
    url: "Lets-be-Friends-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Line Kidaichuduche",
    artist: "Yuvan Shankar",
    url: "Line Kidaichuduche.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Loosu-Penne-(Remix)",
    artist: "Yuvan Shankar",
    url: "Loosu-Penne-(Remix)-MassTamilan.org.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Love-All-Day-Theme-",
    artist: "Yuvan Shankar",
    url: "Love-All-Day-Theme-Music.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Maalai-Varum-Vennila",
    artist: "Yuvan Shankar",
    url: "Maalai-Varum-Vennila.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Maanaadu-Theme-",
    artist: "Yuvan Shankar",
    url: "Maanaadu-Theme-MassTamilan.fm.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Maari-Gethu-",
    artist: "Yuvan Shankar",
    url: "Maari-Gethu-MassTamilan.org.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Maari's-Aanandhi-",
    artist: "Yuvan Shankar",
    url: "Maari's-Aanandhi-MassTamilan.org.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Maatram-",
    artist: "Yuvan Shankar",
    url: "Maatram-MassTamilan.dev.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Maayane-Andha",
    artist: "Yuvan Shankar",
    url: "Maayane-Andha.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Machaan-Machaan",
    artist: "Yuvan Shankar",
    url: "Machaan-Machaan.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Machi-Open-The-Bottle",
    artist: "Yuvan Shankar",
    url: "Machi-Open-The-Bottle.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Madhan-Doubts-Vaishu",
    artist: "Yuvan Shankar",
    url: "Madhan-Doubts-Vaishu-MassTamilan.io.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Madhan-Explains-His-Love-",
    artist: "Yuvan Shankar",
    url: "Madhan-Explains-His-Love-MassTamilan.io.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Madhan-Killed-Vaishu-",
    artist: "Yuvan Shankar",
    url: "Madhan-Killed-Vaishu-MassTamilan.io.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Madhan-Lies-To-Mythili-",
    artist: "Yuvan Shankar",
    url: "Madhan-Lies-To-Mythili-MassTamilan.io.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Madhan's-Feelings-",
    artist: "Yuvan Shankar",
    url: "Madhan's-Feelings-MassTamilan.io.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Madurai-Micheal-Theme",
    artist: "Yuvan Shankar",
    url: "Madurai-Micheal-Theme-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Madurai-Ponnu",
    artist: "Yuvan Shankar",
    url: "Madurai-Ponnu.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Makka-Kalanguthappa.",
    artist: "Yuvan Shankar",
    url: "Makka-Kalanguthappa.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Malto-Kithapuleh-",
    artist: "Yuvan Shankar",
    url: "Malto-Kithapuleh-MassTamilan.io.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Mama-Mama",
    artist: "Yuvan Shankar",
    url: "Mama-Mama.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Mamakutty",
    artist: "Yuvan Shankar",
    url: "Mamakutty-MassTamilan.dev.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Manasu-Rendum",
    artist: "Yuvan Shankar",
    url: "Manasu-Rendum.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Mani-Mani-",
    artist: "Yuvan Shankar",
    url: "Mani-Mani-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Manja-Colouru-Kuruvi",
    artist: "Yuvan Shankar",
    url: "Manja-Colouru-Kuruvi-MassTamilan.io.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Manja-Kaattu-Maina-",
    artist: "Yuvan Shankar",
    url: "Manja-Kaattu-Maina-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Mankatha-Theme-Music",
    artist: "Yuvan Shankar",
    url: "Mankatha-Theme-Music.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Manmadhan-Intro-",
    artist: "Yuvan Shankar",
    url: "Manmadhan-Intro-MassTamilan.io.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Masss-Theme",
    artist: "Yuvan Shankar",
    url: "Masss-Theme.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Matta",
    artist: "Yuvan Shankar",
    url: "Matta.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Mazhai-Megam-Neeyada-",
    artist: "Yuvan Shankar",
    url: "Mazhai-Megam-Neeyada-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Meesa-Vecha-Vetaikaaran-",
    artist: "Yuvan Shankar",
    url: "Meesa-Vecha-Vetaikaaran-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Meherezylaa-",
    artist: "Yuvan Shankar",
    url: "Meherezylaa-MassTamilan.fm.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Melala-Vedikudhu-",
    artist: "Yuvan Shankar",
    url: "Melala-Vedikudhu-MassTamilan.dev.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Merke-Merke-",
    artist: "Yuvan Shankar",
    url: "Merke-Merke-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "MGR-Illenga",
    artist: "Yuvan Shankar",
    url: "MGR-Illenga.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Miss-you-Papa",
    artist: "Yuvan Shankar",
    url: "Miss-you-Papa-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Mississippi",
    artist: "Yuvan Shankar",
    url: "Mississippi.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Motta-Madhan's-Pain-",
    artist: "Yuvan Shankar",
    url: "Motta-Madhan's-Pain-MassTamilan.io.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Mudhal-Murai-Mazhai-Parkkum",
    artist: "Yuvan Shankar",
    url: "Mudhal-Murai-Mazhai-Parkkum-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Mudhal-Murai",
    artist: "Yuvan Shankar",
    url: "Mudhal-Murai.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Mudhal-Muththam-",
    artist: "Yuvan Shankar",
    url: "Mudhal-Muththam-MassTamilan.dev.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Mun-Paniyaa",
    artist: "Yuvan Shankar",
    url: "Mun-Paniyaa.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Mundasu-Sooriyane",
    artist: "Yuvan Shankar",
    url: "Mundasu-Sooriyane.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "My-Name-is-Billa",
    artist: "Yuvan Shankar",
    url: "My-Name-is-Billa-MassTamilan.fm.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Naalaya-Pozhudhu",
    artist: "Yuvan Shankar",
    url: "Naalaya-Pozhudhu-MassTamilan.dev.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Naan-Appatakkar-",
    artist: "Yuvan Shankar",
    url: "Naan-Appatakkar-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Naan-Aval-Illai",
    artist: "Yuvan Shankar",
    url: "Naan-Aval-Illai.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Naan-Kaatrile",
    artist: "Yuvan Shankar",
    url: "Naan-Kaatrile.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Naan-Meendum-",
    artist: "Yuvan Shankar",
    url: "Naan-Meendum-MassTamilan.fm.mp3",
    coverUrl: "yuvan cover-1.png",
  },

  {
    title: "Nahnh-Na-Nah",
    artist: "Yuvan Shankar",
    url: "Nahnh-Na-Nah.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Namma-Kattula-Mazhai-Peiyuthu-",
    artist: "Yuvan Shankar",
    url: "Namma-Kattula-Mazhai-Peiyuthu-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Nan-Kangalale-Parthen-",
    artist: "Yuvan Shankar",
    url: "Nan-Kangalale-Parthen-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Nanbane",
    artist: "Yuvan Shankar",
    url: "Nanbane.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Nathaswaram-Bit",
    artist: "Yuvan Shankar",
    url: "Nathaswaram-Bit.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Natpinilae-Natpinilae",
    artist: "Yuvan Shankar",
    url: "Natpinilae-Natpinilae.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Natpukullae-Oru",
    artist: "Yuvan Shankar",
    url: "Natpukullae-Oru.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Nattu-Saraku",
    artist: "Yuvan Shankar",
    url: "Nattu-Saraku.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Nee-Illai-Enral",
    artist: "Yuvan Shankar",
    url: "Nee-Illai-Enral.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Nee-Naan",
    artist: "Yuvan Shankar",
    url: "Nee-Naan.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Neenda-Malare-",
    artist: "Yuvan Shankar",
    url: "Neenda-Malare-MassTamilan.org.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Neengum-Bothil",
    artist: "Yuvan Shankar",
    url: "Neengum-Bothil-MassTamilan.io.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Nenjodu-Kalinthidu",
    artist: "Yuvan Shankar",
    url: "Nenjodu-Kalinthidu.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Nesippaya Nee Ennai",
    artist: "Yuvan Shankar",
    url: "Nesippaya Nee Ennai.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Never-Let-Me-Go-",
    artist: "Yuvan Shankar",
    url: "Never-Let-Me-Go-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Nijama-Nijama-",
    artist: "Yuvan Shankar",
    url: "Nijama-Nijama-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "No-Money-No-Honey",
    artist: "Yuvan Shankar",
    url: "No-Money-No-Honey.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Nobody Sleeps Here",
    artist: "Yuvan Shankar",
    url: "Nobody Sleeps Here.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Odi-Odi",
    artist: "Yuvan Shankar",
    url: "Odi-Odi.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Odivaa Kaadhalae",
    artist: "Yuvan Shankar",
    url: "Odivaa Kaadhalae.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Oh-Oh-Ennammo",
    artist: "Yuvan Shankar",
    url: "Oh-Oh-Ennammo.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Oh-Shala",
    artist: "Yuvan Shankar",
    url: "Oh-Shala.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "On-The-Prowl-",
    artist: "Yuvan Shankar",
    url: "On-The-Prowl-MassTamilan.io.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Oonjal-Manam-",
    artist: "Yuvan Shankar",
    url: "Oonjal-Manam-MassTamilan.dev.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Ooru-Nalla-Ooru",
    artist: "Yuvan Shankar",
    url: "Ooru-Nalla-Ooru.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Oppurane-Oppurane-",
    artist: "Yuvan Shankar",
    url: "Oppurane-Oppurane-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Orampo Naina",
    artist: "Yuvan Shankar",
    url: "Orampo Naina.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Oru-Adangapidari",
    artist: "Yuvan Shankar",
    url: "Oru-Adangapidari.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Oru-Kal-II",
    artist: "Yuvan Shankar",
    url: "Oru-Kal-II.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Oru-Kannil-Vegam",
    artist: "Yuvan Shankar",
    url: "Oru-Kannil-Vegam.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Oru-Malayoram",
    artist: "Yuvan Shankar",
    url: "Oru-Malayoram.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Oru-Vaanavillin-Pakkathilae",
    artist: "Yuvan Shankar",
    url: "Oru-Vaanavillin-Pakkathilae.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Otha-Paarvaiyil",
    artist: "Yuvan Shankar",
    url: "Otha-Paarvaiyil.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Othapada Veriyattam",
    artist: "Yuvan Shankar",
    url: "Othapada Veriyattam.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Overa-Feel-Pannuren",
    artist: "Yuvan Shankar",
    url: "Overa-Feel-Pannuren-MassTamilan.io.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Paarai-Mele",
    artist: "Yuvan Shankar",
    url: "Paarai-Mele.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Paathagathi-Kannupattu",
    artist: "Yuvan Shankar",
    url: "Paathagathi-Kannupattu.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Pacha-Elai",
    artist: "Yuvan Shankar",
    url: "Pacha-Elai-MassTamilan.dev.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Pani-Thuli",
    artist: "Yuvan Shankar",
    url: "Pani-Thuli-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Panjavarna Kiliye",
    artist: "Yuvan Shankar",
    url: "Panjavarna Kiliye.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Pannapurathu-",
    artist: "Yuvan Shankar",
    url: "Pannapurathu-MassTamilan.so.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Per-Vachaalum-Vaikkaama-",
    artist: "Yuvan Shankar",
    url: "Per-Vachaalum-Vaikkaama-MassTamilan.io.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Piravi",
    artist: "Yuvan Shankar",
    url: "Piravi.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Podu-Attam-Podu-",
    artist: "Yuvan Shankar",
    url: "Podu-Attam-Podu-MassTamilan.org.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Poga-Poga-Boomi-Virikirathe",
    artist: "Yuvan Shankar",
    url: "Poga-Poga-Boomi-Virikirathe-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Poi-Vaada",
    artist: "Yuvan Shankar",
    url: "Poi-Vaada.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Pom-Pom-Penne",
    artist: "Yuvan Shankar",
    url: "Pom-Pom-Penne.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Ponnu Thotha",
    artist: "Yuvan Shankar",
    url: "Ponnu Thotha.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Poochandi",
    artist: "Yuvan Shankar",
    url: "Poochandi.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Poongatre-Poongatre",
    artist: "Yuvan Shankar",
    url: "Poongatre-Poongatre.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Poothathu-Poothathu",
    artist: "Yuvan Shankar",
    url: "Poothathu-Poothathu.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Poova-Poova-Poove",
    artist: "Yuvan Shankar",
    url: "Poova-Poova-Poove.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Poove-Poove-M",
    artist: "Yuvan Shankar",
    url: "Poove-Poove-M.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Pothachaalum-",
    artist: "Yuvan Shankar",
    url: "Pothachaalum-MassTamilan.org.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Prelude-To-Manmadhane-",
    artist: "Yuvan Shankar",
    url: "Prelude-To-Manmadhane-MassTamilan.io.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Pushing-It-Hard-",
    artist: "Yuvan Shankar",
    url: "Pushing-It-Hard-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Ranga-Rattinam-",
    artist: "Yuvan Shankar",
    url: "Ranga-Rattinam-MassTamilan.fm.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Rasathi-A-Different-Start",
    artist: "Yuvan Shankar",
    url: "Rasathi-A-Different-Start.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Rasathi-Pola",
    artist: "Yuvan Shankar",
    url: "Rasathi-Pola.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Ratham-En-Ratham-",
    artist: "Yuvan Shankar",
    url: "Ratham-En-Ratham-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Retro-Romance-Theme",
    artist: "Yuvan Shankar",
    url: "Retro-Romance-Theme-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Revenge-of-The-Joker-(Theme)",
    artist: "Yuvan Shankar",
    url: "Revenge-of-The-Joker-(Theme)-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Rottula-Vandi-Oodudhu",
    artist: "Yuvan Shankar",
    url: "Rottula-Vandi-Oodudhu-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Rum-Bum-Bum-",
    artist: "Yuvan Shankar",
    url: "Rum-Bum-Bum-MassTamilan.dev.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Run-For-your-Life",
    artist: "Yuvan Shankar",
    url: "Run-For-your-Life.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Saachitale-",
    artist: "Yuvan Shankar",
    url: "Saachitale-MassTamilan.dev.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Saama-Kodangi",
    artist: "Yuvan Shankar",
    url: "Saama-Kodangi.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Saami-Varuguthu",
    artist: "Yuvan Shankar",
    url: "Saami-Varuguthu.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Sadugudu-Adathey-",
    artist: "Yuvan Shankar",
    url: "Sadugudu-Adathey-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Sagala-Kalavalli",
    artist: "Yuvan Shankar",
    url: "Sagala-Kalavalli-MassTamilan.org.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Sari-Kama-Pathan",
    artist: "Yuvan Shankar",
    url: "Sari-Kama-Pathan.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Saroja-Saman-Nikalo",
    artist: "Yuvan Shankar",
    url: "Saroja-Saman-Nikalo.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Scream-of-Darkness-Theme",
    artist: "Yuvan Shankar",
    url: "Scream-of-Darkness-Theme-MassTamilan.io.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Secret-Window-",
    artist: "Yuvan Shankar",
    url: "Secret-Window-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Sei-Yedhavathu-Sei",
    artist: "Yuvan Shankar",
    url: "Sei-Yedhavathu-Sei-MassTamilan.fm.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Semmannu-Thaane",
    artist: "Yuvan Shankar",
    url: "Semmannu-Thaane-MassTamilan.dev.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Sengarattan-Paaraiyula-",
    artist: "Yuvan Shankar",
    url: "Sengarattan-Paaraiyula-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Seval-Kodi-",
    artist: "Yuvan Shankar",
    url: "Seval-Kodi-MassTamilan.fm.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Sevvanam-Vetkam-Kondathu",
    artist: "Yuvan Shankar",
    url: "Sevvanam-Vetkam-Kondathu.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Sevvandhi-Poove",
    artist: "Yuvan Shankar",
    url: "Sevvandhi-Poove-MassTamilan.org.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Shades-Of-Love",
    artist: "Yuvan Shankar",
    url: "Shades-Of-Love-MassTamilan.dev.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Sil Sil",
    artist: "Yuvan Shankar",
    url: "Sil Sil.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Sippara-Rippara",
    artist: "Yuvan Shankar",
    url: "Sippara-Rippara-MassTamilan.dev.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Sirippu-En",
    artist: "Yuvan Shankar",
    url: "Sirippu-En.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Soda-Bottle",
    artist: "Yuvan Shankar",
    url: "Soda-Bottle.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Sol Nee Sol",
    artist: "Yuvan Shankar",
    url: "Sol Nee Sol.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Sollamal-Thottu-Chellum-Thendral",
    artist: "Yuvan Shankar",
    url: "Sollamal-Thottu-Chellum-Thendral.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Solo Violin",
    artist: "Yuvan Shankar",
    url: "Solo Violin.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Spark",
    artist: "Yuvan Shankar",
    url: "Spark.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Stylish-Thamizhachi",
    artist: "Yuvan Shankar",
    url: "Stylish-Thamizhachi-MassTamilan.dev.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Success-Of-Love-",
    artist: "Yuvan Shankar",
    url: "Success-Of-Love-MassTamilan.org.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Surprise-Me-",
    artist: "Yuvan Shankar",
    url: "Surprise-Me-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Suthuthe-Suthuthe-Bhoomi",
    artist: "Yuvan Shankar",
    url: "Suthuthe-Suthuthe-Bhoomi.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Suttamla Soosi",
    artist: "Yuvan Shankar",
    url: "Suttamla Soosi.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Tamizhanna-Naan-Oru",
    artist: "Yuvan Shankar",
    url: "Tamizhanna-Naan-Oru.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Tanka-Dunga",
    artist: "Yuvan Shankar",
    url: "Tanka-Dunga.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Tension Gone Uh Celebration Song Uh",
    artist: "Yuvan Shankar",
    url: "Tension Gone Uh Celebration Song Uh.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Thaakkuthe",
    artist: "Yuvan Shankar",
    url: "Thaakkuthe.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Thaalatum-Mounam-Ondril",
    artist: "Yuvan Shankar",
    url: "Thaalatum-Mounam-Ondril-MassTamilan.fm.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Thala-Keezha",
    artist: "Yuvan Shankar",
    url: "Thala-Keezha-MassTamilan.dev.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Thandalkaaran",
    artist: "Yuvan Shankar",
    url: "Thandalkaaran-MassTamilan.org.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Thathi-Thaavum-Paper-Naan",
    artist: "Yuvan Shankar",
    url: "Thathi-Thaavum-Paper-Naan.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Thathi-Thathi-Thaavuthey",
    artist: "Yuvan Shankar",
    url: "Thathi-Thathi-Thaavuthey.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Thattiputta",
    artist: "Yuvan Shankar",
    url: "Thattiputta-MassTamilan.so.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "The-Balloon's-Mystery-(Title-Track)",
    artist: "Yuvan Shankar",
    url: "The-Balloon's-Mystery-(Title-Track)-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Theepidika Theepidika",
    artist: "Yuvan Shankar",
    url: "Theepidika Theepidika.mp3",
    coverUrl: "yuvan cover-1.png",
  },

  {
    title: "Theme-Music-",
    artist: "Yuvan Shankar",
    url: "Theme-Music-MassTamilan.fm.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Therikkudhu-Masss-Gasa-Gasa-Mix",
    artist: "Yuvan Shankar",
    url: "Therikkudhu-Masss-Gasa-Gasa-Mix.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Therikkudhu-Masss",
    artist: "Yuvan Shankar",
    url: "Therikkudhu-Masss.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Thimiranumda",
    artist: "Yuvan Shankar",
    url: "Thimiranumda-MassTamilan.org.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Thithikkara-Vayasu",
    artist: "Yuvan Shankar",
    url: "Thithikkara-Vayasu-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Thithikum-Theeai",
    artist: "Yuvan Shankar",
    url: "Thithikum-Theeai.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Thiyagi-Boys",
    artist: "Yuvan Shankar",
    url: "Thiyagi-Boys-MassTamilan.dev.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Thotta-Load-Aage-Waiting",
    artist: "Yuvan Shankar",
    url: "Thotta-Load-Aage-Waiting-MassTamilan.dev.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Thottu-Thottu",
    artist: "Yuvan Shankar",
    url: "Thottu-Thottu.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Thuli-Thuli-Mazhaiyaai",
    artist: "Yuvan Shankar",
    url: "Thuli-Thuli-Mazhaiyaai.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Timeless-Love-",
    artist: "Yuvan Shankar",
    url: "Timeless-Love-MassTamilan.dev.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Toppu Yegiri Pogum",
    artist: "Yuvan Shankar",
    url: "Toppu Yegiri Pogum.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Trend-Song",
    artist: "Yuvan Shankar",
    url: "Trend-Song-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Uchimalai-Azhagu",
    artist: "Yuvan Shankar",
    url: "Uchimalai-Azhagu.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Ulla-Vaa-World-Cup",
    artist: "Yuvan Shankar",
    url: "Ulla-Vaa-World-Cup.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Ullara-Poondhu",
    artist: "Yuvan Shankar",
    url: "Ullara-Poondhu.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Un-Paarvai-Mele-Pattal",
    artist: "Yuvan Shankar",
    url: "Un-Paarvai-Mele-Pattal.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Unakkulle-Mirugam",
    artist: "Yuvan Shankar",
    url: "Unakkulle-Mirugam.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Unnai Naan Paarthen",
    artist: "Yuvan Shankar",
    url: "Unnai Naan Paarthen.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Unnai-Paartha-Naal",
    artist: "Yuvan Shankar",
    url: "Unnai-Paartha-Naal-MassTamilan.io.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Unnai-Thozhi-Enbatha",
    artist: "Yuvan Shankar",
    url: "Unnai-Thozhi-Enbatha.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Uyire",
    artist: "Yuvan Shankar",
    url: "Uyire.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Uyirile-Uyirile-Puthu-",
    artist: "Yuvan Shankar",
    url: "Uyirile-Uyirile-Puthu-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Vaa-Vellai-Raasathi",
    artist: "Yuvan Shankar",
    url: "Vaa-Vellai-Raasathi-MassTamilan.org.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Vaada-Bin-Laada",
    artist: "Yuvan Shankar",
    url: "Vaada-Bin-Laada.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Vaadi-Vaadi",
    artist: "Yuvan Shankar",
    url: "Vaadi-Vaadi.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Vaaliba-Vaa-Vaa",
    artist: "Yuvan Shankar",
    url: "Vaaliba-Vaa-Vaa.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Vaanam-Dhaane-Namma-",
    artist: "Yuvan Shankar",
    url: "Vaanam-Dhaane-Namma-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Vaanam",
    artist: "Yuvan Shankar",
    url: "Vaanam.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Vaitha-Kann-",
    artist: "Yuvan Shankar",
    url: "Vaitha-Kann-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Vaiyambatti",
    artist: "Yuvan Shankar",
    url: "Vaiyambatti.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Vallava-Ennai-Vellava",
    artist: "Yuvan Shankar",
    url: "Vallava-Ennai-Vellava-MassTamilan.org.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Vasiyakara-Vasiyakara",
    artist: "Yuvan Shankar",
    url: "Vasiyakara-Vasiyakara-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Vathikuchi-Pathikadhuda.mp3",
    artist: "Yuvan Shankar",
    url: "Vathikuchi-Pathikadhuda.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Vayasu-Ponnukku-",
    artist: "Yuvan Shankar",
    url: "Vayasu-Ponnukku-MassTamilan.io.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Vellai-Mayil",
    artist: "Yuvan Shankar",
    url: "Vellai-Mayil.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Verarum",
    artist: "Yuvan Shankar",
    url: "Verarum.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Vethalaiya-Potendi",
    artist: "Yuvan Shankar",
    url: "Vethalaiya-Potendi-MassTamilan.fm.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Vilayadu-Mangatha-Extended-Dance-Mix",
    artist: "Yuvan Shankar",
    url: "Vilayadu-Mangatha-Extended-Dance-Mix.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Vilayadu-Mangatha",
    artist: "Yuvan Shankar",
    url: "Vilayadu-Mangatha.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Voice-Of-Unity-",
    artist: "Yuvan Shankar",
    url: "Voice-Of-Unity-MassTamilan.fm.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Vuroram-Puliamaram",
    artist: "Yuvan Shankar",
    url: "Vuroram-Puliamaram.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Wake-me-up-Everyday",
    artist: "Yuvan Shankar",
    url: "Wake-me-up-Everyday-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Where-Do-We-Go",
    artist: "Yuvan Shankar",
    url: "Where-Do-We-Go.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Where-Is-The-Party",
    artist: "Yuvan Shankar",
    url: "Where-Is-The-Party.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Whistle Podu",
    artist: "Yuvan Shankar",
    url: "Whistle Podu.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Who-Am-I",
    artist: "Yuvan Shankar",
    url: "Who-Am-I.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Yaar-Antha-Oviyathai-",
    artist: "Yuvan Shankar",
    url: "Yaar-Antha-Oviyathai-MassTamilan.io.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Yaar-Intha-Penthan",
    artist: "Yuvan Shankar",
    url: "Yaar-Intha-Penthan.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Yaar-Ivan-Thoonilum-Thurumbilum",
    artist: "Yuvan Shankar",
    url: "Yaar-Ivan-Thoonilum-Thurumbilum-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Yaaro-Friendship",
    artist: "Yuvan Shankar",
    url: "Yaaro-Friendship.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Yaaro-Yarukkul-Love",
    artist: "Yuvan Shankar",
    url: "Yaaro-Yarukkul-Love.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Yarra Iva",
    artist: "Yuvan Shankar",
    url: "Yarra Iva.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Ye-Rasa-",
    artist: "Yuvan Shankar",
    url: "Ye-Rasa-MassTamilan.so.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Yea-Ready-Athiradi-Idi",
    artist: "Yuvan Shankar",
    url: "Yea-Ready-Athiradi-Idi-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Yedhedo-Ennangal-Vandhu",
    artist: "Yuvan Shankar",
    url: "Yedhedo-Ennangal-Vandhu-MassTamilan.com.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Yedho-Mayakkam",
    artist: "Yuvan Shankar",
    url: "Yedho-Mayakkam.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Yedho-Ondru-Ennai",
    artist: "Yuvan Shankar",
    url: "Yedho-Ondru-Ennai.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Yedhum-Solladhe",
    artist: "Yuvan Shankar",
    url: "Yedhum-Solladhe-MassTamilan.io.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Yela Yela",
    artist: "Yuvan Shankar",
    url: "Yela Yela.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Yelamala-Kathu-",
    artist: "Yuvan Shankar",
    url: "Yelamala-Kathu-MassTamilan.org.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Yeleu-Thalamuakkum",
    artist: "Yuvan Shankar",
    url: "Yeleu-Thalamuakkum.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  {
    title: "Yennadi-Seidhaai",
    artist: "Yuvan Shankar",
    url: "Yennadi-Seidhaai-MassTamilan.fm.mp3",
    coverUrl: "yuvan cover-1.png",
  },
  
];

let currentSongIndex = 0;
let isPlaying = false;
let userPaused = false;
let isSearchActive = false;
let searchResults = [];
const audio = new Audio();
const trackList = document.getElementById('trackList');
const searchInput = document.getElementById('search');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const cover = document.getElementById('cover');
const playPauseButton = document.getElementById('playPause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const progress = document.getElementById('progress');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');

// Function to send media control events to MIT App Inventor
function sendMediaControlEvent(event) {
  if (window.AppInventor) {
    window.AppInventor.setWebViewString(`MediaControl:${event}`);
  }
}

// Function to send metadata updates to MIT App Inventor
function sendMetadataUpdate(song) {
  if (window.AppInventor) {
    const metadata = {
      title: song.title,
      artist: song.artist,
      coverUrl: song.coverUrl || "default-cover.jpg",
    };
    window.AppInventor.setWebViewString(`MetadataUpdate:${JSON.stringify(metadata)}`);
  }
}

const loadSong = (index) => {
  const song = SONGS[index];
  title.textContent = song.title;
  artist.textContent = song.artist;
  audio.src = song.url;
  progress.value = 0;
  currentTimeDisplay.textContent = "0:00";
  durationDisplay.textContent = "0:00";
  updateMediaSession(song);
  cover.src = song.coverUrl || "default-cover.jpg";
  // Try to extract cover image from MP3 metadata
  fetch(song.url)
    .then(response => response.blob())
    .then(blob => {
      jsmediatags.read(blob, {
        onSuccess: function (tag) {
          const picture = tag.tags.picture;
          if (picture) {
            let base64String = "";
            for (let i = 0; i < picture.data.length; i++) {
              base64String += String.fromCharCode(picture.data[i]);
            }
            const base64 = btoa(base64String);
            cover.src = `data:${picture.format};base64,${base64}`;
          } else {
            cover.src = song.coverUrl || "default-cover.jpg"; // Use array cover or fallback
          }
        },
        onError: function (error) {
          console.error("Error reading cover art:", error);
          cover.src = song.coverUrl || "default-cover.jpg"; // Use array cover or fallback
        }
      });
    })
    .catch(error => {
      console.error("Error fetching MP3 file:", error);
      cover.src = song.coverUrl || "default-cover.jpg"; // Use array cover or fallback
    });
};

// Play the current song
const playSong = () => {
  userPaused = false;
  isPlaying = true;
  audio.play().catch(error => {
    console.error("Playback failed:", error);
  });
  playPauseButton.textContent = '⏸';
  updateAppInventorState(`Playing: ${SONGS[currentSongIndex].title}`)
  sendMediaControlEvent('play');
};

// Pause the current song (only when user explicitly pauses)
const pauseSong = () => {
  userPaused = true;
  isPlaying = false;
  audio.pause();
  playPauseButton.textContent = '▶️';
  updateAppInventorState(`Paused: ${SONGS[currentSongIndex].title}`);
  sendMediaControlEvent('pause');
};

// Toggle play/pause
const togglePlayPause = () => {
  isPlaying ? pauseSong() : playSong();
};

// Play the next song
const playNextSong = () => {
  if (isSearchActive && searchResults.length > 0) {
    currentSongIndex = (currentSongIndex + 1) % searchResults.length;
    loadSong(SONGS.indexOf(searchResults[currentSongIndex]));
  } else {
    currentSongIndex = (currentSongIndex + 1) % SONGS.length;
    loadSong(currentSongIndex);
  }
  playSong();
  sendMediaControlEvent('next');
};

// Play the previous song
const playPrevSong = () => {
  if (isSearchActive && searchResults.length > 0) {
    currentSongIndex = (currentSongIndex - 1 + searchResults.length) % searchResults.length;
    loadSong(SONGS.indexOf(searchResults[currentSongIndex]));
  } else {
    currentSongIndex = (currentSongIndex - 1 + SONGS.length) % SONGS.length;
    loadSong(currentSongIndex);
  }
  playSong();
  sendMediaControlEvent('previous');
};

// Update the progress bar and time display
const updateProgress = () => {
  const { currentTime, duration } = audio;
  progress.value = (currentTime / duration) * 100 || 0;
  currentTimeDisplay.textContent = formatTime(currentTime);
  durationDisplay.textContent = formatTime(duration);
};

// Format time for display
const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
};

// Handle seeking through the progress bar
const handleSeek = (e) => {
  const seekTime = (e.target.value / 100) * audio.duration;
  audio.currentTime = seekTime;
};

// Update WebViewString to prevent App Inventor from stopping
updateAppInventorState("Playing: " + SONGS[currentSongIndex].title + " - " + Math.floor(audio.currentTime) + "s");

// Debounce function to limit the rate of execution
const debounce = (func, delay) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
};

// Filter the song list based on the search input
const filterSongs = debounce(() => {
  const query = searchInput.value.toLowerCase();
  searchResults = SONGS.filter((song) => song.title.toLowerCase().includes(query));
  isSearchActive = query.length > 0;
  renderSongList(searchResults);
}, 300);

const renderSongList = (songs) => {
  trackList.innerHTML = ''; // Clear the existing list
  songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.classList.add('track');

    // Create an image element for the cover
    const img = document.createElement('img');
    img.src = "default-cover.jpg"; // Set default initially
    img.alt = song.title;
    img.classList.add('track-cover'); // Add CSS class for styling

    // Array of random cover images (URLs or Base64 data)
    const defaultCovers = [
      "yuvan cover -4.png",
      "yuvan cover-1.png",
      "yuvan cover-2.png",
      "yuvan cover-3.png",
      "yuvan shankar.png"
    ];

    // Function to get a random cover image
    function getRandomCover() {
      return defaultCovers[Math.floor(Math.random() * defaultCovers.length)];
    }

    // Set a random cover icon immediately
    img.src = getRandomCover();

    // Create a div for track info
    const trackInfo = document.createElement('div');
    trackInfo.classList.add('track-info');

    // Create a div for the title
    const trackTitle = document.createElement('div');
    trackTitle.classList.add('track-title');
    trackTitle.textContent = song.title;
    trackInfo.appendChild(trackTitle);

    li.appendChild(img);
    li.appendChild(trackInfo);

    li.addEventListener('click', () => {
      if (isSearchActive) {
        currentSongIndex = SONGS.indexOf(song);
      } else {
        currentSongIndex = index;
      }
      loadSong(currentSongIndex);
      playSong();
    });

    trackList.appendChild(li);
  });
};

// Function to update media session metadata and send status to App Inventor
const updateMediaSession = (song) => {
  if ('mediaSession' in navigator) {
    // Default to provided coverUrl or a fallback image
    let artworkUrl = song.coverUrl || "default-cover.jpg";

    // Try extracting embedded cover art from MP3 metadata
    fetch(song.url)
      .then(response => response.blob())
      .then(blob => {
        jsmediatags.read(blob, {
          onSuccess: (tag) => {
            const picture = tag.tags.picture;
            if (picture) {
              let base64String = "";
              for (let i = 0; i < picture.data.length; i++) {
                base64String += String.fromCharCode(picture.data[i]);
              }
              artworkUrl = `data:${picture.format};base64,${btoa(base64String)}`;
            }

            // Update media session with extracted or fallback artwork
            navigator.mediaSession.metadata = new MediaMetadata({
              title: song.title,
              artist: song.artist,
              album: song.album || "Unknown Album",
              artwork: [{ src: artworkUrl, sizes: "512x512", type: "image/png" }]
            });

            // Send update to App Inventor
            updateAppInventorWithMediaSessionStatus(`Metadata Updated: ${song.title}`);
          },
          onError: (error) => {
            console.error("Error extracting metadata:", error);

            // Use fallback cover if metadata extraction fails
            navigator.mediaSession.metadata = new MediaMetadata({
              title: song.title,
              artist: song.artist,
              album: song.album || "Unknown Album",
              artwork: [{ src: artworkUrl, sizes: "512x512", type: "image/png" }]
            });

            updateAppInventorWithMediaSessionStatus(`Metadata Updated: ${song.title} (No Cover Found)`);
          }
        });
      })
      .catch((error) => {
        console.error("Error fetching MP3 file:", error);

        // Use fallback cover if fetching fails
        navigator.mediaSession.metadata = new MediaMetadata({
          title: song.title,
          artist: song.artist,
          album: song.album || "Unknown Album",
          artwork: [{ src: artworkUrl, sizes: "512x512", type: "image/png" }]
        });

        updateAppInventorWithMediaSessionStatus(`Metadata Updated: ${song.title} (Failed to Fetch)`);
      });
  }
};

  // Notification functions
  function showNotification() {
    console.log("Showing notification...");
    // Add your notification UI logic here
  }

  function hideNotification() {
    console.log("Hiding notification...");
    // Add your notification UI logic here
  }

// Ensure playback continues when app is in the background
document.addEventListener("visibilitychange", () => {
  if (document.hidden && isPlaying) {
    showNotification();
  } else {
    hideNotification();
    if (isPlaying) {
      audio.play().catch(error => {
        console.error("Resume after visibility change failed:", error);
      });
    }
  }
});


// Handle system-triggered pauses (e.g., app backgrounded)
audio.addEventListener('pause', (event) => {
  if (!userPaused && isPlaying) {
    // Automatically resume playback if paused by the system (not user)
    setTimeout(() => {
      audio.play().catch(error => {
        console.error("Auto-resume failed:", error);
      });
    }, 100);
  }
});

// Event listeners for audio and controls
audio.addEventListener('ended', playNextSong);
audio.addEventListener('timeupdate', updateProgress);
searchInput.addEventListener('input', () => {
  if (searchInput.value === '') {
    isSearchActive = false;
    searchResults = [];
    renderSongList(SONGS);
  } else {
    filterSongs();
  }
});

playPauseButton.addEventListener('click', togglePlayPause);
nextButton.addEventListener('click', playNextSong);
prevButton.addEventListener('click', playPrevSong);
progress.addEventListener('input', handleSeek);

// Event listeners for audio and controls
audio.addEventListener('ended', playNextSong);
audio.addEventListener('timeupdate', updateProgress);
searchInput.addEventListener('input', filterSongs);
playPauseButton.addEventListener('click', togglePlayPause);
nextButton.addEventListener('click', playNextSong);
prevButton.addEventListener('click', playPrevSong);
progress.addEventListener('input', handleSeek);

// Initial setup
loadSong(currentSongIndex);
renderSongList(SONGS);
setupMediaSession();
