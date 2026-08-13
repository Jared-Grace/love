import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { app_shared_bible_verses_counts } from "./app_shared_bible_verses_counts.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_button_toggle_style } from "./app_shared_button_toggle_style.mjs";
import { app_shared_bible_verses_count_hash_key } from "./app_shared_bible_verses_count_hash_key.mjs";
import { html_hash_transform_reload } from "./html_hash_transform_reload.mjs";
import { property_set } from "./property_set.mjs";
import { equal } from "./equal.mjs";
import { each } from "./each.mjs";
export function app_next_count_choose(parent, count) {
  "How many verses a message should hold, offered as something to press.";
  "$plain count";
  "The amount lived only in the link, so changing it meant editing an address by hand - finding one word in a line of them and retyping the number after it, on a phone, in the address bar. Everything else this page does is under a thumb; this was the one thing that was not, and it is the thing a reader changes most, because how much scripture fits in a message is a matter of who they are sending it to.";
  "Pressing a number writes it back into the link and opens the page again, which is the same way the button for a longer passage works. That is what keeps the setting from being a setting: it is not remembered anywhere, it is simply part of the address - so the link that gets pasted into a message carries the amount with it, and the day it is pressed again the passage that comes back is the size it was last time.";
  "The number is a floor and is said to be one. A bible was not divided where its sentences end, so a run cut to an exact length lands mid-thought about half the time; what was asked for is carried on to the end of the sentence it stops in. A reader who pressed 4 and counted 5 verses has not been disobeyed, and should not have to wonder.";
  arguments_assert(arguments, 2);
  let card = app_shared_container_blue(parent);
  app_shared_text_body(card, "How many verses in each message?");
  let counts = app_shared_bible_verses_counts();
  function count_each(c) {
    function on_click() {
      function transform(hash) {
        let key = app_shared_bible_verses_count_hash_key();
        property_set(hash, key, c);
      }
      html_hash_transform_reload(transform);
    }
    let component = app_shared_button(card, c, on_click);
    let chosen = equal(count, c);
    app_shared_button_toggle_style(chosen, component);
  }
  each(counts, count_each);
  app_shared_text_body(
    card,
    "At least this many. A passage is carried on to the end of its sentence, so you may receive a verse or two more.",
  );
  return card;
}
