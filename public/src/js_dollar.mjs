import { js_dollar_choice_argument } from "../../../love/public/src/js_dollar_choice_argument.mjs";
import { text_lower_to } from "../../../love/public/src/text_lower_to.mjs";
import { js_identifier_not_is } from "../../../love/public/src/js_identifier_not_is.mjs";
import { js_dollar_choices } from "../../../love/public/src/js_dollar_choices.mjs";
import { list_get_end_3 } from "../../../love/public/src/list_get_end_3.mjs";
import { invoke_multiple } from "../../../love/public/src/invoke_multiple.mjs";
import { list_get_end_2 } from "../../../love/public/src/list_get_end_2.mjs";
import { list_first_second } from "../../../love/public/src/list_first_second.mjs";
import { list_skip } from "../../../love/public/src/list_skip.mjs";
import { text_empty_not_is } from "../../../love/public/src/text_empty_not_is.mjs";
import { text_split } from "../../../love/public/src/text_split.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_visit_type_each_async } from "../../../love/public/src/js_visit_type_each_async.mjs";
import { list_get_end_1 } from "../../../love/public/src/list_get_end_1.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
export async function js_dollar(ast) {
  let choices = js_dollar_choices();
  let afters = [];
  async function lambda(v) {
    async function lambda2(c) {
      let fn = property_get(c, "fn");
      let choice_name = property_get(c, "name");
      let stack = property_get(v, "stack");
      let node = property_get(v, "node");
      let jin = js_identifier_not_is(node);
      if (jin) {
        ("during the transformations, an identifier could be replaced into another node");
        return;
      }
      let stack1 = list_get_end_1(stack);
      let stack2 = list_get_end_2(stack);
      let stack3 = list_get_end_3(stack);
      let name = property_get(node, "name");
      const separator = "$";
      let split = text_split(name, separator);
      let v2 = list_first_second(split);
      let second = property_get(v2, "second");
      let first = property_get(v2, "first");
      let ne = text_empty_not_is(first);
      if (ne) {
        ("if inside this block, then begins with non-$ - we only process beginning with $");
        return;
      }
      let remaining = list_skip(split, 2);
      let lower = text_lower_to(second);
      if (lower === choice_name) {
        "This variable name is used by " + js_dollar_choice_argument.name;
        const js_dollar_arguments = {
          remaining,
          node,
          stack1,
          stack2,
          stack3,
          ast,
          afters,
        };
        await fn(js_dollar_arguments);
      }
    }
    await each_async(choices, lambda2);
  }
  await js_visit_type_each_async(ast, "Identifier", lambda);
  invoke_multiple(afters);
  return;
}
