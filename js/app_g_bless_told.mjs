import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_spaced_small_gap } from "./app_shared_spaced_small_gap.mjs";
import { app_shared_style_control_font_size } from "./app_shared_style_control_font_size.mjs";
import { app_shared_dismissable_message } from "./app_shared_dismissable_message.mjs";
import { app_g_bless } from "./app_g_bless.mjs";
import { bless_told_tap } from "./bless_told_tap.mjs";
export function app_g_bless_told(bar) {
  arguments_assert(arguments, 1);
  ("The line of instructions along the strip, with a cross beside it that takes it away for");
  ("good.");
  ("Instructions are for somebody who has not read them. Once a player knows that tapping a");
  ("person prays for them, the sentence saying so is a strip of screen spent on nothing, on");
  ("a screen whose whole subject is how much of the street you can see - so the player is");
  ("given the means to spend it on the street instead.");
  ("It is the same dismissable line the Bible reader uses, called rather than rebuilt, so");
  ("the cross sits where it sits everywhere else and a player who has dismissed one hint in");
  ("this family already knows how to dismiss this one. Building a second would have been a");
  ("second answer to a question already answered, and the two would have drifted.");
  ("Which also means it is remembered between visits rather than only for this game. A hint");
  ("dismissed and then handed straight back the next time the player opens the street is not");
  ("dismissed, it is postponed, and a player who has to put the same sentence away every");
  ("session learns that the cross does not work.");
  ("The room around the words is added HERE and not in the strip. The strip is the same");
  ("panel every screen in this family is drawn on and its padding is right for buttons,");
  ("which have their own edges; a line of prose has none, so its words run to the very side");
  ("of a panel that is already the full width of a phone and read as though they are falling");
  ("off it.");
  ("The size of the words is the size the controls beside them use, because the line is part");
  ("of the strip rather than a paragraph laid on top of it - and the shared line is drawn at");
  ("a reader's size, which beside the buttons would have been the loudest thing on the");
  ("screen while saying the one thing the player most quickly stops needing.");
  let padded = html_div(bar);
  let gap = app_shared_spaced_small_gap();
  html_style_assign(padded, {
    "padding-left": gap,
    "padding-right": gap,
    "font-size": app_shared_style_control_font_size(),
  });
  let text = bless_told_tap();
  app_shared_dismissable_message(app_g_bless, "told_dismissed", padded, text);
  return padded;
}
