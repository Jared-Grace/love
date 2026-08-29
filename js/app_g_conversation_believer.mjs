import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_npc_says } from "./app_g_npc_says.mjs";
import { app_shared_game_container_player } from "./app_shared_game_container_player.mjs";
import { app_g_ask_what_to_do_text } from "./app_g_ask_what_to_do_text.mjs";
import { app_shared_game_p_text } from "./app_shared_game_p_text.mjs";
import { app_g_conversation_pray_together } from "./app_g_conversation_pray_together.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_shared_game_button_green } from "./app_shared_game_button_green.mjs";
import { app_g_button_conversation_end } from "./app_g_button_conversation_end.mjs";
export function app_g_conversation_believer(
  npc,
  overlay,
  greeting,
  overlay_close,
  pronouns,
) {
  "A believer you meet again: greet them, and offer to pray together for a fellow Christian's walk — growth, the Spirit, sharing — which is the believer counterpart of the prayer offered for someone who has not yet believed.";
  "PRAYING WITH SOMEONE ONLY APPEARS ONCE THEY HAVE COME TO CHRIST. Before that the conversation is about leading them to him, not praying alongside them, so this screen is reached only when the person already believes.";
  "THE CONVERSATION ENDS HERE RATHER THAN GOING ON TO TURNS, because there is nobody left to lead anywhere.";
  arguments_assert(arguments, 5);
  app_g_npc_says(npc, overlay, greeting);
  let container_believer = app_shared_game_container_player(overlay);
  let ask_believer = app_g_ask_what_to_do_text();
  app_shared_game_p_text(container_believer, ask_believer);
  function pray_together() {
    let r = app_g_conversation_pray_together(overlay_close, pronouns);
    return r;
  }
  let pray_emoji = emoji_pray();
  let pray_label = text_combine(pray_emoji, " Pray together");
  app_shared_game_button_green(container_believer, pray_label, pray_together);
  app_g_button_conversation_end(overlay, overlay_close);
}
