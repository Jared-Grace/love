import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma_trimmed } from "./text_split_comma_trimmed.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { memory_note_text } from "./memory_note_text.mjs";
import { memory_index_lines } from "./memory_index_lines.mjs";
import { memory_hub_children } from "./memory_hub_children.mjs";
import { assert_json } from "./assert_json.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { memory_index_entry_hook_or_null } from "./memory_index_entry_hook_or_null.mjs";
import { equal_not } from "./equal_not.mjs";
import { list_add } from "./list_add.mjs";
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
export async function memory_index_hub_fold(hub_stem, note_stems_comma) {
  arguments_assert(arguments, 2);
  ("Moves index entries off MEMORY.md and declares them as children of a hub note that is itself indexed, carrying each entry's hook across so nothing said about a note is lost. Answers how many were folded, what the index lost, and who is orphaned afterwards.");
  ("★ THIS IS THE ONE INDEX REMEDY THAT BUYS ROOM RATHER THAN RECLAIMING WASTE. The tidiers beside it - compressing a hook, taking out a blank line after a heading - stop lines being spent on nothing, and when they have all run and the index is still over its ceiling there is nothing left they can do. Moving an entry under a hub is different in kind: the note stays reachable, one hop through a door that is already indexed, and the line it was costing the index comes back. It was named in three separate functions' prose as the thing that was not built.");
  ("★ THE PROOF THAT NOTHING WAS LOST IS TAKEN AFTER THE WRITE, NOT REASONED ABOUT BEFORE IT. Orphans are asked for again at the end and the answer must be empty: a note whose index line was cut and whose declaration did not land would show up there, and that is the only failure this can cause that a reader would otherwise never see - the note stays on disk, reads perfectly well, and is never loaded again.");
  ("Every refusal happens before anything is written, so a run either folds all of them or changes nothing. A stem the index does not name once and only once is refused rather than guessed at, and that also refuses a second run over the same stems, which is the honest answer: the entries are already gone.");
  ("★ A NOTE THAT DECLARES CHILDREN OF ITS OWN IS REFUSED, BECAUSE FOLDING IT WOULD PUT ITS CHILDREN TWO HOPS FROM THE INDEX AND ONE HOP IS THE LIMIT. Nothing about that failure reads as one: the parent stays perfectly reachable, its own Children section goes on saying exactly what it said, and the notes that went dark are the ones nobody is looking at. It was found the hard way on the first real run, by the orphan check below, after both files had already been written - which is why the refusal now sits up here with the other refusals rather than being left to the check that only speaks once the damage is on disk.");
  ("$plain hub_stem");
  ("$plain note_stems_comma");
  let stems = text_split_comma_trimmed(note_stems_comma);
  let hub_name = list_join_empty([hub_stem, ".md"]);
  let hub_text = await memory_note_text(hub_name);
  let lines = await memory_index_lines();
  let dropped = [];
  let bullets = [];
  for (let stem of stems) {
    let stem_name = list_join_empty([stem, ".md"]);
    let stem_text = await memory_note_text(stem_name);
    let stem_children = memory_hub_children(stem_text);
    assert_json(list_empty_is(stem_children), {
      fault:
        "this note declares children of its own, and folding it would put them two hops from the index",
      stem,
      stem_children,
    });
    let hooks = [];
    for (let line of lines) {
      let hook = memory_index_entry_hook_or_null(line, stem);
      let found = equal_not(hook, null);
      if (found) {
        list_add(hooks, hook);
        list_add(dropped, line);
      }
    }
    assert_json(equal(list_size(hooks), 1), {
      fault:
        "the index does not name this note on exactly one entry that may be moved",
      stem,
      hooks,
    });
    let bullet = list_join_empty(["- [[", stem, "]] — ", list_first(hooks)]);
    list_add(bullets, bullet);
  }
  let written = memory_hub_children_add(hub_text, list_join_newline(bullets));
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
  assert_json(list_empty_is(orphans), {
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
