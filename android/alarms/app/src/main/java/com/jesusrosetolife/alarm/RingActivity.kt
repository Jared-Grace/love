package com.jesusrosetolife.alarm

import android.os.Build
import android.os.Bundle
import android.view.WindowManager
import android.widget.Button
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.NotificationManagerCompat

/** The ringing screen: shows which meeting, over the lock screen; Stop silences the alarm. */
class RingActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O_MR1) {
            setShowWhenLocked(true)
            setTurnScreenOn(true)
        } else {
            @Suppress("DEPRECATION")
            window.addFlags(WindowManager.LayoutParams.FLAG_SHOW_WHEN_LOCKED or WindowManager.LayoutParams.FLAG_TURN_SCREEN_ON)
        }
        setContentView(R.layout.activity_ring)
        findViewById<TextView>(R.id.ring_text).text = intent.getStringExtra(EXTRA_LABEL) ?: ""
        findViewById<Button>(R.id.ring_stop_button).setOnClickListener {
            NotificationManagerCompat.from(this).cancel(RING_NOTIFICATION_ID)
            finish()
        }
    }
}
