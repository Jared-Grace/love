import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_g_npc_typing } from "./app_g_npc_typing.mjs";
import { app_g_conversation_topic_for } from "./app_g_conversation_topic_for.mjs";
import { g_boundary } from "./g_boundary.mjs";
import { app_g_npc_says } from "./app_g_npc_says.mjs";
import { app_g_container_player } from "./app_g_container_player.mjs";
import { app_g_p_text } from "./app_g_p_text.mjs";
import { g_boundary_acknowledge } from "./g_boundary_acknowledge.mjs";
import { g_something_else } from "./g_something_else.mjs";
import { app_g_conversation_render } from "./app_g_conversation_render.mjs";
import { app_shared_game_button_green } from "./app_shared_game_button_green.mjs";
import { app_g_button_conversation_end } from "./app_g_button_conversation_end.mjs";
import { list_random_item } from "./list_random_item.mjs";
export function app_g_conversation_render_boundary(
  turn,
  overlay,
  npc,
  meet,
  pending,
  remaining,
  render_openers,
  leave,
  prayed,
  render_pray,
  converts,
  goodbye,
) {
  arguments_assert(arguments, 12);
  ("a wrong opener is a BOUNDARY, not a retry: clear to a clean screen where the NPC HESITATES — a pulsing typing-dots bubble for a PAUSE (setTimeout), so the wait reads as the person gathering a kind way to say no, not a frozen screen — then they gently state the boundary and just two gracious replies appear: a humble acknowledgement that returns to the openers, or ending the conversation. the pause makes guessing slower than praying for discernment, so prayer stays the best path — while the correct opener itself is FIXED, so guessing always terminates and nobody is walled in");
  html_clear(overlay);
  app_g_npc_typing(npc, overlay);
  function reveal() {
    html_clear(overlay);
    let topic = app_g_conversation_topic_for(turn);
    let message = g_boundary(meet, topic);
    app_g_npc_says(npc, overlay, message);
    let container = app_g_container_player(overlay);
    app_g_p_text(container, "What would you like to say?");
    let text = g_boundary_acknowledge();
    function acknowledged() {
      "the NPC has just declined a topic, so the prompt waiting back at the openers must invite something ELSE — the usual continue-prompt is open half the time ('what's on your mind?'), and an open invitation from the same person who just said no reads as taking the limit back. carried as the pending intro so it replaces that prompt.";
      pending.text = g_something_else();
      app_g_conversation_render(
        overlay,
        remaining,
        render_openers,
        leave,
        prayed,
        render_pray,
        converts,
        npc,
        goodbye,
      );
    }
    app_shared_game_button_green(container, text, acknowledged);
    app_g_button_conversation_end(container, leave);
  }
  let delay = list_random_item([2500, 3000, 3500]);
  setTimeout(reveal, delay);
}
