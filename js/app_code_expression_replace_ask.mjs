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
  ("the two green pieces the sentence made are handed on, because the swap is shown travelling between them once the button is pressed");
  let greens = app_code_expression_replace_say(note, solved_code, value_text);
  let asked = "Click here to replace";
  let holder = html_div(note);
  ("the button stands in the middle of the line it has to itself, because it is the one thing to do here and a thing standing alone against the left edge reads as the start of a list of them");
  html_centered(holder);
  ("and it stands off from the sentence ABOVE it, not from the label below, by the same gap the sentence that hands a learner over to the line stands off by, read from the one place both of them read it");
  ("Underneath, the centring is already doing the separating: the button sits in the middle of the width and the label under it starts at the left edge, so nothing has to be added to tell the two of them apart. Above, they are one after the other in the same reading, and only a gap says that the reading has finished and something to press has begun.");
  let gap = app_shared_spaced_gap();
  html_style_margin_top(holder, gap);
  app_shared_button_green_ordinary(holder, asked, press);
  return greens;
}
