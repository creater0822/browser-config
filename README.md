# Browser config

## Installing Firefox config
If you're on Windows:
1. Download the latest ADMX templates from: https://github.com/mozilla/policy-templates/releases
2. Place `mozilla.admx`, `mozilla.admx` and `en-US` folder in `%systemRoot%\PolicyDefinitions`
3. (*if not already done*) Install Firefox Developer Edition:
    * **Either** download from [Mozilla's website](https://www.mozilla.org/en-US/firefox/all/#product-desktop-developer) .
    * **Or** use Winget: `winget install -e --id Mozilla.Firefox.DeveloperEdition`
4. Extract everything from `enterprise_policy.zip` into `%programfiles%\Firefox Developer Edition\`, I've included a shortcut in the files btw.

## Firefox profiles
Highly recommended to use is **Profile Switcher for Firefox**: A tool that allows seamless profile switching without the need of [about:profiles](about:profiles). In order to make the extension work, an additional application is needed. Choose one of two methods:
- [Recommended] Install from Winget: `winget install -e --id nulldev.ProfileSwitcherforFirefox`
- Download the latest x64.msi from: https://github.com/null-dev/firefox-profile-switcher-connector/releases

Then from within any Firefox profile > Extension icon > Manage profiles > Cog icon, check 'Dark mode' and 'Apply in all profiles'.

### ffProfile Arkenfox
**How to install:**
1. Download the latest release from: https://github.com/arkenfox/user.js/releases/
2. Navigate to [about:profiles](about:profiles) in the URL bar, press "Create a New Profile" and name it *ffProfile_Arkenfox* .
3. On the new profile entry, press "Open Folder" on **Root Directory** .
4. Extract everything from `ffProfile_Arkenfox.zip`, also extract `update.bat` and `prefsCleaner.bat` from the `user.js-[latest version].zip` .
5. Run `update.bat` as Administrator, then select 'Y' (yes) to also run the **prefsCleaner**.

**Included in `prefs.js`:**
- (Temporary) My preferred UI preset.

**Included in `user-overrides.js`:**
- Re-enabled URL-bar live search suggestions.
- Starting page and new tabs set to `about:home`
- Disabled Sanitize On Shutdown
- Disabled websites from requesting Geo and XR access
- Disabled RFP (ResistFingerPrinting)
- Don't disable WebGL (pointless to do when not using RFP)
- Enabled DRM-content
- Disable raw TCP socket support (mozTCPSocket)
- Don't monitor OS online/offline connection state
- Disallow NTLMv1 unless through HTTPS
- Some anti-breakage settings to Arkenfox user.js
- Enabled Encrypted client Hello
- Disabled vulnerable ciphers
- UserChromeCSS settings

**Included extensions:**
- CookiesAutoDelete (doesn't work that great with Multi-Account Container)
- Canvas Blocker (compensate for disabling RFP)
- LibRedirect (redirects popular webservices to alternative front-ends)
- Skip Redirects (skips redirect-URLs)

**Other features**
- Search Engine preset: Startpage (as default), RSWiki, Choco, SearXNG NicFab

### ffProfile Weakfox:
**How to install:**
1. Navigate to [about:profiles](about:profiles) in the URL bar, press "Create a New Profile" and name it *ffProfile_Weakfox* .
2. On the new profile entry, press "Open Folder" on **Root Directory** .
3. Extract everything from `ffProfile_Weakfox.zip`, that's it.

**Features:**
- UserChromeCSS
- Search Engine preset: Same as ffProfile Arkenfox

## Credits:
- Narsil user.js: https://codeberg.org/Narsil/user.js
- Arkenfox user.js: https://github.com/arkenfox/user.js/
- Mozilla policy templates: https://github.com/mozilla/policy-templates
- userChromeCSS Elegantfox: https://github.com/ayushhroyy/elegantfox
- userChromeJS scripts: https://github.com/xiaoxiaoflood/firefox-scripts
- This GitHub post for fixing userChromeJS on Firefox 117+ https://github.com/xiaoxiaoflood/firefox-scripts/issues/265
- Firefox Home background: https://www.wallpaperflare.com/digital-digital-art-artwork-fantasy-art-drawing-painting-wallpaper-gjwkg