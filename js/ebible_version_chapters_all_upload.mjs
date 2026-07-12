import { ebible_version_chapters_all } from "./ebible_version_chapters_all.mjs";
import { ebible_version_chapters_all_upload_path } from "./ebible_version_chapters_all_upload_path.mjs";
import { firebase_upload_object_compressed } from "./firebase_upload_object_compressed.mjs";
export async function ebible_version_chapters_all_upload(version) {
  let chapters = await ebible_version_chapters_all(version);
  let destination = ebible_version_chapters_all_upload_path(version);
  await firebase_upload_object_compressed(destination, chapters);
}
