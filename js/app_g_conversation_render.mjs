import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { html_clear } from "./html_clear.mjs";
import { list_size } from "./list_size.mjs";
import { positive_is } from "./positive_is.mjs";
import { not } from "./not.mjs";
import { app_g_conversation_render_close } from "./app_g_conversation_render_close.mjs";
import { app_g_button_conversation_end } from "./app_g_button_conversation_end.mjs";
export function app_g_conversation_render(
  overlay,
  remaining,
  render_openers,
  leave,
  prayed,
  render_pray,
  converts,
  npc,
  goodbye,
) {
  arguments_assert(arguments, 9);
  ("the openers screen ASKS what you would like to say, so its parting line is one of the answers — ",
    fn_name("app_g_turn_menu"),
    " puts it in the box with the other things you could say, and this function adds none. the pray and close screens ask something else (or nothing), so there the parting line still hangs off the OVERLAY below whatever they show.");
  html_clear(overlay);
  let i2 = list_size(remaining);
  let has_openers = positive_is(i2);
  if (has_openers) {
    render_openers();
    return;
  }
  let ending = leave;
  if (not(prayed.done)) {
    render_pray();
  } else {
    app_g_conversation_render_close(converts, npc, overlay);
    ending = goodbye;
  }
  app_g_button_conversation_end(overlay, ending);
}
