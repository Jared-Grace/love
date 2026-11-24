plugins {
    id("com.android.application")
}

android {
    namespace = "com.jesusrosetolife.record"
    compileSdk {
        version = release(36)
    }
    defaultConfig {
        applicationId = "com.jesusrosetolife.record"
        minSdk = 29
        targetSdk = 36
        versionCode = 1
        // The version is the moment the app was built (human 2026-11-24: show the version, so
        // the person can tell whether they need to update): a time reads as newer or older at a
        // glance, and no one has to remember to raise a number by hand.
        versionName = java.time.LocalDateTime.now()
            .format(java.time.format.DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm"))
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_11
        targetCompatibility = JavaVersion.VERSION_11
    }
}

dependencies {
    implementation(project(":shared_camera"))
}
