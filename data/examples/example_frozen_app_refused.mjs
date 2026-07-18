export const example = {
  tool: "app_frozen_assert",
  kind: "rejection",
  title: "A frozen app is refused for prod build, promote, and delete",
  note: "app_frozen_assert throws for any app on apps_frozen() (g, replace), guarding every path that would change or remove its production assets. Non-frozen apps pass.",
  // human-readable form
  call: `app_frozen_assert("g")`,
  expectText: `throws — g is on the frozen list`,
  // machine-runnable form: import fn, pass the literal app name, call, assert
  fn: "app_frozen_assert",
  args: [{ value: "g", parse: "value" }],
  expect: "throw",
};
