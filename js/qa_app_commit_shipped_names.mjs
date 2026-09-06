import { equal_not } from "./equal_not.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_frozen } from "./text_frozen.mjs";
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
  "IT DOES NOT MERELY GIVE A WRONG ANSWER - IT THROWS, AND THE THROW LOOKS LIKE THE APP'S FAULT. Measured 2026-09-06 during a ninth attempt to send one app: a neighbour had added a chapter to a list and had not yet written the file that chapter names. At the commit being sent the list named it zero times and was whole; in the folder the name was there and the file was not. The walk followed the name, found no file, and stopped the deployment - reporting a missing function, which reads as the app being broken. Two of nine attempts died exactly this way and neither had anything to do with what was being sent.";
  "IT TAKES A COPY OF ITS OWN AND MUST NOT BORROW THE ONE BUILDS USE. That was tried first and it failed in the most confusing way available: the walk ran in the right folder, at the right commit, and complained about a name that commit does not contain. A build belonging to somebody else moves that copy to somebody else's commit while this is reading it, and the copy is back where it belongs by the time anybody looks - so the evidence of what happened is gone before the question is asked. The two copies that already exist are separate for this exact reason, and a third costs a worktree.";
  "THE COPY BEING SEPARATE FROM THE BUILD'S COSTS NOTHING IN AGREEMENT, because both stand on the same commit and a commit is the same bytes wherever it is put. What the build copy has that this one must not is the output of building, which is written into it as it works.";
  "THE ANSWER COMES BACK ACROSS A PROCESS, so it has to be read out of what that process printed. Functions are free to print as they work, and some do, so the printing is not JSON from its first line. The answer is the LAST thing printed and is laid out over several lines, which puts its opening bracket alone on a line of its own at the end - so the last such line is where the answer starts. Anything before it is somebody's progress note and is dropped.";
  "IT REFUSES RATHER THAN RETURNS EMPTY WHEN THE READING FAILS. An app that ships nothing is an app no gate can ever be shown to reach, which is the one answer that lets anything at all go out - so a failure to read must never be able to wear the shape of a clean bill.";
  arguments_assert(arguments, 2);
  let copy_name = text_frozen("qa_ship");
  let folder = await qa_snapshot_ensure_named(copy_name, commit);
  let words = ["scripts/ai.mjs", fn_name("qa_app_shipped_names"), search];
  let said = await node_run_lines_whole(folder, words);
  let opening = said.lastIndexOf("\n[\n");
  let start = 0;
  let b = equal(opening, -1);
  if (not(b)) {
    start = opening + 1;
  }
  let json = said.slice(start);
  let shipped = json_parse_try(json);
  let read = equal_not(shipped, null);
  let report = {
    search,
    commit,
    folder,
    said,
  };
  true_is_assert_json(read, report);
  return shipped;
}
