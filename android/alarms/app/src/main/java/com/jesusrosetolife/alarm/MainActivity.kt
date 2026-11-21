package com.jesusrosetolife.alarm

import android.Manifest
import android.content.Intent
import android.os.Build
import android.os.Bundle
import android.provider.Settings
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import java.text.DateFormat
import java.util.Date

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { view, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            view.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
            insets
        }
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            requestPermissions(arrayOf(Manifest.permission.POST_NOTIFICATIONS), 1)
        }

        val version = packageManager.getPackageInfo(packageName, 0).versionName
        findViewById<TextView>(R.id.version_text).text = getString(R.string.version_label, version)

        val status = findViewById<TextView>(R.id.status_text)
        val url_box = findViewById<EditText>(R.id.url_box)
        url_box.setText(meeting_alarms_url(this))
        val test_status = findViewById<TextView>(R.id.test_status_text)
        val update_status = findViewById<TextView>(R.id.update_status_text)
        findViewById<Button>(R.id.test_alarm_button).setOnClickListener {
            if (!exact_alarms_or_ask(test_status)) return@setOnClickListener
            alarm_ring_in_one_minute(this)
            test_status.text = getString(R.string.test_alarm_result)
        }
        findViewById<Button>(R.id.sync_button).setOnClickListener {
            if (!exact_alarms_or_ask(status)) return@setOnClickListener
            meeting_alarms_url_save(this, url_box.text.toString().trim())
            status.text = getString(R.string.sync_running)
            Thread {
                val result = meeting_alarms_sync(this)
                runOnUiThread { status.text = sync_text(result) }
            }.start()
        }
        findViewById<Button>(R.id.update_button).setOnClickListener {
            app_update_download_and_install(this)
            update_status.text = getString(R.string.update_result)
        }
    }

    /** True when exact alarms are allowed; otherwise opens the one settings screen that allows them, and says so under the button pressed. */
    private fun exact_alarms_or_ask(status: TextView): Boolean {
        if (meeting_alarms_exact_allowed(this)) return true
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
            startActivity(Intent(Settings.ACTION_REQUEST_SCHEDULE_EXACT_ALARM))
        }
        status.text = getString(R.string.exact_alarms_needed)
        return false
    }

    /** What the sync did, then each warning it set, in the phone's own time. */
    private fun sync_text(result: SyncResult): String {
        val lines = ArrayList<String>()
        if (result.error != null) {
            lines.add(getString(R.string.sync_error, result.error))
            if (!result.fetched && result.meetings == 0 && result.rings.isEmpty()) return lines.joinToString("\n")
            lines.add(getString(R.string.sync_kept))
        }
        lines.add(getString(R.string.sync_result, result.rings.size, result.meetings))
        val format = DateFormat.getDateTimeInstance(DateFormat.MEDIUM, DateFormat.SHORT)
        for (ring in result.rings) {
            lines.add(format.format(Date(ring.ring_at_ms)) + " — " + ring_label(this, ring.start_ms, ring.ahead_minutes))
        }
        return lines.joinToString("\n")
    }
}
