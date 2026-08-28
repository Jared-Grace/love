import { app_code_review_present_fn_present } from "./app_code_review_present_fn_present.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_review_present_fn(
  r4,
  home_button,
  success_container,
  back_button,
  restart_button,
  has_next,
  context,
) {
  arguments_assert(arguments, 7);
  let c = property_get(r4, "c");
  let key = property_get(r4, "key");
  let queue = property_get(r4, "queue");
  let skip_button = property_get(r4, "skip_button");
  let go_next = property_get(r4, "go_next");
  let progress = property_get(r4, "progress");
  let present = app_code_review_present_fn_present(
    r4,
    home_button,
    progress,
    c,
    queue,
    success_container,
    back_button,
    restart_button,
    has_next,
    skip_button,
    context,
    key,
    go_next,
  );
  return present;
}
