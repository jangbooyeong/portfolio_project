let onScroll;
let lastScrollTop = 0;
let delta = 5;
let navbarHeight = $('header').outerHeight();

// 스크롤시 스크롤 상태 true
$(window).scroll(function(event) {
    onScroll = true;
});

// hasScrolled()를 실행하고 didScroll 상태를 재설정
setInterval(function() {
    if(onScroll) {
        hasScrolled();
        onScroll = false;
    }
}, 250);

function hasScrolled() {
  // 접근하기 쉽게 현재 스크롤의 위치를 저장
    let st = $(this).scrollTop();

    // 설정한 delta 값보다 더 스크롤되었는지를 확인
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

        // 스크롤의 방향이 위인지 아래인지를 확인
        // 스크롤의 방향이 위면 .nav-up x .nav-down o
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll 다운
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll 업
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}

const borderEvent1 = document.getElementById('borderEvent1');
const borderEvent2 = document.getElementById('borderEvent2');
window.addEventListener("resize", () => {
    if (window.innerWidth < 992) {
        borderEvent1.classList.remove('border__left');
        borderEvent2.classList.remove('border__left');
    } else {
        borderEvent1.classList.add('border__left');
        borderEvent2.classList.add('border__left');
    };
});

// email Js 함수
function SendMail() {
    let params = {
        user_name: document.getElementById("user_name").value ,
        user_email: document.getElementById("user_email").value ,
        user_subject: document.getElementById("user_subject").value ,
        user_detail: document.getElementById("user_detail").value ,
    };
    
    const ServiceID = "service_h9v8qnx";
    const TemplateID = "template_n9hmij2";
    
    emailjs
    .send(ServiceID, TemplateID, params)
    .then((res) => {
        document.getElementById("user_name").value = "";
        document.getElementById("user_email").value = "";
        document.getElementById("user_subject").value = "";
        document.getElementById("user_detail").value = "";
        console.log(res);
        alert("Your message has been successfully sent");
    })
    .catch((err) => console.log(err));
}