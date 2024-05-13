const scroll = new LocomotiveScroll({
    el: document.querySelector('.parent'),
    smooth: true
});



function videoconAnimation(){
    let videocon = document.querySelector(".video-container");
    let playbtn = document.querySelector(".play");
videocon.addEventListener("mouseenter", function(){
    gsap.to(playbtn,{
        scale:1,
        opacity:1
    })
    
})

videocon.addEventListener("mouseleave", function(){
    gsap.to(playbtn,{
        scale:0,
        opacity:0
    })
})

videocon.addEventListener("mousemove", function(dets){
    gsap.to(playbtn,{
        left:dets.x,
        top:dets.y
    })
})
}
videoconAnimation()


function loadingAnimation(){
    gsap.from("#page-1 h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.3
    })
    gsap.from("#page-1 .video-container",{
        scale:0.9,
        opacity:0,
        delay:1.5,
        duration:0.8

    })
}
loadingAnimation();

document.addEventListener("mousemove", function(dets){
    gsap.to("#cursor",{
        left:dets.x,
        top:dets.y
    })

})



