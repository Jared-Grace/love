export function example_transform_before(t, e) {
  if (t[0] === "ntp") {
    return "export function " + t[1] + "() {}";
  }
  return e.before;
}
