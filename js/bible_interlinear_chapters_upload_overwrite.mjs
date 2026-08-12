import { bible_interlinear_chapters_upload_generic } from "./bible_interlinear_chapters_upload_generic.mjs";
export async function bible_interlinear_chapters_upload_overwrite() {
  "publish every chapter of the original-language text, writing over what is already in storage.";
  "This is the one to reach for when the published text itself is wrong rather than merely incomplete. Its resumable twin skips a chapter it finds already there, which is exactly what makes a correction invisible: every file that needs fixing is a file that already exists, so the run finishes at once, uploads nothing, and looks like it worked.";
  let chapters = await bible_interlinear_chapters_upload_generic(false);
  return chapters;
}
