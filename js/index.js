// TweenMax.to(".money", 6, {y: 100, opacity: 0});

var t1 = new TimelineLite();

t1.from(".text-one", 1.2, {opacity: 0, delay: 0.2});
t1.to(".text-one", 1.1, {opacity: 0, delay: 0.8});

t1.from(".text-two", 1, {opacity: 0});
t1.to(".text-two", 1.1, {opacity: 0, delay: 0.8});
