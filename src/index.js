const init = () => {
    const form = document.querySelector("form")
   
  const data= form.addEventListener('submit', (e)=> {
        e.preventDefault()
        let input = e.target.children[1].value
        const section=document.getElementById("movieDetails")
        fetch('http://localhost:3000/movies')
           .then(response=>response.json())
            .then(json=>{
                json.find(movieObj=>{
                    if(movieObj.id==input)
                    {
                        section.querySelector("h4").textContent=movieObj.title
                        section.querySelector("p").textContent=movieObj.summary
                    }
                })
            })
    })
 
}

document.addEventListener('DOMContentLoaded', init);