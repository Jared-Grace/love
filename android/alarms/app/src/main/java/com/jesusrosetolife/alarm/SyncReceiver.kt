package com.jesusrosetolife.alarm

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent

/** Hourly, after a restart, and after an update: reads the address again and resets the warnings. */
class SyncReceiver : BroadcastReceiver() {
    override fun onReceive(context: Context, intent: Intent) {
        val pending = goAsync()
        Thread {
            try {
                meeting_alarms_sync(context)
            } finally {
                pending.finish()
            }
        }.start()
    }
}
