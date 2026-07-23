package com.jesusrosetolife.alarm

import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat

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

        val version = packageManager.getPackageInfo(packageName, 0).versionName
        findViewById<TextView>(R.id.version_text).text = getString(R.string.version_label, version)

        val status = findViewById<TextView>(R.id.status_text)
        findViewById<Button>(R.id.test_alarm_button).setOnClickListener {
            alarm_ring_in_one_minute(this)
            status.text = getString(R.string.test_alarm_result)
        }
        findViewById<Button>(R.id.sync_button).setOnClickListener {
            val count = alarms_sync_recurring(this, alarms_json_from_assets(this))
            status.text = getString(R.string.sync_result, count)
        }
        findViewById<Button>(R.id.update_button).setOnClickListener {
            app_update_download_and_install(this)
            status.text = getString(R.string.update_result)
        }
    }
}
