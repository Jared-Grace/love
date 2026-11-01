import { arguments_assert } from "./arguments_assert.mjs";
import { app_emoji_bible_tradition_get } from "./app_emoji_bible_tradition_get.mjs";
import { html_div } from "./html_div.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_emoji_bible_tradition_base } from "./app_emoji_bible_tradition_base.mjs";
import { app_emoji_bible_tradition_orthodox } from "./app_emoji_bible_tradition_orthodox.mjs";
import { app_emoji_bible_traditions } from "./app_emoji_bible_traditions.mjs";
import { bible_glyph_characters_lookup } from "./bible_glyph_characters_lookup.mjs";
import { property_get } from "./property_get.mjs";
import { app_emoji_bible_tradition_set } from "./app_emoji_bible_tradition_set.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { equal } from "./equal.mjs";
import { app_shared_button_toggle_style } from "./app_shared_button_toggle_style.mjs";
export function app_emoji_bible_tradition_picker(parent, fn_draw) {
  arguments_assert(arguments, 2);
  ("Which cross the picture Bible draws, asked as a choice between the crosses themselves: one button per cross, the chosen one coloured.");
  ("EVERY CROSS IS SHOWN AT ONCE, chosen by the human, so a reader sees both before picking and sees which one is theirs. Rejected: one button that swaps to the other cross, which showed only the cross a reader did not have and made them tap to find out what the other one looked like.");
  ("EACH BUTTON SHOWS ITS CROSS AS THE PAGE WILL DRAW IT, looked up through the same tradition table the chapter uses, so a button cannot promise a cross the page then fails to draw.");
  ("THE PAGE HANDS IN ITS OWN WAY OF DRAWING ITSELF AGAIN, so the coloured button moves the moment it is tapped, and this file never reaches back for the screen it sits on.");
  let chosen = app_emoji_bible_tradition_get();
  let row = html_div(parent);
  html_div_text(row, "Which cross should be shown?");
  let name2 = app_emoji_bible_tradition_base();
  let name3 = app_emoji_bible_tradition_orthodox();
  let names = [name2, name3];
  for (let name of names) {
    let traditions = app_emoji_bible_traditions(name);
    let lookup = bible_glyph_characters_lookup(traditions);
    let character = property_get(lookup, "cross");
    async function choose() {
      app_emoji_bible_tradition_set(name);
      await fn_draw();
    }
    let button = app_shared_button(row, character, choose);
    let chosen2 = equal(name, chosen);
    app_shared_button_toggle_style(chosen2, button);
  }
}
