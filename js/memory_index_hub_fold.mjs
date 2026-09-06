import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma_trimmed } from "./text_split_comma_trimmed.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { memory_note_text } from "./memory_note_text.mjs";
import { memory_index_lines } from "./memory_index_lines.mjs";
import { memory_index_entry_hook_or_null } from "./memory_index_entry_hook_or_null.mjs";
import { equal_not } from "./equal_not.mjs";
import { list_add } from "./list_add.mjs";
import { assert_json } from "./assert_json.mjs";
import { equal } from "./equal.mjs";
import { list_size } from "./list_size.mjs";
import { list_first } from "./list_first.mjs";
import { memory_hub_children_add } from "./memory_hub_children_add.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { memory_folder } from "./memory_folder.mjs";
import { path_join } from "./path_join.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { memory_index_lines_write_removed } from "./memory_index_lines_write_removed.mjs";
import { memory_index_sections_braced } from "./memory_index_sections_braced.mjs";
import { memory_orphans } from "./memory_orphans.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export async function memory_index_hub_fold(hub_stem, note_stems_comma) {
  arguments_assert(arguments, 2);
  ("Moves index entries off MEMORY.md and declares them as children of a hub note that is itself indexed, carrying each entry's hook across so nothing said about a note is lost. Answers how many were folded, what the index lost, and who is orphaned afterwards.");
  ("★ THIS IS THE ONE INDEX REMEDY THAT BUYS ROOM RATHER THAN RECLAIMING WASTE. The tidiers beside it - compressing a hook, taking out a blank line after a heading - stop lines being spent on nothing, and when they have all run and the index is still over its ceiling there is nothing left they can do. Moving an entry under a hub is different in kind: the note stays reachable, one hop through a door that is already indexed, and the line it was costing the index comes back. It was named in three separate functions' prose as the thing that was not built.");
  ("★ THE PROOF THAT NOTHING WAS LOST IS TAKEN AFTER THE WRITE, NOT REASONED ABOUT BEFORE IT. Orphans are asked for again at the end and the answer must be empty: a note whose index line was cut and whose declaration did not land would show up there, and that is the only failure this can cause that a reader would otherwise never see - the note stays on disk, reads perfectly well, and is never loaded again.");
  ("Every refusal happens before anything is written, so a run either folds all of them or changes nothing. A stem the index does not name once and only once is refused rather than guessed at, and that also refuses a second run over the same stems, which is the honest answer: the entries are already gone.");
  ("$plain hub_stem");
  ("$plain note_stems_comma");
  let stems = text_split_comma_trimmed(note_stems_comma);
  let hub_name = list_join_empty([hub_stem, ".md"]);
  let hub_text = await memory_note_text(hub_name);
  let lines = await memory_index_lines();
  let dropped = [];
  let bullets = [];
  for (let stem of stems) {
    let hooks = [];
    for (let line of lines) {
      let hook = memory_index_entry_hook_or_null(line, stem);
      let found = equal_not(hook, null);
      if (found) {
        list_add(hooks, hook);
        list_add(dropped, line);
      }
    }
    let left = list_size(hooks);
    let b = equal(left, 1);
    assert_json(b, {
      fault:
        "the index does not name this note on exactly one entry that may be moved",
      stem,
      hooks,
    });
    let first = list_first(hooks);
    let bullet = list_join_empty(["- [[", stem, "]] — ", first]);
    list_add(bullets, bullet);
  }
  let lines2 = list_join_newline(bullets);
  let written = memory_hub_children_add(hub_text, lines2);
  let folder = memory_folder();
  let hub_path = path_join([folder, hub_name]);
  await file_overwrite(hub_path, written);
  let kept = [];
  for (let line of lines) {
    let gone = list_includes(dropped, line);
    if (not(gone)) {
      list_add(kept, line);
    }
  }
  let index = await memory_index_lines_write_removed(lines, kept);
  await memory_index_sections_braced();
  let orphans = await memory_orphans();
  let b2 = list_empty_is(orphans);
  assert_json(b2, {
    fault: "a note was left unreachable by the fold",
    orphans,
  });
  let r = {
    folded: list_size(bullets),
    index,
    orphans,
  };
  return r;
}
