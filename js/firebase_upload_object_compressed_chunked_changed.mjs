import { list_chunk } from "./list_chunk.mjs";
import { firebase_path_fix } from "./firebase_path_fix.mjs";
import { path_dirname } from "./path_dirname.mjs";
import { equal } from "./equal.mjs";
import { firebase_storage_folder_stored } from "./firebase_storage_folder_stored.mjs";
import { property_get } from "./property_get.mjs";
import { firebase_upload_object_compressed_needed_is } from "./firebase_upload_object_compressed_needed_is.mjs";
import { firebase_upload_object_compressed } from "./firebase_upload_object_compressed.mjs";
import { each_unordered_async } from "./each_unordered_async.mjs";
import { each_async } from "./each_async.mjs";
export async function firebase_upload_object_compressed_chunked_changed(
  list,
  lambda$item,
) {
  "Writes each item's value to its own place in storage, a hundred at a time, leaving alone every file storage already holds unchanged.";
  "EACH FOLDER A DESTINATION LANDS IN IS LISTED ONCE, the first time one lands there, and a file whose checksum and settings already match is not written again. The search index rebuilt for three hundred languages once wrote nearly four million files, about nineteen dollars, writing every file whether or not it had changed.";
  "Listing a folder costs one charged operation per thousand files, against one per file for writing, so asking first is cheap even when everything has changed.";
  let cs = list_chunk(list, 100);
  let folders = {};
  async function folder_stored(destination) {
    let name = firebase_path_fix(destination);
    let folder = await path_dirname(name);
    if (equal(folders[folder], undefined)) {
      folders[folder] = await firebase_storage_folder_stored(folder);
    }
    let stored = await folders[folder];
    return stored;
  }
  async function lambda2(c) {
    async function lambda4(item) {
      let v = lambda$item(item);
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
    await each_unordered_async(c, lambda4);
  }
  await each_async(cs, lambda2);
}
