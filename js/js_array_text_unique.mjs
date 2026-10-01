import { arguments_assert } from "./arguments_assert.mjs";
import { js_selects_array_elements } from "./js_selects_array_elements.mjs";
import { js_array_elements_text_assert } from "./js_array_elements_text_assert.mjs";
import { list_duplicates_by_property } from "./list_duplicates_by_property.mjs";
import { list_remove } from "./list_remove.mjs";
import { each } from "./each.mjs";
export function js_array_text_unique(ast, selects) {
  arguments_assert(arguments, 2);
  ("Takes the repeats back out of an ordered register of written words, keeping the first time each word appears and dropping every later one. The order of what is left is the order it was authored in.");
  ("A hand-authored list grows by pasting a block onto the end of it, and a block pasted twice looks exactly like a block pasted once — the file is simply longer. The register of uplifting verse references held 1172 lines for 504 real references, because its tail had been pasted three times, and nothing anywhere said so: the gate that refuses a register holding the same entry twice compares names only, deliberately, since a list of words may perfectly well say the same thing twice and mean it.");
  ("So this is never run at a list on a guess. It is for the list that has already told you it is a set — the writer of this one deduplicates it on the way out, so every repeat is a line the author reads and nothing downstream ever sees. Dropping them changes no behavior and halves what a person has to look at to add the next one.");
  ("It refuses a register of names rather than deduplicating one, because a repeated name is a different question with a different answer, and it already has a gate of its own.");
  let elements = js_selects_array_elements(ast, selects);
  js_array_elements_text_assert(elements);
  let duplicates = list_duplicates_by_property(elements, "value");
  function drop(element) {
    list_remove(elements, element);
  }
  each(duplicates, drop);
}
