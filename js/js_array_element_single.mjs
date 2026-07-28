import { arguments_assert } from "./arguments_assert.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
import { list_first } from "./list_first.mjs";
import { assert_json } from "./assert_json.mjs";
import { equal } from "./equal.mjs";
export function js_array_element_single(elements, same_is, hint, wanted) {
  arguments_assert(arguments, 4);
  ("The one entry of an ordered register that answers to what was asked for, or a");
  ("refusal saying so in the words of the register it was asked of. Every verb");
  ("that does something to an entry rather than to the end of the list finds it");
  ("first, and the two kinds of register differ only in how an entry is asked what");
  ("it holds - so the asking is passed in and everything around it is shared.");
  ("It counts the matches here rather than asking the find-one helper. That helper");
  ("refuses through the general single-item assert, whose words say only that a");
  ("list was not of size one, and it refuses BEFORE any check written afterwards");
  ("can run - so a kind sentence written below such a call is unreachable and");
  ("reads as though it were doing something. The name side carried exactly that");
  ("for as long as it existed: the finding was fixed on the word side and copied");
  ("from before the fix, so the copy kept the fault and its own unread apology.");
  let matches = list_filter(elements, same_is);
  let size = list_size(matches);
  let one = equal(size, 1);
  assert_json(one, {
    hint,
    wanted,
    matches: size,
  });
  let found = list_first(matches);
  return found;
}
