let video = $('#video'),
    playButton = $('#playButton'),
    isPlaying = false,
    progressBar = $('#progressBar'),
    rewindTen = $('#rewindTen'),
    forwardTwentyFive = $('#forwardTwentyFive');

video[0].playbackRate = 1.0;

function togglePlay()
{
    if (!isPlaying)
    {
        isPlaying = true;
        video[0].play();
        playButton.html('<i class="fas fa-pause"></i>');

        video.on('timeupdate', function()
        {
           let currentTime = video[0].currentTime,
               duration = video[0].duration;

           progressBar.css('flex-basis', `${Math.floor((currentTime / duration) * 100)}%`);
        });

    } else {
        isPlaying = false;
        video[0].pause();
        playButton.html('►');
    }
}

$('html').on('click', function(e)
{

    switch(e.target.id) {
        case 'playButton':
            togglePlay();
        break;
        case 'rewindTen':
            video[0].currentTime -= 10;
            break;
        case 'forwardTwentyFive':
            video[0].currentTime += 25;
            break;
    }

});


$('input[name=playbackRate]').on('input', function () {
    video[0].playbackRate = this.value;
});

$('input[name=volume]').on('input', function()
{
    video[0].volume = this.value;
});

