//your JS code here. If required.
function displayBrowserInfo() {
            var browserName = navigator.appName;
            var version = navigator.appVersion;

            var browserInfo = "You are using " + browserName + " version " + version;

            // Display browser information in the 'browser-info' div
            document.getElementById('browser-info').textContent = browserInfo;
        }
displayBrowserInfo();
