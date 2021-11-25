
//ex1

/*const run = () => {

    let first = Number(document.getElementById("min-num").value)
    let last = Number(document.getElementById("max-num").value)
    getEvenNum(first, last)


        .then((num) => {
            document.body.style.background = "green"
            console.log(num)
        })
        .catch((num) => {
            document.body.style.background = "red"
            console.log(num)
        })
}

const getEvenNum = (min, max) => {
    const myPromise = new Promise((resolve, reject) => {

        let rundomNumber = Math.floor(Math.random() * (max - min + 1)) + min

        if (rundomNumber % 10 === 7 || rundomNumber % 7 === 0) {
            resolve(rundomNumber)
        } else {
            reject(rundomNumber)
        }
    })
    return myPromise
}*/


//ex2
/*const run = () => {
    
    let first = Number(document.getElementById("min-num").value)
    let last = Number(document.getElementById("max-num").value)
    getEvenNum(first, last)


        .then((num) => {
            document.body.style.background = "green"
            console.log(num)
        })
        .catch((num) => {
            document.body.style.background = "red"
            console.log(num)
        })
}



const getEvenNum = (min, max) => {
    const myPromise = new Promise((resolve, reject) => {
        let rundomNumber = Math.floor(Math.random() * (max - min + 1)) + min
        

        for (let i = 2; i < rundomNumber; i++) {
            if (rundomNumber % i === 0) {
                reject(rundomNumber)
            }else{
                resolve(rundomNumber)

            }
        }
     
    })
    return myPromise
}*/




