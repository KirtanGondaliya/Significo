function homepageAnimation() {
    gsap.set(".slidesmarquee", { scale: 5 });
  
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".home",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  
    tl.to(
      ".video",
      {
        "--clip": "0%",
        ease: Power2.ease,
        duration: 2,
      },
      "a"
    )
      .to(
        ".slidesmarquee",
        {
          scale: 1,
          duration: 1.4,
          ease: Power2,
        },
        "a"
      )
      .to(
        ".lft",
        {
          xPercent: -20,
          stagger: 0.09,
          ease: Power4,
          duration:2
        },
        "b"
      )
      .to(
        ".rft",
        {
          xPercent: 17,
          stagger: 0.09,
          ease: Power4,
          duration:2
        },
        "b"
      );
  
      gsap.to(' .btmtext',{
          scrollTrigger:{
              trigger: ".home",
              start:"top 60%",
              end: "bottom 60%",
              scrub: true,
          },
          stagger:0.2,
          opacity:0
      })
  
      var clutter3=""
      document.querySelector('.heading-text')
      .textContent.split("")
      .forEach((e)=>{
          if(e === "")clutter3+=`<span>&nbsp;</span>`;
          else clutter3+=`<span>${e}</span>`;
      })
      document.querySelector(".heading-text").innerHTML=clutter3;
      
      gsap.set('.heading-text span',{opacity:0})
  
      tl.to(' .heading-text span',{
          duration: 2,
          opacity:1,
          stagger: 0.09,
          ease: Power4,
  
      },'a')
  
      
  }
  
  function RealSection3Animation() {
    gsap.to(".slide", {
      scrollTrigger: {
        trigger: ".real",
        start: "top 10%",
        end: "bottom bottom",
        scrub: true,
      },
      x: "-300%",
    });
    gsap.to(".images4 ", {
      scrollTrigger: {
        trigger: ".real",
        start: "bottom bottom",
        end: "bottom 40%",
        scrub: true,
      },
      opacity: 0,
    });
  }
  
  function Section2Animation(){
      
  var tl=gsap.timeline({
      scrollTrigger:{
          trigger:".leftpart",
          start:"top 30%",
          end:"bottom -90% ",
          scrub:true,
      },
  })
  tl.to('.card1',{
      backgroundColor:"black",
      transform:"scale(1.1)",
      ease:Power4,
      color:"white",
  
  })
  tl.to('.card2',{
      
      transform:"scale(1.1)",
      ease:Power4,
      backgroundColor:"black",
      color:"white",
  
  })
  tl.to('.card3',{
      
      transform:"scale(1.1)",
      ease:Power4,
      backgroundColor:"black",
      color:"white",
  
  })
  
  tl.to('.card4',{
  
      transform:"scale(1.1)",
      ease:Power4,
      backgroundColor:"black",
      color:"white",
   
  })
  }
  
  
  function Section4Animation(){
      
  document.querySelectorAll(".list").forEach((el) => {
      el.addEventListener("mousemove", (dets) => {
        gsap.to(el.childNodes[5], {
            opacity: 1,
            x:gsap.utils.mapRange(0,window.innerWidth,-200,200,dets.clientX),
            y:gsap.utils.mapRange(0,window.innerHeight,-100,100,dets.clientY),
          scale: 1,
          ease: Power4,
        });
    
        gsap.to(el.childNodes[7],{
            height:"100%",
            ease:Power4
        })
         
      });
    
      el.addEventListener("mouseleave", (dets) => {
        gsap.to(el.childNodes[5], {
          opacity: 0,
          scale: 0,
          ease: Power4,
        });
        gsap.to(".layer",{
            height:"0%",
            ease:Power4
        })
      });
    });
    
  }
  
  function Section5Animation(){
      
  var clutter="";
  
  document.querySelector(".textpara")
  .textContent.split("").forEach((e)=>{
      if(e==="") clutter+=`<span>&nbsp;</span>`;
      clutter+=`<span>${e}</span>`
  })
  document.querySelector(".textpara").innerHTML=clutter;
  
  gsap.to('.textpara span',{
      stagger:0.5,
      color:'blue',
      scrollTrigger:{
          trigger:".para",
          start:"top 190%",
          end:"bottom bottom",
          scrub:true
      },
      ease:Power4
  })
  
  
  var clutter2=""
  
  document.querySelector(".textpara2")
  .textContent.split("").forEach((e)=>{
      if(e==="") clutter2+=`<span>&nbsp;</span>`;
      clutter2+=`<span>${e}</span>`
  })
  document.querySelector(".textpara2").innerHTML=clutter2;
  gsap.to('.textpara2 span',{
      stagger:0.5,
      color:'#704B98',
      scrollTrigger:{
          trigger:".para",
          start:"top top",
          end:"bottom bottom",
          scrub:true
      },
      ease:Power4
  })
  
  }
  
  function Locomotive(){
      (function () {
          const locomotiveScroll = new LocomotiveScroll();
      })();
      
  }
  
  function capsuleAnimation(){
      gsap.to(".capsule2",{
          scrollTrigger: {
              trigger: ".capsules",
              start: "top 100%",
              end: "bottom bottom",
              scrub: true,
          },
          y:0,
          ease: Power4,
      })
  }
  
  function Section8Animation(){
      gsap.to('.Significo .a',{
          scrollTrigger: {
              trigger: ".lastsection",
              start: "top 50%",
              scrub: true,
              end: "bottom bottom",
          },
          stagger:0.1,
          opacity:1,
          transform:"translateY(0%)",
          ease: Power4,
      })
      
  }
  
  function ThemeAnimation(){
      
  document.querySelectorAll(".section")
  .forEach((e)=>{
  
      ScrollTrigger.create({
          trigger:e,
          start:"top 50%",
          end:"bottom 50%",
          onEnter:function(){
              document.body.setAttribute("theme",e.dataset.color)
          },
          onEnterBack:function(){
              document.body.setAttribute("theme",e.dataset.color)
          }
      })
  
  })
  
  }
  
  Locomotive()
  homepageAnimation();
  RealSection3Animation();
  Section4Animation()
  Section5Animation()
  capsuleAnimation()
  Section8Animation()
  ThemeAnimation()
  Section2Animation()
  
  
  
  
  