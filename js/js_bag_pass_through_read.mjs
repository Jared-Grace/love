import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { not } from "./not.mjs";
import { js_identifier_name } from "./js_identifier_name.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
export function js_bag_pass_through_read(reads, decls, unpacked) {
  arguments_assert(arguments, 3);
  for (let read of reads) {
    let target = property_get(read, "target");
    let named_is = js_identifier_is(target);
    if (not(named_is)) {
      continue;
    }
    let call = property_get(read, "call");
    let key = property_get(read, "key");
    let bag = js_identifier_name(target);
    for (let decl of decls) {
      let init = property_get(decl, "init");
      let same_is = equal(init, call);
      if (not(same_is)) {
        continue;
      }
      let name = property_get(decl, "name");
      let plain_is = equal(name, key);
      if (not(plain_is)) {
        continue;
      }
      list_add(unpacked, {
        bag,
        name,
      });
    }
  }
}
