package com.jesusrosetolife.alarm

import android.app.AlarmManager
import android.app.PendingIntent
import android.content.Context
import android.content.Intent
import android.os.Build
import org.json.JSONObject
import java.net.HttpURLConnection
import java.net.URL

const val PREFS_NAME = "meeting_alarms"
const val PREF_URL = "url"
const val PREF_LAST_JSON = "last_json"
const val PREF_RING_COUNT = "ring_count"
const val DEFAULT_ALARMS_URL = "https://christarose.org/calendar/api/alarms?host=jm"
const val EXTRA_START_MS = "start_ms"
const val EXTRA_AHEAD_MINUTES = "ahead_minutes"
const val SYNC_REQUEST_CODE = 900_000

/** What a sync did: how many warnings and meetings it set, or why it read nothing new. */
data class SyncResult(val fetched: Boolean, val error: String?, val rings: List<MeetingRing>, val meetings: Int)

/** PendingIntent flags: immutable where the phone knows the word (Android 6 and up). */
fun pending_flags(): Int =
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE
    else PendingIntent.FLAG_UPDATE_CURRENT

fun meeting_alarms_url(context: Context): String =
    context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE).getString(PREF_URL, DEFAULT_ALARMS_URL)!!

fun meeting_alarms_url_save(context: Context, url: String) {
    context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE).edit().putString(PREF_URL, url).apply()
}

/** Reads the address; throws on anything but a 200 answer. */
fun meeting_alarms_fetch(url: String): String {
    val connection = URL(url).openConnection() as HttpURLConnection
    connection.connectTimeout = 15_000
    connection.readTimeout = 15_000
    try {
        val status = connection.responseCode
        if (status != 200) throw IllegalStateException("the address answered $status")
        return connection.inputStream.bufferedReader().use { it.readText() }
    } finally {
        connection.disconnect()
    }
}

/** Reads the alarms file (format: see the alarms_format string) into its warnings. */
fun meeting_rings_from_json(json: String, now_ms: Long): Pair<List<MeetingRing>, Int> {
    val meetings_json = JSONObject(json).getJSONArray("meetings")
    val meetings = ArrayList<MeetingWarnings>()
    for (index in 0 until meetings_json.length()) {
        val meeting = meetings_json.getJSONObject(index)
        val ahead_json = meeting.getJSONArray("ahead_minutes")
        val ahead = ArrayList<Int>()
        for (ahead_index in 0 until ahead_json.length()) ahead.add(ahead_json.getInt(ahead_index))
        meetings.add(MeetingWarnings(utc_iso_to_ms(meeting.getString("start_utc")), ahead))
    }
    val upcoming = meetings.count { it.start_ms > now_ms }
    return Pair(meeting_rings(meetings, now_ms), upcoming)
}

fun ring_pending_intent(context: Context, index: Int, ring: MeetingRing?): PendingIntent {
    val intent = Intent(context, AlarmRingReceiver::class.java)
    if (ring != null) {
        intent.putExtra(EXTRA_START_MS, ring.start_ms)
        intent.putExtra(EXTRA_AHEAD_MINUTES, ring.ahead_minutes)
    }
    return PendingIntent.getBroadcast(context, index, intent, pending_flags())
}

/** Whether the phone lets this app ring at an exact minute. */
fun meeting_alarms_exact_allowed(context: Context): Boolean {
    if (Build.VERSION.SDK_INT < Build.VERSION_CODES.S) return true
    return context.getSystemService(AlarmManager::class.java).canScheduleExactAlarms()
}

/**
 * Replaces every warning this app set before with exactly these, so a cancelled meeting
 * stops ringing on the next sync.
 */
fun meeting_alarms_set(context: Context, rings: List<MeetingRing>) {
    val manager = context.getSystemService(Context.ALARM_SERVICE) as AlarmManager
    val prefs = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
    val old_count = prefs.getInt(PREF_RING_COUNT, 0)
    for (index in 0 until old_count) manager.cancel(ring_pending_intent(context, index, null))
    val show = PendingIntent.getActivity(context, 0, Intent(context, MainActivity::class.java), pending_flags())
    for ((index, ring) in rings.withIndex()) {
        manager.setAlarmClock(AlarmManager.AlarmClockInfo(ring.ring_at_ms, show), ring_pending_intent(context, index, ring))
    }
    prefs.edit().putInt(PREF_RING_COUNT, rings.size).apply()
}

/** Checks the address again about every hour, and after the phone restarts. */
fun meeting_alarms_hourly_set(context: Context) {
    val manager = context.getSystemService(Context.ALARM_SERVICE) as AlarmManager
    val intent = PendingIntent.getBroadcast(context, SYNC_REQUEST_CODE, Intent(context, SyncReceiver::class.java), pending_flags())
    manager.setInexactRepeating(
        AlarmManager.RTC, System.currentTimeMillis() + AlarmManager.INTERVAL_HOUR, AlarmManager.INTERVAL_HOUR, intent
    )
}

/**
 * Reads the address and sets its warnings. Runs off the main thread (network).
 * When the address can't be read, the last file read is used again, so a phone
 * restarted with no signal still rings for the meetings it already knew.
 */
fun meeting_alarms_sync(context: Context): SyncResult {
    val prefs = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
    var json: String? = null
    var error: String? = null
    try {
        val fetched = meeting_alarms_fetch(meeting_alarms_url(context))
        meeting_rings_from_json(fetched, System.currentTimeMillis())
        json = fetched
        prefs.edit().putString(PREF_LAST_JSON, fetched).apply()
    } catch (e: Exception) {
        error = e.message ?: e.javaClass.simpleName
    }
    val used = json ?: prefs.getString(PREF_LAST_JSON, null) ?: return SyncResult(false, error, listOf(), 0)
    val (rings, meetings) = meeting_rings_from_json(used, System.currentTimeMillis())
    meeting_alarms_set(context, rings)
    meeting_alarms_hourly_set(context)
    return SyncResult(json != null, error, rings, meetings)
}
