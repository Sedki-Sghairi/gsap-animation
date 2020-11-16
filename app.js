
new fullpage("#fullpage", {
    recordHistory:false,
    navigation: true,
    onLeave: (origin, destination, direction) =>{
        const section = destination.item;
        const title = section.querySelector('h1');
        const tl = new TimelineMax({ delay: 0.5})
        tl.fromTo(title, 0.5, { y: "50", opacity: 0}, { y: 0, opacity: 1});

        if(destination.index === 1){
            const chairs = document.querySelectorAll('.chair');
            const description = document.querySelector('.description');
            tl.fromTo(chairs, 0.6, { x: "100%"}, { x: "-35%"})
            .fromTo(description, 0.5,  { y: "50", opacity: 0}, { y: 0, opacity: 1} )
            .fromTo(chairs[1], 0.7, { opacity: 0}, { opacity: 1})
            .fromTo(chairs[2], 0.8, {opacity: 0}, {opacity: 1})
        }
        if(destination.index === 2){
            const beast = document.querySelector('.beast');
            tl.fromTo(beast, 0.8, { x: "-250%"}, { x: "10%"})
           
        }
    }
})