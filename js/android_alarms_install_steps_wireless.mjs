export function android_alarms_install_steps_wireless() {
  `Put the app on the phone over Wi-Fi, no cable. The phone and this computer must be on the same Wi-Fi network:

  1. On the phone: open Settings, tap "About phone", tap "Build number" seven times to unlock Developer options
  2. Back in Settings, open "Developer options" and turn on "Wireless debugging"
  3. Tap "Wireless debugging", then "Pair device with pairing code" — the phone shows an "ipaddress:port" and a six-digit code
  4. Run adb_pair with that "ipaddress:port" and the six-digit code (one time only)
  5. Return to the "Wireless debugging" screen and note the "ipaddress:port" shown there (its port is different), then run adb_connect with it
  6. Run android_alarms_install (this builds the app and installs it over Wi-Fi)
  7. On the phone, open "JESUS rose to life Alarms" and tap "Sync alarms" — the alarms appear in the phone's Clock app`;
}
