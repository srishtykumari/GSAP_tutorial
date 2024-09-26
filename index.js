gsap.to("#box1",{
    x:1000,
    duration:2,
    delay:1,
    rotate:180,
    repeat:-1,
    backgroundColor:"yellow",
    yoyo:true
})
gsap.from("#box2",{
    y:300,
    x:1000,
    opacity:0,
    duration:2,
  rotate:360,
})
gsap.to("#box3",{
    x:800,
    delay:2,
    backgroundColor:"pink",
    borderRadius: "50%",
    rotate:360,
    yoyo:true,
})
gsap.to("h1",{
    color:"red",
    opacity:0,
    duration:1,
    y:30,
})
// if i use from then it convert red to white color but in use of to it turn white to red!

gsap.from("h2",{
    color:"orange",
    opacity:0,
    x:40,
    duration:1,
    stagger:1
})
//if we use -1 in stagger it behave opposite means fisrt come last one.

var tl = gsap.timeline()

// tl.to("#box1",{
//     x:1500,
//     duration:2
// })

// tl.to("#box2",{
//     x:1000,
//     duration:2
// })

tl.from("h3",{
    y:30,
    opacity:0,
    duration:1,
    delay:0.5
})
tl.from("h4",{
    y:30,
    opacity:0,
    duration:1,
    delay:0.5
})
tl.from(".main",{
    y:30,
    opacity:0,
    duration:1,
    delay:1
})
