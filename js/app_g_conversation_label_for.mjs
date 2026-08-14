import { list_join_comma_space_and } from "./list_join_comma_space_and.mjs";
import { fn_name } from "./fn_name.mjs";
import { g_gospel_share_parts } from "./g_gospel_share_parts.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_add } from "./list_add.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { emoji_smile } from "./emoji_smile.mjs";
import { emoji_thinking } from "./emoji_thinking.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_g_conversation_label_for(turn, pronouns) {
  arguments_assert(arguments, 2);
  let kind = property_get(turn, "kind");
  let left = emoji_smile();
  let left2 = emoji_thinking();
  let value = property_get(pronouns, "object");
  ("the gospel words come from ",
    fn_name("g_gospel_share_parts"),
    " so this button and the arc prompt say the same thing. they were written out twice, and a person cannot be given words to object to that differ from the words they will hear.");
  let parts = g_gospel_share_parts();
  let pictured = [];
  for (let part of parts) {
    let said = property_get(part, "said");
    let emoji = property_get(part, "emoji");
    let together = list_join_space([said, emoji]);
    list_add(pictured, together);
  }
  let all = list_join_comma_space_and(pictured);
  let labels = {
    gospel_share_objection: text_combine_multiple([
      "Tell ",
      value,
      " that ",
      all,
    ]),
    how_r_u: text_combine(left, " How are you?"),
    believe: text_combine(left2, " What do you believe?"),
  };
  let label = property_get(labels, kind);
  return label;
}
