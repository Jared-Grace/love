import { ebible_chapters_all_plain } from "./ebible_chapters_all_plain.mjs";
import { ebible_version_chapters_all_upload_path } from "./ebible_version_chapters_all_upload_path.mjs";
import { firebase_upload_object_compressed } from "./firebase_upload_object_compressed.mjs";
export async function ebible_offline_chapters_all_plain_upload(bible_folder) {
  ("publish the whole-bible bundle built with the plain verse reader; used when the audio-aligned build cannot run — no recording for this version, or a versification gap");
  let chapters = await ebible_chapters_all_plain(bible_folder);
  let destination = ebible_version_chapters_all_upload_path(bible_folder);
  await firebase_upload_object_compressed(destination, chapters);
}
