import { user_repo_path_combine } from "./user_repo_path_combine.mjs";
import { file_copy_overwrite } from "./file_copy_overwrite.mjs";
export async function android_record_apk_serve() {
  "Puts the built recorder app (android/record) where the development server serves it, and returns the address to open on the phone to install it - so installing needs no cable. Build it first; the app is a debug build, so the phone asks to allow installing from the browser the first time.";
  let from = await user_repo_path_combine(
    "android/record/app/build/outputs/apk/debug/app-debug.apk",
  );
  let to = await user_repo_path_combine("web/dev/record.apk");
  await file_copy_overwrite(from, to);
  let r = "https://omnibook5ml.local:8443/dev/record.apk";
  return r;
}
