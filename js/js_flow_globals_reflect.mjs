export function js_flow_globals_reflect() {
  "The outside names that reach the language's own machinery - the road from any plain function to the one that turns text into code. A function reading one of these may hand back that power, so whatever it returns is treated as a tool rather than a value.";
  let names = ["Object", "Reflect", "Proxy"];
  return names;
}
