// iovox
window.iovoxApi= document.createElement("script");
iovoxApi.src = "https://cdn.iovox.com/rest/v1/dni.js"


window.iovoxApiConfig = {

    accessKey:"77acee60a413aac3aa203f9a7859b4b3e50a07f1",
    actionKey: "89479a09d55c162bd76746ff2dcbbb85213e31fe",
    globalNumberFormat: "xxx-xxx-xxxx",
    sea: true,
    manualNumberUpdate:false

}

//dynamic config will be different based on where the dynamic numbers will be

window.iovoxApiConfig.requestLinks = {

    items:[
        {linkId:"__ROTATING__", selector:"[phone-selector]", poolId:"reverbPool", dialString: "1"}

    ]

};

document.getElementsByTagName("head")[0].appendChild(iovoxApi);