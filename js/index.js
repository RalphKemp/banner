// TweenMax.to(".money", 6, {y: 100, opacity: 0});

var t1 = new TimelineLite();

TweenMax.from("#dollar", 2.5, { ease: Elastic.easeOut.config(1, 0.7), y: 200 });
TweenMax.from("#euro", 2.1, { ease: Elastic.easeOut.config(1, 0.9), y: 240, delay: 0.2 });
TweenMax.from("#pound", 2.3, { ease: Elastic.easeOut.config(1, 0.8), y: 210, delay: 0.3});


// slide 1
t1.from(".text-one", 1.2, {opacity: 0, delay: 0.2});
// money explosion


t1.to(".text-one, #dollar, #euro, #pound", 1.2, {opacity: 0, delay: 0.8});

// slide 2
t1.from(".text-two", 1, {opacity: 0});
t1.to(".text-two", 1.1, {opacity: 0, delay: 0.8});
//background colour change
t1.to(".banner-rec, .banner-square",  0.3, {backgroundColor: "#235377"});

//slide 3
t1.from(".text-three", 0.8, {opacity: 0});
t1.from(".slogan", 0.8, {opacity: 0});
t1.from(".btn-medium", 0.8, {opacity: 0, delay: 0.3});

