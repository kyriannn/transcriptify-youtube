const setHandlers = ()=>{
    

    document.body.addEventListener('load', ()=>{
        //check if current link is of youtube

        //else return error

    })

    find_captions.addEventListener('click', ()=>{
        

    })

    download_captions.addEventListener('click', ()=>{
        //check if download is successful

        //if not, return fail state

        //else return success state
    })
    
    download_location.addEventListener('input', ()=>{
        //on input

        //test if it is a valid file path

        //if not, return error
    })

    

}

const reportError = (e)=>{

};

browser.tabs
    .executeScript()
    .then(setHandlers)
    .catch(reportError);
