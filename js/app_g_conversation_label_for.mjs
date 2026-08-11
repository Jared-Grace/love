import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { emoji_cross } from "./emoji_cross.mjs";
import { emoji_rock } from "./emoji_rock.mjs";
import { emoji_sunrise } from "./emoji_sunrise.mjs";
import { emoji_smile } from "./emoji_smile.mjs";
import { emoji_thinking } from "./emoji_thinking.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_g_conversation_label_for(turn, pronouns) {
  arguments_assert(arguments, 2);
  let kind = property_get(turn, "kind");
  let v = emoji_cross();
  let v2 = emoji_rock();
  let v3 = emoji_sunrise();
  let left = emoji_smile();
  let left2 = emoji_thinking();
  let value = property_get(pronouns, "object");
  let labels = {
    gospel_share_objection: text_combine_multiple([
      "Tell ",
      value,
      " that Jesus died ",
      v,
      ", was buried ",
      v2,
      " and rose to life ",
      v3,
    ]),
    how_r_u: text_combine(left, " How are you?"),
    believe: text_combine(left2, " What do you believe?"),
  };
  let label = property_get(labels, kind);
  return label;
}
