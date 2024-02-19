# Chromium-based config
This folder is my personal Chromium-based browser configutation, which absolutely isn't set-up to be the most secure thing in the world. 

**In fact:** This config exists as my "unsafe" medium to browse the internet, when my Firefox is just too secure for loading any website that's too bloated with non-free software.

## Thorium - The best browser *(if you know what you're up to)*
1. Download/install from GitHub: https://github.com/Alex313031/thorium
    - Best to worst: AVX2 > AVX > SSE3, check if your CPU supports: https://en.wikipedia.org/wiki/Advanced_Vector_Extensions#CPUs_with_AVX2
2. Run `chromium.reg` to apply my settings. *(Make sure to audit my config in your favorite text editor!)*
3. Some browser settings that you'll have to go over manually.
4. Set chrome://flags
    | Flag                                          |    Switch   |
    | :---                                          |   :-----:   |
    | force-dark-mode                               |   Enabled   |
    | enable-exclusive-audio                        |   Enabled   |
    | smooth-scrolling                              |   Enabled   |
    | wallet-service-use-sandbox                    |   Disabled  |
    | webxr-incubations                             |   Disabled  |
    | webxr-internals                               |   Disabled  |
    | webxr-runtime                                 |  No Runtime |
    | block-insecure-private-network-requests       |   Enabled   |
    | enable-parallel-downloading                   |   Enabled   |
    | tab-hover-card-images                         |   Enabled   |
    | close-window-with-last-tab                    |    Never    |
    | allow-insecure-downloads                      |   Enabled   |
    | enable-tab-audio-muting                       |   Enabled   |
    | camera-mic-preview                            |   Enabled   |
    | one-time-permission                           |   Enabled   |
    | allow-insecure-localhost                      |   Enabled   |
    | scrollable-tabstrip                           |   Enabled   |
5. (optional) Download LibRedirect from this page: https://libredirect.github.io/download_chromium.html

## Brave - Chromium with bloatware
1. Download the latest ADMX templates from: https://brave-browser-downloads.s3.brave.com/latest/policy_templates.zip
2. Place `brave.admx` and `en-US` folder in `%systemRoot%\PolicyDefinitions`
3. Run `brave.reg` to apply my settings. *(Make sure to audit my config in your favorite text editor!)*
4. Some browser settings that you'll have to go over manually.
5. Set brave://flags
    | Flag                                          |    Switch   | 
    | :---                                          |   :-----:   |
    | force-dark-mode                               |   Enabled   |
    | enable-exclusive-audio                        |   Enabled   |
    | smooth-scrolling                              |   Enabled   |
    | block-insecure-private-network-requests       |   Enabled   |
    | enable-parallel-downloading                   |   Enabled   |
    | tab-hover-card-images                         |   Enabled   |
6. (optional) Download LibRedirect from this page: https://libredirect.github.io/download_chromium.html

## Which browser to use?
*(At the time of writing)* Thorium is superior to Brave in any way 'yet'. The one weakness of Thorium in its current state is the small amount of contributors, meaning that the browser could one day cease to receive updates.

Use Brave if Chromium-based is going to be your main browser **and** you want something that "just works and keeps working" for years after initial set-up. Else, use Thorium.