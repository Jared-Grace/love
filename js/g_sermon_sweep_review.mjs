import { arguments_assert } from "./arguments_assert.mjs";
import { g_sermon_sweep_path } from "./g_sermon_sweep_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { g_sermon_lines_file_path } from "./g_sermon_lines_file_path.mjs";
import { list_map } from "./list_map.mjs";
import { diff_lines_signed_positional } from "./diff_lines_signed_positional.mjs";
export async function g_sermon_sweep_review() {
  arguments_assert(arguments, 0);
  ("Each proposed rewording of an already-written verse, set beside the lines that verse has now as a signed difference, so it can be drawn and decided on.");
  ("★ THE BEFORE IS READ FROM THE LIVE LINES FILE, NEVER STORED IN THE PROPOSAL. A verse re-saved after the proposal was written then shows its real current wording against the proposal, rather than a stale copy that would hide the newer change being overwritten.");
  ("Only the text of each line is compared. The indices ride along unchanged in a rewording, and a difference over them would be noise beside the words a reader is actually deciding on.");
  let path = g_sermon_sweep_path();
  let exists = await file_exists(path);
  if (!exists) {
    return [];
  }
  let entries = await file_read_json(path);
  function text_of(line) {
    let text = property_get(line, "text");
    return text;
  }
  let shown = [];
  for (let entry of entries) {
    let chapter_code = property_get(entry, "chapter_code");
    let key = property_get(entry, "key");
    let after = property_get(entry, "after");
    let decision = property_get(entry, "decision");
    let lines_path = g_sermon_lines_file_path(chapter_code, key);
    let before = await file_read_json(lines_path);
    let texts_before = list_map(before, text_of);
    let texts_after = list_map(after, text_of);
    let diff = diff_lines_signed_positional(texts_before, texts_after);
    shown.push({
      chapter_code,
      key,
      decision,
      diff,
    });
  }
  return shown;
}
