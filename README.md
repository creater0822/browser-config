# Firefox config

## How to install
If you're on Windows:
1. Download the latest ADMX templates from: https://github.com/mozilla/policy-templates/releases
2. Place `mozilla.admx`, `mozilla.admx` and `en-US` folder in `%systemRoot%\PolicyDefinitions`
3. (*if not already done*) Install Firefox Developer Edition:
    * **Either** download from [Mozilla's website](https://www.mozilla.org/en-US/firefox/all/#product-desktop-developer) .
    * **Or** use Winget: `winget install -e --id Mozilla.Firefox.DeveloperEdition`
4. Extract everything from `enterprise_policy.zip` into `%programfiles%\Firefox Developer Edition\`, I've included a shortcut in the files btw.

## Credits:
- Narsil user.js: https://codeberg.org/Narsil/user.js
- Arkenfox user.js: https://github.com/arkenfox/user.js/
- Mozilla policy templates: https://github.com/mozilla/policy-templates
- userChromeCSS Elegantfox: https://github.com/ayushhroyy/elegantfox
- userChromeJS scripts: https://github.com/xiaoxiaoflood/firefox-scripts
- This GitHub post for fixing userChromeJS on Firefox 117+ https://github.com/xiaoxiaoflood/firefox-scripts/issues/265
- Firefox Home background: https://www.wallpaperflare.com/digital-digital-art-artwork-fantasy-art-drawing-painting-wallpaper-gjwkg