import { multiply } from "./multiply.mjs";
import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function app_bible_record_native_download(blob, name) {
  "$plain name";
  "Hands a take to the Android app this page is running inside (android/record), which saves a copy cut down to the speaking - the near-silent stretch before the first word and after the last taken off - to the phone's Downloads, named name (human 2026-11-24: download a passage's video, so that just reading is in it). A page can hand the app only text, so the file goes over in base64 pieces; each piece is a whole number of three-byte groups, so it decodes on its own.";
  arguments_assert(arguments, 2);
  let native = window.love_record_native;
  native.download_begin(name);
  let left = multiply(3, 256);
  let piece = multiply(left, 1024);
  for (let at = 0; less_than(at, blob.size); at += piece) {
    let part = blob.slice(at, at + piece);
    let data_url = await new Promise(function lambda(resolve) {
      let reader = new FileReader();
      reader.onload = function lambda2() {
        resolve(reader.result);
      };
      reader.readAsDataURL(part);
    });
    let base = data_url.slice(data_url.indexOf(",") + 1);
    native.download_piece(base);
  }
  native.download_end();
}
