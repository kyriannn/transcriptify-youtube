const setHandlers = ()=>{
    document.addEventListener('click', (e)=>{
        function onDownload(){

        }

        function onInput(){

        }

        function onLoad(){

        }

        function onSearch(){
            
        }

    })

}

const reportError = ()=>{

};

browser.tabs
    .executeScript()
    .then(setHandlers)
    .catch(reportError);
