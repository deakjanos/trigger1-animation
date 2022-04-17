var anim = document.querySelectorAll('.display-anim');
    document.getElementById('play_stop').onclick = function () {
        for (var i = 0; i < anim.length; i++) {
            if (anim[i].style.animationPlayState == 'paused') {
                anim[i].style.animationPlayState = 'running';
            }
            else {
                anim[i].style.animationPlayState = 'paused';
            }
        }
    }