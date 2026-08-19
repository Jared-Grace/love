import { arguments_assert } from "./arguments_assert.mjs";
import { function_transform } from "./function_transform.mjs";
import { js_declarations_name_only_collapse } from "./js_declarations_name_only_collapse.mjs";
import { js_declarations_record_read_collapse } from "./js_declarations_record_read_collapse.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { not } from "./not.mjs";

export async function function_plumbing_collapse(f_name) {
  arguments_assert(arguments, 1);
  ("Take out of one function every line that only carries a value from one name to another, whether by gathering names into a record and reading them straight back out or by giving a name a second name, and answer with the names that went.");
  ("This is the undoing of a fold. A piece of work moved out of a body and later put back leaves its own way of handing values over standing in the middle of the body it came from - the parcel it packed, the unpacking on the other side, and a line giving each unpacked name the name the body already used. None of it is work. It is the shape of a doorway that is no longer between anything.");
  ("The two ways of carrying are run one after the other and then run again, because each one clears the way for the other. Taking a record apart leaves plain second names behind; taking a second name away removes the mention that was making a record look wanted. Neither on its own reaches the end of a chain of them; the pair, run until a whole round moves nothing, does.");
  ("Nothing is judged about what is left. A body this makes shorter may still be too long, and a body it does not touch was never carrying anything - both are answers, and which of them happened is readable from the names handed back.");
  let collapsed = [];
  function lambda(ast) {
    let going = true;
    while (going) {
      let named = js_declarations_name_only_collapse(ast);
      let records = js_declarations_record_read_collapse(ast);
      let moved = list_concat(named, records);
      list_add_multiple(collapsed, moved);
      let empty_is = list_empty_is(moved);
      going = not(empty_is);
    }
  }
  await function_transform(f_name, lambda);
  let r = { f_name, collapsed };
  return r;
}
