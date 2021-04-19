document.addEventListener("DOMContentLoaded", () => {
    
    let slideIndex= 1;
    slideShow(slideIndex);
        document.getElementById("prev").addEventListener("click", sliderprev);
        document.getElementById("next").addEventListener("click", slidefor);
       

        function sliderprev(){
            slideShow(slideIndex = slideIndex - 1)
        }
        function slidefor() {
            slideShow(slideIndex = slideIndex + 1)
        }
      
        
        function slideShow(n) {
        
            let slides= document.getElementsByClassName("slides");
            if (n > slides.length) {slideIndex = 1}
            if (n < 1) {slideIndex = slides.length}
            for (let i = 0; i <slides.length; i++)
            {
                slides[i].style.display = "none";
            }
            slides[slideIndex- 1].style.display = "block";

        }
})
