package com.jesusrosetolife.alarm

import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.media.AudioAttributes
import android.media.RingtoneManager
import android.os.Build
import androidx.core.app.NotificationCompat
import androidx.core.app.NotificationManagerCompat
import java.util.Date

const val RING_CHANNEL_ID = "meeting_alarms_v1"
const val RING_NOTIFICATION_ID = 1
const val ACTION_RING_STOP = "com.jesusrosetolife.alarm.RING_STOP"
const val EXTRA_LABEL = "label"

/** "Meeting at 3:00 PM (in 15 min)", in the phone's own time zone and 12/24-hour setting. */
fun ring_label(context: Context, start_ms: Long, ahead_minutes: Int): String {
    val time = android.text.format.DateFormat.getTimeFormat(context).format(Date(start_ms))
    return context.getString(R.string.ring_label, time, ahead_minutes)
}

fun ring_channel_ensure(context: Context) {
    if (Build.VERSION.SDK_INT < Build.VERSION_CODES.O) return
    val channel = NotificationChannel(RING_CHANNEL_ID, context.getString(R.string.ring_channel), NotificationManager.IMPORTANCE_HIGH)
    val attributes = AudioAttributes.Builder().setUsage(AudioAttributes.USAGE_ALARM).build()
    channel.setSound(RingtoneManager.getDefaultUri(RingtoneManager.TYPE_ALARM), attributes)
    channel.enableVibration(true)
    context.getSystemService(NotificationManager::class.java).createNotificationChannel(channel)
}

/** Rings: a notification whose alarm sound repeats until Stop, opening the ring screen over the lock screen. */
class AlarmRingReceiver : BroadcastReceiver() {
    override fun onReceive(context: Context, intent: Intent) {
        if (intent.action == ACTION_RING_STOP) {
            NotificationManagerCompat.from(context).cancel(RING_NOTIFICATION_ID)
            return
        }
        val label = ring_label(context, intent.getLongExtra(EXTRA_START_MS, 0), intent.getIntExtra(EXTRA_AHEAD_MINUTES, 0))
        ring_channel_ensure(context)
        val screen = Intent(context, RingActivity::class.java).putExtra(EXTRA_LABEL, label)
            .addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
        val screen_pending = PendingIntent.getActivity(context, 1, screen, pending_flags())
        val stop = Intent(context, AlarmRingReceiver::class.java).setAction(ACTION_RING_STOP)
        val stop_pending = PendingIntent.getBroadcast(context, 2, stop, pending_flags())
        val notification = NotificationCompat.Builder(context, RING_CHANNEL_ID)
            .setSmallIcon(android.R.drawable.ic_lock_idle_alarm)
            .setContentTitle(label)
            .setCategory(NotificationCompat.CATEGORY_ALARM)
            .setPriority(NotificationCompat.PRIORITY_MAX)
            .setSound(RingtoneManager.getDefaultUri(RingtoneManager.TYPE_ALARM), android.media.AudioManager.STREAM_ALARM)
            .setFullScreenIntent(screen_pending, true)
            .setContentIntent(screen_pending)
            .setAutoCancel(true)
            .setOngoing(true)
            .addAction(0, context.getString(R.string.ring_stop), stop_pending)
            .build()
        notification.flags = notification.flags or android.app.Notification.FLAG_INSISTENT
        try {
            NotificationManagerCompat.from(context).notify(RING_NOTIFICATION_ID, notification)
        } catch (e: SecurityException) {
            // Notifications refused: open the ring screen directly as a last resort.
            context.startActivity(screen)
        }
    }
}
