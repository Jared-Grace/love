package com.jesusrosetolife.alarm

import android.content.Context
import android.content.Intent
import android.os.Handler
import android.os.Looper
import android.provider.AlarmClock
import org.json.JSONObject
import java.util.Calendar

/** Maps the JSON day names in alarms.json to the weekday constants ACTION_SET_ALARM expects. */
val DAY_TO_CALENDAR = mapOf(
    "sun" to Calendar.SUNDAY,
    "mon" to Calendar.MONDAY,
    "tue" to Calendar.TUESDAY,
    "wed" to Calendar.WEDNESDAY,
    "thu" to Calendar.THURSDAY,
    "fri" to Calendar.FRIDAY,
    "sat" to Calendar.SATURDAY,
)

/** Pure: maps the JSON day names to the weekday constants ACTION_SET_ALARM's EXTRA_DAYS expects. */
fun days_to_calendar(days: List<String>): ArrayList<Int> {
    val weekdays = ArrayList<Int>()
    for (day in days) {
        weekdays.add(DAY_TO_CALENDAR.getValue(day))
    }
    return weekdays
}

/**
 * Reads the alarms contract (data/alarms.json shape) and creates a real repeating
 * Clock-app alarm for each recurring entry. One-off dated entries are skipped here;
 * a daily worker (later step) materializes those on the day they are due.
 * Returns how many recurring alarms were sent to the Clock app.
 */
fun alarms_sync_recurring(context: Context, json: String): Int {
    val alarms = JSONObject(json).getJSONArray("alarms")
    val handler = Handler(Looper.getMainLooper())
    var sent = 0
    for (index in 0 until alarms.length()) {
        val alarm = alarms.getJSONObject(index)
        if (!alarm.has("days")) continue
        val days = alarm.getJSONArray("days")
        val day_names = ArrayList<String>()
        for (day_index in 0 until days.length()) {
            day_names.add(days.getString(day_index))
        }
        val weekdays = days_to_calendar(day_names)
        val intent = Intent(AlarmClock.ACTION_SET_ALARM).apply {
            putExtra(AlarmClock.EXTRA_MESSAGE, alarm.getString("label"))
            putExtra(AlarmClock.EXTRA_HOUR, alarm.getInt("hour"))
            putExtra(AlarmClock.EXTRA_MINUTES, alarm.getInt("minute"))
            putExtra(AlarmClock.EXTRA_DAYS, weekdays)
            putExtra(AlarmClock.EXTRA_SKIP_UI, true)
            addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
        }
        // Space the intents ~3s apart: the Clock app needs time to finish saving one
        // alarm before the next ACTION_SET_ALARM arrives, or it drops the later ones.
        handler.postDelayed({ context.startActivity(intent) }, sent * 3000L)
        sent++
    }
    return sent
}

/** Sets a one-time Clock-app alarm one minute from now, so you can watch it actually ring. */
fun alarm_ring_in_one_minute(context: Context) {
    val soon = Calendar.getInstance()
    soon.add(Calendar.MINUTE, 1)
    context.startActivity(
        Intent(AlarmClock.ACTION_SET_ALARM).apply {
            putExtra(AlarmClock.EXTRA_MESSAGE, "Test alarm")
            putExtra(AlarmClock.EXTRA_HOUR, soon.get(Calendar.HOUR_OF_DAY))
            putExtra(AlarmClock.EXTRA_MINUTES, soon.get(Calendar.MINUTE))
            putExtra(AlarmClock.EXTRA_SKIP_UI, true)
            addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
        }
    )
}

/** Loads the bundled assets/alarms.json. Later steps replace this with a Firebase fetch. */
fun alarms_json_from_assets(context: Context): String =
    context.assets.open("alarms.json").bufferedReader().use { it.readText() }
