// TweenMax.to(".money", 6, {y: 100, opacity: 0});

var t1 = new TimelineLite();

TweenMax.from("#dollar, #dollar-square", 2.2, {opacity: 0, delay: 0.2});
TweenMax.from("#pound, #pound-square", 2.2, {opacity: 0, delay: 0.2});
TweenMax.from("#euro, #euro-square", 2.2, {opacity: 0, delay: 0.2});

TweenMax.to("#dollar", 4, {bezier:{type:"soft", values:[{x:200, y:50}, {x:300, y:30}, {x:560, y:70}], autoRotate:true}, ease:Sine.easeInOut});
TweenMax.to("#euro", 4, {bezier:{type:"soft", values:[{x:100, y:50}, {x:200, y:-70}, {x:550, y:-140}], autoRotate:true}, ease:Sine.easeInOut});
TweenMax.to("#pound", 4, {bezier:{type:"soft", values:[{x:100, y:50}, {x:300, y:0}, {x:560, y:120}], autoRotate:true}, ease:Sine.easeInOut});

TweenMax.from("#euro-square", 2.3, { ease: Elastic.easeOut.config(1, 0.9), y: 240, delay: 0.2 });
TweenMax.from("#pound-square", 2.3, { ease: Elastic.easeOut.config(1, 0.8), y: 210, delay: 0.3});
TweenMax.from("#dollar-square", 2.3, { ease: Elastic.easeOut.config(1, 0.8), y: 210, delay: 0.3});


// slide 1
t1.from(".text-one", 2.2, {opacity: 0, delay: 0.2});
// money explosion


t1.to(".text-one, #dollar, #euro, #pound, #dollar-square, #pound-square, #euro-square", 1, {opacity: 0, delay: 0.2});

t1.to(".banner-rec",  0.3, {backgroundImage: "linear-gradient(to right, #214e70, #235377 300px, #214e70 600px)"});
t1.to(".banner-square",  0.3, {backgroundImage: "linear-gradient(to right, #214e70, #235377 150px, #214e70 300px)"});
// slide 2
t1.from(".text-two", 0.3, {opacity: 0});
t1.to(".text-two", 0.7, {opacity: 0, delay: 1.6});
//background colour change


//slide 3
t1.from(".stocks-div", 0.3, {opacity: 0});
t1.from(".stocks-div-square", 0.3, {opacity: 0});
t1.from(".text-three", 0.8, {opacity: 0});
t1.from(".slogan", 0.8, {opacity: 0});
t1.from(".btn-medium", 0.8, {opacity: 0, delay: 0.3});


