function toast({title = '',content = '',duration = 3000,type = ''}) {
    let time = (duration/1000).toFixed(2);
    const toast = document.getElementById('toast');
    if(!toast) return;

    const toastItem = document.createElement('div');

    const autoDelete = setTimeout(function() {
        toast.removeChild(toastItem);
    },duration+1000);

    toastItem.onclick = function(e) {
        if(e.target.closest('.toast__close')) {
            toast.removeChild(toastItem);
            clearTimeout(autoDelete);
        }
    }

    const icons = {
        success: "fa-solid fa-circle-check",
        error:"fa-solid fa-circle-exclamation",
        warning:"fa-solid fa-circle-exclamation",
        infor:"fa-solid fa-circle-info"
    }
    toastItem.classList.add('toast',`toast--${type}`);
    toastItem.style = ` animation: flowRightOut 0.5s ease, FadeOut 1s linear ${time}s forwards;`
    toastItem.innerHTML = 
    `<div class="toast__icon">
            <i class='${icons[type]}'></i>
        </div>
        <div class="toast__content">
            <div class="toast__content-title">${title}</div>
            <div class="toast__content-des">${content}</div>
        </div>
        <div class="toast__close">
            <i class="fa-solid fa-xmark toast__close-icon"></i>
    </div>`;
    toast.appendChild(toastItem);
}