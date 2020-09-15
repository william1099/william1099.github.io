
$(document).ready(function() {
    
    $(window).on('load', function() {
		var preloaderFadeOutTime = 500;
		function hidePreloader() {
			var preloader = $('.spinner-wrapper');
			setTimeout(function() {
				preloader.fadeOut(preloaderFadeOutTime);
			}, 500);
		}
		hidePreloader();
    });
    
    // header

    let marker = document.querySelector(".marker");
    let items = document.querySelectorAll("header ul li a");

    function changeIndicator(e) {
        marker.style.left = e.offsetLeft - 8 + "px";
        marker.style.width = (e.offsetWidth + 18) + "px";
    }

    changeIndicator(items[0]);

    items.forEach(a => {
        a.addEventListener('click', (e) => changeIndicator(e.target));
        
    });

    // get json Data
    let projects = [];
    $.getJSON("data.json", function(data) {
        $.each(data, function(key, value) {
            projects.push(value);
        });

        console.log(projects);
    });

    // galery box

    let counter = 0;
    let box = $(".gallery .box");
    let boxElm = $(".gallery .box span");
    let projectDesc = $(".project-desc");
    
    function rotateBox(val) {
        counter += val;
        let idx = 8 - (counter % 8) - 1;
        if(counter < 0) {
            idx = Math.abs(counter) % 8 - 1;
            if(idx == -1) idx = 7;
        }
        //console.log(idx);

        box.css("transform", "rotateY(" + (counter * 45) + "deg)");
        $(boxElm.get(idx)).find("img").css({"opacity" : 1, "transform": "scale(1.1)", "box-shadow": "0 0 1px #e8b544,0 0 2px #e8b544,0 0 3px #e8b544,0 0 4px #e8b544"});
        $(boxElm.get(idx)).siblings().find("img").removeAttr("style");
        projectDesc.find("h2").text(projects[idx].name);
        projectDesc.find("p").text(projects[idx]["s-desc"]);
    }

    $(".leftArrow").click(function() {
        rotateBox(1);    
    });

    $(".rightArrow").click(function() {
        rotateBox(-1);    
    });
   
    let gsapTimeline = gsap.timeline({paused: true})
                        .to(".box", {duration:0.5, opacity:0, visibility:"hidden"})
                        .to(".leftArrow", {duration: 0.5, x: -100, ease:Back.easeIn}, "<0.5")
                        .to(".rightArrow", {duration: 0.5, x: 100, ease:Back.easeIn}, "<")
                        .to(".project-desc h2", {duration: 1, opacity: 0}, "<")
                        .to(".project-desc p", {duration: 1, opacity: 0}, "<")
                        .to(".project > h1", {duration: 1, opacity: 0}, "<")
                        .to(".light-parent", {duration: 1, x: 220})
                        .to(".project-detail", {duration: 1, opacity: 1, visibility:"visible", scale:1}, "<")
                        .to(".btn-back", {duration: 0.5, opacity: 1,  bottom:"50px"}, "<");


    $(".gallery .box span").find("img").click(function() {
        console.log( $("project-detail-desc").find("h2"));
        //box.fadeOut();
        gsapTimeline.play();
                
        
        let idx = 8 - (counter % 8) - 1;
        if(counter < 0) {
            idx = Math.abs(counter) % 8 - 1;
            if(idx == -1) idx = 7;
        }
        console.log((projects[idx]["name"]));
        console.log(projects[idx]["image"]);
        
        
        $(".project-detail").find("img").attr("src", "images/" + projects[idx]["image"]);
        $(".project-detail-desc").find("h2").text(projects[idx]["name"]);
        $(".project-detail-desc").find("p")[0].innerText = projects[idx]["l-desc"];
        $(".project-detail-desc").find("p")[1].innerText = projects[idx]["year"];
        if(idx != 7) {
            $(".project-detail-desc").append("<a class='btn-code' target='_blank' href='" +  projects[idx]["url"] + "'><i class='fa fa-code' aria-hidden='true'></i>&nbsp; View code</a>");
        }
    });

    $(".btn-back").click(function() {
        $("a.btn-code").remove();
        gsapTimeline.reverse();
    });


    // wheel
    let wheel = $(".wheel");
    let word1 = $(".wheel .word1");
    const word2 = $(".wheel .word2");
    const word3 = $(".wheel .word3");
    const word4 = $(".wheel .word4");
    const word5 = $(".wheel .word5");
    const word6 = $(".wheel .word6");
    const word7 = $(".wheel .word7");
    const word8 = $(".wheel .word8");
    const word9 = $(".wheel .word9");
    const word10 = $(".wheel .word10");
    const word11 = $(".wheel .word11");
    const word12 = $(".wheel .word12");
    const word13 = $(".wheel .word13");
    const word14 = $(".wheel .word14");
    const word15 = $(".wheel .word15");
    const word16 = $(".wheel .word16");

    const spinDuration = 2;

    function spinTheWheel(numOfTimes, obj, opacities) {
        let initialPos = parseInt(obj.attr("y"));
        let timeline = gsap.timeline();
        for(let i = 0; i < numOfTimes; i++) {
            timeline.to(obj, 1, {
                opacity: opacities[i],
                attr: {y: "-=60"},
                ease: Linear.easeNone
            });
        }
        return timeline;
    }

    let tl1 = spinTheWheel(1, word1, [0]);
    let tl2 = spinTheWheel(2, word2, [0.2, 0]);
    let tl3 = spinTheWheel(3, word3, [0.5, 0.2, 0]);
    let tl4 = spinTheWheel(4, word4, [1, 0.5, 0.2, 0]);
    let tl5 = spinTheWheel(5, word5, [0.5, 1, 0.5, 0.2, 0]);
    let tl6 = spinTheWheel(6, word6, [0.2, 0.5, 1, 0.5, 0.2, 0]);
    let tl7 = spinTheWheel(7, word7, [0, 0.2, 0.5, 1, 0.5, 0.2, 0]);
    let tl8 = spinTheWheel(8, word8, [0, 0, 0.2, 0.5, 1, 0.5, 0.2, 0]);
    let tl9 = spinTheWheel(9, word9, [0, 0, 0, 0.2, 0.5, 1, 0.5, 0.2, 0]);
    let tl10 = spinTheWheel(10, word10, [0, 0, 0, 0, 0.2, 0.5, 1, 0.5, 0.2, 0]);
    let tl11 = spinTheWheel(11, word11, [0, 0, 0, 0, 0, 0.2, 0.5, 1, 0.5, 0.2, 0]);
    let tl12 = spinTheWheel(11, word12, [0, 0, 0, 0, 0, 0, 0.2, 0.5, 1, 0.5, 0.2]);
    let tl13 = spinTheWheel(11, word13, [0, 0, 0, 0, 0, 0, 0, 0.2, 0.5, 1, 0.5]);
    let tl14 = spinTheWheel(11, word14, [0, 0, 0, 0, 0, 0, 0, 0, 0.2, 0.5, 1]);
    let tl15 = spinTheWheel(11, word15, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2, 0.5]);
    let tl16 = spinTheWheel(11, word16, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2]);


    let masterTimeline = new TimelineMax({repeat: 20});
    masterTimeline.add(tl1, 0);
    masterTimeline.add(tl2, 0);
    masterTimeline.add(tl3, 0);
    masterTimeline.add(tl4, 0);
    masterTimeline.add(tl5, 0);
    masterTimeline.add(tl6, 0);
    masterTimeline.add(tl7, 0);
    masterTimeline.add(tl8, 0);
    masterTimeline.add(tl9, 0);
    masterTimeline.add(tl10, 0);
    masterTimeline.add(tl11, 0);
    masterTimeline.add(tl12, 0);
    masterTimeline.add(tl13, 0);
    masterTimeline.add(tl14, 0);
    masterTimeline.add(tl15, 0);
    masterTimeline.add(tl16, 0);
    masterTimeline.pause();
    wheel.mouseenter(function() {
        masterTimeline.pause();
    }).mouseleave(function() {
        masterTimeline.play();
    });
    
    $(".skill-down").click(function() {
        window.location.href = "#contact";
    });
        
    var Tawk_API=Tawk_API||{};
    // Tawk_API.onLoad = function() {
    //     console.log("hide done");
    //     $("#tawkchat-minified-box").css("display", "none");
    // };
    
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/5f58900bf0e7167d000eb404/default';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s1.setAttribute('id','tawkto');
    s0.parentNode.insertBefore(s1,s0);
    
    // setTimeout(function() {
    //     console.log(.attr("id"));
    //     console.log("done");
    // }, 10000);
    })();

    

    gsap.registerPlugin(ScrollTrigger);
    

    let gsapHero = gsap.timeline()
                    .from(".hero .greeting", {x: -80, opacity:0, duration: 1})
                    .from(".hero .name", {x: 80, opacity:0, duration: 1}, "<0.5")
                    .from(".hero .desc p", {y: 80, opacity:0, duration: 1}, "<")
                    .from(".hero .desc a", {y: 80, opacity:0, duration: 1}, "<")
                    .from(".hero .editor", {x: 80, opacity:0, duration: 1}, "<");

    let gsapAbout = gsap.timeline({scrollTrigger : {
        trigger : ".about",
        toggleActions : "restart none none none",
        start: "top center"
    }})
    .from(".about .title", {y: -80, opacity: 0, duration: 1})
    .from(".wrapper-about", {y: -80, opacity: 0, duration: 1}, "<")
    .from(".wrapper-about .right p", {x: 80, opacity: 0, duration: 1}, "<");

    let gsapProject = gsap.timeline({scrollTrigger : {
        trigger : ".project",
        toggleActions : "restart none none none",
        start: "top center"
    }})
    .from(".project .gallery", {y: -80, opacity: 0, duration: 1});

    
    let gsapSkill = gsap.timeline({scrollTrigger : {
        trigger : ".skill",
        toggleActions : "restart none none none",
        start: "top center"
    }})
    .from(".skill .container", {y: -180, opacity: 0, duration: 1});

    

    let gsapContact = gsap.timeline({scrollTrigger : {
        trigger : ".contact",
        toggleActions : "restart none none none",
        start: "top center"
    }})
    .from(".contact .container", {y: -180, opacity: 0, duration: 1});
                    
    
    
    $(window).on('scroll', function() {
        let bool = 1;

        
        
        if ( $(window).scrollTop() >= $('.skill').offset().top - ($(window).height() / 2)) {
            
            if(bool == 1) { masterTimeline.play(); bool = 0; }


        } 

        if ( $(window).scrollTop() >= $('.about').offset().top + 200 - ($(window).height() / 2) && $(window).scrollTop() <= $('.about').offset().top + 300 - ($(window).height() / 2)) {
            
            $(".wrapper-about .left .card").addClass("act");
            $(".wrapper-about .left .card img").addClass("act-img");
        } else {
            $(".wrapper-about .left .card").removeClass("act");
            $(".wrapper-about .left .card img").removeClass("act-img");
        }
        
        if ( $(window).scrollTop() >= $('.contact').offset().top  - ($(window).height() / 2)) {
            
            // if($("#tawkchat-minified-box")) {
            //     $("#tawkchat-minified-box").hide();
            // }

        }
      });

      Tawk_API.hideWidget();


});


