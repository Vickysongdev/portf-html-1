// const  navbar = document.querySelector(".navbar");
// const  navbarOffsettop = navbar.offsetTop;
//  const  sections = document.querySelectorAll("section");
//  const  navbarlinks = document.querySelectorAll(".navbar-link")
// const progress = document.querySelector('.progress-bars-wrapper');
// const progressBarpercents =[97,89,85,87,80,70]

// window.addEventListener("scroll",() => {
//     if (window.pageYOffset >= navbarOffsetTop){
//         navbar.classList.add("sticky");
//     }else{
//         navbar.classList.remove("sticky");
//     }

//     section.forEach((section , i) => {
//         if (window.pageYOffset >= section.OffsetTop -10){
//             navbarlinks.forEach(navbarlink => {
//                 navbarlink.classList.remove("change");
//             })
//             navbarlinks[i].classList.add("change");
//         }
//     })
//     if (window.pageYOffset + window.innerHeight>= progress.offsetTop){
//         document.querySelectorAll('.progress-percent').forEach((el,i)
//         =>{
//             el.style.width = `${progressBarpercents[i]}%`;
//         })

//     }
// });

// window.addEventListener("scroll", () =>{
//  mainFn();
// });

// const mainFn = () => {
//     window.addEventListener("scroll",() => {
//         if (window.pageYOffset >= navbarOffsetTop){
//             navbar.classList.add("sticky");
//         }else{
//             navbar.classList.remove("sticky");
//         }
    
//         section.forEach((section , i) => {
//             if (window.pageYOffset >= section.OffsetTop -10){
//                 navbarlinks.forEach(navbarlink => {
//                     navbarlink.classList.remove("change");
//                 })
//                 navbarlinks[i].classList.add("change");
//             }
//         })
//         if (window.pageYOffset + window.innerHeight>= progress.offsetTop){
//             document.querySelectorAll('.progress-percent')((el,i)
//             =>{

            
//                 el.style.width = `${progressBarpercents[i]}%`;
//             });
    
//         }
//     });
//     }

//     mainFn()

//     // window.addEventListener('resize', () => {
//     //     window.location.reload();
//     // })

