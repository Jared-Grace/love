package com.jesusrosetolife.shared

import android.app.Activity
import android.webkit.JavascriptInterface
import android.webkit.WebView

// Lets the web page an app shows offer "Update app" itself, in its own Settings, instead of the
// app drawing a button of its own over or under the page (human 2026-11-23). The page sees a
// love_app_native object only inside an app that added this, so a browser never offers it.
// The name is shared by every app, so one Settings entry in the page serves them all.
const val APP_UPDATE_BRIDGE_NAME = "love_app_native"

fun app_update_bridge_add(activity: Activity, web: WebView, folder: String, title: String) {
    web.addJavascriptInterface(AppUpdateBridge(activity, folder, title), APP_UPDATE_BRIDGE_NAME)
}

class AppUpdateBridge(private val activity: Activity, private val folder: String, private val title: String) {
    @JavascriptInterface
    fun update() {
        activity.runOnUiThread { app_update_download_and_install(activity, folder, title) }
    }

    // The installed version, so the page can show it beside Update app (human 2026-11-24).
    @JavascriptInterface
    fun version(): String =
        activity.packageManager.getPackageInfo(activity.packageName, 0).versionName ?: ""
}
