import { android_record_build_serve } from "./android_record_build_serve.mjs";
import { android_apk_upload_generic } from "./android_apk_upload_generic.mjs";
export async function android_record_build_upload() {
  "Builds the recorder app (android/record) and uploads it where its Update app button downloads from, returning that link; also puts it on the development server for a first install by cable-free download.";
  await android_record_build_serve();
  let url = await android_apk_upload_generic("record");
  return url;
}
