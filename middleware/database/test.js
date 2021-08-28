function a(callback) {
    console.log("Entering function a")
    setTimeout(() => {
            console.log("sleeping...")
            console.log("Finished function a")
            const val = ["This value is passed with the callback function"]
            callback(val)
        }, 3000
    )

}

function b(someValFromCallback, anotherCallback) {
    console.log("This is function b")
    console.log(someValFromCallback)
    const anotherVal = {"call": "back"}
    anotherCallback(anotherVal)
}

function c(anotherValFromCallback) {
    console.log("This is function c")
    console.log(anotherValFromCallback)
}
//
// console.log("starting test")
// a(c => {
//     b()
// })



function myFunc(param) {
    console.log(param())
}

// myFunc(x => {
//     return 123
//
// }


function one(callback) {
    const val = 1
    console.log(val)
    two(callback)
}

function two(callback) {
    const val = 2
    console.log(val)
    callback(val)
}

function three(callback) {
    const val = 3
    console.log(val)
    callback(val)
}

function four(callback) {
    const val = 4
    console.log(val)
    callback(val)
}

//one()

function func1(callback) {
    setTimeout(()=> {
        console.log("Timeout")}, 1000, callback => {
        //console.log(typeof callback)
        console.log("Inside")
        callback()
    })
    console.log("xxx")

}

function func2(callback) {
    console.log("hello")
    callback(["asd"])
}


//func1(()=> func2)
//console.log(func1(func2))
//console.log(module)