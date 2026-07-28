import { examples_names_used } from "./examples_names_used.mjs";
import { example_selectors } from "./example_selectors.mjs";
import { example_transforms } from "./example_transforms.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
export async function examples_registers_unexampled() {
  "The addresses and verbs an example is allowed to name that no example names. Being on one of those lists is what makes a unit reachable from the corpus, and the corpus is the only thing that ever runs these - so a name on the list with nothing naming it is a unit that looks checked and is not.";
  let named = await examples_names_used();
  let selectors = example_selectors();
  let transforms = example_transforms();
  let a = properties_get(selectors);
  let b = properties_get(transforms);
  let registered = list_concat(a, b);
  function unexampled_is(name) {
    let missing = list_includes_not(named, name);
    return missing;
  }
  let unexampled = list_filter(registered, unexampled_is);
  return unexampled;
}
