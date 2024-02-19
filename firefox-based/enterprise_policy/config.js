// skip 1st line
// **********************************************************************************
// Autoconfig | Firefox desktop & LibreWolf
// **********************************************************************************
//
// Author    : Cyfire    : 
//
// Based on  : Narsil    : https://git.nixnet.services/Narsil
//             arkenfox  : https://github.com/arkenfox/user.js
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// START: internal custom pref to test for syntax error
// >>>>>>>>>>>>>>>>>>>>>
//
// Disable about:config warning
lockPref("browser.aboutConfig.showWarning", false);
// Disable default browser check
lockPref("browser.shell.checkDefaultBrowser", false);
lockPref("app.update.suppressPrompts", true); // Disable update notifications
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// STARTUP
// >>>>>>>>>>>>>>>>>>>>>
// Default UI prefs (may be optional)
defaultPref("browser.uiCustomization.state", "{\"placements\":{\"widget-overflow-fixed-list\":[],\"unified-extensions-area\":[\"_a6c4a591-f1b2-4f03-b3ff-767e5bedf4e7_-browser-action\",\"_f209234a-76f0-4735-9920-eb62507a54cd_-browser-action\",\"enhancerforyoutube_maximerf_addons_mozilla_org-browser-action\",\"treestyletab_piro_sakura_ne_jp-browser-action\",\"keepassxc-browser_keepassxc_org-browser-action\",\"_0981817c-71b3-4853-a801-481c90af2e8e_-browser-action\",\"_6833a9cb-d329-4d96-a062-76b1b663cd2c_-browser-action\",\"_cb31ec5d-c49a-4e5a-b240-16c767444f62_-browser-action\",\"idcac-pub_guus_ninja-browser-action\"],\"nav-bar\":[\"back-button\",\"forward-button\",\"stop-reload-button\",\"addon_darkreader_org-browser-action\",\"customizableui-special-spring1\",\"7esoorv3_alefvanoon_anonaddy_me-browser-action\",\"pagehacker-nico_nc-browser-action\",\"_6ac85730-7d0f-4de0-b3fa-21142dd85326_-browser-action\",\"developer-button\",\"urlbar-container\",\"downloads-button\",\"_ddc359d1-844a-42a7-9aa1-88a850a938a8_-browser-action\",\"_63d150c4-394c-4275-bc32-c464e76a891c_-browser-action\",\"_66d854c2-fd1b-4857-bd0a-7d220e4834da_-browser-action\",\"simple-translate_sienori-browser-action\",\"customizableui-special-spring2\",\"save-to-pocket-button\",\"ublock0_raymondhill_net-browser-action\",\"_ublacklist-browser-action\",\"fxa-toolbar-menu-button\",\"jid1-y3wfe7td45awdw_jetpack-browser-action\",\"_9350bc42-47fb-4598-ae0f-825e3dd9ceba_-browser-action\",\"cookieautodelete_kennydo_com-browser-action\",\"skipredirect_sblask-browser-action\",\"_aecec67f-0d10-4fa7-b7c7-609a2db280cf_-browser-action\",\"smart-referer_meh_paranoid_pk-browser-action\",\"canvasblocker_kkapsner_de-browser-action\",\"unified-extensions-button\",\"eom-button\",\"userChromebtnMenu\"],\"toolbar-menubar\":[\"menubar-items\"],\"TabsToolbar\":[\"firefox-view-button\",\"sidebar-button\",\"save-page-button\",\"tabbrowser-tabs\",\"new-tab-button\",\"alltabs-button\",\"_c607c8df-14a7-4f28-894f-29e8722976af_-browser-action\",\"_testpilot-containers-browser-action\",\"profile-switcher-ff_nd_ax-browser-action\"],\"PersonalToolbar\":[\"personal-bookmarks\",\"_2e5ff8c8-32fe-46d0-9fc8-6b8986621f3c_-browser-action\",\"zoom-controls\",\"_d07ccf11-c0cd-4938-a265-2a4d6ad01189_-browser-action\"],\"status-bar\":[\"status-text\"]},\"seen\":[\"developer-button\",\"profiler-button\",\"jid1-y3wfe7td45awdw_jetpack-browser-action\",\"_63d150c4-394c-4275-bc32-c464e76a891c_-browser-action\",\"_9350bc42-47fb-4598-ae0f-825e3dd9ceba_-browser-action\",\"_f209234a-76f0-4735-9920-eb62507a54cd_-browser-action\",\"7esoorv3_alefvanoon_anonaddy_me-browser-action\",\"_testpilot-containers-browser-action\",\"enhancerforyoutube_maximerf_addons_mozilla_org-browser-action\",\"addon_darkreader_org-browser-action\",\"canvasblocker_kkapsner_de-browser-action\",\"treestyletab_piro_sakura_ne_jp-browser-action\",\"pagehacker-nico_nc-browser-action\",\"keepassxc-browser_keepassxc_org-browser-action\",\"smart-referer_meh_paranoid_pk-browser-action\",\"_2e5ff8c8-32fe-46d0-9fc8-6b8986621f3c_-browser-action\",\"_66d854c2-fd1b-4857-bd0a-7d220e4834da_-browser-action\",\"_6ac85730-7d0f-4de0-b3fa-21142dd85326_-browser-action\",\"_a6c4a591-f1b2-4f03-b3ff-767e5bedf4e7_-browser-action\",\"_aecec67f-0d10-4fa7-b7c7-609a2db280cf_-browser-action\",\"_ddc359d1-844a-42a7-9aa1-88a850a938a8_-browser-action\",\"_c607c8df-14a7-4f28-894f-29e8722976af_-browser-action\",\"_d07ccf11-c0cd-4938-a265-2a4d6ad01189_-browser-action\",\"ublock0_raymondhill_net-browser-action\",\"_0981817c-71b3-4853-a801-481c90af2e8e_-browser-action\",\"simple-translate_sienori-browser-action\",\"profile-switcher-ff_nd_ax-browser-action\",\"skipredirect_sblask-browser-action\",\"cookieautodelete_kennydo_com-browser-action\",\"eom-button\",\"userChromebtnMenu\",\"_6833a9cb-d329-4d96-a062-76b1b663cd2c_-browser-action\",\"_cb31ec5d-c49a-4e5a-b240-16c767444f62_-browser-action\",\"_ublacklist-browser-action\",\"idcac-pub_guus_ninja-browser-action\"],\"dirtyAreaCache\":[\"unified-extensions-area\",\"nav-bar\",\"TabsToolbar\",\"PersonalToolbar\",\"toolbar-menubar\",\"status-bar\"],\"currentVersion\":19,\"newElementCount\":11}");
defaultPref("browser.uidensity", 1); 							              // Defaults to compact UI
defaultPref("browser.tabs.closeWindowWithLastTab", false);		  // Don't close the window with the last tab
// -------------------------------------
// Firefox Home settings
defaultPref("browser.startup.page", 1);	// Start with the web page(s) defined as the home page(s)
defaultPref("browser.startup.homepage", "about:home"); // Set home page
defaultPref("browser.newtabpage.enabled", true); // Re-enable Firefox home
// Disable sponsored content on Firefox Home (Activity Stream)
lockPref("browser.newtabpage.activity-stream.showSponsored", false); // [FF58+] Pocket > Sponsored Stories
lockPref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // [FF83+] Sponsored shortcuts
//
// -------------------------------------
// Clear default topsites
lockPref("browser.newtabpage.activity-stream.default.sites", "");
lockPref("browser.topsites.contile.enabled", false);
lockPref("browser.topsites.useRemoteSetting", false);
//
// -------------------------------------
// DOWNLOADS
lockPref("browser.download.autohideButton", false);     // do not hide download button automatically
defaultPref("browser.download.useDownloadDir", false);  // Always ask where to save the download
defaultPref("browser.download.alwaysOpenPanel", false); // do not expand toolbar menu for every download, we already have enough interaction
defaultPref("browser.download.manager.addToRecentDocs", false);
/* 2654: enable user interaction for security by always asking how to handle new mimetypes [FF101+]
 * [SETTING] General>Files and Applications>What should Firefox do with other files ***/
defaultPref("browser.download.always_ask_before_handling_new_types", true);
//
defaultPref("network.manage-offline-status", false);	// Don't monitor OS online/offline connection state
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// GEOLOCATION / LANGUAGE / LOCALE (may be optional)
// >>>>>>>>>>>>>>>>>>>>>
//
// Use Mozilla geolocation service instead of Google if permission is granted [FF74+]
defaultPref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
// lockPref("geo.provider.network.logging.enabled", true); // [HIDDEN PREF]
// -------------------------------------
// Disable using the OS's geolocation service
defaultPref("geo.provider.ms-windows-location", false); // [WINDOWS]
defaultPref("geo.provider.use_corelocation", false); // [MAC]
defaultPref("geo.provider.use_gpsd", false); // [LINUX]
defaultPref("geo.provider.geoclue.always_high_accuracy", false); // [LINUX]
defaultPref("geo.provider.use_geoclue", false); // [FF102+] [LINUX]
// -------------------------------------
// Disable region updates
defaultPref("browser.region.network.url", ""); // [FF78+] Defense-in-depth
defaultPref("browser.region.update.enabled", false); // [FF79+]
// -------------------------------------
// Set search region
defaultPref("browser.search.region", "US"); // [HIDDEN PREF]
// -------------------------------------
// Set preferred language for displaying pages
defaultPref("intl.accept_languages", "en-US, en, nl");
// -------------------------------------
// Use en-US locale regardless of the system or region locale
defaultPref("javascript.use_us_english_locale", true); // [HIDDEN PREF]
defaultPref("privacy.spoof_english", 2);
defaultPref("intl.locale.requested", "en-US");
// -------------------------------------
// Translation settings
defaultPref("browser.translations.neverTranslateLanguages", "nl,en");
defaultPref("browser.translations.alwaysTranslateLanguages", "ru,de,fr,pl");
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// QUIETER FOX
// >>>>>>>>>>>>>>>>>>>>>
//
// RECOMMENDATIONS
//
// Disable recommendation pane in about:addons (uses Google Analytics)
lockPref("extensions.getAddons.showPane", false); // [HIDDEN PREF]
// -------------------------------------
// Disable recommendations in about:addons' Extensions and Themes panes [FF68+]
lockPref("extensions.htmlaboutaddons.recommendations.enabled", false);
// -------------------------------------
// Disable personalized Extension Recommendations in about:addons and AMO [FF65+]
lockPref("browser.discovery.enabled", false);
// -------------------------------------
// Disable shopping experience [FF116+]
lockPref("browser.shopping.experience2023.enabled", false); // [DEFAULT: false]
//
// TELEMETRY
//
// Disable new data submission [FF41+]
lockPref("datareporting.policy.dataSubmissionEnabled", false);
// -------------------------------------
// Disable Health Reports
lockPref("datareporting.healthreport.uploadEnabled", false);
lockPref("datareporting.healthreport.infoURL", "");
lockPref("datareporting.healthreport.service.enabled", false);
lockPref("datareporting.policy.firstRunURL", "");
// -------------------------------------
// Disable telemetry
lockPref("toolkit.telemetry.unified", false);
lockPref("toolkit.telemetry.enabled", false); // see [NOTE]
lockPref("toolkit.telemetry.server", "data:,");
lockPref("toolkit.telemetry.server_owner", "");
lockPref("toolkit.telemetry.archive.enabled", false);
lockPref("toolkit.telemetry.newProfilePing.enabled", false); // [FF55+]
lockPref("toolkit.telemetry.shutdownPingSender.enabled", false); // [FF55+]
lockPref("toolkit.telemetry.updatePing.enabled", false); // [FF56+]
lockPref("toolkit.telemetry.bhrPing.enabled", false); // [FF57+] Background Hang Reporter
lockPref("toolkit.telemetry.firstShutdownPing.enabled", false); // [FF57+]
lockPref("toolkit.telemetry.cachedClientID", "");
lockPref("toolkit.telemetry.dap_enabled", false);
lockPref("toolkit.telemetry.dap_helper", "");
lockPref("toolkit.telemetry.dap_helper_owner", "");
lockPref("toolkit.telemetry.dap_leader", "");
lockPref("toolkit.telemetry.dap_leader_owner", "");
lockPref("toolkit.telemetry.dap_task1_enabled", false);
lockPref("toolkit.telemetry.debugSlowSql", false);
lockPref("toolkit.telemetry.hybridContent.enabled", false);
lockPref("toolkit.telemetry.pioneer-new-studies-available", false);
lockPref("toolkit.telemetry.prompted", 2);
lockPref("toolkit.telemetry.rejected", true);
lockPref("toolkit.telemetry.reportingpolicy.firstRun", false);
lockPref("toolkit.telemetry.shutdownPingSender.backgroundtask.enabled", false);
lockPref("toolkit.telemetry.shutdownPingSender.enabledFirstSession", false);
lockPref("toolkit.telemetry.testing.overrideProductsCheck", false);
lockPref("toolkit.telemetry.unifiedIsOptIn", false);
lockPref("browser.newtabpage.activity-stream.telemetry.structuredIngestion.endpoint", "");
lockPref("browser.newtabpage.activity-stream.telemetry.ut.events", false);
// -------------------------------------
// Skip checking omni.ja and other files
lockPref("corroborator.enabled", false);
// -------------------------------------
// Disable Telemetry Coverage
lockPref("toolkit.telemetry.coverage.opt-out", true); // [HIDDEN PREF]
lockPref("toolkit.coverage.opt-out", true); // [FF64+] [HIDDEN PREF]
lockPref("toolkit.coverage.endpoint.base", "");
// -------------------------------------
// Disable PingCentre telemetry (used in several System Add-ons) [FF57+]
lockPref("browser.ping-centre.telemetry", false);
// -------------------------------------
// Disable Firefox Home (Activity Stream) telemetry
lockPref("browser.newtabpage.activity-stream.feeds.telemetry", false);
lockPref("browser.newtabpage.activity-stream.telemetry", false);
// -------------------------------------
// Disable WebVTT logging and test events
lockPref("media.webvtt.debug.logging", false);
lockPref("media.webvtt.testing.events", false);
// -------------------------------------
// Disable send content blocking log to about:protections
lockPref("browser.contentblocking.database.enabled", false);
// -------------------------------------
// Disable celebrating milestone toast when certain numbers of trackers are blocked
lockPref("browser.contentblocking.cfr-milestone.enabled", false);
// -------------------------------------
// Disable Default Browser Agent
lockPref("default-browser-agent.enabled", false); // [WINDOWS]
//
// STUDIES
//
// Disable Studies
lockPref("app.shield.optoutstudies.enabled", false);
// -------------------------------------
// Disable Normandy/Shield [FF60+]
lockPref("app.normandy.enabled", false);
lockPref("app.normandy.api_url", "");
lockPref("app.normandy.first_run", false);
lockPref("app.normandy.shieldLearnMoreUrl", "");
lockPref("app.normandy.user_id", "");
lockPref("extensions.shield-recipe-client.api_url", "");
lockPref("extensions.shield-recipe-client.enabled", false);
//
// CRASH REPORTS
//
// Disable Crash Reports
lockPref("breakpad.reportURL", "");
lockPref("browser.tabs.crashReporting.sendReport", false); // [FF44+]
lockPref("browser.crashReports.unsubmittedCheck.autoSubmit", false);
lockPref("browser.crashReports.unsubmittedCheck.enabled", false);
lockPref("browser.tabs.crashReporting.includeURL", false);
lockPref("toolkit.crashreporter.include_context_heap", false);
lockPref("toolkit.crashreporter.infoURL", "");
// -------------------------------------
// Enforce no submission of backlogged Crash Reports [FF58+]
lockPref("browser.crashReports.unsubmittedCheck.autoSubmit2", false); // [DEFAULT: false]
//
// OTHER
//
// Disable contentblocking reports
lockPref("browser.contentblocking.reportBreakage.url", "");
lockPref("browser.contentblocking.report.cookie.url", "");
lockPref("browser.contentblocking.report.cryptominer.url", "");
lockPref("browser.contentblocking.report.fingerprinter.url", "");
lockPref("browser.contentblocking.report.lockwise.enabled", false);
lockPref("browser.contentblocking.report.lockwise.how_it_works.url", "");
lockPref("browser.contentblocking.report.manage_devices.url", "");
lockPref("browser.contentblocking.report.monitor.enabled", false);
lockPref("browser.contentblocking.report.monitor.how_it_works.url", "");
lockPref("browser.contentblocking.report.monitor.sign_in_url", "");
lockPref("browser.contentblocking.report.monitor.url", "");
lockPref("browser.contentblocking.report.proxy.enabled", false);
lockPref("browser.contentblocking.report.proxy_extension.url", "");
lockPref("browser.contentblocking.report.social.url", "");
lockPref("browser.contentblocking.report.tracker.url", "");
lockPref("browser.contentblocking.report.endpoint_url", "");
lockPref("browser.contentblocking.report.monitor.home_page_url", "");
lockPref("browser.contentblocking.report.monitor.preferences_url", "");
lockPref("browser.contentblocking.report.vpn.enabled", false);
lockPref("browser.contentblocking.report.hide_vpn_banner", true);
lockPref("browser.contentblocking.report.show_mobile_app", false);
lockPref("browser.vpn_promo.enabled", false);
lockPref("browser.privatebrowsing.vpnpromourl", "");
lockPref("browser.promo.focus.enabled", false);
// -------------------------------------
// Block unwanted connections
lockPref("app.feedback.baseURL", "");
lockPref("app.support.baseURL", "");
lockPref("browser.search.searchEnginesURL", "https://librewolf.net/docs/faq/#how-do-i-add-a-search-engine");
lockPref("browser.geolocation.warning.infoURL", "https://librewolf.net/docs/faq/#how-do-i-enable-location-aware-browsing");
defaultPref("app.releaseNotesURL", "https://gitlab.com/librewolf-community/browser");
defaultPref("app.releaseNotesURL.aboutDialog", "https://gitlab.com/librewolf-community/browser");
defaultPref("app.update.url.details", "https://gitlab.com/librewolf-community/browser");
defaultPref("app.update.url.manual", "https://gitlab.com/librewolf-community/browser");
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// SAFE BROWSING (SB)
// >>>>>>>>>>>>>>>>>>>>>
//
// Disable SB (Safe Browsing)
lockPref("browser.safebrowsing.malware.enabled", false);
lockPref("browser.safebrowsing.phishing.enabled", false);
lockPref("browser.safebrowsing.passwords.enabled", false);
lockPref("browser.safebrowsing.allowOverride", false);
// -------------------------------------
// Disable SB checks for downloads (both local lookups + remote)
lockPref("browser.safebrowsing.downloads.enabled", false);
// -------------------------------------
// Disable SB checks for downloads (remote)
lockPref("browser.safebrowsing.downloads.remote.enabled", false);
lockPref("browser.safebrowsing.downloads.remote.url", "");
// -------------------------------------
// Disable SB checks for unwanted software
lockPref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
lockPref("browser.safebrowsing.downloads.remote.block_uncommon", false);
// -------------------------------------
// Disable "ignore this warning" on SB warnings [FF45+]
// lockPref("browser.safebrowsing.allowOverride", false);
// -------------------------------------
// Google connections
lockPref("browser.safebrowsing.downloads.remote.block_dangerous", false);
lockPref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
lockPref("browser.safebrowsing.provider.google.updateURL", "");
lockPref("browser.safebrowsing.provider.google.gethashURL", "");
lockPref("browser.safebrowsing.provider.google4.updateURL", "");
lockPref("browser.safebrowsing.provider.google4.gethashURL", "");
lockPref("browser.safebrowsing.provider.google.reportURL", "");
lockPref("browser.safebrowsing.reportPhishURL", "");
lockPref("browser.safebrowsing.provider.google4.reportURL", "");
lockPref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "");
lockPref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "");
lockPref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "");
lockPref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "");
lockPref("browser.safebrowsing.provider.google4.dataSharing.enabled", false);
lockPref("browser.safebrowsing.provider.google4.dataSharingURL", "");
lockPref("browser.safebrowsing.provider.google.advisory", "");
lockPref("browser.safebrowsing.provider.google.advisoryURL", "");
lockPref("browser.safebrowsing.provider.google.gethashURL", "");
lockPref("browser.safebrowsing.provider.google4.advisoryURL", "");
lockPref("browser.safebrowsing.blockedURIs.enabled", false);
lockPref("browser.safebrowsing.provider.mozilla.gethashURL", "");
lockPref("browser.safebrowsing.provider.mozilla.updateURL", "");
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// BLOCK IMPLICIT OUTBOUND
// >>>>>>>>>>>>>>>>>>>>>
//
// Disable DNS prefetching
lockPref("network.dns.disablePrefetch", true);
// defaultPref("network.dns.disablePrefetchFromHTTPS", true); // [DEFAULT: true]
// -------------------------------------
// Disable predictor / prefetching
lockPref("network.predictor.enabled", false);
lockPref("network.predictor.enable-prefetch", false); // [FF48+] [DEFAULT: false]
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// DNS / DoH / PROXY / SOCKS
// >>>>>>>>>>>>>>>>>>>>>
//
/* 0702: set the proxy server to do any DNS lookups when using SOCKS
 * e.g. in Tor, this stops your local DNS server from knowing your Tor destination
 * as a remote Tor node will handle the DNS request
 * [1] https://trac.torproject.org/projects/tor/wiki/doc/TorifyHOWTO/WebBrowsers ***/
lockPref("network.proxy.socks_remote_dns", true);
// -------------------------------------
// Disable using UNC (Uniform Naming Convention) paths [FF61+]
lockPref("network.file.disable_unc_paths", true); // [HIDDEN PREF]
// -------------------------------------
// Disable GIO as a potential proxy bypass vector
lockPref("network.gio.supported-protocols", ""); // [HIDDEN PREF] [DEFAULT: "" FF118+]
//
// Disable skipping DoH when parental controls are enabled [FF70+]
lockPref("network.dns.skipTRR-when-parental-control-enabled", false);
//
// In case not using Mullvad VPN
defaultPref("network.trr.uri", "https://adblock.dns.mullvad.net/dns-query");
defaultPref("network.trr.custom_uri", "https://adblock.dns.mullvad.net/dns-query");
//
// Enable Encrypted client Hello
defaultPref("network.dns.echconfig.enabled", true);
defaultPref("network.dns.http3_echconfig.enabled", true);
defaultPref("network.trr.mode", 2);     // First. Use TRR first, and only if the name resolve fails use the native resolver as a fallback.
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// LOCATION BAR / SEARCH BAR / SUGGESTIONS / HISTORY / FORMS
// >>>>>>>>>>>>>>>>>>>>>
//
// Disable location bar making speculative connections [FF56+]
lockPref("browser.urlbar.speculativeConnect.enabled", false);
//
// -------------------------------------
// 5010 Disable dropdown suggestions with empty query
lockPref("browser.urlbar.suggest.topsites", false);
//
// -------------------------------------
// Disable urlbar telemetry-related suggestions
lockPref("browser.urlbar.addons.featureGate", false); // [FF115+]
lockPref("browser.urlbar.eventTelemetry.enabled", false);
lockPref("browser.urlbar.mdn.featureGate", false); // [FF117+] [HIDDEN PREF]
lockPref("browser.urlbar.pocket.featureGate", false); // [FF116+] [DEFAULT: false]
lockPref("browser.urlbar.suggest.pocket", false);
lockPref("browser.urlbar.trending.featureGate", false); // [FF118+] Disable urlbar trending search suggestions
lockPref("browser.urlbar.weather.featureGate", false); // [FF108+] [DEFAULT: false]
// -------------------------------------
// Disable merino
lockPref("browser.urlbar.merino.enabled", false);
//
// -------------------------------------
// 0801 enabled urlbar search
defaultPref("keyword.enabled", true);
// -------------------------------------
// Disable location bar contextual suggestions [FF92+]
defaultPref("browser.urlbar.suggest.quicksuggest.nonsponsored", false); // [FF95+]
defaultPref("browser.urlbar.suggest.quicksuggest.sponsored", false);
//
// -------------------------------------
// Enable useful search bar features
defaultPref("browser.urlbar.suggest.calculator", true);
defaultPref("browser.urlbar.unitConversion.enabled", true);
defaultPref("browser.search.suggest.enabled", true);  // 0804 live search suggestions
defaultPref("browser.urlbar.suggest.searches", true);	// 0804: Includes search engine suggestion
defaultPref("browser.urlbar.groupLabels.enabled", true);
defaultPref("browser.urlbar.trimURLs", false);
//
// Other textbox related prefs
defaultPref("browser.search.openintab", true);        // Open search in new tab
defaultPref("layout.spellcheckDefault", 2);						// Use spellcheck in every textbox
//
// PREF: enable option to add custom search engine
// [SETTINGS] Settings -> Search -> Search Shortcuts -> Add
// [EXAMPLE] https://search.brave.com/search?q=%s
// [EXAMPLE] https://lite.duckduckgo.com/lite/?q=%s
// [1] https://reddit.com/r/firefox/comments/xkzswb/adding_firefox_search_engine_manually/
lockPref("browser.urlbar.update2.engineAliasRefresh", true); // HIDDEN
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// DISK AVOIDANCE
// >>>>>>>>>>>>>>>>>>>>>
//
// Disable media cache from writing to disk in Private Browsing
lockPref("browser.privatebrowsing.forceMediaMemoryCache", true); // [FF75+]
defaultPref("media.memory_cache_max_size", 65536);
defaultPref("browser.shell.shortcutFavicons", true); // favicons in profile folder
lockPref("browser.helperApps.deleteTempFileOnExit", true); // delete temporary files opened with external apps
// -------------------------------------
// Disable storing extra session data [SETUP-CHROME]
// 0=everywhere, 1=unencrypted sites, 2=nowhere
defaultPref("browser.sessionstore.privacy_level", 1);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// HTTPS (SSL/TLS / OCSP / CERTS / HPKP)
// >>>>>>>>>>>>>>>>>>>>>
//
// HTTPS-first for normal and HTTPS-only for private browsing
defaultPref("dom.security.https_first", true);
defaultPref("dom.security.https_only_mode", false); // [FF76+]
defaultPref("dom.security.https_only_mode_pbm", true); // [FF80+]
// 1 = Don't allow cross-origin sub-resources to open HTTP authentication credentials dialogs
defaultPref("network.auth.subresource-http-auth-allow", 1);
//
// Display warning on the padlock for "broken security"
lockPref("security.ssl.treat_unsafe_negotiation_as_broken", true);
// -------------------------------------
// Display advanced information on Insecure Connection warning pages
lockPref("browser.xul.error_pages.expert_bad_cert", true);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// CONTAINERS
// >>>>>>>>>>>>>>>>>>>>>
//
// Enable Container Tabs and its UI setting [FF50+]
defaultPref("privacy.userContext.enabled", true);
defaultPref("privacy.userContext.ui.enabled", true);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// PLUGINS / MEDIA / WEBRTC
// >>>>>>>>>>>>>>>>>>>>>
//
/* 7020: disable WebRTC (Web Real-Time Communication)
 * [WHY] Firefox desktop uses mDNS hostname obfuscation and the private IP is never exposed until
 * required in TRUSTED scenarios; i.e. after you grant device (microphone or camera) access
 * [TEST] https://browserleaks.com/webrtc
 * [1] https://groups.google.com/g/discuss-webrtc/c/6stQXi72BEU/m/2FwZd24UAQAJ
 * [2] https://datatracker.ietf.org/doc/html/draft-ietf-mmusic-mdns-ice-candidates#section-3.1.1 ***/
defaultPref("media.peerconnection.enabled", true);
//
// PREF: force WebRTC inside the proxy [FF70+]
lockPref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);
// Force a single network interface for ICE candidates generation [FF42+]
lockPref("media.peerconnection.ice.default_address_only", true);
//
/** [SECTION] AUTOPLAY
 * block autoplay unless element is right-clicked. this means background videos, videos in a different tab,
 * or media opened while other media is played will not start automatically.
 * thumbnails will not autoplay unless hovered. exceptions can be set from the UI.
 */
defaultPref("media.autoplay.default", 5);
defaultPref("media.autoplay.enabled", true);
//
defaultPref("media.eme.enabled", true); // 2022: Enable DRM-content
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// DOM (DOCUMENT OBJECT MODEL)
// >>>>>>>>>>>>>>>>>>>>>
//
// Prevent scripts from moving and resizing open windows
lockPref("dom.disable_window_move_resize", true);
lockPref("dom.disable_window_open_feature.close", true);				  // Prevents the close button from being disabled.
lockPref("dom.disable_window_open_feature.directories", true);		// Prevents the bookmarks toolbar from being hidden.
lockPref("dom.disable_window_open_feature.location", true);				// Prevents the address bar from being hidden.
lockPref("dom.disable_window_open_feature.menubar", true);				// Prevents the menubar from being hidden.
lockPref("dom.disable_window_open_feature.minimizable", true);		// Prevents popup window minimization from being disabled.
lockPref("dom.disable_window_open_feature.personalbar", true);		// Prevents the bookmarks toolbar from being hidden.
lockPref("dom.disable_window_open_feature.resizable", true);			// Prevents popup window resizing from being disabled.
lockPref("dom.disable_window_open_feature.scrollbars", true);			// Prevents the scrollbars on a popup from being disabled.
lockPref("dom.disable_window_open_feature.status", true);				  // Prevents the status bar from being hidden.
lockPref("dom.disable_window_open_feature.titlebar", true);				// Prevents the title bar from being hidden.
lockPref("dom.disable_window_open_feature.toolbar", true);				// Prevents the navigation toolbar from being hidden.
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// EXTENSIONS
// >>>>>>>>>>>>>>>>>>>>>
//
// Disable extensions suggestions
lockPref("extensions.webservice.discoverURL", "");
// PREF: Startup extension Settings
defaultPref("extensions.enabledScopes", 5); // [HIDDEN PREF]
defaultPref("extensions.autoDisableScopes", 14); // Install local extensions
/* 2661: disable bypassing 3rd party extension install prompts [FF82+]
 * [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=1659530,1681331 ***/
defaultPref("extensions.postDownloadThirdPartyPrompt", false);
defaultPref("extensions.FirefoxMulti-AccountContainers@mozilla.whiteList", "");
defaultPref("extensions.TemporaryContainers@stoically.whiteList", "");
defaultPref("extensions.getAddons.cache.enabled", false);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// MISCELLANEOUS
// >>>>>>>>>>>>>>>>>>>>>
//
// Disable sending additional analytics to web servers
lockPref("beacon.enabled", false);
// -------------------------------------
// Disable UITour backend so there is no chance that a remote page can use it
lockPref("browser.uitour.enabled", false);
lockPref("browser.uitour.url", ""); // Defense-in-depth
// -------------------------------------
// Reset remote debugging to disabled
lockPref("devtools.debugger.remote-enabled", false); // [DEFAULT: false]
// -------------------------------------
// Remove special permissions for certain mozilla domains [FF35+]
lockPref("permissions.manager.defaultsUrl", "");
// -------------------------------------
// use punycode in idn to prevent spoofing
defaultPref("network.IDN_show_punycode", true); 
// -------------------------------------
// Enforce PDFJS, disable PDFJS scripting
lockPref("pdfjs.disabled", false);          // [DEFAULT: false]
lockPref("pdfjs.enableScripting", false);   // [FF86+]
lockPref("pdfjs.sidebarViewOnLoad", 2);     // 2=table of contents (if not available, will default to 1=view pages)
// -------------------------------------
// Disable the default checkedness for "Save card and address to Firefox" checkboxes
lockPref("dom.payments.defaults.saveAddress", false);
lockPref("dom.payments.defaults.saveCreditCard", false);
// -------------------------------------
// Disable Displaying Javascript in History URLs
lockPref("browser.urlbar.filter.javascript", true);
//
// prevent mouse middle click on new tab button to trigger searches or page loads
lockPref("browser.tabs.searchclipboardfor.middleclick", false);
//
// PREF: show all matches in Findbar
lockPref("findbar.highlightAll", true);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// SHUTDOWN & SANITIZING
// >>>>>>>>>>>>>>>>>>>>>
//
// PREF: set History section to show all options
// Settings>Privacy>History>Use custom settings for history
// [INFOGRAPHIC] https://bugzilla.mozilla.org/show_bug.cgi?id=1765533#c1
lockPref("privacy.history.custom", true);
//
// Enable Firefox to clear items on shutdown
defaultPref("privacy.sanitize.sanitizeOnShutdown", false);
// SANITIZE ON SHUTDOWN: IGNORES "ALLOW" SITE EXCEPTIONS
//
// Set/enforce what items to clear on shutdown [SETUP-CHROME]
defaultPref("privacy.clearOnShutdown.cache", true);
defaultPref("privacy.clearOnShutdown.downloads", true); // [DEFAULT: true]
defaultPref("privacy.clearOnShutdown.formdata", true); // [DEFAULT: true]
defaultPref("privacy.clearOnShutdown.history", false); // [DEFAULT: true]
defaultPref("privacy.clearOnShutdown.sessions", true); // [DEFAULT: true]
// defaultPref("privacy.clearOnShutdown.siteSettings", false); // [DEFAULT: false]
// -------------------------------------
// Set Session Restore to clear on shutdown [FF34+]
// defaultPref("privacy.clearOnShutdown.openWindows", true);
//
// SANITIZE ON SHUTDOWN: RESPECTS "ALLOW" SITE EXCEPTIONS FF103+
//
// Set "Cookies" and "Site Data" to clear on shutdown
defaultPref("privacy.clearOnShutdown.cookies", true); // Cookies
defaultPref("privacy.clearOnShutdown.offlineApps", true); // Site Data
//
// SANITIZE MANUAL: IGNORES "ALLOW" SITE EXCEPTIONS
//
// Reset default items to clear with Ctrl-Shift-Del
defaultPref("privacy.cpd.cache", true); // [DEFAULT: true]
defaultPref("privacy.cpd.formdata", true); // Form & Search History
defaultPref("privacy.cpd.history", true); // Browsing & Download History
defaultPref("privacy.cpd.offlineApps", true); // Offline Website Data
defaultPref("privacy.cpd.sessions", true); // [DEFAULT: true]
defaultPref("privacy.cpd.offlineApps", true); // [DEFAULT: false]
defaultPref("privacy.cpd.cookies", true);
// -------------------------------------
// Reset default "Time range to clear" for "Clear Recent History"
// 0=everything, 1=last hour, 2=last two hours, 3=last four hours, 4=today
defaultPref("privacy.sanitize.timeSpan", 0);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// RFP (resistFingerprinting)
// >>>>>>>>>>>>>>>>>>>>>
//
defaultPref("privacy.resistFingerprinting", false); // 4501: Disable ResistFingerPrinting
// Enable RFP on Private Mode if the original pref is false
defaultPref("privacy.resistFingerprinting.pbmode", true); // [FF114+]
// -------------------------------------
defaultPref("privacy.resistFingerprinting.letterboxing", false); 	// 4504 [pointless if not using RFP]
// Set new window size rounding max values [FF55+]
defaultPref("privacy.window.maxInnerWidth", 1600);
defaultPref("privacy.window.maxInnerHeight", 900);
// -------------------------------------
// Disable mozAddonManager Web API [FF57+]
defaultPref("privacy.resistFingerprinting.block_mozAddonManager", true);
// -------------------------------------
// Disable using system colors
defaultPref("browser.display.use_system_colors", false); // [DEFAULT: false NON-WINDOWS]
// -------------------------------------
// Enforce non-native widget theme
defaultPref("widget.non-native-theme.enabled", true); // [DEFAULT: true]
// -------------------------------------
// Enforce links targeting new windows to open in a new tab instead
// 1=most recent window or tab, 2=new window, 3=new tab
defaultPref("browser.link.open_newwindow", 3); // [DEFAULT: 3]
// -------------------------------------
// Set all open window methods to abide by "browser.link.open_newwindow"
defaultPref("browser.link.open_newwindow.restriction", 0);
//
defaultPref("webgl.disabled", false); // Unnecessary
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// DON'T TOUCH
// >>>>>>>>>>>>>>>>>>>>>
//
// Disable Firefox blocklist
lockPref("extensions.blocklist.enabled", false); // [DEFAULT: true]
lockPref("extensions.blocklist.addonItemURL", "");	
lockPref("extensions.blocklist.detailsURL", "");
lockPref("extensions.blocklist.itemURL", "");
lockPref("services.blocklist.addons.collection", "");
lockPref("services.blocklist.addons.signer", "");
lockPref("services.blocklist.plugins.collection", "");	
lockPref("services.blocklist.plugins.signer", "");
lockPref("services.blocklist.gfx.collection", "");
lockPref("services.blocklist.gfx.signer", "");
// -------------------------------------
// Disable Quarantined Domains [FF115+]
lockPref("extensions.quarantinedDomains.enabled", false); // [DEFAULT: true]
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// DON'T BOTHER: FINGERPRINTING
// >>>>>>>>>>>>>>>>>>>>>
//
lockPref("camera.control.face_detection.enabled", false);
lockPref("device.sensors.enabled", false);
lockPref("device.sensors.ambientLight.enabled", false);
lockPref("device.sensors.motion.enabled", false);
lockPref("device.sensors.orientation.enabled", false);
lockPref("device.sensors.proximity.enabled", false);
lockPref("dom.battery.enabled", false);
lockPref("dom.vibrator.enabled", false);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// NON-PROJECT RELATED
// >>>>>>>>>>>>>>>>>>>>>
//
// WELCOME & WHAT'S NEW NOTICES
//
lockPref("browser.startup.homepage_override.mstone", "ignore"); // master switch
lockPref("startup.homepage_welcome_url", "");
lockPref("startup.homepage_welcome_url.additional", "");
lockPref("startup.homepage_override_url", ""); // What's New page after updates
//
// UPDATES
//
// Disable auto-INSTALLING Firefox updates [NON-WINDOWS]
lockPref("app.update.auto", false);
//
// FIREFOX HOME CONTENT
//
lockPref("browser.newtabpage.enhanced", false);
lockPref("browser.newtabpage.introShown", true);
lockPref("browser.newtabpage.activity-stream.feeds.section.topstories", false); // Recommended by Pocket
lockPref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
lockPref("browser.newtabpage.activity-stream.showSearch", false);
// -------------------------------------
// Disable pocket
lockPref("extensions.pocket.enabled", false); // Pocket Account [FF46+]
lockPref("extensions.pocket.api"," ");
lockPref("extensions.pocket.bffApi", "");
lockPref("extensions.pocket.bffRecentSaves", false);
lockPref("extensions.pocket.oAuthConsumerKey", " ");
lockPref("extensions.pocket.oAuthConsumerKeyBff", "");
lockPref("extensions.pocket.refresh.emailButton.enabled", false);
lockPref("extensions.pocket.showHome", false);
lockPref("extensions.pocket.site", " ");
lockPref("browser.newtabpage.activity-stream.discoverystream.saveToPocketCard.enabled", false);
lockPref("browser.newtabpage.activity-stream.discoverystream.saveToPocketCardRegions", "");
lockPref("browser.newtabpage.activity-stream.discoverystream.sendToPocket.enabled", false);
// -------------------------------------
// Disable Firefox accounts
lockPref("identity.fxaccounts.enabled", false); // Firefox Accounts & Sync [FF60+] [RESTART]
lockPref("identity.fxaccounts.auth.uri", " ");
lockPref("identity.fxaccounts.pairing.enabled", false);
lockPref("identity.fxaccounts.remote.oauth.uri", " ");
lockPref("identity.fxaccounts.remote.pairing.uri", " ");
lockPref("identity.fxaccounts.remote.profile.uri", " ");
lockPref("identity.fxaccounts.remote.root", " ");
lockPref("identity.fxaccounts.toolbar.enabled", false);
lockPref("browser.newtabpage.activity-stream.fxaccounts.endpoint", "");
// -------------------------------------
// More telemetry
lockPref("browser.search.serpEventTelemetry.enabled", false);
lockPref("dom.security.unexpected_system_load_telemetry_enabled", false);
lockPref("loop.logDomains", false);	// Disable Firefox Hello metrics collection
lockPref("messaging-system.rsexperimentloader.enabled", false);
lockPref("network.trr.confirmation_telemetry_enabled", false);
lockPref("privacy.trackingprotection.emailtracking.data_collection.enabled", false);
lockPref("security.app_menu.recordEventTelemetry", false);
lockPref("security.certerrors.recordEventTelemetry", false);
lockPref("security.protectionspopup.recordEventTelemetry", false);
lockPref("signon.recipes.remoteRecipes.enabled", false);
// -------------------------------------
// Worthless features
lockPref("browser.tabs.firefox-view", false);       // Disable Firefox View
defaultPref("browser.tabs.firefox-view-next", false);
lockPref("browser.firefox-view.feature-tour", "{\"screen\":\"\",\"complete\":true}"); // disable the Firefox View tour from popping up
lockPref("dom.flyweb.enabled", false);              // Disable flyweb
// -------------------------------------
// Greasemonkey telemetry
lockPref("extensions.greasemonkey.stats.optedin", false);
lockPref("extensions.greasemonkey.stats.url", "");
// -------------------------------------
// Disable Extension Recommendations (CFR: "Contextual Feature Recommender")
// [1] https://support.mozilla.org/en-US/kb/extension-recommendations
lockPref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
lockPref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
// -------------------------------------
// OTHER
lockPref("browser.aboutwelcome.enabled", false);                  // disable Intro screens
lockPref("browser.chrome.toolbar_tips", false);                   // Disable useless UI-tooltips
lockPref("browser.disableResetPrompt", true);					            // Don't ask the user to reset Firefox
lockPref("browser.messaging-system.whatsNewPanel.enabled", false);
lockPref("browser.preferences.moreFromMozilla", false);           // Hide "More from Mozilla" in Settings
lockPref("browser.selfsupport.url", "");
lockPref("browser.startup.upgradeDialog.enabled", false);				  // Disable moments page when updated
lockPref("dom.mozTCPSocket.enabled", false);						          // Disable raw TCP socket support (mozTCPSocket), useless unless for sniffing/hacking
lockPref("extensions.webcompat-reporter.enabled", false); 				// 6011: enforce disabling of Web Compatibility Reporter [FF56+]
lockPref("network.negotiate-auth.allow-insecure-ntlm-v1", false);	// Disallow NTLMv1 unless through HTTPS
lockPref("permissions.delegation.enabled", false); 						    // Any prompt for permissions will show the correct 3rd party origin
lockPref("privacy.partition.bloburl_per_partition_key", true);    // [FF118+] Separates API caches per website
lockPref("privacy.usercontext.about_newtab_segregation.enabled", true);
lockPref("security.family_safety.mode", 0);                       // Disable Windows Microsoft Family Safety cert [FF50+] [WINDOWS]
lockPref("security.tls.version.enable-deprecated", false); 				// 6010: enforce no TLS 1.0/1.1 downgrades
//lockPref("browser.ssb.enabled", true);                            // Firefox Web App (Mozilla's trying to compete with 7Road and removed it)
lockPref("toolkit.coverage.enabled", false);
//
/** [SECTION] QUERY STRIPPING
 * currently we set the same query stripping list that brave uses:
 * https://github.com/brave/brave-core/blob/f337a47cf84211807035581a9f609853752a32fb/browser/net/brave_site_hacks_network_delegate_helper.cc#L29
 */
defaultPref("privacy.query_stripping.strip_list", "__hsfp __hssc __hstc __s _hsenc _openstat dclid fbclid gbraid gclid hsCtaTracking igshid mc_eid ml_subscriber ml_subscriber_hash msclkid oft_c oft_ck oft_d oft_id oft_ids oft_k oft_lk oft_sk oly_anon_id oly_enc_id rb_clickid s_cid twclid vero_conv vero_id wbraid wickedid yclid");
/**
 * librewolf specific pref that allows to include the query stripping lists in uBO by default.
 * the asset file is fetched every 7 days.
 */
defaultPref("librewolf.uBO.assetsBootstrapLocation", "https://gitlab.com/librewolf-community/browser/source/-/raw/main/assets/uBOAssets.json");
//
/** [SECTION] LOGGING
 * these prefs are off by default in the official Mozilla builds,
 * so it only makes sense that we also disable them.
 * See https://gitlab.com/librewolf-community/settings/-/issues/240
 */
pref("browser.dom.window.dump.enabled", false);
pref("devtools.console.stdout.chrome", false);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Advanced Betterfox section
// >>>>>>>>>>>>>>>>>>>>>
// PREF: Cookie Banner handling [NIGHTLY]
// [NOTE] Feature still enforces Total Cookie Protection to limit 3rd-party cookie tracking [1]
// [1] https://github.com/mozilla/cookie-banner-rules-list/issues/33#issuecomment-1318460084
// [2] https://phabricator.services.mozilla.com/D153642
// [3] https://winaero.com/make-firefox-automatically-click-on-reject-all-in-cookie-banner-consent/
// [4] https://docs.google.com/spreadsheets/d/1Nb4gVlGadyxix4i4FBDnOeT_eJp2Zcv69o-KfHtK-aA/edit#gid=0
// 2: reject banners if it is a one-click option; otherwise, fall back to the accept button to remove banner
// 1: reject banners if it is a one-click option; otherwise, keep banners on screen
// 0: disable all cookie banner handling
lockPref("cookiebanners.service.mode", 2);
lockPref("cookiebanners.service.mode.privateBrowsing", 2);

// PREF: initial paint delay
// How long FF will wait before rendering the page, in milliseconds
// Reduce the 5ms Firefox waits to render the page
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1283302
// [2] https://docs.google.com/document/d/1BvCoZzk2_rNZx3u9ESPoFjSADRI0zIPeJRXFLwWXx_4/edit#heading=h.28ki6m8dg30z
lockPref("nglayout.initialpaint.delay", 0); // default=5; used to be 250
lockPref("nglayout.initialpaint.delay_in_oopif", 0); // default=5

// PREF: use bigger packets
// [1] https://www.mail-archive.com/support-seamonkey@lists.mozilla.org/msg74561.html
// [2] https://www.mail-archive.com/support-seamonkey@lists.mozilla.org/msg74570.html
lockPref("network.buffer.cache.size", 262144); // preferred=327680; default=32768
lockPref("network.buffer.cache.count", 128); // preferred=240; default=24

// PREF: increase the absolute number of HTTP connections
// [1] https://kb.mozillazine.org/Network.http.max-connections
// [2] https://kb.mozillazine.org/Network.http.max-persistent-connections-per-server
// [3] https://old.reddit.com/r/firefox/comments/11m2yuh/how_do_i_make_firefox_use_more_of_my_900_megabit/jbfmru6/
lockPref("network.http.max-connections", 1800); // default=900
lockPref("network.http.max-persistent-connections-per-server", 10); // default=6; download connections; anything above 10 is excessive

// PREF: increase TLS token caching 
lockPref("network.ssl_tokens_cache_capacity", 32768); // default=2048; more TLS token caching (fast reconnects)

// PREF: disable form autofill
// [NOTE] stored data is not secure (uses a JSON file)
// [1] https://wiki.mozilla.org/Firefox/Features/Form_Autofill
// [2] https://www.ghacks.net/2017/05/24/firefoxs-new-form-autofill-is-awesome
lockPref("extensions.formautofill.addresses.enabled", false);
lockPref("extensions.formautofill.creditCards.enabled", false);

// PREF: Firefox Translations [NIGHTLY]
// Automated translation of web content is done locally in Firefox, so that
// the text being translated does not leave your machine.
// [ABOUT] Visit about:translations to translate your own text as well.
// [1] https://blog.mozilla.org/en/mozilla/local-translation-add-on-project-bergamot/
// [2] https://blog.nightly.mozilla.org/2023/06/01/firefox-translations-and-other-innovations-these-weeks-in-firefox-issue-139/
// [3] https://www.ghacks.net/2023/08/02/mozilla-firefox-117-beta-brings-an-automatic-language-translator-for-websites-and-it-works-offline/
defaultPref("browser.translations.enable", true);
    //defaultPref("browser.translations.autoTranslate", true);
//
// PREF: Smooth scrolling recommended for 60hz+ displays
defaultPref("apz.overscroll.enabled", true);                    // not DEFAULT on Linux
defaultPref("general.smoothScroll", true); 					            // DEFAULT
defaultPref("mousewheel.default.delta_multiplier_y", 275);      // 250-400
//
pref("_config.js", "End of lockPref section.");
/******************************** System-default settings ********************************/
// PREF: Longer till script timeout
pref("dom.max_script_run_time", 20);

// PREF: Disable animations
pref("browser.tabs.animate", false);
pref("browser.panorama.animate_zoom", false);
pref("browser.fullscreen.animateUp", false);

// PREF: disable fullscreen delay and notice
pref("full-screen-api.transition-duration.enter", "0 0");
pref("full-screen-api.transition-duration.leave", "0 0");
pref("full-screen-api.warning.delay", -1);
pref("full-screen-api.warning.timeout", 0);

// Prevent themes overriding settings pages into Light theme
pref("layout.css.prefers-color-scheme.content-override", 0);

// PREF: Basic privacy settings
defaultPref("privacy.donottrackheader.value", 1);
defaultPref("privacy.query_stripping", true);
defaultPref("privacy.trackingprotection.pbmode.enabled", true);
defaultPref("webgl.renderer-string-override", " ");
defaultPref("webgl.vendor-string-override", " ");

lockPref("browser.compactmode.show", true);                     // Enable compact mode to be used

// Enable Firefox to use userChomeCSS
defaultPref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
defaultPref("svg.context-properties.content.enabled", true);

// PREF: Bookmark settings
defaultPref("browser.tabs.loadBookmarksInTabs", true);			    // force bookmarks to open in a new tab, not the current tab
defaultPref("browser.bookmarks.openInTabClosesMenu", false);	  // leave Bookmarks Menu open when selecting a site
defaultPref("browser.toolbars.bookmarks.visibility", "always");

// PREF: restore "View image info" on right-click
lockPref("browser.menu.showViewImageInfo", true);

pref("_config.js", "End of system-default Firefox settings.");
/******************************** Firefox userChromeJS: ********************************/
lockPref('xpinstall.signatures.required', false);
lockPref('extensions.install_origins.enabled', false);
// Source: https://github.com/xiaoxiaoflood/firefox-scripts
try {
  const cmanifest = Cc['@mozilla.org/file/directory_service;1'].getService(Ci.nsIProperties).get('UChrm', Ci.nsIFile);
  cmanifest.append('utils');
  cmanifest.append('chrome.manifest');
  Components.manager.QueryInterface(Ci.nsIComponentRegistrar).autoRegister(cmanifest);

  const objRef = ChromeUtils.import('resource://gre/modules/addons/AddonSettings.jsm');
  const temp = Object.assign({}, Object.getOwnPropertyDescriptors(objRef.AddonSettings), {
    REQUIRE_SIGNING: { value: false }
  });
  objRef.AddonSettings = Object.defineProperties({}, temp);

  Cu.import('chrome://userchromejs/content/BootstrapLoader.jsm');
} catch (ex) {};

try {
  Cu.import('chrome://userchromejs/content/userChrome.jsm');
} catch (ex) {};

/******************************** End validation ********************************/
pref("_config.js", "End of config.js.");