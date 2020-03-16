const ap = new APlayer({
    container: document.getElementById('aplayer'),
    theme: '#2EA9DF',
    mini : false,
    autoplay : false,
    loop: 'all',
    preload: 'auto',
    volume: 0.7,
    audio: [{
        name: '折纸信笺-全碟串烧',
        artist: '泠鸢yousa',
        url: 'crossfade.mp3',
        cover: './images/MusicPlayer/cover_300.jpg'
    }]
});
