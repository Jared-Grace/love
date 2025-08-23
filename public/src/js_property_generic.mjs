export function js_property_generic(shorthand, key, value) {
  let v = {
    type: "Property",
    method: false,
    shorthand: shorthand,
    computed: false,
    key: key,
    value: value,
    kind: "init"
  };
  return v;
}
