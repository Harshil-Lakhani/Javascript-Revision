function grab_1st_thing() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            gotFirstThing = true
            if (gotFirstThing) {
                resolve("yes!! got 1st thing");
            }
            else {
                reject("could not find 1st it")
            }
        }, 2000)
    })
}
function grab_2nd_thing() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (gotFirstThing === true) {
                gotSecondThing = false
                if (gotSecondThing) {
                    resolve("yes!! got 2nd thing");
                }
                 else {
                reject("could not find 2nd it")
            }
            }
            else {
                reject("could not find 2nd it")
            }

        }, 2000)
    })
}
function grab_3rd_thing() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (gotSecondThing === true) {
                gotThirdThing = false
                if (gotThirdThing) {
                    resolve("yes!! got 3rd thing");
                }
                else {
                reject("could not find 3rd it")
            }
            }
            else {
                reject("could not find 3rd it")
            }

        }, 2000)
    })
}
async function findThing(){
    try {
        res = await grab_1st_thing()
        console.log(res);
        res = await grab_2nd_thing()
        console.log(res);
        res = await grab_3rd_thing()
        console.log(res);
    }
    catch(err) {
        console.log(err);
    }
    finally{
        console.log("Operation ended");
    }
}
findThing()
