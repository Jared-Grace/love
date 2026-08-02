import { equal } from "./equal.mjs";
import { list_is_assert_json } from "./list_is_assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function each_async(list, lambda$item) {
  list_is_assert_json(list, {
    hint: text_combine_multiple([
      each_async.name,
      " expects a list to walk. a text is walkable too, one LETTER at a time, so handing it one where a list was meant runs the body against every character and never says a word - the trap a comma-joined argument off a command line falls into. split it into a list first",
    ]),
  });
  for (let item of list) {
    let result = await lambda$item(item);
    if (equal(result, true)) {
      break;
    }
  }
}
