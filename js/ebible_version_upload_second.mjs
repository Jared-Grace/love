import { ebible_chapters_upload } from "./ebible_chapters_upload.mjs";
import { ebible_version_books_upload } from "./ebible_version_books_upload.mjs";
import { ebible_offline_version_upload } from "./ebible_offline_version_upload.mjs";
export async function ebible_version_upload_second(bible_folder) {
  let books = await ebible_version_books_upload(bible_folder);
  await ebible_chapters_upload(bible_folder);
  ("also publish the offline index files so a newly added language can be kept on a device for reading with no internet");
  await ebible_offline_version_upload(bible_folder);
}
