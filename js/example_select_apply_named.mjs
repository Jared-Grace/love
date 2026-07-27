import { example_selectors } from "./example_selectors.mjs";
import { example_transforms } from "./example_transforms.mjs";
import { property_get } from "./property_get.mjs";
import { example_select_apply_lambda } from "./example_select_apply_lambda.mjs";
export function example_select_apply_named(
  select_name,
  select_args,
  transform_name,
  transform_args,
) {
  "An example that names both halves, turned into the lambda that runs them. One branch covers every pairing, so a new address or a new verb costs a line in a list rather than a branch of its own - which is what a multiplication needs, since the branches would otherwise have to grow as the product of the two lists rather than their sum.";
  let selectors = example_selectors();
  let transforms = example_transforms();
  let select_fn = property_get(selectors, select_name);
  let apply_fn = property_get(transforms, transform_name);
  let lambda = example_select_apply_lambda(
    select_fn,
    select_args,
    apply_fn,
    transform_args,
  );
  return lambda;
}
