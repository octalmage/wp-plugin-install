$(document).on("ready", function()
{
    var plugin = getParameterByName("plugin");
    $("#pluginName").text(plugin);
    
    $("#installButton").on("click", function()
    {
        var url = $("#url").val();
        
        window.location.href = "http://" + url + "/wp-admin/plugin-install.php?tab=plugin-information&plugin=" + plugin;
    });
});

function getParameterByName(name) 
{
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}