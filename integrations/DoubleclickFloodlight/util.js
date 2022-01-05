const eventValidity = (eventName , config) => {
    // first find the index
    /**  config.eventsList = [
        {
            eventName: “value”,
            floodlightActivityTag: “value”,
            floodlightGroupTag: “value”,
            isSalesTag: true/false,
            fields: [ { from: “”, to: “” }, { …. } ]
        }
    ]     */
    if(config.eventsList && config.eventsList.length > 0){
        config.eventsList.forEach(event => {
            if(event.eventName && eventName === event.eventName.trim().toLowerCase()){
                // now if event is correct we can get relevant details
                
            }
        });
    }
};
export eventValidity;