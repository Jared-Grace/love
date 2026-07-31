import { example_select_apply_pair } from "./example_select_apply_pair.mjs";
import { property_get } from "./property_get.mjs";
import { example_select_apply_lambda } from "./example_select_apply_lambda.mjs";
export function example_select_apply_named(
  select_name,
  select_args,
  transform_name,
  transform_args,
) {
  "An example that names both halves, turned into the lambda that runs them. One branch covers every pairing, so a new address or a new verb costs a line in a list rather than a branch of its own - which is what a multiplication needs, since the branches would otherwise have to grow as the product of the two lists rather than their sum.";
  let pair = example_select_apply_pair(select_name, transform_name);
  let select_fn = property_get(pair, "select_fn");
  let apply_fn = property_get(pair, "apply_fn");
  let lambda = example_select_apply_lambda(
    select_fn,
    select_args,
    apply_fn,
    transform_args,
  );
  return lambda;
}
