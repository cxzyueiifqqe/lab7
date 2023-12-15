window.addEventListener('DOMContentLoaded', function () {
    var video = document.querySelector('.video');

    video.addEventListener('click', function () {
        if(video.classList.contains('ready')) {
        return
    }
        video.classList.add('ready');
        var linkOn = video.dataset.src;
        video.insertAdjacentHTML('afterbegin', '<iframe src="' + linkOn + '" title="HATSUNE MIKU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')
    })
})