import { arguments_assert } from "./arguments_assert.mjs";
import { reply_phrase_my_dear_brother } from "./reply_phrase_my_dear_brother.mjs";
import { reply_sequence_output } from "./reply_sequence_output.mjs";
export function reply_good_time(time_of_day, response) {
  arguments_assert(arguments, 2);
  ("A rule that hears good and a time of day, with or without my dear brother after it, and sends back the words given.");
  let my_dear_brother = reply_phrase_my_dear_brother();
  let rule = reply_sequence_output(
    ["good", time_of_day, my_dear_brother],
    response,
  );
  return rule;
}
