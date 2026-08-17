import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { each } from "./each.mjs";
export function app_code_examples_on_batch_item(container, bs) {
  arguments_assert(arguments, 2);
  function lambda2(b) {
    let ex = property_get(b, "example");
    ex(container);
  }
  each(bs, lambda2);
}
