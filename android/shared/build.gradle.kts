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
        // The lowest any app using it supports (alarms: 21), so the library never forces one up.
        minSdk = 21
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_11
        targetCompatibility = JavaVersion.VERSION_11
    }
}

dependencies {
    api("androidx.appcompat:appcompat:1.6.1")
}
