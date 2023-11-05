/******************************** Cyfire's Arkenfox Overrides ********************************/
/** 
	# Settings in this file either involve Arkenfox overrides, or advanced (maybe feature-breaking) preferences
	
	> This Arkenfox user override assumes the usage of Firefox Enterprise policy and volatile prefs.js
	## Locked settings:
	- Enabled compact UI mode
	- Disabled browser tooltips
	- Disabled checking default browser
	- Disabled Mozilla's VPN
	- Disabled Mozilla recommendations in Settings // Addons page
	- Disabled sensors that should never be needed (ambient light, motion, orientation, proximity)
	- Disabled telemetry
	- Disabled studies
	- Disabled pocket
	- Disabled Firefox Hello metrics collection
	- Disabled GreaseMonkey telemetry (in case anyone installs it)
	- Disabled JavaScript from tampering open windows
	- Disabled SB checks for downloads (remote)
	- Disabled unnecessary animations
	- Disabled full screen delay and notice
	- Disabled PDFJS scripting
	- Defaults to compact UI by default
	
	## Default overwritable settings
	- Disabled preSkeletonUI on startup
	- Spell checker in every textbox
	- Don't close Firefox with the last tab
	- Dedicated searchbox opens in new tab
	- Don't translate English and Dutch
	- Smooth scrolling for 60Hz+ displays
	- PDFJS enabled
	- Enable useful URL-bar tools (calculator & unit conversion)
	- Bookmark settings
	- Built-in Firefox translation settings
**/

// Arkenfox override: URL bar search & enable useful engines
user_pref("keyword.enabled", true);                   			// 0801: enabled urlbar search
user_pref("browser.search.suggest.enabled", true);    			// 0804: live search suggestions
user_pref("browser.urlbar.suggest.searches", true);				// 0804: Includes search engine suggestion
user_pref("browser.urlbar.suggest.topsites", false);			// 5010: Disable dropdown suggestions with empty query

// Arkenfox override: Firefox Home settings
user_pref("browser.startup.page", 1);							// Start with the web page(s) defined as the home page(s)
user_pref("browser.startup.homepage", "about:home");			// Set home page
user_pref("browser.newtabpage.enabled", true);					// Re-enable Firefox home

// Arkenfox override: Disable sanitize
user_pref("privacy.sanitize.sanitizeOnShutdown", false);		// 2810: don't enable privacy sanitize
user_pref("privacy.cpd.history", false);              			// 2820: untick history in Ctrl-Shift-Del dialog

// Disable sites asking for permissions: Could be fingerprinted
user_pref("geo.enabled", false);								// 7001: disable APIs
user_pref("permissions.default.geo", 2);						// 7002: Block geo access
user_pref("permissions.default.xr", 2);							// 7002: Block VR access

// Arkenfox override: Fix website breakage
user_pref("privacy.resistFingerprinting", false); 				// 4501: Disable ResistFingerPrinting
user_pref("privacy.resistFingerprinting.letterboxing", false); 	// 4504 [pointless if not using RFP]
user_pref("webgl.disabled", false); 							// 4520 [mostly pointless if not using RFP]
user_pref("network.http.referer.XOriginPolicy", 0);				// 1601: cross-origin referer, use Smart Referer extension in Strict mode
user_pref("security.cert_pinning.enforcement_level", 1);		// 1223: Avoid MOZILLA_PKIX_ERROR_KEY_PINNING_FAILURE
user_pref("media.eme.enabled", true); 							// 2022: Enable DRM-content
 // user_pref("media.gmp-widevinecdm.enabled", true); // 2021 default-inactive in user.js

user_pref("_user-overrides.js", "End of Arkenfox overrides.");
/******************************** Additional privacy/security related preferences ********************************/
// PREF: Enable Encrypted client Hello
user_pref("network.dns.echconfig.enabled", true);
user_pref("network.dns.http3_echconfig.enabled", true);
user_pref("network.trr.mode", 2); 								// First. Use TRR first, and only if the name resolve fails use the native resolver as a fallback.

// PREF: Disable API's
user_pref("dom.battery.enabled", false);
user_pref("dom.gamepad.enabled", false);
user_pref("dom.vr.enabled",	false);

// PREF: Other stuff
user_pref("network.file.disable_unc_paths", false);   				// 0703: enable UNC paths
user_pref("app.update.suppressPrompts", true);						// Disable update notifications
user_pref("dom.mozTCPSocket.enabled", false);						// PREF: Disable raw TCP socket support (mozTCPSocket)
user_pref("network.manage-offline-status", false);					// Don't monitor OS online/offline connection state
user_pref("network.negotiate-auth.allow-insecure-ntlm-v1", false);	// Disallow NTLMv1 unless through HTTPS
user_pref("extensions.autoDisableScopes", 14);						// Install local extensions

user_pref("_user-overrides.js", "End of additional privacy/security related preferences.");
/******************************** Custom UserChromeCSS section ********************************/
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true); // Enable Firefox to use userChome, userContent, etc.
user_pref("svg.context-properties.content.enabled", true);
user_pref("layout.css.color-mix.enabled", true);
user_pref("browser.tabs.delayHidingAudioPlayingIconMS", 0);
user_pref("layout.css.backdrop-filter.enabled", true);
user_pref("layout.css.prefers-color-scheme.content-override", 0);		// Prevent themes overriding settings pages into Light theme
// user_pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);	// Disable searching from address bar

user_pref("_user-overrides.js", "End of UserChromeCSS section.");
/******************************** Cipher section ********************************/
// PREF: Disable null ciphers
user_pref("security.ssl3.rsa_null_sha", false);
user_pref("security.ssl3.rsa_null_md5", false);
user_pref("security.ssl3.ecdhe_rsa_null_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_null_sha", false);
user_pref("security.ssl3.ecdh_rsa_null_sha", false);
user_pref("security.ssl3.ecdh_ecdsa_null_sha", false);

// PREF: Disable SEED cipher
// https://en.wikipedia.org/wiki/SEED
user_pref("security.ssl3.rsa_seed_sha", false);

// PREF: Disable 40/56/128-bit ciphers
// 40-bit ciphers
user_pref("security.ssl3.rsa_rc4_40_md5", false);
user_pref("security.ssl3.rsa_rc2_40_md5", false);
// 56-bit ciphers
user_pref("security.ssl3.rsa_1024_rc4_56_sha", false);
// 128-bit ciphers
user_pref("security.ssl3.rsa_camellia_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha", false);
user_pref("security.ssl3.ecdh_rsa_aes_128_sha", false);
user_pref("security.ssl3.ecdh_ecdsa_aes_128_sha", false);
user_pref("security.ssl3.dhe_rsa_camellia_128_sha", false);
user_pref("security.ssl3.dhe_rsa_aes_128_sha", false);

// PREF: Disable RC4
// https://developer.mozilla.org/en-US/Firefox/Releases/38#Security
// https://bugzilla.mozilla.org/show_bug.cgi?id=1138882
// https://rc4.io/
// https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-2566
user_pref("security.ssl3.ecdh_ecdsa_rc4_128_sha", false);
user_pref("security.ssl3.ecdh_rsa_rc4_128_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_rc4_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_rc4_128_sha", false);
user_pref("security.ssl3.rsa_rc4_128_md5", false);
user_pref("security.ssl3.rsa_rc4_128_sha", false);
user_pref("security.tls.unrestricted_rc4_fallback", false);

// PREF: Disable 3DES (effective key size is < 128)
// https://en.wikipedia.org/wiki/3des#Security
// http://en.citizendium.org/wiki/Meet-in-the-middle_attack
// http://www-archive.mozilla.org/projects/security/pki/nss/ssl/fips-ssl-ciphersuites.html
user_pref("security.ssl3.dhe_dss_des_ede3_sha", false);
user_pref("security.ssl3.dhe_rsa_des_ede3_sha", false);
user_pref("security.ssl3.ecdh_ecdsa_des_ede3_sha", false);
user_pref("security.ssl3.ecdh_rsa_des_ede3_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_des_ede3_sha", false);
user_pref("security.ssl3.ecdhe_rsa_des_ede3_sha", false);
user_pref("security.ssl3.rsa_des_ede3_sha", false);
user_pref("security.ssl3.rsa_fips_des_ede3_sha", false);

// PREF: Disable ciphers with ECDH (non-ephemeral)
user_pref("security.ssl3.ecdh_rsa_aes_256_sha", false);
user_pref("security.ssl3.ecdh_ecdsa_aes_256_sha", false);

// PREF: Disable 256 bits ciphers without PFS
user_pref("security.ssl3.rsa_camellia_256_sha", false);

// PREF: Enable GCM ciphers (TLSv1.2 only)
// https://en.wikipedia.org/wiki/Galois/Counter_Mode
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_gcm_sha256", true); // 0xc02b
user_pref("security.ssl3.ecdhe_rsa_aes_128_gcm_sha256", true); // 0xc02f

// PREF: Enable ChaCha20 and Poly1305 (Firefox >= 47)
// https://www.mozilla.org/en-US/firefox/47.0/releasenotes/
// https://tools.ietf.org/html/rfc7905
// https://bugzilla.mozilla.org/show_bug.cgi?id=917571
// https://bugzilla.mozilla.org/show_bug.cgi?id=1247860
// https://cr.yp.to/chacha.html
user_pref("security.ssl3.ecdhe_ecdsa_chacha20_poly1305_sha256", true);
user_pref("security.ssl3.ecdhe_rsa_chacha20_poly1305_sha256", true);

// PREF: Disable ciphers susceptible to the logjam attack
// https://weakdh.org/
user_pref("security.ssl3.dhe_rsa_camellia_256_sha", false);
user_pref("security.ssl3.dhe_rsa_aes_256_sha", false);

// PREF: Disable ciphers with DSA (max 1024 bits)
user_pref("security.ssl3.dhe_dss_aes_128_sha", false);
user_pref("security.ssl3.dhe_dss_aes_256_sha", false);
user_pref("security.ssl3.dhe_dss_camellia_128_sha", false);
user_pref("security.ssl3.dhe_dss_camellia_256_sha", false);

/******************************** End validation ********************************/
user_pref("_user-overrides.js", "End of all Firefox settings.");