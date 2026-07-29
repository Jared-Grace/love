import { fn_name } from "./fn_name.mjs";
import { examples_data_stale } from "./examples_data_stale.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function examples_data_gate_run() {
  "QA gate: the corpus JSON the reading page fetches still says what the corpus says.";
  "This one fails in the direction nobody looks. Every other example gate reads the corpus straight from its folder and so is green the moment a new example passes - while the page serves a file written at some earlier time, and a reader has no way to tell an old corpus from the whole of it. It sat two days behind before anyone noticed.";
  let stale = await examples_data_stale();
  list_empty_is_assert_json(stale, {
    hint: text_combine_multiple([
      "the corpus JSON the reading page fetches is behind the corpus itself, so the page is showing an older set of examples than the one that passes - would you like to write it again with ",
      fn_name("examples_data_write"),
      "?",
    ]),
    stale,
  });
  let r = {
    stale,
  };
  return r;
}
