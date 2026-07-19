import { apps_frozen } from "../../js/apps_frozen.mjs";
import { list_first } from "../../js/list_first.mjs";
import { app_prefix_without_fn } from "../../js/app_prefix_without_fn.mjs";
import { app_shared_frozen_assert } from "../../js/app_shared_frozen_assert.mjs";
// Subject = whatever app is currently frozen (first in apps_frozen()), derived
// from the source of truth — so this example survives changes to the frozen list
// (a peer removing one, etc.) instead of hard-picking a specific app.
let name = app_prefix_without_fn(list_first(apps_frozen()));
export const example = {
  kind: "rejection",
  title: "A frozen app is refused for prod build, promote, and delete",
  note: [
    { code: app_shared_frozen_assert.name },
    " throws for any app on ",
    { code: apps_frozen.name },
    "(), guarding every path that would change or remove its production assets. Non-frozen apps pass.",
  ],
  // human-readable form
  call: `${app_shared_frozen_assert.name}(${JSON.stringify(name)})`,
  expectText: `throws — ${name} is on the frozen list`,
  // machine-runnable form: import fn, pass the literal app name, call, assert
  fn: app_shared_frozen_assert.name,
  args: [{ value: name, parse: "value" }],
  expect: "throw",
};
