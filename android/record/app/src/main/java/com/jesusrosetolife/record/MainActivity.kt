package com.jesusrosetolife.record

import android.Manifest
import android.content.pm.PackageManager
import android.graphics.Canvas
import android.graphics.Color
import android.graphics.Paint
import android.graphics.Typeface
import android.os.Bundle
import android.util.Rational
import android.view.Gravity
import android.view.View
import android.view.ViewGroup.LayoutParams.MATCH_PARENT
import android.view.ViewGroup.LayoutParams.WRAP_CONTENT
import android.webkit.JavascriptInterface
import android.webkit.WebView
import android.widget.Button
import android.widget.FrameLayout
import android.widget.LinearLayout
import androidx.activity.OnBackPressedCallback
import androidx.appcompat.app.AppCompatActivity
import androidx.camera.view.PreviewView
import androidx.core.content.ContextCompat
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import com.jesusrosetolife.shared.WebShell
import com.jesusrosetolife.shared.app_update_bridge_add
import com.jesusrosetolife.shared_camera.CameraRecorder
import org.json.JSONObject
import java.io.File

// The recorder is the love bible_record page; this app adds only the camera a browser
// could not give upright. The page chooses the passage, lays out its words, plays the take
// back and sends it - the same code the website runs. When it asks to record, this opens
// the camera full screen with those words painted over it, and when the take is done it
// hands the file back to the page at WebShell.NATIVE_PREFIX + TAKE.
class MainActivity : AppCompatActivity() {
    companion object {
        const val DEV_HOST = "omnibook5ml.local"
        const val START_URL = "https://omnibook5ml.local:8443/dev/bible_record.html"
        const val TAKE = "take.mp4"
        const val PERMISSIONS_ASKED = 1
    }

    private lateinit var web: WebView
    private lateinit var camera_layer: FrameLayout
    private lateinit var record_button: Button
    private lateinit var recorder: CameraRecorder

    // What the page asked to be painted: the passage's reference and the lines and sizes
    // it laid out, for a frame `width` wide. Read on the camera's thread, set on the main one.
    @Volatile private var words: JSONObject? = null

    private val take: File get() = File(cacheDir, TAKE)

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val root = FrameLayout(this)
        web = WebShell.create(this, DEV_HOST) { name -> if (name == TAKE && take.exists()) take else null }
        web.addJavascriptInterface(Bridge(), "love_record_native")
        // Update app is offered by the page, in its Settings (human 2026-11-23).
        app_update_bridge_add(this, web, "record", "JESUS rose to life Record")
        root.addView(web, FrameLayout.LayoutParams(MATCH_PARENT, MATCH_PARENT))

        camera_layer = FrameLayout(this)
        camera_layer.setBackgroundColor(Color.BLACK)
        camera_layer.visibility = View.GONE
        val preview_view = PreviewView(this)
        // Fit, not fill: the screen shows the whole of what is recorded, so no word painted
        // near an edge is on the video but off the screen.
        preview_view.scaleType = PreviewView.ScaleType.FIT_CENTER
        preview_view.implementationMode = PreviewView.ImplementationMode.COMPATIBLE
        camera_layer.addView(preview_view, FrameLayout.LayoutParams(MATCH_PARENT, MATCH_PARENT))
        val buttons = LinearLayout(this)
        buttons.orientation = LinearLayout.HORIZONTAL
        buttons.gravity = Gravity.CENTER
        record_button = Button(this)
        record_button.text = "Record"
        record_button.setOnClickListener { record_toggle() }
        val close_button = Button(this)
        close_button.text = "Close"
        close_button.setOnClickListener { camera_close() }
        buttons.addView(record_button)
        buttons.addView(close_button)
        camera_layer.addView(buttons, FrameLayout.LayoutParams(MATCH_PARENT, WRAP_CONTENT, Gravity.TOP))
        root.addView(camera_layer, FrameLayout.LayoutParams(MATCH_PARENT, MATCH_PARENT))
        setContentView(root)
        // Android 15 draws every app under the status bar, the camera cutout and the system
        // buttons; the app is kept inside them, so nothing is hidden or untappable (human
        // 2026-11-23: the top bar was behind the camera, so no project could be chosen).
        ViewCompat.setOnApplyWindowInsetsListener(root) { view, insets ->
            val bars = insets.getInsets(WindowInsetsCompat.Type.systemBars() or WindowInsetsCompat.Type.displayCutout())
            view.setPadding(bars.left, bars.top, bars.right, bars.bottom)
            WindowInsetsCompat.CONSUMED
        }

        // 9:16 upright: the shape of a YouTube Short.
        recorder = CameraRecorder(this, preview_view, Rational(9, 16)) { canvas, w, h -> words_draw(canvas, w, h) }
        onBackPressedDispatcher.addCallback(this, object : OnBackPressedCallback(true) {
            override fun handleOnBackPressed() {
                if (camera_layer.visibility == View.VISIBLE) camera_close()
                else if (web.canGoBack()) web.goBack()
                else finish()
            }
        })
        web.loadUrl(START_URL)
    }

    inner class Bridge {
        @JavascriptInterface
        fun record_open(message: String) {
            runOnUiThread {
                words = JSONObject(message)
                camera_open()
            }
        }
    }

    private fun permissions_missing(): List<String> =
        listOf(Manifest.permission.CAMERA, Manifest.permission.RECORD_AUDIO)
            .filter { ContextCompat.checkSelfPermission(this, it) != PackageManager.PERMISSION_GRANTED }

    private fun camera_open() {
        val missing = permissions_missing()
        if (missing.isNotEmpty()) {
            requestPermissions(missing.toTypedArray(), PERMISSIONS_ASKED)
            return
        }
        camera_layer.visibility = View.VISIBLE
        record_button.text = "Record"
        recorder.open { error -> runOnUiThread { page_tell("The camera did not open: $error") } }
    }

    override fun onRequestPermissionsResult(code: Int, permissions: Array<out String>, results: IntArray) {
        super.onRequestPermissionsResult(code, permissions, results)
        if (code != PERMISSIONS_ASKED) return
        if (permissions_missing().isEmpty()) camera_open()
        else page_tell("The camera and microphone were not allowed.")
    }

    private fun record_toggle() {
        if (recorder.recording_is) {
            recorder.stop()
            return
        }
        take.delete()
        record_button.text = "Stop recording"
        recorder.start(take) { file, error ->
            camera_layer.visibility = View.GONE
            recorder.close()
            page_tell(if (file == null) error ?: "no recording" else "")
        }
    }

    private fun camera_close() {
        recorder.close()
        camera_layer.visibility = View.GONE
    }

    // Tells the page the take is ready (an empty message) or why there is none.
    private fun page_tell(error: String) {
        web.evaluateJavascript("window.love_record_native_done(${JSONObject.quote(error)})", null)
    }

    // Paints the words the page laid out, the same band the website's canvas paints: the page's
    // sizes are for a frame `width` wide, so all of them are scaled to this one.
    private fun words_draw(canvas: Canvas, w: Float, h: Float) {
        val o = words ?: return
        val k = w / o.getDouble("width").toFloat()
        val margin = o.getDouble("margin").toFloat() * k
        val size = o.getDouble("size").toFloat() * k
        val reference_size = o.getDouble("reference_size").toFloat() * k
        val line_height = o.getDouble("line_height").toFloat() * k
        val band = o.getDouble("band").toFloat() * k
        val lines = o.getJSONArray("lines")
        val top = h - band
        val shade = Paint()
        shade.color = Color.argb(140, 0, 0, 0)
        canvas.drawRect(0f, top, w, h, shade)
        val paint = Paint(Paint.ANTI_ALIAS_FLAG)
        paint.color = Color.WHITE
        paint.textSize = reference_size
        paint.typeface = Typeface.DEFAULT_BOLD
        // The page draws from the top of each line; Android draws from its baseline.
        var y = top + margin * 0.6f
        canvas.drawText(o.getString("reference"), margin, y - paint.ascent(), paint)
        paint.textSize = size
        paint.typeface = Typeface.DEFAULT
        y += reference_size * 1.4f
        for (i in 0 until lines.length()) {
            canvas.drawText(lines.getString(i), margin, y - paint.ascent(), paint)
            y += line_height
        }
    }
}
