import { bible_interlinear_chapter_codes_upload } from "./bible_interlinear_chapter_codes_upload.mjs";
import { bible_interlinear_chapters_all_upload } from "./bible_interlinear_chapters_all_upload.mjs";
export async function bible_interlinear_offline_upload_generic(
  chapters_upload,
) {
  "publish the original-language (Hebrew Old Testament, Greek New Testament) text to storage in the same per-chapter shape every other version uses, so `original` both reads online and downloads offline: the chapters themselves, the chapter list, then the whole-bible bundle";
  "the chapter step is the only one asked for, because it is the only one of the three that has an opinion about a file already in storage. The list and the bundle write over what they find either way, so they are the same step in both runs and need no choosing.";
  await chapters_upload();
  await bible_interlinear_chapter_codes_upload();
  await bible_interlinear_chapters_all_upload();
}
