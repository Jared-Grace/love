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
        versionName = "0.1"
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_11
        targetCompatibility = JavaVersion.VERSION_11
    }
}

dependencies {
    implementation(project(":shared"))
}
