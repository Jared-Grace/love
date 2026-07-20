package com.jesusrosetolife.alarm

import android.app.DownloadManager
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.net.Uri
import android.os.Environment
import androidx.core.content.ContextCompat
import androidx.core.content.FileProvider
import java.io.File

/** The public link to the latest APK — same short link a browser would use. */
const val APK_URL = "https://jared-grace.web.app/alarms.apk"
const val APK_FILE_NAME = "alarms-update.apk"

/**
 * Downloads the latest APK in the background, then launches the system install prompt —
 * so updating is one tap in the app instead of re-downloading from a browser.
 */
fun app_update_download_and_install(context: Context) {
    val target = File(context.getExternalFilesDir(Environment.DIRECTORY_DOWNLOADS), APK_FILE_NAME)
    if (target.exists()) {
        target.delete()
    }
    val request = DownloadManager.Request(Uri.parse(APK_URL))
        .setTitle("Updating JESUS rose to life Alarms")
        .setDestinationInExternalFilesDir(context, Environment.DIRECTORY_DOWNLOADS, APK_FILE_NAME)
        .setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE_NOTIFY_COMPLETED)
    val manager = context.getSystemService(Context.DOWNLOAD_SERVICE) as DownloadManager
    val download_id = manager.enqueue(request)
    app_install_when_download_completes(context, download_id, target)
}

/** Waits for this one download to finish, then installs it and stops listening. */
fun app_install_when_download_completes(context: Context, download_id: Long, file: File) {
    val receiver = object : BroadcastReceiver() {
        override fun onReceive(received_context: Context, intent: Intent) {
            val finished = intent.getLongExtra(DownloadManager.EXTRA_DOWNLOAD_ID, -1L)
            if (finished != download_id) {
                return
            }
            context.unregisterReceiver(this)
            app_install_apk(context, file)
        }
    }
    val filter = IntentFilter(DownloadManager.ACTION_DOWNLOAD_COMPLETE)
    ContextCompat.registerReceiver(context, receiver, filter, ContextCompat.RECEIVER_EXPORTED)
}

/** Opens the system installer for a downloaded APK file, via a FileProvider content URI. */
fun app_install_apk(context: Context, file: File) {
    val authority = context.packageName + ".fileprovider"
    val uri = FileProvider.getUriForFile(context, authority, file)
    val intent = Intent(Intent.ACTION_VIEW).apply {
        setDataAndType(uri, "application/vnd.android.package-archive")
        addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)
        addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
    }
    context.startActivity(intent)
}
