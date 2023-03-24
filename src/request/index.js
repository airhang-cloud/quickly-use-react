export function fetchCountStep(){
    return new Promise((resolve, reject) => {
        resolve({
            data: parseInt(Math.random(1,10)*10),
            code: 200
        })
        reject({ error: true})
    })
}


export function fetchDelCountStep(){
    return new Promise((resolve, reject) => {
        resolve({
            data: -(parseInt(Math.random(1,10)*10)),
            code: 200
        })
        reject({ error: true})
    })
}