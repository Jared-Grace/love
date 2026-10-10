import { arguments_assert } from "./arguments_assert.mjs";
import { js_tokenizer_label_property_path } from "./js_tokenizer_label_property_path.mjs";
import { js_tokenizer } from "./js_tokenizer.mjs";
import { property_get } from "./property_get.mjs";
import { property_path_get } from "./property_path_get.mjs";
import { equal } from "./equal.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
import { list_map_concat_multiple } from "./list_map_concat_multiple.mjs";
export function app_code_quiz_tokens_places(code) {
  arguments_assert(arguments, 1);
  ("where in the code each token stands, as { start, end }, cut by the same rule the unscramble quiz cuts tokens by: a string is three tokens, its opening quote, its text and its closing quote, so a learner tapping tokens taps the same pieces they have built code out of");
  let quote_length = 1;
  let string_label = "string";
  let type_label = js_tokenizer_label_property_path();
  let tokens = js_tokenizer(code);
  function places_of(token) {
    let start = property_get(token, "start");
    let end = property_get(token, "end");
    let label = property_path_get(token, type_label);
    let is_string = equal(label, string_label);
    if (is_string) {
      let text_start = add(start, quote_length);
      let text_end = subtract(end, quote_length);
      let three = [
        {
          start,
          end: text_start,
        },
        {
          start: text_start,
          end: text_end,
        },
        {
          start: text_end,
          end,
        },
      ];
      return three;
    }
    let one = [
      {
        start,
        end,
      },
    ];
    return one;
  }
  let places = list_map_concat_multiple(tokens, places_of);
  return places;
}
