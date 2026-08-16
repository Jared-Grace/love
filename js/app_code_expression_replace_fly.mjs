import { app_code_expression_green_uncolored } from "./app_code_expression_green_uncolored.mjs";
import { html_copy_fly_rect_changed } from "./html_copy_fly_rect_changed.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_bounding_client_rect } from "./html_bounding_client_rect.mjs";
import { html_move_animate } from "./html_move_animate.mjs";
import { html_translation_transition_clear } from "./html_translation_transition_clear.mjs";
import { html_visibility_hidden } from "./html_visibility_hidden.mjs";
import { list_get } from "./list_get.mjs";
export async function app_code_expression_replace_fly(
  node_span,
  greens,
  duration,
) {
  arguments_assert(arguments, 3);
  ("carry the swap the learner just pressed across the page in two beats: the green block on the line goes up to the words that named it, and then what those words say it comes to goes back down to the room the block was holding");
  ("The two greens in the sentence are the same two greens the beats travel between - the block itself, and the value it turns into - so the sentence is not describing the swap alongside it but is the place the swap happens.");
  ("Nothing is redrawn to make this happen. The block leaves under its own translation and is put back hidden, so the line keeps the room and the value arrives into the very gap the working out left.");
  let green_solved = list_get(greens, 0);
  let green_value = list_get(greens, 1);
  ("where the block stands is read BEFORE it leaves, because that is the place the value has to arrive at and by the time it is travelling there is nothing standing there to ask");
  let rect_from = html_bounding_client_rect(node_span);
  await html_move_animate(node_span, green_solved, duration);
  ("hidden rather than removed, and only then untranslated: it keeps its room so the line under it does not close up, and the untranslating is unseen because there is nothing left to see move");
  html_visibility_hidden(node_span);
  html_translation_transition_clear(node_span);
  ("the green comes off the block while it is hidden, at once and unseen, because the copy on its way down is the one carrying the green now and the block is only the room it lands in");
  app_code_expression_green_uncolored(node_span);
  ("and the copy loses its green over the whole of its journey, so what sets out is the value the sentence is holding up and what arrives is the value as the line spells it - one piece becoming part of the code rather than a green one landing and turning plain afterwards");
  await html_copy_fly_rect_changed(
    green_value,
    rect_from,
    duration,
    app_code_expression_green_uncolored,
  );
}
