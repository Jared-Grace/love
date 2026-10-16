import { list_chunk } from "./list_chunk.mjs";
import { firebase_path_fix } from "./firebase_path_fix.mjs";
import { path_dirname } from "./path_dirname.mjs";
import { property_exists } from "./property_exists.mjs";
import { not } from "./not.mjs";
import { firebase_storage_folder_stored } from "./firebase_storage_folder_stored.mjs";
import { property_set } from "./property_set.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { each_async } from "./each_async.mjs";
import { firebase_upload_object_compressed_needed_is } from "./firebase_upload_object_compressed_needed_is.mjs";
import { firebase_upload_object_compressed } from "./firebase_upload_object_compressed.mjs";
import { each_unordered_async } from "./each_unordered_async.mjs";
export async function firebase_upload_object_compressed_chunked_changed(
  list,
  lambda$item,
) {
  "Writes each item's value to its own place in storage, a hundred at a time, leaving alone every file storage already holds unchanged.";
  "EACH FOLDER A DESTINATION LANDS IN IS LISTED ONCE, the first time one lands there, and a file whose checksum and settings already match is not written again. The search index rebuilt for three hundred languages once wrote nearly four million files, about nineteen dollars, writing every file whether or not it had changed.";
  "The folders of a hundred are listed one after another before any of the hundred is written, so the same folder is never listed twice at once.";
  "Listing a folder costs one charged operation per thousand files, against one per file for writing, so asking first is cheap even when everything has changed.";
  let cs = list_chunk(list, 100);
  let folders = {};
  async function folder_stored(destination) {
    let name = firebase_path_fix(destination);
    let folder = await path_dirname(name);
    let listed = property_exists(folders, folder);
    if (not(listed)) {
      let stored = await firebase_storage_folder_stored(folder);
      property_set(folders, folder, stored);
    }
    let stored2 = property_get(folders, folder);
    return stored2;
  }
  async function lambda2(c) {
    let files = list_map(c, lambda$item);
    async function folder_list(v) {
      let destination = property_get(v, "destination");
      await folder_stored(destination);
    }
    await each_async(files, folder_list);
    async function lambda4(v) {
      let value = property_get(v, "value");
      let destination = property_get(v, "destination");
      let stored = await folder_stored(destination);
      let needed = await firebase_upload_object_compressed_needed_is(
        stored,
        destination,
        value,
      );
      if (needed) {
        await firebase_upload_object_compressed(destination, value);
      }
    }
    await each_unordered_async(files, lambda4);
  }
  await each_async(cs, lambda2);
}
