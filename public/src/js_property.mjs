export function js_property(key, value) {
  const shorthand = false;
  let p = {
    type: "Property",
    method: false,
    shorthand: shorthand,
    computed: false,
    key: key,
    value: value,
    kind: "init",
  };
  return p;
}
