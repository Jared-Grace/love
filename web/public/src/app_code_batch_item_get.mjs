import { range_map } from "../../../love/public/src/range_map.mjs";
import { list_iterator_refillable } from "../../../love/public/src/list_iterator_refillable.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
export function app_code_batch_item_get(
  parent,
  lesson,
  on_batch_item,
  on_batch,
  example_count_1,
) {
  let batch = property_get(lesson, "batch");
  let example_count = property_get(lesson, "example_count");
  if (false) {
  }
  let container = html_div(parent);
  let next_get = list_iterator_refillable(batch, on_batch);
  let refresh = function lambda() {
    html_clear(container);
    let bs = range_map(example_count, next_get);
    on_batch_item(container, bs, refresh);
  };
  refresh();
  return refresh;
}
