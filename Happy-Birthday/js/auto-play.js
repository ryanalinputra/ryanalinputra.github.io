document.addEventListener('DOMContentLoaded', () => {
  const audioPlayer = document.getElementById('audioPlayer');

  // Cek apakah elemen audioPlayer ada
  if (!audioPlayer) {
    console.error('Element with ID "audioPlayer" not found.');
    return;
  }

  // Cek apakah ada waktu tersimpan di localStorage
  const savedTime = localStorage.getItem('audioTime');
  if (savedTime) {
    audioPlayer.currentTime = savedTime;
  }

  // Saat audio sedang diputar, simpan waktunya ke localStorage
  audioPlayer.addEventListener('timeupdate', () => {
    localStorage.setItem('audioTime', audioPlayer.currentTime);
  });

  // Pastikan audio tidak memutar otomatis saat halaman di-refresh, tunggu hingga currentTime diset
  audioPlayer.addEventListener('canplay', () => {
    if (!audioPlayer.paused) {
      audioPlayer.play();
    }
  });

  // Saat halaman akan di-refresh, simpan waktu terakhir audio
  window.addEventListener('beforeunload', () => {
    localStorage.setItem('audioTime', audioPlayer.currentTime);
  });
});
