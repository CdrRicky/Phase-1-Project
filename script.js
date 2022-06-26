document.addEventListener('DOMContentLoaded', (e)=>{
  const apiKey = 'f77a6c59d4mshc9d3fcb6a124973p1b60a8jsna180b52e1166'
})


fetch(url)
            .then((response) => response.json())
            .then((response) => {
                const articles = JSON.parse(response.contents).articles;
                const cards = articles
                    .filter(article => article.content !== null && article.urlToImage !== null)
                    .map(article => {
                        return `


                        // <div class="card my-3" style="width: 16rem;">
                        //     <div style="height: 150;">
                        //         <a href="${article.url}" target='_blank'>
                        //             <img src="${article.urlToImage}" class="card-img-top" style="width: 100%;">
                        //         </a>
                        //     </div>
                        //     <div class="card-body d-flex flex-column justify-content-between">
                        //         <a href="${article.url}" target='_blank'><h5 class="card-title">${article.title}</h5></a>
                        //         <p class="card-text">${stripHtml(article.content)}</p>
                                
                        //     </div>
                        // </div>`
                    })
                    let searchBtn = document.querySelector('#search-btn');
                    let searchBar = document.querySelector('.search-bar-container');
                    let formBtn = document.querySelector('#login-btn');
                    let loginForm = document.querySelector('.login-form-container');
                    let formClose = document.querySelector('#form-close');
                    let menu = document.querySelector('#menu-bar');
                    let navbar = document.querySelector('.navbar');
                    let videoBtn = document.querySelectorAll('.vid-btn');
                    
                    
                    window.onscroll = () =>{
                        searchBtn.classList.remove('fa-times');
                        searchBar.classList.remove('active');
                        menu.classList.remove('fa-times');
                        navbar.classList.remove('active');
                        loginForm.classList.remove('active');
                    }
                    
                    
                    menu.addEventListener('click', () =>{
                        menu.classList.toggle('fa-times');
                        navbar.classList.toggle('active');
                    });
                    
                    
                    searchBtn.addEventListener('click', () =>{
                        searchBtn.classList.toggle('fa-times');
                        searchBar.classList.toggle('active');
                    });
                    
                    
                    formBtn.addEventListener('click', () =>{
                        loginForm.classList.add('active');
                    });
                    formClose.addEventListener('click', () =>{
                      loginForm.classList.remove('active');
                  });
                  
                  
                  videoBtn.forEach(btn =>{
                      btn.addEventListener('click', ()=>{
                          document.querySelector('.controls .active').classList.remove('active');
                          btn.classList.add('active');
                          let src = btn.getAttribute('data-src');
                          document.querySelector('#video-slider').src = src;
                      });
                  });
                  
                  var swiper = new Swiper(".review-slider", {
                      spaceBetween: 20,
                      loop:true,
                      autoplay: {
                          delay: 2500,
                          disableOnInteraction: false,
                      },
                      breakpoints: {
                          640: {
                            slidesPerView: 1,
                          },
                          768: {
                            slidesPerView: 2,
                          },
                          1024: {
                            slidesPerView: 3,
                          },
                      },
                  });
                  
                                               