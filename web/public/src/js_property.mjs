export function js_property(key, value) {
  let v2 = {
    type: "Property",
    method: false,
    shorthand: true,
    computed: false,
    key: key,
    value: value,
    kind: "init"
  };
  return v2;
}
