// injector.js
function injectScript(file, node) {
    var th = document.getElementsByTagName(node)[0];
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', file);
    th.appendChild(s);
    console.log(browser.extension.getURL('/main.js'))
}

injectScript(browser.extension.getURL('/main.js'), 'body');