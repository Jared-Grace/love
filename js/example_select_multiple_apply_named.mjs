import { example_select_apply_pair } from "./example_select_apply_pair.mjs";
import { property_get } from "./property_get.mjs";
import { example_select_multiple_apply_lambda } from "./example_select_multiple_apply_lambda.mjs";
export function example_select_multiple_apply_named(
  select_name,
  select_args_multiple,
  transform_name,
  transform_args,
) {
  "An example that names both halves and needs more than one node, turned into the lambda that runs them. The twin next door covers everything a single address can say; a verb that needs a first and a last had to be spelled out in a branch of its own until this, which is why every one of them showed a single pairing and never a column.";
  let pair = example_select_apply_pair(select_name, transform_name);
  let select_fn = property_get(pair, "select_fn");
  let apply_fn = property_get(pair, "apply_fn");
  let lambda = example_select_multiple_apply_lambda(
    select_fn,
    select_args_multiple,
    apply_fn,
    transform_args,
  );
  return lambda;
}
