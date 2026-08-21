import { js_bag_pass_through_records_add_decl } from "./js_bag_pass_through_records_add_decl.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function js_bag_pass_through_records_add(
  decls,
  unpacked,
  producers,
  found,
) {
  arguments_assert(arguments, 4);
  js_bag_pass_through_records_add_decl(decls, unpacked, producers, found);
}
