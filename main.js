$(document).on("ready", function()
{
    $("#installButton").on("click", function()
    {
        var url = $("#url").val();
        var plugin = getParameterByName("plugin");
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