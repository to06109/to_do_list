const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    //padStart: 문자열 길이 지정, 모자라면 두번째 파라미터로 채움
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

//웹사이트가 load 되자마자 실행
getClock()
//5초에 한 번씩 실행
setInterval(getClock, 1000);

//5초 후에 한 번 실행
//setTimeout(sayHello, 5000);