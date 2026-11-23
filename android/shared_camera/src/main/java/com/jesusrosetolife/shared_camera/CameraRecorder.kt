package com.jesusrosetolife.shared_camera

import android.annotation.SuppressLint
import android.graphics.Canvas
import android.graphics.Color
import android.graphics.Matrix
import android.graphics.PorterDuff
import android.graphics.RectF
import android.os.Handler
import android.os.Looper
import android.util.Rational
import android.view.Surface
import androidx.appcompat.app.AppCompatActivity
import androidx.camera.core.CameraEffect
import androidx.camera.core.CameraSelector
import androidx.camera.core.MirrorMode
import androidx.camera.core.Preview
import androidx.camera.core.UseCaseGroup
import androidx.camera.core.ViewPort
import androidx.camera.effects.Frame
import androidx.camera.effects.OverlayEffect
import androidx.camera.lifecycle.ProcessCameraProvider
import androidx.camera.video.FallbackStrategy
import androidx.camera.video.FileOutputOptions
import androidx.camera.video.Quality
import androidx.camera.video.QualitySelector
import androidx.camera.video.Recorder
import androidx.camera.video.Recording
import androidx.camera.video.VideoCapture
import androidx.camera.video.VideoRecordEvent
import androidx.camera.view.PreviewView
import androidx.core.content.ContextCompat
import java.io.File

// The front camera, upright and whole, recorded with whatever `draw` paints over it.
// What `draw` paints goes into the live picture and the saved video alike, so the take
// is exactly what was on the screen. It is mirrored like a selfie camera in both.
// `draw` is handed an upright canvas and its width and height: it never deals with how
// the camera's sensor happens to be turned.
// Its own library, apart from android/shared, so an app with no camera carries none of it.
// `aspect` is the upright shape of the take (9:16 for a YouTube Short). The camera's picture
// is wider than that, and the video keeps only its centre; the screen is made to keep the same
// centre (a ViewPort), and `draw` is handed only that centre, so nothing painted falls in the
// part the video cuts off (human 2026-11-23: the sent take lost each line's first and last letters).
class CameraRecorder(
    private val activity: AppCompatActivity,
    private val preview_view: PreviewView,
    private val aspect: Rational,
    private val draw: (Canvas, Float, Float) -> Unit,
) {
    private var provider: ProcessCameraProvider? = null
    private var video: VideoCapture<Recorder>? = null
    private var recording: Recording? = null

    val recording_is: Boolean get() = recording != null

    fun open(failed: (String) -> Unit) {
        val future = ProcessCameraProvider.getInstance(activity)
        future.addListener({
            val p = future.get()
            provider = p
            val preview = Preview.Builder().build()
            preview.setSurfaceProvider(preview_view.surfaceProvider)
            val quality = QualitySelector.from(Quality.FHD, FallbackStrategy.lowerQualityOrHigherThan(Quality.SD))
            val recorder = Recorder.Builder().setQualitySelector(quality).build()
            val v = VideoCapture.Builder(recorder).setMirrorMode(MirrorMode.MIRROR_MODE_ON_FRONT_ONLY).build()
            video = v
            val effect = OverlayEffect(
                CameraEffect.PREVIEW or CameraEffect.VIDEO_CAPTURE, 0, Handler(Looper.getMainLooper()),
            ) { error -> failed(error.message ?: error.toString()) }
            effect.setOnDrawListener { frame -> paint(frame); true }
            val port = ViewPort.Builder(aspect, Surface.ROTATION_0).build()
            val group = UseCaseGroup.Builder().setViewPort(port)
                .addUseCase(preview).addUseCase(v).addEffect(effect).build()
            p.unbindAll()
            p.bindToLifecycle(activity, CameraSelector.DEFAULT_FRONT_CAMERA, group)
        }, ContextCompat.getMainExecutor(activity))
    }

    fun close() {
        recording?.stop()
        provider?.unbindAll()
    }

    // The microphone permission is asked for by the activity before the camera is opened.
    @SuppressLint("MissingPermission")
    fun start(file: File, done: (File?, String?) -> Unit) {
        val v = video ?: return done(null, "the camera is not open")
        val options = FileOutputOptions.Builder(file).build()
        recording = v.output.prepareRecording(activity, options).withAudioEnabled()
            .start(ContextCompat.getMainExecutor(activity)) { event ->
                if (event is VideoRecordEvent.Finalize) {
                    recording = null
                    if (event.hasError()) done(null, "recording error ${event.error}") else done(file, null)
                }
            }
    }

    fun stop() {
        recording?.stop()
    }

    // The camera's picture arrives turned the way the sensor sits; the canvas is turned to
    // match, so `draw` works upright, and pre-mirrored where the picture will be mirrored,
    // so the words read the right way round once it is.
    private fun paint(frame: Frame) {
        val canvas = frame.overlayCanvas
        canvas.drawColor(Color.TRANSPARENT, PorterDuff.Mode.CLEAR)
        val r = frame.rotationDegrees
        val sideways = r % 180 != 0
        val w = (if (sideways) frame.size.height else frame.size.width).toFloat()
        val h = (if (sideways) frame.size.width else frame.size.height).toFloat()
        val m = Matrix()
        if (frame.isMirroring) m.postScale(-1f, 1f, w / 2f, h / 2f)
        m.postRotate(-r.toFloat())
        val box = RectF(0f, 0f, w, h)
        m.mapRect(box)
        m.postTranslate(-box.left, -box.top)
        // The centre of the upright picture the take keeps: as tall as the picture and
        // narrowed to `aspect`, or as wide and shortened, whichever fits inside it.
        val want = aspect.toFloat()
        val kept_w = if (w / h > want) h * want else w
        val kept_h = if (w / h > want) h else w / want
        canvas.save()
        canvas.concat(m)
        canvas.translate((w - kept_w) / 2f, (h - kept_h) / 2f)
        draw(canvas, kept_w, kept_h)
        canvas.restore()
    }
}
