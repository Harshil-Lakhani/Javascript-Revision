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
                gotSecondThing = true
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
grab_1st_thing()
    .then((data) => {
        console.log(data);
        return grab_2nd_thing();
    })
    
    .then((data2) => {
        console.log(data2);
        return grab_3rd_thing();
    })
    
    .then((data3) => {
        console.log(data3);

    })
    .catch((data) => {
        console.log(data);
    })
    .finally(()=>{
        console.log("Operation ended");
    })
 