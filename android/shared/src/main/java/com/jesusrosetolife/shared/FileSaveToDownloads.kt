package com.jesusrosetolife.shared

import android.content.ContentValues
import android.content.Context
import android.net.Uri
import android.os.Build
import android.provider.MediaStore
import androidx.annotation.RequiresApi
import java.io.File

/**
 * Copies a file into the phone's own Downloads folder, where the Files app and every other app
 * can find it. No permission is asked: since Android 10 an app may add to Downloads freely.
 * Marked pending while it is written, so nothing opens a half-written file.
 */
@RequiresApi(Build.VERSION_CODES.Q)
fun file_save_to_downloads(context: Context, file: File, name: String, mime: String): Uri {
    val resolver = context.contentResolver
    val values = ContentValues()
    values.put(MediaStore.Downloads.DISPLAY_NAME, name)
    values.put(MediaStore.Downloads.MIME_TYPE, mime)
    values.put(MediaStore.Downloads.IS_PENDING, 1)
    val uri = resolver.insert(MediaStore.Downloads.EXTERNAL_CONTENT_URI, values)!!
    resolver.openOutputStream(uri)!!.use { out -> file.inputStream().use { it.copyTo(out) } }
    values.clear()
    values.put(MediaStore.Downloads.IS_PENDING, 0)
    resolver.update(uri, values, null, null)
    return uri
}
