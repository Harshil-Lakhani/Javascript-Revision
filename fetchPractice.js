const url = `https://www.omdbapi.com/?t=interstellar&apikey=19824723`
const para = document.querySelector("#data")

const fun = async () => {
    console.log("getting data....");
    const result = await fetch(url)
    let data = await result.json()
    para.innerText = data.Title  
    
}
const btn=document.querySelector("#btn").addEventListener("click",()=>{
    fun()
})

