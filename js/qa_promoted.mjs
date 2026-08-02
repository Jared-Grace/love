import { file_read_json_initialize } from "./file_read_json_initialize.mjs";
import { qa_promoted_path } from "./qa_promoted_path.mjs";
export async function qa_promoted() {
  "For each app whose waiting pieces were built out of one named commit, which commit that was and what the pieces came out as";
  "The pieces waiting to be sent carry no account of where they came from. They are the same shape whoever made them and however - built out of one commit on purpose, left over from an older build, or typed in by hand - so anybody asking whether they are sound has nothing in front of them to ask about. This is that missing account, kept beside them";
  "The short words standing for the pieces are kept alongside the commit, because a note saying only which commit was built would go on agreeing with pieces that have since been replaced by something else. Kept together, the note can be checked against what is actually there, and one that no longer matches is a note about something that is gone";
  "An empty record is written the first time rather than treated as a fault, because nothing having been built yet is the ordinary state of a thing that has just begun";
  "An app missing here means nobody built it this way - which is not the same as its pieces being wrong, only that nothing here can say they are right";
  let path = qa_promoted_path();
  let promoted = await file_read_json_initialize(path, {});
  return promoted;
}
