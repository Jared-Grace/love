import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_bucket } from "./firebase_bucket.mjs";
import { photo_organizer_storage_path } from "./photo_organizer_storage_path.mjs";
import { json_from } from "./json_from.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { less_than } from "./less_than.mjs";
import { folder_private_path } from "./folder_private_path.mjs";
import { file_overwrite_buffer } from "./file_overwrite_buffer.mjs";
export async function photo_organizer_download_all() {
  "Brings every photo kept online by the photo organizer down onto this machine, each named after the folders it sits in, outermost first, joined by underscores and followed by its place in its folder - so a third photo in a folder financial inside a folder 2026_11_01_Doctor is 2026_11_01_Doctor_financial_3.jpg (human, 2026-11-27). Answers with the addresses written.";
  "The top folder, Photos, is left out of every name, since every folder sits inside it. A folder whose parent is not online yet is named from itself down. Spaces and slashes in a folder's name become underscores, so a name is always one file.";
  "They land in the private folder, outside every repo, because photos off a person's phone have no business in a public repo. The bytes are written as they are stored, so a photo turned in the organizer comes down turned, and keeps the kind it was stored as.";
  arguments_assert(arguments, 0);
  let bucket = await firebase_bucket();
  let [files] = await bucket.getFiles({
    prefix: photo_organizer_storage_path("folders", ""),
  });
  async function folder_read(item) {
    let [buffer] = await item.download();
    let json = buffer.toString();
    let parsed = json_from(json);
    return parsed;
  }
  let folders = await list_map_unordered_async(files, folder_read);
  let by_key = {};
  for (let f of folders) {
    let property_name = property_get(f, "key");
    property_set(by_key, property_name, f);
  }
  function name_of(folder) {
    let parts = [];
    let at = folder;
    while (not(null_is(at))) {
      let part = property_get(at, "name").replace(/[\s\/\\]+/g, "_");
      parts.unshift(part);
      ("A name begins with the date: once a folder named for a day, such as 2026_11_01_Doctor, is reached, the folders holding it - such as the insurer's - are left out (human, 2026-11-27). Without a dated folder above it, every folder is named.");
      if (/^\d{4}_\d{2}_\d{2}/.test(part)) {
        break;
      }
      let key = property_get_or(at, "parent", "");
      at = property_get_or(by_key, key, null);
    }
    let r = parts.join("_");
    return r;
  }
  let jobs = [];
  for (let f of folders) {
    let start = name_of(f);
    let photos = property_get(f, "photos");
    for (let i = 0; less_than(i, photos.length); i++) {
      let stored = property_get(photos[i], "name");
      let v = stored.lastIndexOf(".");
      let extension = stored.slice(v);
      let file_name = start + "_" + String(i + 1) + extension;
      jobs.push({
        stored,
        file_name,
      });
    }
  }
  async function download(job) {
    let name = property_get(job, "stored");
    let source = photo_organizer_storage_path("photos", name);
    let [buffer] = await bucket.file(source).download();
    let f_path = folder_private_path(
      "photo_organizer/" + property_get(job, "file_name"),
    );
    await file_overwrite_buffer(f_path, buffer);
    return f_path;
  }
  let written = await list_map_unordered_async(jobs, download);
  return written;
}
