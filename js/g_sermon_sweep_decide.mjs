import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { g_sermon_sweep_path } from "./g_sermon_sweep_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { list_find } from "./list_find.mjs";
import { g_sermon_lines_file_path } from "./g_sermon_lines_file_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { g_sermon_write_lines_file } from "./g_sermon_write_lines_file.mjs";
import { property_set } from "./property_set.mjs";
export async function g_sermon_sweep_decide(chapter_code, key, decision) {
  arguments_assert(arguments, 3);
  ("$plain chapter_code");
  ("Says yes or no to one proposed rewording of an already-written verse. A yes puts the proposed lines in that verse's lines file and saves them the same way the loop saves a verse; a no leaves the verse as it is. Either way the decision is written into the proposal, so it is not offered again as waiting.");
  ("★ THE DECISION IS ONE OF TWO WORDS AND ANYTHING ELSE THROWS. A misspelt yes that quietly counted as a no would leave a verse unchanged with nothing saying so.");
  let words = ["approved", "rejected"];
  let b = words.includes(decision);
  if (not(b)) {
    throw new Error("decision must be approved or rejected: " + decision);
  }
  let path = g_sermon_sweep_path();
  let entries = await file_read_json(path);
  function matches(entry) {
    let c = property_get(entry, "chapter_code");
    let k = property_get(entry, "key");
    let r = equal(c, chapter_code) && equal(k, key);
    return r;
  }
  let entry = list_find(entries, matches);
  if (equal(decision, "approved")) {
    let after = property_get(entry, "after");
    let lines_path = g_sermon_lines_file_path(chapter_code, key);
    await file_overwrite_json(lines_path, after);
    await g_sermon_write_lines_file(chapter_code, key);
  }
  property_set(entry, "decision", decision);
  await file_overwrite_json(path, entries);
  return entry;
}
