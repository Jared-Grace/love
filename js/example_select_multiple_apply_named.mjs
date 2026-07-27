import { example_selectors } from "./example_selectors.mjs";
import { example_transforms } from "./example_transforms.mjs";
import { property_get } from "./property_get.mjs";
import { example_select_multiple_apply_lambda } from "./example_select_multiple_apply_lambda.mjs";
export function example_select_multiple_apply_named(
  select_name,
  select_args_multiple,
  transform_name,
  transform_args,
) {
  "An example that names both halves and needs more than one node, turned into the lambda that runs them. The twin next door covers everything a single address can say; a verb that needs a first and a last had to be spelled out in a branch of its own until this, which is why every one of them showed a single pairing and never a column.";
  "The names are looked up in the same two lists the single one reads, so an example naming something that is not an address says so while the corpus is being read rather than reaching into the repo and running whatever answers to the name.";
  let selectors = example_selectors();
  let transforms = example_transforms();
  let select_fn = property_get(selectors, select_name);
  let apply_fn = property_get(transforms, transform_name);
  let lambda = example_select_multiple_apply_lambda(
    select_fn,
    select_args_multiple,
    apply_fn,
    transform_args,
  );
  return lambda;
}
