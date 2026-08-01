import { arguments_assert } from "./arguments_assert.mjs";
import { folder_pointers_out } from "./folder_pointers_out.mjs";
import { property_get } from "./property_get.mjs";
import { path_base } from "./path_base.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { assert_json } from "./assert_json.mjs";
export async function qa_tree_pointers_assert(repos) {
  arguments_assert(arguments, 1);
  ("refuses a frozen copy that still reaches out to a living folder anywhere except the one place it is meant to");
  ("the whole worth of the copy is that nothing can change under it while it is being asked. A pointer left in it is a hole straight through that: what is read there is whatever the living folder holds at the instant of reading, so a gate goes red and is then quiet the moment it is asked again, and neither answer belongs to any one state of the code.");
  ("this is not a guess at a thing that might go wrong. Every neighbouring repo was pointed at rather than copied, on the written reasoning that no question here is about their contents - and the sweeps that ask after every function walk the neighbours too, so the copy had been leaking for as long as it had existed. Prose said the hole was closed; nothing looked.");
  ("what is installed is the one thing allowed to stay a pointer. No question asked here is about the contents of an installed package, and those are the folders that would cost something real to take across.");
  let pointers = await folder_pointers_out(repos);
  let leaking = [];
  for (let pointer of pointers) {
    let path = property_get(pointer, "path");
    let base = path_base(path);
    let installed = equal(base, "node_modules");
    if (not(installed)) {
      list_add(leaking, pointer);
    }
  }
  let size = list_size(leaking);
  let none = equal(size, 0);
  assert_json(none, {
    leaking,
    hint: "the frozen copy points at a living folder, so a question asked of it is being answered by files that can change while it is asked - copy that folder in instead of pointing at it",
  });
}
