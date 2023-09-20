alert('What is the time?');
const sr =ScrollReveal({
    distance: '35px',
    duration: 2500,
    reset: true
});

sr.reveal('.Hero',{delay:200, origin: 'top'});
sr.reveal('.details',{delay:310, origin: 'left'});
sr.reveal('.bottom',{delay:400, origin: 'bottom'});