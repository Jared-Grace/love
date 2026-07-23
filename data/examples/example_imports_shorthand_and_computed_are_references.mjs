import { js_imports_auto_relative } from "../../js/js_imports_auto_relative.mjs";
import { log } from "../../js/log.mjs";
export const example = {
  fn: js_imports_auto_relative.name,
  args: ["js/shorthand_computed.mjs"],
  kind: "transform",
  title: "Shorthand and computed keys are references, so they keep their import",
  note: [
    "The mirror of the property-name case, and the one that would bite hardest if the rule went too far: ",
    { code: "{ log }" },
    " and ",
    { code: "x[log]" },
    " both read the value of ",
    { fn: log.name },
    ", so dropping its import here would break the file at runtime. The import stays.",
  ],
  before: `export function beta(x) {
  let bag = { log };
  let picked = x[log];
  return [bag, picked];
}`,
  after: `import { log } from "./log.mjs";
export function beta(x) {
  let bag = {
    log,
  };
  let picked = x[log];
  return [bag, picked];
}`,
};
