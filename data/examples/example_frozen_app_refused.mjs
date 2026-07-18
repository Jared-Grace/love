import { app_g } from "../../js/app_g.mjs";
import { app_prefix_without_fn } from "../../js/app_prefix_without_fn.mjs";
// Derive the app name from the real frozen fn (app_g -> "g") instead of a magic
// string, so a rename of app_g carries through and there is one source of truth.
let name = app_prefix_without_fn(app_g);
export const example = {
  tool: "app_frozen_assert",
  kind: "rejection",
  title: "A frozen app is refused for prod build, promote, and delete",
  note: "app_frozen_assert throws for any app on apps_frozen() (g, replace), guarding every path that would change or remove its production assets. Non-frozen apps pass.",
  // human-readable form
  call: `app_frozen_assert(${JSON.stringify(name)})`,
  expectText: `throws — ${name} is on the frozen list`,
  // machine-runnable form: import fn, pass the literal app name, call, assert
  fn: "app_frozen_assert",
  args: [{ value: name, parse: "value" }],
  expect: "throw",
};
