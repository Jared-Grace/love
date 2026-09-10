import { app_code_batch_avoid_question } from "./app_code_batch_avoid_question.mjs";
import { range_map } from "./range_map.mjs";
import { list_iterator_refillable_on } from "./list_iterator_refillable_on.mjs";
import { property_get } from "./property_get.mjs";
import { html_div } from "./html_div.mjs";
import { html_clear } from "./html_clear.mjs";
export function app_code_batch_item_get(
  parent,
  lesson,
  on_batch_item,
  on_batch,
  example_count_,
  avoid_question,
) {
  "A line the learner has already been shown worked out, which this batch must not ask about again, or nothing when there is none. It is APPENDED rather than fitted in beside the batch arguments it belongs with, because the two callers hand these over by place and an argument slid into the middle would silently retune every one of them.";
  let batch = property_get(lesson, "batch");
  let example_count = property_get(lesson, "example_count");
  if (example_count_) {
    example_count = 1;
  }
  let container = html_div(parent);
  let next_get = list_iterator_refillable_on(batch, on_batch);
  let refresh = function lambda() {
    html_clear(container);
    let drawn = range_map(example_count, next_get);
    let bs = app_code_batch_avoid_question(drawn, avoid_question, next_get);
    on_batch_item(container, bs, refresh, next_get);
  };
  refresh();
  return refresh;
}
