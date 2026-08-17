import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { app_code_home } from "./app_code_home.mjs";
export function app_code_review_go_home(r7, context) {
  arguments_assert(arguments, 2);
  let home_text = property_get(r7, "home_text");
  let progress = property_get(r7, "progress");
  let key = property_get(r7, "key");
  let c = property_get(r7, "c");
  let success_container = property_get(r7, "success_container");
  let back_button = property_get(r7, "back_button");
  let has_next = property_get(r7, "has_next");
  let skip_button = property_get(r7, "skip_button");
  let go_next = property_get(r7, "go_next");
  let queue = property_get(r7, "queue");
  let passed = property_get(r7, "passed");
  let restart_button = property_get(r7, "restart_button");
  async function go_home() {
    await app_shared_screen_set(context, app_code_home);
  }
  let r = {
    home_text,
    progress,
    key,
    c,
    success_container,
    back_button,
    has_next,
    skip_button,
    go_next,
    queue,
    passed,
    restart_button,
    go_home,
  };
  return r;
}
