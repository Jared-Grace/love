import { js_identifier_not_is } from "../../../love/public/src/js_identifier_not_is.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { js_dollar_choices } from "../../../love/public/src/js_dollar_choices.mjs";
import { list_get_end_3 } from "../../../love/public/src/list_get_end_3.mjs";
import { lambda_invoke_multiple } from "../../../love/public/src/lambda_invoke_multiple.mjs";
import { list_get_end_2 } from "../../../love/public/src/list_get_end_2.mjs";
import { list_first_second } from "../../../love/public/src/list_first_second.mjs";
import { list_skip } from "../../../love/public/src/list_skip.mjs";
import { string_empty_not_is } from "../../../love/public/src/string_empty_not_is.mjs";
import { string_split } from "../../../love/public/src/string_split.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { js_visit_type_each_async } from "../../../love/public/src/js_visit_type_each_async.mjs";
import { list_get_end_1 } from "../../../love/public/src/list_get_end_1.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
export async function js_dollar(ast) {
  let choices = js_dollar_choices();
  let afters = [];
  async function lambda(v) {
    async function lambda2(c) {
      let { name: choice_name, fn } = c;
      let { node, stack } = v;
      let jin = js_identifier_not_is(node);
      if (not(jin)) {
        ("during the transformations, an identifier could be replaced into another node");$r
      }
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
      if (second === choice_name) {
        marker("choice_arguments");
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
