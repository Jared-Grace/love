package com.jesusrosetolife.shared

import android.app.Activity
import android.content.Context
import android.webkit.WebView

// The love pages keep where you are in the address itself (the part after #: chapter, verse),
// so an app that reopens its plain start address forgets the passage (human 2026-11-23: moved
// to Psalms, reopened the app, back at Romans). The app keeps the address it was last showing
// and opens that instead. Only an address on the app's own start page is reopened, so a link
// followed elsewhere never becomes where the app starts.
const val WEB_URL_MEMORY_FILE = "web_url_memory"
const val WEB_URL_MEMORY_KEY = "last_url"

fun web_url_remember(activity: Activity, web: WebView) {
    val url = web.url ?: return
    activity.getSharedPreferences(WEB_URL_MEMORY_FILE, Context.MODE_PRIVATE)
        .edit().putString(WEB_URL_MEMORY_KEY, url).apply()
}

fun web_url_remembered_or_start(activity: Activity, start_url: String): String {
    val last = activity.getSharedPreferences(WEB_URL_MEMORY_FILE, Context.MODE_PRIVATE)
        .getString(WEB_URL_MEMORY_KEY, null) ?: return start_url
    if (last.startsWith(start_url)) {
        return last
    }
    return start_url
}
