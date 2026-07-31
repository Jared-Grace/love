import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { firebase_storage_download_json_decompress_cache } from "./firebase_storage_download_json_decompress_cache.mjs";
import { property_get } from "./property_get.mjs";
export async function firebase_storage_verses_download_cache(destination) {
  "read a file of verses back off the project's storage, kept once it has been read, and hand back the verses alone";
  "everything uploaded here wraps its verses in a record, so every reader unwrapped that record itself - which is the same three lines under two names, and the name of the wrapper decided in two places rather than one";
  "the file it is kept under is what the callers differ in, so that is all they still say";
  arguments_assert(arguments, 1);
  let project_url = firebase_storage_url_project_jg();
  let record = await firebase_storage_download_json_decompress_cache(
    project_url,
    destination,
  );
  let verses = property_get(record, "verses");
  return verses;
}
