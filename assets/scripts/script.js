Timeline = gsap.timeline()
Timeline.to(".nav-bar",{
    top:0,
    duration:2,
    smooth:1
})
Timeline.to(".me",{
    opacity:1,
    duratioin:2
})
Timeline.to(".arrow",{
    opacity:1,
    duratioin:1
})
Timeline.fromTo(".intro",
    {
        x:-300

    },
    {
        x:0,smooth:1
})
Timeline.fromTo(".text-ele",
    {
        x:-500
    },
    {
        x:0,stagger:2,smooth:1,duration:2
})