import { apps_frozen } from "../../js/apps_frozen.mjs";
import { list_first } from "../../js/list_first.mjs";
import { app_shared_name_prefix_without_fn } from "../../js/app_shared_name_prefix_without_fn.mjs";
import { app_shared_frozen_assert } from "../../js/app_shared_frozen_assert.mjs";
import { js_code_call_args } from "../../js/js_code_call_args.mjs";
import { json_to } from "../../js/json_to.mjs";
("The subject is whatever app is frozen right now - the first one on that list - taken from the source of truth rather than written out here, so the example survives a change to the list instead of going stale the moment a peer takes an app off it.");
let name = app_shared_name_prefix_without_fn(list_first(apps_frozen()));
export const example = {
  kind: "rejection",
  title: "A frozen app is refused for prod build, promote, and delete",
  note: [
    { fn: app_shared_frozen_assert.name },
    " throws for any app on ",
    { fn: apps_frozen.name, call: true },
    ", guarding every path that would change or remove its production assets. Non-frozen apps pass.",
  ],
  call: js_code_call_args(app_shared_frozen_assert.name, [json_to(name)]),
  expectText: `throws — ${name} is on the frozen list`,
  fn: app_shared_frozen_assert.name,
  args: [{ value: name, parse: "value" }],
  expect: "throw",
};
