import { not_equal } from "./not_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_native_version() {
  "The version of the Android app this page is showing in, as that app says it (android/shared AppUpdateBridge.kt) - the time it was built, like 2026-11-24 21:50 - so a person can tell whether they need to update (human 2026-11-24). An app built before it could say its version answers that it is older than any that can.";
  arguments_assert(arguments, 0);
  let native = window.love_app_native;
  if (not_equal(typeof native.version, "function")) {
    let r = "older than 2026-11-24";
    return r;
  }
  let v = native.version();
  return v;
}
