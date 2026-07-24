import { bible_interlinear_chapters_upload } from "./bible_interlinear_chapters_upload.mjs";
import { bible_interlinear_chapter_codes_upload } from "./bible_interlinear_chapter_codes_upload.mjs";
import { bible_interlinear_chapters_all_upload } from "./bible_interlinear_chapters_all_upload.mjs";
export async function bible_interlinear_offline_upload() {
  ("publish the original-language (Hebrew Old Testament, Greek New Testament) text to storage in the same per-chapter shape every other version uses, so `original` both reads online and downloads offline: the chapters themselves, the chapter list, then the whole-bible bundle");
  await bible_interlinear_chapters_upload();
  await bible_interlinear_chapter_codes_upload();
  await bible_interlinear_chapters_all_upload();
}
