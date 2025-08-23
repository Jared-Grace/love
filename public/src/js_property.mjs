export function js_property(key, value) {
  let p = {
    type: "Property",
    method: false,
    shorthand: false,
    computed: false,
    key: key,
    value: value,
    kind: "init",
  };
  return p;
}
