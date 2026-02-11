import { ebible_version_upload } from "../../../love/public/src/ebible_version_upload.mjs";
export async function ebible_languages_add(bible_folder) {
  let r = await ebible_version_upload(bible_folder);
  return r;
}
