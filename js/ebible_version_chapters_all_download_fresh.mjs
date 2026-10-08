import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { ebible_version_chapters_all_upload_path } from "./ebible_version_chapters_all_upload_path.mjs";
import { firebase_storage_download_generic } from "./firebase_storage_download_generic.mjs";
import { http_get_large } from "./http_get_large.mjs";
import { buffer_text_to } from "./buffer_text_to.mjs";
import { json_from } from "./json_from.mjs";
import { json_decompress_object } from "./json_decompress_object.mjs";
export async function ebible_version_chapters_all_download_fresh(version) {
  "every chapter of one version in a single file, remembering nothing; the caller decides what to keep";
  "this exists so an offline download does not leave a second copy of the entire version behind it: it is already writing every chapter where the reader will look for it, and a read-through copy of the same file would double what the download costs in room";
  "the file is fetched as a large one, so a slow connection is given the time a whole bible takes instead of being cut off at the ceiling meant for one chapter";
  let project_url = firebase_storage_url_project_jg();
  let destination = ebible_version_chapters_all_upload_path(version);
  let buffer = await firebase_storage_download_generic(
    project_url,
    destination,
    http_get_large,
  );
  let s = buffer_text_to(buffer);
  let c = json_from(s);
  let chapters = await json_decompress_object(c);
  return chapters;
}
