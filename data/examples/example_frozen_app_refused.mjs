import { app_g } from "../../js/app_g.mjs";
import { app_prefix_without_fn } from "../../js/app_prefix_without_fn.mjs";
import { app_frozen_assert } from "../../js/app_frozen_assert.mjs";
// Derive both the app name (app_g -> "g") and the guard fn name from strong
// references, so renaming either carries through — one source of truth, no magic
// strings.
let name = app_prefix_without_fn(app_g);
export const example = {
  tool: app_frozen_assert.name,
  kind: "rejection",
  title: "A frozen app is refused for prod build, promote, and delete",
  note: "app_frozen_assert throws for any app on apps_frozen() (g, replace), guarding every path that would change or remove its production assets. Non-frozen apps pass.",
  // human-readable form
  call: `${app_frozen_assert.name}(${JSON.stringify(name)})`,
  expectText: `throws — ${name} is on the frozen list`,
  // machine-runnable form: import fn, pass the literal app name, call, assert
  fn: app_frozen_assert.name,
  args: [{ value: name, parse: "value" }],
  expect: "throw",
};
