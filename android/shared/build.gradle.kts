// Code every app under android/ can share, so each app keeps only what is its own.
plugins {
    id("com.android.library")
}

android {
    namespace = "com.jesusrosetolife.shared"
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
    api("androidx.appcompat:appcompat:1.6.1")
    api("androidx.camera:camera-core:$camerax")
    api("androidx.camera:camera-camera2:$camerax")
    api("androidx.camera:camera-lifecycle:$camerax")
    api("androidx.camera:camera-video:$camerax")
    api("androidx.camera:camera-view:$camerax")
    api("androidx.camera:camera-effects:$camerax")
}
