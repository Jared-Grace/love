import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { memory_note_text } from "./memory_note_text.mjs";
import { memory_hub_children } from "./memory_hub_children.mjs";
import { assert_json } from "./assert_json.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { memory_index_entry_hook_or_null } from "./memory_index_entry_hook_or_null.mjs";
import { equal_not } from "./equal_not.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { list_size } from "./list_size.mjs";
import { list_first } from "./list_first.mjs";
export async function memory_index_hub_fold_entry(lines, stem) {
  arguments_assert(arguments, 2);
  ("The one index line a fold would move for this note, and the bullet that will stand in its place under a hub. Refuses anything it cannot do safely, and writes nothing.");
  ("★ A NOTE THAT DECLARES CHILDREN OF ITS OWN IS REFUSED, BECAUSE FOLDING IT WOULD PUT ITS CHILDREN TWO HOPS FROM THE INDEX AND ONE HOP IS THE LIMIT. Nothing about that failure reads as one: the parent stays perfectly reachable, its own Children section goes on saying exactly what it said, and the notes that went dark are the ones nobody is looking at. It was found the hard way on the first real run, by the orphan check the fold takes afterwards, once both files had already been written.");
  ("Exactly one index line must name the note, and it must be a line that may be moved. Counting is what tells 'no such entry' apart from 'an entry that would take another note's only pointer with it', because the reader of a line answers null to both.");
  ("Every refusal lives here rather than in the fold, which is what lets the fold refuse before it writes anything: it asks for every entry first and only then touches a file, so a run either folds all of them or changes nothing.");
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
  let found = [];
  for (let line of lines) {
    let hook = memory_index_entry_hook_or_null(line, stem);
    let matched = equal_not(hook, null);
    if (matched) {
      list_add(hooks, hook);
      list_add(found, line);
    }
  }
  assert_json(equal(list_size(hooks), 1), {
    fault:
      "the index does not name this note on exactly one entry that may be moved",
    stem,
    hooks,
  });
  let bullet = list_join_empty(["- [[", stem, "]] — ", list_first(hooks)]);
  let r = {
    bullet,
    line: list_first(found),
  };
  return r;
}
