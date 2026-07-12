import { ebible_version_upload_second } from "./ebible_version_upload_second.mjs";
import { ebible_verses_upload } from "./ebible_verses_upload.mjs";
export async function ebible_version_upload(bible_folder) {
  await ebible_verses_upload(bible_folder);
  await ebible_version_upload_second(bible_folder);
}
