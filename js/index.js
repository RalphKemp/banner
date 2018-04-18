// TweenMax.to(".money", 6, {y: 100, opacity: 0});

var t1 = new TimelineLite();

// slide 1
t1.from(".text-one, #dollar", 1.2, {opacity: 0, delay: 0.2});
// money explosion
t1.from("#dollar", 2.5, { ease: Elastic.easeOut.config(1, 0.7), y: -100 });

t1.to(".text-one, #dollar", 1.2, {opacity: 0, delay: 0.8});

// slide 2
t1.from(".text-two", 1, {opacity: 0});
t1.to(".text-two", 1.1, {opacity: 0, delay: 0.8});
//background colour change
t1.to(".banner-rec, .banner-square",  0.3, {backgroundColor: "#235377"});

//slide 3
t1.from(".text-three", 0.8, {opacity: 0});
t1.from(".slogan", 0.8, {opacity: 0});
t1.from(".btn-medium", 0.8, {opacity: 0, delay: 0.3});

