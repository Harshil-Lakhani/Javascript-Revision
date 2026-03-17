const url = `https://opentdb.com/api.php?amount=10&category=20&difficulty=medium&type=multiple`
const q = document.querySelector('#q')
const a = document.querySelector('#a')

window.addEventListener("load", async () => {
    const result = await fetch(url)
    const response = await result.json()
    q.innerHTML += response.results[0].question
    a.innerHTML += response.results[0].correct_answer
})