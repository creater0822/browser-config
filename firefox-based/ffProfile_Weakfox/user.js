/******************************** Custom UserChromeCSS section ********************************/
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true); // Enable Firefox to use userChome, userContent, etc.
user_pref("svg.context-properties.content.enabled", true);
user_pref("layout.css.color-mix.enabled", true);
user_pref("browser.tabs.delayHidingAudioPlayingIconMS", 0);
user_pref("layout.css.backdrop-filter.enabled", true);
user_pref("layout.css.prefers-color-scheme.content-override", 0);		// Prevent themes overriding settings pages into Light theme
// user_pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);	// Disable searching from address bar

user_pref("_user-overrides.js", "End of UserChromeCSS section.");