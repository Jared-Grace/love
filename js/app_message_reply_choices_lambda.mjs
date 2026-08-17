import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
import { list_slice } from "./list_slice.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { reply_on_match_output_add_multiple } from "./reply_on_match_output_add_multiple.mjs";
import { each } from "./each.mjs";
export function app_message_reply_choices_lambda(filtered, u) {
  arguments_assert(arguments, 2);
  function lambda2(possibility) {
    let tokens = property_get(possibility, "tokens");
    let v = property_path_get_2(possibility, "data", u);
    let after = property_get(v, "after");
    let before = property_get(v, "before");
    let sliced = list_slice(tokens, before, after);
    let quote = list_join_empty(sliced);
    reply_on_match_output_add_multiple(possibility, [
      "If you want, please change the wording of what you said and send me another message. Here is what you said: ",
      quote,
    ]);
  }
  each(filtered, lambda2);
}
