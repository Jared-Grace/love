import { bible_interlinear_chapters_upload_overwrite } from "./bible_interlinear_chapters_upload_overwrite.mjs";
import { bible_interlinear_offline_upload_generic } from "./bible_interlinear_offline_upload_generic.mjs";
export async function bible_interlinear_offline_upload_overwrite() {
  "republish the whole original-language text over what is already in storage: the chapters, the chapter list, then the whole-bible bundle.";
  "This is the correcting run. The ordinary one leaves a chapter it finds already published exactly as it was, which is the right answer for an interrupted upload and the wrong one for a text that has changed.";
  await bible_interlinear_offline_upload_generic(
    bible_interlinear_chapters_upload_overwrite,
  );
}
