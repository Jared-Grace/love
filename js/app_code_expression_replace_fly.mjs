import { app_shared_animation_duration_quick } from "./app_shared_animation_duration_quick.mjs";
import { html_raised_flying } from "./html_raised_flying.mjs";
import { html_raised_clear } from "./html_raised_clear.mjs";
import { html_copy_fly_rect } from "./html_copy_fly_rect.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_bounding_client_rect } from "./html_bounding_client_rect.mjs";
import { html_move_animate } from "./html_move_animate.mjs";
import { html_translation_transition_clear } from "./html_translation_transition_clear.mjs";
import { html_visibility_hidden } from "./html_visibility_hidden.mjs";
import { list_get } from "./list_get.mjs";
export async function app_code_expression_replace_fly(
  node_span,
  chosen_pieces,
  duration,
) {
  arguments_assert(arguments, 3);
  ("carry the swap the learner just pressed across the page in two beats: the blue block on the line goes up to the words that named it, and then what those words say it comes to goes back down to the room the block was holding");
  ("The two blue pieces in the sentence are the same two the beats travel between - the block itself, and the value it turns into - so the sentence is not describing the swap alongside it but is the place the swap happens.");
  ("Nothing is redrawn to make this happen. The block leaves under its own translation and is put back hidden, so the line keeps the room and the value arrives into the very gap the working out left.");
  let piece_solved = list_get(chosen_pieces, 0);
  let piece_value = list_get(chosen_pieces, 1);
  ("where the block stands is read BEFORE it leaves, because that is the place the value has to arrive at and by the time it is travelling there is nothing standing there to ask");
  let rect_from = html_bounding_client_rect(node_span);
  ("lifted in front of the page before it sets off, because it crosses the line it came from and the words above it, and a block travelling behind them is a block nobody watches arrive");
  html_raised_flying(node_span);
  await html_move_animate(node_span, piece_solved, duration);
  ("hidden rather than removed, and only then untranslated and set back down: it keeps its room so the line under it does not close up, and neither undoing is seen because there is nothing left to see");
  html_visibility_hidden(node_span);
  html_translation_transition_clear(node_span);
  html_raised_clear(node_span);
  ("both beats stay blue the whole way. The blue is what says these two are the same thing said twice - the working out and what it comes to - and a piece that loses it in mid-air is read as having become something else before it got there.");
  ("both beats take the same while. The value coming down was tried quicker, on the reasoning that the sentence had already named it and only its room was news - and it read as snatched away rather than as placed. What the learner is following here is one thing crossing the page in two halves, and half of a journey travelling at a different speed is two journeys.");
  await html_copy_fly_rect(piece_value, rect_from, duration);
}
