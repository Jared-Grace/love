package com.jesusrosetolife.shared_camera

import android.app.Activity
import android.media.MediaCodec
import android.media.MediaExtractor
import android.media.MediaFormat
import android.net.Uri
import androidx.media3.common.MediaItem
import androidx.media3.transformer.Composition
import androidx.media3.transformer.ExportException
import androidx.media3.transformer.ExportResult
import androidx.media3.transformer.Transformer
import com.jesusrosetolife.shared.file_save_to_downloads
import java.io.File
import java.nio.ByteOrder
import kotlin.concurrent.thread
import kotlin.math.sqrt

// A copy of a recording holding only the speaking: the near-silent stretch before the first
// word and after the last is cut off (human 2026-11-24: "so that just reading is in the
// video"). The sound is measured in short windows; a window counts as speaking when it is at
// least a small share of the loudest window, so the line is drawn relative to this recording's
// own voice rather than at a fixed level a quiet reader or a loud room would get wrong.

const val SPEECH_WINDOW_MS = 50L
// A share of the loudest window's level: 0.05 is about 26 decibels below it - far under a
// spoken word, well over a quiet room's hum.
const val SPEECH_SHARE_OF_LOUDEST = 0.05
// Kept either side of the speaking, so the first word's start and the last word's end are not
// clipped by a window that measured just under the line.
const val SPEECH_PAD_MS = 300L
// A recording whose loudest window is under this level holds no voice to find, and is kept
// whole rather than cut down to a cough.
const val SPEECH_LOUDEST_FLOOR = 0.01

data class SpeechSpan(val start_ms: Long, val end_ms: Long)

/** Each window's loudness (root mean square, 0 to 1), in order; empty when there is no sound track. */
fun audio_window_levels(file: File, window_ms: Long): List<Double> {
    val extractor = MediaExtractor()
    extractor.setDataSource(file.absolutePath)
    var track = -1
    for (i in 0 until extractor.trackCount) {
        val mime = extractor.getTrackFormat(i).getString(MediaFormat.KEY_MIME) ?: ""
        if (mime.startsWith("audio/")) {
            track = i
            break
        }
    }
    if (track < 0) {
        extractor.release()
        return emptyList()
    }
    extractor.selectTrack(track)
    val format = extractor.getTrackFormat(track)
    val codec = MediaCodec.createDecoderByType(format.getString(MediaFormat.KEY_MIME)!!)
    codec.configure(format, null, null, 0)
    codec.start()
    var sample_rate = format.getInteger(MediaFormat.KEY_SAMPLE_RATE)
    var channels = format.getInteger(MediaFormat.KEY_CHANNEL_COUNT)
    var window_frames = (sample_rate * window_ms / 1000).toInt()
    val levels = ArrayList<Double>()
    var sum = 0.0
    var count = 0
    val info = MediaCodec.BufferInfo()
    var input_done = false
    var output_done = false
    while (!output_done) {
        if (!input_done) {
            val i = codec.dequeueInputBuffer(10_000)
            if (i >= 0) {
                val buffer = codec.getInputBuffer(i)!!
                val size = extractor.readSampleData(buffer, 0)
                if (size < 0) {
                    codec.queueInputBuffer(i, 0, 0, 0, MediaCodec.BUFFER_FLAG_END_OF_STREAM)
                    input_done = true
                } else {
                    codec.queueInputBuffer(i, 0, size, extractor.sampleTime, 0)
                    extractor.advance()
                }
            }
        }
        val o = codec.dequeueOutputBuffer(info, 10_000)
        if (o == MediaCodec.INFO_OUTPUT_FORMAT_CHANGED) {
            sample_rate = codec.outputFormat.getInteger(MediaFormat.KEY_SAMPLE_RATE)
            channels = codec.outputFormat.getInteger(MediaFormat.KEY_CHANNEL_COUNT)
            window_frames = (sample_rate * window_ms / 1000).toInt()
        } else if (o >= 0) {
            val out = codec.getOutputBuffer(o)!!
            out.position(info.offset)
            out.limit(info.offset + info.size)
            val samples = out.order(ByteOrder.nativeOrder()).asShortBuffer()
            while (samples.remaining() >= channels) {
                var frame = 0.0
                for (c in 0 until channels) {
                    val v = samples.get() / 32768.0
                    frame += v * v
                }
                sum += frame / channels
                count += 1
                if (count >= window_frames) {
                    levels.add(sqrt(sum / count))
                    sum = 0.0
                    count = 0
                }
            }
            codec.releaseOutputBuffer(o, false)
            if (info.flags and MediaCodec.BUFFER_FLAG_END_OF_STREAM != 0) {
                output_done = true
            }
        }
    }
    codec.stop()
    codec.release()
    extractor.release()
    return levels
}

/** Where the speaking starts and ends, with a little kept either side; null when there is no voice to find. */
fun video_speech_span_or_null(file: File): SpeechSpan? {
    val levels = audio_window_levels(file, SPEECH_WINDOW_MS)
    val loudest = levels.maxOrNull() ?: return null
    if (loudest < SPEECH_LOUDEST_FLOOR) {
        return null
    }
    val line = loudest * SPEECH_SHARE_OF_LOUDEST
    val first = levels.indexOfFirst { it >= line }
    val last = levels.indexOfLast { it >= line }
    val total_ms = levels.size * SPEECH_WINDOW_MS
    val start_ms = maxOf(0L, first * SPEECH_WINDOW_MS - SPEECH_PAD_MS)
    val end_ms = minOf(total_ms, (last + 1) * SPEECH_WINDOW_MS + SPEECH_PAD_MS)
    return SpeechSpan(start_ms, end_ms)
}

/** Writes the part of input between span's ends to output as MP4. Must be called on the main thread. */
fun video_trim(activity: Activity, input: File, output: File, span: SpeechSpan, done: (String?) -> Unit) {
    val clipping = MediaItem.ClippingConfiguration.Builder()
        .setStartPositionMs(span.start_ms)
        .setEndPositionMs(span.end_ms)
        .build()
    val item = MediaItem.Builder().setUri(Uri.fromFile(input)).setClippingConfiguration(clipping).build()
    val transformer = Transformer.Builder(activity)
        .addListener(object : Transformer.Listener {
            override fun onCompleted(composition: Composition, result: ExportResult) {
                done(null)
            }

            override fun onError(composition: Composition, result: ExportResult, exception: ExportException) {
                done(exception.message ?: "the video could not be cut")
            }
        })
        .build()
    output.delete()
    transformer.start(item, output.absolutePath)
}

/**
 * Saves a copy of input holding only the speaking to the phone's Downloads, named name, and
 * hands done what to tell the person. A recording with no voice to find is saved whole, and
 * says so, rather than refused.
 */
fun video_speech_trim_save(activity: Activity, input: File, name: String, done: (String) -> Unit) {
    thread {
        val span = try {
            video_speech_span_or_null(input)
        } catch (e: Exception) {
            null
        }
        activity.runOnUiThread {
            if (span == null) {
                file_save_to_downloads(activity, input, name, "video/mp4")
                done("Saved to Downloads, whole - no voice was found to trim to: $name")
                return@runOnUiThread
            }
            val trimmed = File(activity.cacheDir, "trimmed.mp4")
            video_trim(activity, input, trimmed, span) { error ->
                if (error != null) {
                    done("Not saved: $error")
                } else {
                    file_save_to_downloads(activity, trimmed, name, "video/mp4")
                    done("Saved to Downloads: $name")
                }
            }
        }
    }
}
