import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

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
        // The store refuses an upload whose number is not higher than the last, so the number
        // is the hour it was built (yyMMddHH) and rises on its own, as the version name does.
        versionCode = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyMMddHH")).toInt()
        // The version is the moment the app was built (human 2026-11-24: show the version, so
        // the person can tell whether they need to update): a time reads as newer or older at a
        // glance, and no one has to remember to raise a number by hand.
        versionName = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm"))
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_11
        targetCompatibility = JavaVersion.VERSION_11
    }
    buildFeatures {
        buildConfig = true
    }
    // The upload key: one for every app here (human 2026-11-25), kept outside the repo. Its
    // file and password are read from ~/.gradle/gradle.properties (made by
    // gitignore/android_upload_key.sh), so no secret is in git. Without them the store build
    // is left unsigned rather than failing.
    val upload_store_file = providers.gradleProperty("love_upload_store_file").orNull
    val upload_password = providers.gradleProperty("love_upload_password").orNull
    signingConfigs {
        if (upload_store_file != null && upload_password != null) {
            create("upload") {
                storeFile = file(upload_store_file)
                storePassword = upload_password
                keyAlias = "upload"
                keyPassword = upload_password
            }
        }
    }
    // Two builds of one app (human 2026-11-25: a Record Bible app for the app store). debug is
    // the owner's: it opens the development page, sends and backs up takes, and updates itself.
    // release is the store's: it opens the public site, keeps every take on the phone alone,
    // and leaves updating to the store (src/release/AndroidManifest.xml drops the permission).
    buildTypes {
        getByName("debug") {
            buildConfigField("String", "START_URL", "\"https://omnibook5ml.local:8443/dev/bible_record.html\"")
            buildConfigField("boolean", "STORE", "false")
        }
        getByName("release") {
            buildConfigField("String", "START_URL", "\"https://christarose.org/bible_record.html\"")
            buildConfigField("boolean", "STORE", "true")
            signingConfig = signingConfigs.findByName("upload")
        }
    }
}

// The store build is an app of its own, so it sits beside the owner's on one phone, each with
// its own takes. REJECTED: the same id - the two are signed by different keys, so the phone
// would refuse one while the other is installed.
androidComponents {
    onVariants(selector().withBuildType("release")) { variant ->
        variant.applicationId.set("org.christarose.record")
    }
}

dependencies {
    implementation(project(":shared_camera"))
}
