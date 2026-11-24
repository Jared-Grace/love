// The camera code an app under android/ can share; kept apart from android/shared so an app
// with no camera (alarms) does not carry the camera libraries.
plugins {
    id("com.android.library")
}

android {
    namespace = "com.jesusrosetolife.shared_camera"
    compileSdk {
        version = release(36)
    }
    defaultConfig {
        minSdk = 29
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_11
        targetCompatibility = JavaVersion.VERSION_11
    }
}

dependencies {
    val camerax = "1.4.2"
    api(project(":shared"))
    api("androidx.camera:camera-core:$camerax")
    api("androidx.camera:camera-camera2:$camerax")
    api("androidx.camera:camera-lifecycle:$camerax")
    api("androidx.camera:camera-video:$camerax")
    api("androidx.camera:camera-view:$camerax")
    api("androidx.camera:camera-effects:$camerax")
    // Cuts a recording down to its speaking (VideoSpeechTrim.kt).
    api("androidx.media3:media3-transformer:1.5.1")
}
