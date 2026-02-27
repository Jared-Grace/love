import { ebible_chapters_upload_refresh } from "../../../love/public/src/ebible_chapters_upload_refresh.mjs";
export async function sandbox() {
  let bible_folder = "engbsb";
  await ebible_chapters_upload_refresh(bible_folder);
}
