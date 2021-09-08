chrome.webRequest.onBeforeRequest.addListener((details) => {
    console.log(details)
    return {
        cancel: false
    }
}, {
    // urls: /^(file:\/\/.+)|(https?|ftp|\*):\/\/(\*|\*\.([^\/*]+)|([^\/*]+))\/?/g
    urls: ['<all_urls>']
})