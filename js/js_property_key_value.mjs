export function js_property_key_value(key, value) {
  "One entry of a record whose name and contents are different things. The pair";
  "to the short-way one next door, where they are the same word.";
  let property = {
    type: "Property",
    key,
    value,
    kind: "init",
    method: false,
    shorthand: false,
    computed: false,
  };
  return property;
}
