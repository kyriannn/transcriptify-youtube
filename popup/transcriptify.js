const setHandlers = ()=>{
    document.addEventListener('click', (e)=>{
        function onDownload(){
            e.preventDefault();

            //check if download is successful

            //if not, return fail state

            //else return success state



        }

        function onInput(){
            //validate & sanitize input


            //perhaps test if the input is of a legitimate file path? if possible, not sure



        }

        function onLoad(){
            //check if current link is of youtube

        }

        function onSearch(){
            //check if captions are present for the requested youtube vid
            //if not, error
            


            //else change state to download and give a file location

        }

    })

}

const reportError = ()=>{

};

browser.tabs
    .executeScript()
    .then(setHandlers)
    .catch(reportError);
