import { js_parse } from "./js_parse.mjs";
import { js_assert_json_get_lambda_collapse } from "./js_assert_json_get_lambda_collapse.mjs";
import { functions_code_offenders_generic } from "./functions_code_offenders_generic.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
export async function functions_assert_json_get_lambda_sites() {
  "every function in the repo still writing out a lazy payload wrapper that the eager check would have built for it";
  "The sweep around the reading is borrowed rather than written again. What it carries";
  "is the skip - a file a peer is halfway through writing is not an answer to this";
  "question and must not become one - and the count of how many were looked at, which";
  "is the only thing telling nothing-found apart from nothing-visited.";
  "The reading is the transform itself, run on a tree nobody writes back. So what is";
  "watched for and what is repaired are one piece of code, and no second description";
  "of the rule exists to disagree with the first.";
  function reader(code) {
    let ast = js_parse(code);
    let moved = js_assert_json_get_lambda_collapse(ast);
    let any = greater_than(moved, 0);
    if (not(any)) {
      let none = [];
      return none;
    }
    let found = [moved];
    return found;
  }
  let offenders = await functions_code_offenders_generic(reader, "collapsible");
  return offenders;
}
