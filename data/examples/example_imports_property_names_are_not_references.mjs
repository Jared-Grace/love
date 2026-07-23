import { js_imports_auto_relative } from "../../js/js_imports_auto_relative.mjs";
import { list_size } from "../../js/list_size.mjs";
import { log } from "../../js/log.mjs";
export const example = {
  fn: js_imports_auto_relative.name,
  args: ["js/property_names.mjs"],
  kind: "transform",
  title: "Property names are not references, so they need no import",
  note: [
    "A name in a property or key position is text, not a variable. ",
    { fn: log.name },
    " is a real function here, so ",
    { code: "console.log(x)" },
    " and ",
    { code: "{ log: 1 }" },
    " used to pull in an import nothing referenced — and because the add ran first, nothing ever removed it. Only ",
    { fn: list_size.name },
    " is genuinely called, so only it is imported.",
  ],
  before: `export function alpha(x) {
  console.log(list_size(x));
  let named = { log: 1 };
  return named;
}`,
  after: `import { list_size } from "./list_size.mjs";
export function alpha(x) {
  console.log(list_size(x));
  let named = {
    log: 1,
  };
  return named;
}`,
};
