let player;
const playerContainer = $('.player');

// Функция запуска видео по тегу .player .paused

let eventsInit = () => {
  $('.player__start').click(e => {
    e.preventDefault();
    if (playerContainer.hasClass('paused')) {
      playerContainer.removeClass("paused");
      player.pauseVideo();
    } else {
      playerContainer.addClass("paused");
      player.playVideo()
    }
  });

  $(".player__playback").click(e => {
    const bar = $(e.currentTarget);
    const clickedPosition = e.originalEvent.layerX;
    const newButtonPositionPercent = (clickedPosition / bar.width()) * 100;
    const newPlaybackPositionSec = (player.getDuration() / 100) * newButtonPositionPercent;

    $(".player__playback-button").css({
      left: `${newButtonPositionPercent}`
    });

    player.seekTo(newPlaybackPositionSec);

  });

  $(".player__splash").click(e => {
    player.playVideo();
  });
}

// Функция перевода времени из секундного формата в обычный формат 00:00

const formatTime = timeSec => {
  const roundTime = Math.round(timeSec);

  const minutes = Math.floor(roundTime / 60);
  const seconds = roundTime - minutes * 60;

  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${minutes}:${formattedSeconds}`;
};

// Функция отображения времени в .player__duration-completed и
// в .player__duration-estimate, .player__playback полоса длительности просмотра 
// видео в % соотношении

const onPlayerReady = () => {
  let interval;
  const durationSec = player.getDuration();

  $(".player__duration-estimate").text(formatTime(durationSec));

  if (typeof interval !== 'undefined') {
    clearInterval(interval);
  }

  interval = setInterval(() => {
    const completedSec = player.getCurrentTime();
    const completedPercent = (completedSec / durationSec) * 100;

    $(".player__playback-button").css({
      left: `${completedPercent}%`
    })
    $(".player__duration-completed").text(formatTime(completedSec));
  }, 1000);
}

const onPlayerStateChange = event => {
  /*
  -1 (воспроизведение видео не начато)
  0 (воспроизведение видео завершено)
  1 (воспроизведение)
  2 (пауза)
  3 (буферизация)
  5 (видео подают реплики).
  */
  switch (event.data) {
    case 1:
      playerContainer.addClass('active');
      playerContainer.addClass("paused");
      break;
    case 2:
      playerContainer.removeClass("active");
      playerContainer.removeClass("paused");
      break;
  }
}

// YouTubeIframeAPI - менеджмент

function onYouTubeIframeAPIReady() {
  player = new YT.Player('youtube-player', {
    height: '370px',
    width: '660px',
    videoId: 'CsCednu9VjA',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    },
    playerVars: {
      controls: 0,
      disablekb: 0,
      showinfo: 0,
      rel: 0,
      autoplay: 0,
      modestbranding: 0
    }
  });
}

eventsInit();