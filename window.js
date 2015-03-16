//javascript


// tes1.htmlのJavaScript
var value=0;
function msg () {
	alert(value);
}
function openWnd () {
	wnd = window.open("windowdata02.html?value=" + value);
}

// tes2.htmlのJavaScript

window.onload = function onLoad() {
    param = GetQueryString();
    target = document.getElementById("param");
    target.innerHTML = param["value"];

}

function GetQueryString() {
    if (1 < document.location.search.length) {
        // 最初の1文字 (?記号) を除いた文字列を取得する
        var query = document.location.search.substring(1);

        // クエリの区切り記号 (&) で文字列を配列に分割する
        var parameters = query.split('&');

        console.log("1:" + parameters);

        var result = new Object();
        for (var i = 0; i < parameters.length; i++) {
            // パラメータ名とパラメータ値に分割する
            var element = parameters[i].split('=');

            console.log("2:" + element);

            var paramName = decodeURIComponent(element[0]);
            var paramValue = decodeURIComponent(element[1]);

            // パラメータ名をキーとして連想配列に追加する
            result[paramName] = decodeURIComponent(paramValue);
        }
        return result;
    }
    return null;
}