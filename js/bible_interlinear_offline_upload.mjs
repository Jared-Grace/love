import { bible_interlinear_chapters_upload } from "./bible_interlinear_chapters_upload.mjs";
import { bible_interlinear_offline_upload_generic } from "./bible_interlinear_offline_upload_generic.mjs";
export async function bible_interlinear_offline_upload() {
  "publish the original-language (Hebrew Old Testament, Greek New Testament) text to storage in the same per-chapter shape every other version uses, so `original` both reads online and downloads offline: the chapters themselves, the chapter list, then the whole-bible bundle";
  "a chapter already in storage is left alone, so this finishes an interrupted run and cannot correct a published one. The overwrite twin is the correcting run.";
  await bible_interlinear_offline_upload_generic(
    bible_interlinear_chapters_upload,
  );
}
