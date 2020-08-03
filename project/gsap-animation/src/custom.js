// gsap.from('#title', {opacity: 0, duration: 1, y: -50, ease: 'elastic'});

// gsap.registerEffect({
//    name: "explode",
//    effect: (targets, config) => {
//        return gsap.to(targets, {duration: config.duration, opacity: 0});
//    },
//    defaults: {duration: 2}, //defaults get applied to any "config" object passed to the effect
//    extendTimeline: true, //now you can call the effect directly on any GSAP timeline to have the result immediately inserted in the position you define (default is sequenced at the end)
// });

// gsap.effects.explode("#title", {
//    direction: "up", //can reference any properties that the author decides - in this case "direction".
//    duration: 3
//  });

// gsap.to('.box1', {x: 600, ease: 'none', duration: 5});
// gsap.to('.box2', {x: 600, ease: 'power1', duration: 5});
// gsap.to('.box3', {x: 600, ease: 'power2', duration: 5});
// gsap.to('.box4', {x: 600, ease: 'power3', duration: 5});
// gsap.to('.box5', {x: 600, ease: 'power4', duration: 5});
// gsap.to('.box6', {x: 600, ease: 'back', duration: 5});
// gsap.to('.box7', {x: 600, ease: 'elastic', duration: 5});
// gsap.to('.box8', {x: 600, ease: 'bounce', duration: 5});
// gsap.to('.box9', {x: 600, ease: 'rough', duration: 5});
// gsap.to('.box10', {x: 600, ease: 'slow', duration: 5});
// gsap.to('.box11', {x: 600, ease: 'steps(5)', duration: 5});
// gsap.to('.box12', {x: 600, ease: 'circ', duration: 5});
// gsap.to('.box13', {x: 600, ease: 'expo', duration: 5});
// gsap.to('.box14', {x: 600, ease: 'sine', duration: 5});

// gsap.from('img', {x:300, y:200, opacity: 0, duration: 3});

// gsap.from('.animation1',{y: 20, opacity: 0, stagger: 0.5});

let t1 = gsap.timeline({defaults:{duration: 1}});

t1.from('h1', {y:-50, opacity: 0})
  .from('p',{y:-50, opacity: 0}, '-=0.5')
  .from('a',{y:-50, opacity: 0},'+=1')
  .from('img', {y: 200, opacity: 0},"-=0.5");