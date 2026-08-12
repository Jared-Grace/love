import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { qa_gate_blame_print } from "./qa_gate_blame_print.mjs";
export async function zz_probe_console(section, known) {
  arguments_assert(arguments, 2);
  let name = property_get(section, "name");
  let said = property_get(section, "said");
  console.log("\n=== who last touched what " + name + " named ===");
  let some = await qa_gate_blame_print(said, known);
  let r = {
    name,
    said,
    some,
  };
  return r;
}
