import { arguments_assert } from "./arguments_assert.mjs";
import { js_block_local_add_generic } from "./js_block_local_add_generic.mjs";
export function js_block_local_record_add(ast, selects, name) {
  arguments_assert(arguments, 3);
  ("Starts an empty record under a name, which is how a tally begins - one key per");
  ("thing seen, counted up as the reading goes.");
  js_block_local_add_generic(ast, selects, name, "{}");
}
