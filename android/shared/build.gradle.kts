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
    api("androidx.appcompat:appcompat:1.6.1")
}
