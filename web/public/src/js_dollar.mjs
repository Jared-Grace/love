import { marker_top } from "./marker_top.mjs";
import { js_dollar_choices } from "./js_dollar_choices.mjs";
import { list_get_end_3 } from "./list_get_end_3.mjs";
import { lambda_invoke_multiple } from "./lambda_invoke_multiple.mjs";
import { list_get_end_2 } from "./list_get_end_2.mjs";
import { list_first_second } from "./list_first_second.mjs";
import { list_skip } from "./list_skip.mjs";
import { string_empty_not_is } from "./string_empty_not_is.mjs";
import { string_split } from "./string_split.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { js_visit_type_each_async } from "./js_visit_type_each_async.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { each_async } from "./each_async.mjs";
export async function js_dollar(ast) {
  let choices = js_dollar_choices();
  let afters = [];
  async function lambda(v) {
    async function lambda2(c) {
      let { name: choice_name, fn } = c;
      let { node, stack } = v;
      let stack1 = list_get_end_1(stack);
      let stack2 = list_get_end_2(stack);
      let stack3 = list_get_end_3(stack);
      let name = object_property_get(node, "name");
      const separator = "$";
      let split = string_split(name, separator);
      let { first, second } = list_first_second(split);
      let ne = string_empty_not_is(first);
      if (ne) {
        return;
      }
      let remaining = list_skip(split, 2);
      await marker_top();
      if (second === choice_name) {
        const a = {
          remaining,
          node,
          stack1,
          stack2,
          stack3,
          ast,
          afters,
        };
        await fn(a);
      }
    }
    await each_async(choices, lambda2);
  }
  await js_visit_type_each_async(ast, "Identifier", lambda);
  lambda_invoke_multiple(afters);
  return;
}
