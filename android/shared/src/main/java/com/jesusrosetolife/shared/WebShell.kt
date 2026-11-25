package com.jesusrosetolife.shared

import android.annotation.SuppressLint
import android.app.Activity
import android.content.ActivityNotFoundException
import android.content.Intent
import android.net.Uri
import android.widget.Toast
import android.net.http.SslError
import android.webkit.SslErrorHandler
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebView
import android.webkit.WebViewClient
import java.io.File
import java.io.FileInputStream
import java.net.URLConnection

// An app here is a love web page plus only what a browser cannot do, so the logic is
// written once, in the love repo's JS. This is the page half: a WebView that runs it.
object WebShell {
    // A file the native side made (a recording) is handed to the page at this path on the
    // page's own address, so the page fetches it like any other file - no copying across.
    const val NATIVE_PREFIX = "/__native/"

    // Whether an address is the app's own page (same host, same path) - the part after # or ?
    // may differ, since that is only where on the page the reader is.
    fun page_own_is(url: Uri, start_url: String): Boolean {
        val start = Uri.parse(start_url)
        return url.host == start.host && url.path == start.path
    }

    @SuppressLint("SetJavaScriptEnabled")
    fun create(activity: Activity, dev_host: String, start_url: String, native_file: (String) -> File?): WebView {
        val web = WebView(activity)
        web.settings.javaScriptEnabled = true
        web.settings.domStorageEnabled = true
        web.settings.mediaPlaybackRequiresUserGesture = false
        web.webViewClient = object : WebViewClient() {
            // A link to anywhere but the app's own page opens in the phone's browser, not in the
            // app (human 2026-11-25: the url buttons should open in a browser, not in the app) -
            // inside the app it replaced the page, with no address bar to see where it went.
            override fun shouldOverrideUrlLoading(view: WebView, request: WebResourceRequest): Boolean {
                if (page_own_is(request.url, start_url)) return false
                val intent = Intent(Intent.ACTION_VIEW, request.url)
                try {
                    activity.startActivity(intent)
                } catch (e: ActivityNotFoundException) {
                    Toast.makeText(activity, "No app on this phone opens ${request.url}", Toast.LENGTH_LONG).show()
                }
                return true
            }

            // The development server's certificate is signed by this machine, not by anyone
            // the phone trusts; it alone is let through, and every other address is refused.
            override fun onReceivedSslError(view: WebView, handler: SslErrorHandler, error: SslError) {
                if (Uri.parse(error.url).host == dev_host) handler.proceed() else handler.cancel()
            }

            override fun shouldInterceptRequest(view: WebView, request: WebResourceRequest): WebResourceResponse? {
                val path = request.url.path ?: return null
                if (!path.startsWith(NATIVE_PREFIX)) return null
                val file = native_file(path.removePrefix(NATIVE_PREFIX)) ?: return null
                val type = URLConnection.guessContentTypeFromName(file.name) ?: "application/octet-stream"
                return WebResourceResponse(type, null, 200, "OK", mapOf("Cache-Control" to "no-store"), FileInputStream(file))
            }
        }
        return web
    }
}
