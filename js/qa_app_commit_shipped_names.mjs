import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { qa_build_copy_name } from "./qa_build_copy_name.mjs";
import { qa_snapshot_ensure_named } from "./qa_snapshot_ensure_named.mjs";
import { node_run_lines_whole } from "./node_run_lines_whole.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { json_parse_try } from "./json_parse_try.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
export async function qa_app_commit_shipped_names(search, commit) {
  "$plain search";
  "$plain commit";
  "Everything one app ships at ONE NAMED COMMIT, worked out inside a frozen copy of that commit rather than off the folder everybody is editing. Read-only.";
  "ITS NEIGHBOUR READS THE FOLDER AS IT STANDS, AND THAT IS THE ONE LIVE READ LEFT IN A DEPLOYMENT. The gates are already judged in a frozen copy and filed against a commit; the build already happens in a frozen copy of the commit and the very pieces it made are what go out. The walk that decides WHICH names an app ships was the last step still asking the working folder, so a deployment of a commit was being judged partly on somebody else's half-saved work.";
  "IT DOES NOT MERELY GIVE A WRONG ANSWER - IT THROWS, AND THE THROW LOOKS LIKE THE APP'S FAULT. Measured 2026-09-06 during a ninth attempt to send one app: a neighbour had added a chapter to a list and had not yet written the file that chapter names. At HEAD the list named it zero times and was whole; in the folder the name was there and the file was not. The walk followed the name, found no file, and stopped the deployment - reporting a missing function, which reads as the app being broken. Two of nine attempts died exactly this way and neither had anything to do with what was being sent.";
  "THE COPY IS THE ONE THE BUILD USES, ON PURPOSE. Asking the questions of one copy and building out of another would let the two disagree, and what is wanted is precisely that the names weighed and the bytes sent come from the same place. Putting the copy is idempotent, so asking for it here simply means it is already there when the build asks next.";
  "THE ANSWER COMES BACK ACROSS A PROCESS, so it has to be read out of what that process printed. Functions are free to print as they work, and some do, so the printing is not JSON from its first line. The answer is the LAST thing printed and is laid out over several lines, which puts its opening bracket alone on a line of its own at the end - so the last such line is where the answer starts. Anything before it is somebody's progress note and is dropped.";
  "IT REFUSES RATHER THAN RETURNS EMPTY WHEN THE READING FAILS. An app that ships nothing is an app no gate can ever be shown to reach, which is the one answer that lets anything at all go out - so a failure to read must never be able to wear the shape of a clean bill.";
  arguments_assert(arguments, 2);
  let copy_name = qa_build_copy_name();
  let folder = await qa_snapshot_ensure_named(copy_name, commit);
  let f_name = fn_name("qa_app_shipped_names");
  let words = ["scripts/ai.mjs", f_name, search];
  let said = await node_run_lines_whole(folder, words);
  let opening = said.lastIndexOf("\n[\n");
  let start = 0;
  let b = equal(opening, -1);
  if (not(b)) {
    start = opening + 1;
  }
  let json = said.slice(start);
  let shipped = json_parse_try(json);
  let b2 = equal(shipped, null);
  let read = not(b2);
  let report = {
    search,
    commit,
    folder,
    said,
  };
  true_is_assert_json(read, report);
  return shipped;
}
