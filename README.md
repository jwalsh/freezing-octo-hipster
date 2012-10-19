freezing-octo-hipster
=====================

Its not completely wired up, but it doesnt matter, the issue still shows itself here.  You will need to update the baseUrl in static/js/generated/global.js

But if you watch, it will try to load the script based on "data-main="generated/modernWeb-home-min"" and will strip the "generated/" and just try to load modernWeb-home-min from the root of baseUrl

Installation

- npm install 
- grunt 
