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
                    