import { readFile, writeFile } from 'fs/promises'
// import util from 'util'
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)




// Via Async/Await

const start = async () => {
    try {
        const first = await readFile('./Content/first.txt', 'utf8')
        const second = await readFile('./Content/second.txt', 'utf8')
        await writeFile(
            './Content/result-mind-grenade.txt', 
            `This is awesome: ${first}, ${second}`,
            {flag: 'a'}
        )
        console.log(first, second)
    } 
    catch (error) {
        console.log(error)
    }
}

start()


// Via Promise


// const getText = (path) => {
    //     return new Promise((resolve, reject) => {
        //         readFile(path, 'utf8', (err, data) => {
            //             if (err) {
                //                 reject(err)
                //             } else {
                //                 resolve(data)
            //             }
        //         })
    //     })
// }

// getText('./Content/first.txt')
// .then(result => console.log(result))
// .catch(err => console.log(err))