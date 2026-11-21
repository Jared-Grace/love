package com.jesusrosetolife.alarm

import android.app.AlarmManager
import android.app.PendingIntent
import android.content.Context
import android.content.Intent

const val TEST_REQUEST_CODE = 899_999

/**
 * Sets one test warning through the same ringing path as a real meeting: it rings in one
 * minute for a pretend meeting starting a minute after that. Kept apart from the synced
 * warnings, so a sync never removes it.
 */
fun alarm_ring_in_one_minute(context: Context) {
    val ring_at = System.currentTimeMillis() + 60_000L
    val intent = Intent(context, AlarmRingReceiver::class.java)
        .putExtra(EXTRA_START_MS, ring_at + 60_000L)
        .putExtra(EXTRA_AHEAD_MINUTES, 1)
    val pending = PendingIntent.getBroadcast(context, TEST_REQUEST_CODE, intent, pending_flags())
    val show = PendingIntent.getActivity(context, 0, Intent(context, MainActivity::class.java), pending_flags())
    val manager = context.getSystemService(Context.ALARM_SERVICE) as AlarmManager
    manager.setAlarmClock(AlarmManager.AlarmClockInfo(ring_at, show), pending)
}
