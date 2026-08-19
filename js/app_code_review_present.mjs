import { property_path_get_2 } from "./property_path_get_2.mjs";
import { app_code_review_present_present } from "./app_code_review_present_present.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_review_present(r, home_button, context) {
  arguments_assert(arguments, 3);
  let progress4 = property_get(r, "progress");
  let key22 = property_get(r, "key");
  let c22 = property_get(r, "c");
  let success_container22 = property_get(r, "success_container");
  let back_button2 = property_get(r, "back_button");
  let has_next2 = property_get(r, "has_next");
  let skip_button22 = property_get(r, "skip_button");
  let go_next22 = property_get(r, "go_next");
  let r32 = {
    progress: progress4,
    key: key22,
    c: c22,
    success_container: success_container22,
    back_button: back_button2,
    has_next: has_next2,
    skip_button: skip_button22,
    go_next: go_next22,
  };
  let go_next5 = property_get(r32, "go_next");
  let skip_button5 = property_get(r32, "skip_button");
  let has_next3 = property_get(r32, "has_next");
  let back_button3 = property_get(r32, "back_button");
  let success_container32 = property_get(r32, "success_container");
  let c3 = property_get(r32, "c");
  let key3 = property_get(r32, "key");
  let r52 = {
    r2: r32,
    go_next: go_next5,
    skip_button: skip_button5,
    has_next: has_next3,
    back_button: back_button3,
    success_container: success_container32,
    c: c3,
    key: key3,
  };
  let key4 = property_get(r52, "key");
  let c4 = property_get(r52, "c");
  let success_container4 = property_get(r52, "success_container");
  let back_button4 = property_get(r52, "back_button");
  let has_next4 = property_get(r52, "has_next");
  let skip_button3 = property_get(r52, "skip_button");
  let go_next3 = property_get(r52, "go_next");
  let progress22 = property_path_get_2(r52, "r2", "progress");
  let queue22 = property_get(r, "queue");
  let passed = property_get(r, "passed");
  let restart_button2 = property_get(r, "restart_button");
  let r6 = {
    passed: passed,
    progress: progress22,
    go_next: go_next3,
    skip_button: skip_button3,
    queue: queue22,
    key: key4,
    c: c4,
    success_container: success_container4,
    restart_button: restart_button2,
  };
  let restart_button = property_get(r6, "restart_button");
  let success_container = property_get(r6, "success_container");
  let present = app_code_review_present_present(
    r6,
    home_button,
    success_container,
    back_button4,
    restart_button,
    has_next4,
    context,
  );
  return present;
}
