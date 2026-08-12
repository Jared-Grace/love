import { bible_interlinear_chapters_upload_generic } from "./bible_interlinear_chapters_upload_generic.mjs";
export async function bible_interlinear_chapters_upload() {
  "publish the original-language text one file per chapter, in the exact compressed shape every other version uses, so the reader fetches `bible/original/<chapter>.json` the same way it fetches any translation. Resumable: a chapter already in storage is skipped and each upload is retried, so a dropped connection mid-run only costs the current handful and re-running finishes the rest";
  "The skip is why this one cannot correct a chapter already published. Reach for the overwrite twin when the text itself changed.";
  let chapters = await bible_interlinear_chapters_upload_generic(true);
  return chapters;
}
