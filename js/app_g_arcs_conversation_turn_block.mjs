import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_arcs_depth_block } from "./app_g_arcs_depth_block.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { app_g_arcs_field_shaped } from "./app_g_arcs_field_shaped.mjs";
import { app_g_arcs_turn_block } from "./app_g_arcs_turn_block.mjs";
export function app_g_arcs_conversation_turn_block(
  card,
  conversation_block,
  block,
  voice_color,
  catch_up_name,
  catch_up_shape,
  nickname,
  bench,
) {
  "$plain voice_color";
  "$plain catch_up_name";
  "$plain catch_up_shape";
  "$plain nickname";
  "One turn of an arc drawn where it belongs: inside the conversation already open, or inside a new one this turn opens, and it hands back whichever box the next turn should go in.";
  "THE BOX IS HANDED BACK RATHER THAN KEPT, because which conversation is open outlives the turn that opened it. Every turn after this one belongs in the same box until another turn says it starts a conversation, so the answer is the state of the reading and not a thing about this card.";
  "OPENING A CONVERSATION AND DRAWING A TURN ARE ONE STEP HERE AND NOT TWO, because only the card knows which of them is wanted. Split apart, the caller would have to ask the card whether it starts a conversation, and then the same question would be answered in two places against one field.";
  arguments_assert(arguments, 8);
  let starting = property_get(card, "conversation_first");
  if (starting) {
    conversation_block = app_g_arcs_depth_block(block, 1);
    let conversation_number = property_get(card, "conversation_number");
    let v = String(conversation_number);
    let said = text_combine_multiple(["conversation ", v]);
    let line = html_div_text(conversation_block, said);
    html_style_assign(line, {
      "font-weight": "bold",
      color: voice_color,
      opacity: "0.85",
    });
    let catch_up = property_get(card, "catch_up");
    let caught_up = text_empty_not_is(catch_up);
    if (caught_up) {
      app_g_arcs_field_shaped(
        conversation_block,
        catch_up_name,
        catch_up,
        catch_up_shape,
        voice_color,
      );
    }
  }
  app_g_arcs_turn_block(conversation_block, card, nickname, bench, voice_color);
  let r = {
    conversation_block,
  };
  return r;
}
