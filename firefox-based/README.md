# Librewolf config
This folder is my personal hardened Librewolf configutation, which is designed only for myself and a handful of people that I personally know of.

## Enterprise policy & auto-config
If you're on Windows:
1. Download the latest ADMX templates from: https://github.com/mozilla/policy-templates/releases
2. Place `mozilla.admx`, `mozilla.admx` and `en-US` folder in `%systemRoot%\PolicyDefinitions`
3. (*if not already done*) Install Librewolf:
    * Download from the [official website](https://librewolf.net/installation/) if on Windows and check the option for the updater from the setup.
4. Extract everything from `enterprise_policy.zip` into `%programfiles%\Librewolf\`, I've included a shortcut in the files btw.

## <s>Firefox profiles</s>
The extension doesn't work in Librewolf

<s>Highly recommended to use is **Profile Switcher for Firefox**: A tool that allows seamless profile switching without the need of [about:profiles](about:profiles). In order to make the extension work, an additional application is needed. Choose one of two methods:
- [Recommended] Install from Winget: `winget install -e --id nulldev.ProfileSwitcherforFirefox`
- Download the latest x64.msi from: https://github.com/null-dev/firefox-profile-switcher-connector/releases

Then from within any Firefox profile > Extension icon > Manage profiles > Cog icon, check 'Dark mode' and 'Apply in all profiles'.</s>

## Credits:
- Narsil user.js: https://codeberg.org/Narsil/user.js
- Arkenfox user.js: https://github.com/arkenfox/user.js/
- Mozilla policy templates: https://github.com/mozilla/policy-templates
- userChromeCSS Elegantfox: https://github.com/ayushhroyy/elegantfox
- userChromeJS scripts: https://github.com/xiaoxiaoflood/firefox-scripts
- This GitHub post for fixing userChromeJS on Firefox 117+ https://github.com/xiaoxiaoflood/firefox-scripts/issues/265
- Firefox Home background: https://www.wallpaperflare.com/digital-digital-art-artwork-fantasy-art-drawing-painting-wallpaper-gjwkg