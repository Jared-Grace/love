import { arguments_assert } from "./arguments_assert.mjs";
import { example_selectors } from "./example_selectors.mjs";
import { example_transforms } from "./example_transforms.mjs";
import { property_get } from "./property_get.mjs";
export function example_select_apply_pair(select_name, transform_name) {
  arguments_assert(arguments, 2);
  ("the two halves an example names, looked up as functions - the address on the left and the verb on the right");
  ("the names are looked up in the two lists the corpus keeps rather than in the repo, so an example naming something that is not an address says so while the corpus is being read rather than reaching into the repo and running whatever answers to the name.");
  ("both readers of the corpus did this lookup, and only one of them wrote down why it is a lookup and not a call.");
  let selectors = example_selectors();
  let transforms = example_transforms();
  let select_fn = property_get(selectors, select_name);
  let apply_fn = property_get(transforms, transform_name);
  let pair = {
    select_fn,
    apply_fn,
  };
  return pair;
}
