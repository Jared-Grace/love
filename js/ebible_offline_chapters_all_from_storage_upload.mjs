import { ebible_chapters_all_from_storage } from "./ebible_chapters_all_from_storage.mjs";
import { ebible_version_chapters_all_upload_path } from "./ebible_version_chapters_all_upload_path.mjs";
import { firebase_upload_object_compressed } from "./firebase_upload_object_compressed.mjs";
export async function ebible_offline_chapters_all_from_storage_upload(
  bible_folder,
) {
  ("publish the whole-bible bundle assembled from what is already in storage; used when the local source cannot build it — missing audio-aligned text, or a versification gap");
  let chapters = await ebible_chapters_all_from_storage(bible_folder);
  let destination = ebible_version_chapters_all_upload_path(bible_folder);
  await firebase_upload_object_compressed(destination, chapters);
}
