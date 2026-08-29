import { functions_compare_text_number } from "./functions_compare_text_number.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function functions_compare_text_number_gate_run() {
  "Gate: no function may hold a cut of text against a number under an exact comparison.";
  "It ratchets against ZERO. The repo carried none when this was written - the one that existed had just been repaired - so there is nothing to grandfather, and anything this ever finds arrived afterwards.";
  "Nothing else can catch this. The comparison is exact, so the two sides never match; the answer is an empty list rather than an error, and an empty list is exactly what a real absence looks like. No test that only checks a passage reads is going to see it either, because the passage that fails is whichever one the caller happens to hold as a number.";
  "The functions at fault are thrown as a record rather than printed and then summed up in a sentence, because whoever reads a failure next reads it for names, and the lines matter as much as the names - the same file may hold ten comparisons and one of them be wrong.";
  let offenders = await functions_compare_text_number();
  let names = list_map_property(offenders, "f_name");
  let f_name = fn_name("text_from_number");
  let advice = text_combine_multiple([
    "these compare writing taken out of a file with a number, which is never true - write the number out once with ",
    f_name,
    " before the comparison, or make a number of the writing if the writing is what varies",
  ]);
  let hint = {
    advice,
    offenders,
  };
  list_empty_is_assert_json(names, {
    hint,
  });
  let r = {
    comparing: 0,
  };
  return r;
}
