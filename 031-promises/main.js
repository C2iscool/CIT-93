function fun1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('BAD DATA')
        }, 100)
    })
}

function fun2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('🦀')
        }, 100)
    })
}

function onSuccess(data) {
    console.log(`Success: ${data}`)
}

function onError(errorCode) {
    console.log(`ERROR ${errorCode}`)
}

function onFinally() {
    console.log('THE FINAL COUNTDOWN')
}

fun1()
    .then(fun2)
    .then(onSuccess)
    .catch(onError)
    .finally(onFinally)
