console.log("Hi there")

document.getElementById('messageButton').onclick = () => {
    chrome.runtime.sendMessage({ message: 'Hello' })
}


const service = {
    log(string) {
        chrome.runtime.sendMessage({ log: string })
    },
    dir(string) {
        chrome.runtime.sendMessage({ dir: string })
    },
    table(string) {
        chrome.runtime.sendMessage({ table: string })
    }
}

service.log("Hello !!")

service.table(['hii', 'there', 'ever'])

service.dir({ test: 'testing', number: 3 })
