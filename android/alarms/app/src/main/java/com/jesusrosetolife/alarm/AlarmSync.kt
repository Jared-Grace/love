package com.jesusrosetolife.alarm

import android.content.Context
import android.content.Intent
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

/**
 * Reads the alarms contract (data/alarms.json shape) and creates a real repeating
 * Clock-app alarm for each recurring entry. One-off dated entries are skipped here;
 * a daily worker (later step) materializes those on the day they are due.
 * Returns how many recurring alarms were sent to the Clock app.
 */
fun alarms_sync_recurring(context: Context, json: String): Int {
    val alarms = JSONObject(json).getJSONArray("alarms")
    var sent = 0
    for (index in 0 until alarms.length()) {
        val alarm = alarms.getJSONObject(index)
        if (!alarm.has("days")) continue
        val days = alarm.getJSONArray("days")
        val weekdays = ArrayList<Int>()
        for (day_index in 0 until days.length()) {
            weekdays.add(DAY_TO_CALENDAR.getValue(days.getString(day_index)))
        }
        context.startActivity(
            Intent(AlarmClock.ACTION_SET_ALARM).apply {
                putExtra(AlarmClock.EXTRA_MESSAGE, alarm.getString("label"))
                putExtra(AlarmClock.EXTRA_HOUR, alarm.getInt("hour"))
                putExtra(AlarmClock.EXTRA_MINUTES, alarm.getInt("minute"))
                putExtra(AlarmClock.EXTRA_DAYS, weekdays)
                putExtra(AlarmClock.EXTRA_SKIP_UI, true)
                addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
            }
        )
        sent++
    }
    return sent
}

/** Loads the bundled assets/alarms.json. Later steps replace this with a Firebase fetch. */
fun alarms_json_from_assets(context: Context): String =
    context.assets.open("alarms.json").bufferedReader().use { it.readText() }
