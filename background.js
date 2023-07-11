const filter = {
    url: [
        {
            urlMatches: 'https://www.youtube.com/',
            pathContains: 'shorts'
        }
    ]
}

chrome.webNavigation.onHistoryStateUpdated.addListener((e) => {
    console.dir(e)
    const newURL = e.url.replace('shorts', 'watch')

    chrome.tabs.update(e.tabId,{url: newURL})
     
},filter)


chrome.runtime.onMessage.addListener((request) => {
    if(request.log){
        console.log(request.log)
    }

    if(request.dir){
        console.dir(request.dir)
    }

    if(request.table){
        console.table(request.table)
    }
})