$(document).on("ready", function()
{
    //Get the plugin slug.
    var plugin = getParameterByName("plugin");
    
    //Update the page with the plugin name.
    $("#pluginName").text(plugin);
    
    $("#installButton").on("click", function()
    {
        var url = $("#url").val();
        
        window.location.href = "http://" + url + "/wp-admin/plugin-install.php?tab=plugin-information&plugin=" + plugin;
    });
});

//From http://stackoverflow.com/a/901144.
function getParameterByName(name) 
{
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}