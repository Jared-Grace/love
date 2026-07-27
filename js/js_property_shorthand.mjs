export function js_property_shorthand(identifier) {
  "One entry of a set of settings whose key and value are the same word. Built";
  "here rather than by writing the words out and reading them back, because the";
  "name arrives already checked and turning it into text would give it a second";
  "chance to be something else.";
  let property = {
    type: "Property",
    key: identifier,
    value: identifier,
    kind: "init",
    method: false,
    shorthand: true,
    computed: false,
  };
  return property;
}
