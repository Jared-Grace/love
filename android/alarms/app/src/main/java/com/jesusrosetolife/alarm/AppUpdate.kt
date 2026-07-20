package com.jesusrosetolife.alarm

import android.app.DownloadManager
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.net.Uri
import android.os.Build
import android.os.Environment
import android.provider.Settings
import android.widget.Toast
import androidx.core.content.ContextCompat
import androidx.core.content.FileProvider
import java.io.File

/** Direct storage link — NOT the /alarms.apk redirect, which DownloadManager can fail to follow. */
const val APK_URL =
    "https://firebasestorage.googleapis.com/v0/b/jared-grace.firebasestorage.app/o/http%2Falarms%2Fapp-debug.apk?alt=media"
const val APK_FILE_NAME = "alarms-update.apk"

/** Entry point for the Update button: grants install permission first, then downloads and installs. */
fun app_update_download_and_install(context: Context) {
    if (!app_can_install_updates(context)) {
        app_request_install_permission(context)
        return
    }
    app_update_download(context)
}

/** Whether this app is allowed to install APKs (needed to install its own updates). */
fun app_can_install_updates(context: Context): Boolean {
    if (Build.VERSION.SDK_INT < Build.VERSION_CODES.O) {
        return true
    }
    return context.packageManager.canRequestPackageInstalls()
}

/** Sends the user to the one screen where they allow this app to install updates. */
fun app_request_install_permission(context: Context) {
    Toast.makeText(
        context,
        "Turn on \"Allow from this source\", then tap Update app again",
        Toast.LENGTH_LONG,
    ).show()
    val intent = Intent(
        Settings.ACTION_MANAGE_UNKNOWN_APP_SOURCES,
        Uri.parse("package:" + context.packageName),
    ).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
    context.startActivity(intent)
}

/** Downloads the latest APK, then installs it when the download finishes. */
fun app_update_download(context: Context) {
    val target = File(context.getExternalFilesDir(Environment.DIRECTORY_DOWNLOADS), APK_FILE_NAME)
    if (target.exists()) {
        target.delete()
    }
    val request = DownloadManager.Request(Uri.parse(APK_URL))
        .setTitle("Updating JESUS rose to life Alarms")
        .setMimeType("application/vnd.android.package-archive")
        .setDestinationInExternalFilesDir(context, Environment.DIRECTORY_DOWNLOADS, APK_FILE_NAME)
        .setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE_NOTIFY_COMPLETED)
    val manager = context.getSystemService(Context.DOWNLOAD_SERVICE) as DownloadManager
    val download_id = manager.enqueue(request)
    app_install_when_download_completes(context, download_id, target)
}

/** Waits for this one download, then installs it — or says so out loud if it failed. */
fun app_install_when_download_completes(context: Context, download_id: Long, file: File) {
    val receiver = object : BroadcastReceiver() {
        override fun onReceive(received_context: Context, intent: Intent) {
            val finished = intent.getLongExtra(DownloadManager.EXTRA_DOWNLOAD_ID, -1L)
            if (finished != download_id) {
                return
            }
            context.unregisterReceiver(this)
            if (file.exists() && file.length() > 0L) {
                app_install_apk(context, file)
            } else {
                Toast.makeText(
                    context,
                    "Update download failed — check your connection and try again",
                    Toast.LENGTH_LONG,
                ).show()
            }
        }
    }
    val filter = IntentFilter(DownloadManager.ACTION_DOWNLOAD_COMPLETE)
    ContextCompat.registerReceiver(context, receiver, filter, ContextCompat.RECEIVER_EXPORTED)
}

/** Opens the system installer for a downloaded APK, via a FileProvider content URI. */
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
