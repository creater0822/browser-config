// skip 1st line
/*** Disabling Mozilla bloatware and malware support ***/
lockPref("accessibility.force_disabled", 1);							// Bloatware that can be abused by malware
lockPref("app.feedback.baseURL", "");
lockPref("app.normandy.api_url", "");
lockPref("app.normandy.enabled", false);
lockPref("app.normandy.first_run", false);
lockPref("app.normandy.shieldLearnMoreUrl", "");
lockPref("app.normandy.user_id", "");
lockPref("app.shield.optoutstudies.enabled", false);
lockPref("app.update.auto", false);
lockPref("breakpad.reportURL", "");										// Disable sending crash reports to Mozilla
lockPref("browser.aboutConfig.showWarning", false);
lockPref("browser.aboutwelcome.enabled", false); 						// disable Intro screens
lockPref("browser.chrome.toolbar_tips", false);							// Disable useless UI-tooltips
lockPref("browser.compactmode.show", true);
lockPref("browser.crashReports.unsubmittedCheck.autoSubmit", false);
lockPref("browser.crashReports.unsubmittedCheck.autoSubmit2", false); 	// [DEFAULT: false]
lockPref("browser.crashReports.unsubmittedCheck.enabled", false);
lockPref("browser.disableResetPrompt", true);							// Don't ask the user to reset Firefox
lockPref("browser.discovery.enabled", false);
lockPref("browser.download.autohideButton", false);						// Don't autohide the download button
lockPref("browser.helperApps.deleteTempFileOnExit", true); 				// Remove temp files opened with an external application
lockPref("browser.messaging-system.whatsNewPanel.enabled", false);
lockPref("browser.newtabpage.activity-stream.discoverystream.saveToPocketCard.enabled", false);
lockPref("browser.newtabpage.activity-stream.discoverystream.saveToPocketCardRegions", "");
lockPref("browser.newtabpage.activity-stream.discoverystream.sendToPocket.enabled", false);
lockPref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
lockPref("browser.newtabpage.activity-stream.feeds.telemetry", false);
lockPref("browser.newtabpage.activity-stream.fxaccounts.endpoint", "");
lockPref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
lockPref("browser.newtabpage.activity-stream.showSearch", false);		// New tab page
lockPref("browser.newtabpage.activity-stream.showSponsoredTopSite", false);
lockPref("browser.newtabpage.activity-stream.telemetry", false);
lockPref("browser.newtabpage.activity-stream.telemetry.structuredIngestion.endpoint", "");
lockPref("browser.newtabpage.activity-stream.telemetry.ut.events", false);
lockPref("browser.newtabpage.enhanced", false);
lockPref("browser.newtabpage.introShown", true);
lockPref("browser.ping-centre.telemetry", false);
lockPref("browser.preferences.moreFromMozilla", false);					// Hide "More from Mozilla" in Settings
lockPref("browser.privatebrowsing.vpnpromourl", "");					// Disable Firefox VPN
lockPref("browser.region.network.url", "");
lockPref("browser.safebrowsing.downloads.remote.enabled", false);		// Disable SB checks for downloads (remote)
lockPref("browser.search.region", "US");
lockPref("browser.search.serpEventTelemetry.enabled", false);
lockPref("browser.selfsupport.url", "");
lockPref("browser.shell.checkDefaultBrowser", false);					// Disable checking if Firefox is the default browser
lockPref("browser.shopping.experience2023.enabled", false);
lockPref("browser.startup.homepage_override.mstone", "ignore");
lockPref("browser.startup.upgradeDialog.enabled", false);				// Disable moments page when updated
lockPref("browser.tabs.crashReporting.includeURL", false);
lockPref("browser.tabs.crashReporting.sendReport", false); 				// [FF44+]
lockPref("browser.tabs.firefox-view", false);
lockPref("browser.uitour.enabled", false);
lockPref("browser.uitour.url", "");
lockPref("browser.urlbar.addons.featureGate", false);
lockPref("browser.urlbar.eventTelemetry.enabled", false);
lockPref("browser.urlbar.mdn.featureGate", false);
lockPref("browser.urlbar.pocket.featureGate", false);
lockPref("browser.urlbar.pocket.featureGate", false);
lockPref("browser.urlbar.suggest.pocket", false);
lockPref("browser.urlbar.trending.featureGate", false);
lockPref("browser.urlbar.weather.featureGate", false);
lockPref("datareporting.healthreport.infoURL", "");
lockPref("datareporting.healthreport.service.enabled", false);
lockPref("datareporting.healthreport.uploadEnabled", false);
lockPref("datareporting.policy.dataSubmissionEnabled", false);
lockPref("datareporting.policy.firstRunURL", "");
lockPref("device.sensors.ambientLight.enabled", false);
lockPref("device.sensors.motion.enabled", false);
lockPref("device.sensors.orientation.enabled", false);
lockPref("device.sensors.proximity.enabled", false);
lockPref("dom.disable_window_move_resize", true);
lockPref("dom.disable_window_open_feature.close", true);				// Prevents the close button from being disabled.
lockPref("dom.disable_window_open_feature.directories", true);			// Prevents the bookmarks toolbar from being hidden.
lockPref("dom.disable_window_open_feature.location", true);				// Prevents the address bar from being hidden.
lockPref("dom.disable_window_open_feature.menubar", true);				// Prevents the menubar from being hidden.
lockPref("dom.disable_window_open_feature.minimizable", true);			// Prevents popup window minimization from being disabled.
lockPref("dom.disable_window_open_feature.personalbar", true);			// Prevents the bookmarks toolbar from being hidden.
lockPref("dom.disable_window_open_feature.resizable", true);			// Prevents popup window resizing from being disabled.
lockPref("dom.disable_window_open_feature.scrollbars", true);			// Prevents the scrollbars on a popup from being disabled.
lockPref("dom.disable_window_open_feature.status", true);				// Prevents the status bar from being hidden.
lockPref("dom.disable_window_open_feature.titlebar", true);				// Prevents the title bar from being hidden.
lockPref("dom.disable_window_open_feature.toolbar", true);				// Prevents the navigation toolbar from being hidden.
lockPref("dom.flyweb.enabled", false);									// Disable flyweb
lockPref("dom.security.unexpected_system_load_telemetry_enabled", false);
lockPref("extensions.getAddons.showPane", false);
lockPref("extensions.greasemonkey.stats.optedin", false);
lockPref("extensions.greasemonkey.stats.url", "");
lockPref("extensions.htmlaboutaddons.recommendations.enabled", false);
lockPref("extensions.pocket.api"," ");
lockPref("extensions.pocket.bffApi", "");
lockPref("extensions.pocket.bffRecentSaves", false);
lockPref("extensions.pocket.enabled", false);							// 0900: disable Pocket
lockPref("extensions.pocket.oAuthConsumerKey", " ");
lockPref("extensions.pocket.oAuthConsumerKeyBff", "");
lockPref("extensions.pocket.refresh.emailButton.enabled", false);
lockPref("extensions.pocket.showHome", false);
lockPref("extensions.pocket.site", " ");
lockPref("extensions.quarantinedDomains.enabled", true); 				// 6012: enforce Quarantined Domains [FF115+]
lockPref("extensions.shield-recipe-client.api_url", "");
lockPref("extensions.shield-recipe-client.enabled", false);
lockPref("extensions.webcompat-reporter.enabled", false); 				// 6011: enforce disabling of Web Compatibility Reporter [FF56+]
// lockPref("geo.provider.ms-windows-location", ""); 						// Throws an error
lockPref("geo.provider.use_corelocation", false);
lockPref("geo.provider.use_geoclue", false);
lockPref("geo.provider.use_gpsd", false);
lockPref("identity.fxaccounts.auth.uri", " ");
lockPref("identity.fxaccounts.enabled", false);							// Disable Firefox accounts
lockPref("identity.fxaccounts.pairing.enabled", false);
lockPref("identity.fxaccounts.remote.oauth.uri", " ");
lockPref("identity.fxaccounts.remote.pairing.uri", " ");
lockPref("identity.fxaccounts.remote.profile.uri", " ");
lockPref("identity.fxaccounts.remote.root", " ");
lockPref("identity.fxaccounts.toolbar.enabled", false);
lockPref("loop.logDomains", false);										// Disable Firefox Hello metrics collection
lockPref("network.trr.confirmation_telemetry_enabled", false);
lockPref("pdfjs.enableScripting", false);								// PDFJS scripting disabled
lockPref("permissions.delegation.enabled", false); 						// Any prompt for permissions will show the correct 3rd party origin
lockPref("permissions.manager.defaultsUrl", ""); 						// Remove special permissions for certain mozilla domains [FF35+]
lockPref("privacy.usercontext.about_newtab_segregation.enabled", true);
lockPref("security.app_menu.recordEventTelemetry", false);
lockPref("security.certerrors.recordEventTelemetry", false);
lockPref("security.protectionspopup.recordEventTelemetry", false);
lockPref("security.tls.version.enable-deprecated", false); 				// 6010: enforce no TLS 1.0/1.1 downgrades
lockPref("startup.homepage_override_url", "");
lockPref("startup.homepage_welcome_url", "");
lockPref("startup.homepage_welcome_url.additional", "");
lockPref("toolkit.coverage.enabled", false);
lockPref("toolkit.coverage.endpoint.base", "");
lockPref("toolkit.coverage.opt-out", true); 							// [FF64+] [HIDDEN PREF]
lockPref("toolkit.crashreporter.include_context_heap", false);
lockPref("toolkit.crashreporter.infoURL", "");
lockPref("toolkit.telemetry.archive.enabled", false);
lockPref("toolkit.telemetry.bhrPing.enabled", false); 					// [FF57+] Background Hang Reporter
lockPref("toolkit.telemetry.cachedClientID", "");
lockPref("toolkit.telemetry.coverage.opt-out", true); 					// [HIDDEN PREF]
lockPref("toolkit.telemetry.dap_enabled", false);
lockPref("toolkit.telemetry.dap_helper", "");
lockPref("toolkit.telemetry.dap_helper_owner", "");
lockPref("toolkit.telemetry.dap_leader", "");
lockPref("toolkit.telemetry.dap_leader_owner", "");
lockPref("toolkit.telemetry.dap_task1_enabled", false);
lockPref("toolkit.telemetry.debugSlowSql", false);
lockPref("toolkit.telemetry.enabled", false); 							// see [NOTE]
lockPref("toolkit.telemetry.firstShutdownPing.enabled", false); 		// [FF57+]
lockPref("toolkit.telemetry.hybridContent.enabled", false);
lockPref("toolkit.telemetry.newProfilePing.enabled", false); 			// [FF55+]
lockPref("toolkit.telemetry.pioneer-new-studies-available", false);
lockPref("toolkit.telemetry.prompted", 2);
lockPref("toolkit.telemetry.rejected", true);
lockPref("toolkit.telemetry.reportingpolicy.firstRun", false);
lockPref("toolkit.telemetry.server", "");
lockPref("toolkit.telemetry.server_owner", "");
lockPref("toolkit.telemetry.shutdownPingSender.backgroundtask.enabled", false);
lockPref("toolkit.telemetry.shutdownPingSender.enabled", false); 		// [FF55+]
lockPref("toolkit.telemetry.shutdownPingSender.enabledFirstSession", false);
lockPref("toolkit.telemetry.testing.overrideProductsCheck", false);
lockPref("toolkit.telemetry.unified", false);
lockPref("toolkit.telemetry.unifiedIsOptIn", false);
lockPref("toolkit.telemetry.updatePing.enabled", false); 				// [FF56+]

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

pref("_config.js", "End of reset-on-restart section.");
/******************************** User-overwritable settings ********************************/
// Default user interaction prefs
defaultPref("browser.uiCustomization.state", "{\"placements\":{\"widget-overflow-fixed-list\":[],\"unified-extensions-area\":[\"_a6c4a591-f1b2-4f03-b3ff-767e5bedf4e7_-browser-action\",\"_f209234a-76f0-4735-9920-eb62507a54cd_-browser-action\",\"enhancerforyoutube_maximerf_addons_mozilla_org-browser-action\",\"treestyletab_piro_sakura_ne_jp-browser-action\",\"keepassxc-browser_keepassxc_org-browser-action\",\"_0981817c-71b3-4853-a801-481c90af2e8e_-browser-action\"],\"nav-bar\":[\"back-button\",\"forward-button\",\"stop-reload-button\",\"addon_darkreader_org-browser-action\",\"customizableui-special-spring1\",\"7esoorv3_alefvanoon_anonaddy_me-browser-action\",\"pagehacker-nico_nc-browser-action\",\"_6ac85730-7d0f-4de0-b3fa-21142dd85326_-browser-action\",\"developer-button\",\"urlbar-container\",\"downloads-button\",\"_ddc359d1-844a-42a7-9aa1-88a850a938a8_-browser-action\",\"_63d150c4-394c-4275-bc32-c464e76a891c_-browser-action\",\"_66d854c2-fd1b-4857-bd0a-7d220e4834da_-browser-action\",\"simple-translate_sienori-browser-action\",\"customizableui-special-spring2\",\"save-to-pocket-button\",\"ublock0_raymondhill_net-browser-action\",\"fxa-toolbar-menu-button\",\"jid1-y3wfe7td45awdw_jetpack-browser-action\",\"_9350bc42-47fb-4598-ae0f-825e3dd9ceba_-browser-action\",\"skipredirect_sblask-browser-action\",\"_aecec67f-0d10-4fa7-b7c7-609a2db280cf_-browser-action\",\"smart-referer_meh_paranoid_pk-browser-action\",\"canvasblocker_kkapsner_de-browser-action\",\"unified-extensions-button\"],\"toolbar-menubar\":[\"menubar-items\"],\"TabsToolbar\":[\"firefox-view-button\",\"sidebar-button\",\"save-page-button\",\"tabbrowser-tabs\",\"new-tab-button\",\"alltabs-button\",\"_c607c8df-14a7-4f28-894f-29e8722976af_-browser-action\",\"_testpilot-containers-browser-action\",\"profile-switcher-ff_nd_ax-browser-action\"],\"PersonalToolbar\":[\"import-button\",\"personal-bookmarks\",\"_2e5ff8c8-32fe-46d0-9fc8-6b8986621f3c_-browser-action\",\"zoom-controls\",\"_d07ccf11-c0cd-4938-a265-2a4d6ad01189_-browser-action\"]},\"seen\":[\"developer-button\",\"profiler-button\",\"jid1-y3wfe7td45awdw_jetpack-browser-action\",\"_63d150c4-394c-4275-bc32-c464e76a891c_-browser-action\",\"_9350bc42-47fb-4598-ae0f-825e3dd9ceba_-browser-action\",\"_f209234a-76f0-4735-9920-eb62507a54cd_-browser-action\",\"7esoorv3_alefvanoon_anonaddy_me-browser-action\",\"_testpilot-containers-browser-action\",\"enhancerforyoutube_maximerf_addons_mozilla_org-browser-action\",\"addon_darkreader_org-browser-action\",\"canvasblocker_kkapsner_de-browser-action\",\"treestyletab_piro_sakura_ne_jp-browser-action\",\"pagehacker-nico_nc-browser-action\",\"keepassxc-browser_keepassxc_org-browser-action\",\"smart-referer_meh_paranoid_pk-browser-action\",\"_2e5ff8c8-32fe-46d0-9fc8-6b8986621f3c_-browser-action\",\"_66d854c2-fd1b-4857-bd0a-7d220e4834da_-browser-action\",\"_6ac85730-7d0f-4de0-b3fa-21142dd85326_-browser-action\",\"_a6c4a591-f1b2-4f03-b3ff-767e5bedf4e7_-browser-action\",\"_aecec67f-0d10-4fa7-b7c7-609a2db280cf_-browser-action\",\"_ddc359d1-844a-42a7-9aa1-88a850a938a8_-browser-action\",\"_c607c8df-14a7-4f28-894f-29e8722976af_-browser-action\",\"_d07ccf11-c0cd-4938-a265-2a4d6ad01189_-browser-action\",\"ublock0_raymondhill_net-browser-action\",\"_0981817c-71b3-4853-a801-481c90af2e8e_-browser-action\",\"simple-translate_sienori-browser-action\",\"profile-switcher-ff_nd_ax-browser-action\",\"skipredirect_sblask-browser-action\"],\"dirtyAreaCache\":[\"unified-extensions-area\",\"nav-bar\",\"TabsToolbar\",\"PersonalToolbar\",\"toolbar-menubar\"],\"currentVersion\":19,\"newElementCount\":8}");
defaultPref("browser.uidensity", 1); 							// Defaults to compact UI
defaultPref("browser.search.openintab", true);					// Open search in new tab
defaultPref("browser.tabs.closeWindowWithLastTab", false);		// Don't close the window with the last tab
defaultPref("layout.spellcheckDefault", 2);						// Use spellcheck in every textbox

// PREF: Enable useful URL-bar features
defaultPref("keyword.enabled", true);                   		// 0801 enabled urlbar search
defaultPref("browser.search.suggest.enabled", true);    		// 0804 live search suggestions
defaultPref("browser.urlbar.suggest.topsites", false);			// 5010 Disable dropdown suggestions with empty query
defaultPref("browser.urlbar.suggest.calculator", true);
defaultPref("browser.urlbar.unitConversion.enabled", true);
defaultPref("browser.urlbar.quicksuggest.enabled", false);
defaultPref("browser.urlbar.groupLabels.enabled", true);
defaultPref("browser.urlbar.trimURLs", false);

// PREF: Download settings
defaultPref("browser.download.useDownloadDir", false);			// Always ask where to save the download
defaultPref("browser.safebrowsing.downloads.enabled", false);

// PREF: Bookmark settings
defaultPref("browser.tabs.loadBookmarksInTabs", true);			// force bookmarks to open in a new tab, not the current tab
defaultPref("browser.bookmarks.openInTabClosesMenu", false);	// leave Bookmarks Menu open when selecting a site
defaultPref("browser.toolbars.bookmarks.visibility", "always");

// PREF: Translation settings
defaultPref("browser.translations.neverTranslateLanguages", "nl,en");
defaultPref("browser.translations.alwaysTranslateLanguages", "ru,de,fr,pl");

// PREF: Startup extension Settings
defaultPref("extensions.autoDisableScopes", 14);				// Install local extensions
defaultPref("extensions.FirefoxMulti-AccountContainers@mozilla.whiteList", "");
defaultPref("extensions.TemporaryContainers@stoically.whiteList", "");
defaultPref("extensions.getAddons.cache.enabled", false);
defaultPref("extensions.webservice.discoverURL", "");

// PREF: Autoplay
defaultPref("media.autoplay.default", 0);
defaultPref("media.autoplay.enabled", true);

// PREF: Basic privacy settings
defaultPref("privacy.donottrackheader.value", 1);
defaultPref("privacy.query_stripping", true);
defaultPref("privacy.trackingprotection.pbmode.enabled", true);
defaultPref("webgl.renderer-string-override", " ");
defaultPref("webgl.vendor-string-override", " ");

// PREF: Disable experimental features
defaultPref("experiments.activeExperiment", false);
defaultPref("experiments.enabled", false);
defaultPref("experiments.manifest.uri", "");
defaultPref("experiments.supported", false);
defaultPref("network.allow-experiments", false);

// PREF: New tab page
defaultPref("browser.newtabpage.activity-stream.showSearch", false);
defaultPref("browser.newtabpage.enhanced", false);
defaultPref("browser.newtabpage.introShown", true);

// PREF: PDFJS Enabled with scripting disabled
defaultPref("pdfjs.disabled", false);
defaultPref("pdfjs.enableScripting", false);

// PREF: Smooth scrolling recommended for 60hz+ displays
defaultPref("general.smoothScroll", true); 					// DEFAULT
defaultPref("mousewheel.default.delta_multiplier_y", 275);  // 250-400

pref("_config.js", "End of overwritable section.");
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
pref("_config.js", "End of system-default Firefox settings.");