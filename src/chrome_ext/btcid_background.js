
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) 
{
    console.log(changeInfo.status);
    if (changeInfo.status == "complete")
    {
        chrome.tabs.sendMessage(tabId, {msg_type: "request_btcid_url"}, function(response) 
        {
            if (response.btcid_url.length > 0)
            {
                // set the icon to the red eye
                chrome.browserAction.setIcon({path:"keyhole.jpg", tabId: tabId});
                chrome.browserAction.setTitle({tabId: tabId, title:"This site accepts BitcoinIdentity login!"});
            }
            else
            {
                // set the icon to they b&w eye
                chrome.browserAction.setIcon({path:"keyhole.off.jpg", tabId: tabId});
                chrome.browserAction.setTitle({tabId: tabId, title:"Site does not accept BitcoinIdentity login"});
            }

        });
        
    }
});