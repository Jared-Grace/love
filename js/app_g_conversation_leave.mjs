import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { positive_is } from "./positive_is.mjs";
import { not } from "./not.mjs";
import { app_shared_color_gold_text } from "./app_shared_color_gold_text.mjs";
import { emoji_dove } from "./emoji_dove.mjs";
import { app_g_message_overlay } from "./app_g_message_overlay.mjs";
import { noop } from "./noop.mjs";
import { subtract } from "./subtract.mjs";
import { app_g_conversation_render_farewell } from "./app_g_conversation_render_farewell.mjs";
export async function app_g_conversation_leave(
  remaining,
  prayed,
  turns,
  overlay,
  npc,
  close_now,
) {
  arguments_assert(arguments, 6);
  let i = list_size(remaining);
  let openers_remain = positive_is(i);
  if (not(openers_remain)) {
    if (not(prayed.done)) {
      let color = app_shared_color_gold_text();
      let message =
        "Before you go, the Holy Spirit prompts you to pray for this person.";
      let emoji_text = emoji_dove();
      app_g_message_overlay(emoji_text, message, color, 4500, noop);
      return;
    }
  }
  if (openers_remain) {
    let left = list_size(turns);
    let right = list_size(remaining);
    let done_count = subtract(left, right);
    if (positive_is(done_count)) {
      app_g_conversation_render_farewell(overlay, npc, close_now);
      return;
    }
  }
  await close_now();
}
