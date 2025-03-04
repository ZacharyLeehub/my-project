let clickCount = 0;
const teddy = document.getElementById('teddy');
const container = document.querySelector('.container');

// 预加载音频
const audio = new Audio('i-love-you.mp3.mp3');

teddy.addEventListener('click', () => {
    clickCount++;
    
    if (clickCount <= 29) {
        // 播放语音
        audio.currentTime = 0;
        audio.play();
        
        // 添加点击效果
        teddy.classList.add('clicked');
        setTimeout(() => teddy.classList.remove('clicked'), 100);
    }
    
    if (clickCount === 29) {
        // 显示提示
        const message = document.createElement('div');
        message.textContent = "it's enough";
        message.style.position = 'absolute';
        message.style.color = 'red';
        message.style.fontSize = '24px';
        message.style.top = '-50px';
        container.appendChild(message);
    }
    
    if (clickCount === 30) {
        // 触发爆炸效果
        const explosion = document.createElement('div');
        explosion.className = 'explosion';
        explosion.style.top = teddy.offsetTop + 'px';
        explosion.style.left = teddy.offsetLeft + 'px';
        container.appendChild(explosion);
        
        // 移除泰迪熊
        teddy.style.display = 'none';
        
        // 移除爆炸效果
        setTimeout(() => {
            explosion.remove();
        }, 500);
    }
});
