import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { qa_promoted } from "./qa_promoted.mjs";
import { qa_promoted_path } from "./qa_promoted_path.mjs";
export async function qa_promoted_app_write(app_name, commit, hashes) {
  "$plain app_name";
  "$plain commit";
  "Writes down that one app's waiting pieces were built out of one named commit, and what they came out as";
  "Only the one app is touched and the rest of the note is carried across unchanged, because the apps are built one at a time by different people at overlapping moments. A note written from scratch here would say that every app other than this one had never been built, and the next reader would believe it";
  "What is written is what the building actually produced rather than what was asked for, so a note can never describe pieces that were never made";
  "The commit is written out in full, however short a form of it was handed in. Every other record of commits here is kept under the whole name, so a shortened one written down looks up as nothing at all - and reads back not as a commit written down oddly but as a commit nobody ever judged, which refuses the sending of every app waiting beside it. Measured the day this was written: one app noted under ten characters held back six others that were ready to go";
  let promoted = await qa_promoted();
  let full = await git_commit_full(commit);
  promoted[app_name] = {
    commit: full,
    hashes,
  };
  let path = qa_promoted_path();
  await file_overwrite_json(path, promoted);
  return promoted;
}
