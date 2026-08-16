import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { html_centered } from "./html_centered.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { app_code_expression_replace_say } from "./app_code_expression_replace_say.mjs";
import { app_shared_button_green_ordinary } from "./app_shared_button_green_ordinary.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div } from "./html_div.mjs";
export function app_code_expression_replace_ask(
  note,
  solved_code,
  value_text,
  retire,
  press,
) {
  arguments_assert(arguments, 5);
  ("say what the operator the learner just chose comes to, and then offer the swap as a button, so the replacement is something they do rather than something that happens to them");
  ("the rule the walkthrough opened with is retired here, at the first press: the learner has just done the thing it asked for, and a sentence still telling them to do it reads as another turn to take rather than as the one they have taken");
  ("the line above has already said WHAT is being swapped for what and WHY it comes to that, so the button is left with the one thing still to be decided - when to let it happen");
  ("Short on purpose. A button repeating the pieces the sentence above it just named would be the same sentence twice, and the learner would read it twice to find out it says nothing new.");
  html_clear(note);
  retire();
  ("the two chosen pieces the sentence made are handed on, because the swap is shown travelling between them once the button is pressed");
  let chosen_pieces = app_code_expression_replace_say(
    note,
    solved_code,
    value_text,
  );
  let asked = "Click here to replace";
  let holder = html_div(note);
  ("it stands off from the sentence ABOVE it, not from the label below, by the same gap the sentence that hands a learner over to the line stands off by, read from the one place both of them read it");
  ("Underneath, the width is already doing the separating: the button fills its own line and the label under it starts at the left edge, so nothing has to be added to tell the two of them apart. Above, they are one after the other in the same reading, and only a gap says that the reading has finished and something to press has begun.");
  let gap = app_shared_spaced_gap();
  html_style_margin_top(holder, gap);
  ("the same wide grey button every other button on this screen is, filling the line it has to itself rather than standing in the middle of it");
  ("Wide because that is the shape of a button here: See another example, Next and Home all fill their line, and a smaller button among them reads as a different kind of thing to press rather than as the next one. Grey for the same reason - green is what this app says well done in, and a button offering the swap is asking for it, not praising it.");
  app_shared_button_wide(holder, asked, press);
  return chosen_pieces;
}
