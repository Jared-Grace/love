import { arguments_assert } from "./arguments_assert.mjs";
import { list_is } from "./list_is.mjs";
import { list_includes } from "./list_includes.mjs";
import { text_includes } from "./text_includes.mjs";
export function list_or_text_includes(held, part) {
  arguments_assert(arguments, 2);
  ('what JavaScript\'s .includes gives, on either kind of thing that has it: ["love", "joy"] and "joy" give true, as "obey" and "e" do');
  if (list_is(held)) {
    let r = list_includes(held, part);
    return r;
  }
  let r2 = text_includes(held, part);
  return r2;
}
