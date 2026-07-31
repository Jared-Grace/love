import { app_g_button_conversation_end } from "./app_g_button_conversation_end.mjs";
import { app_g_container_player } from "./app_g_container_player.mjs";
import { app_g_p_text } from "./app_g_p_text.mjs";
import { app_g_button_green } from "./app_g_button_green.mjs";
import { app_g_pray_discern } from "./app_g_pray_discern.mjs";
import { app_g_reveal_word } from "./app_g_reveal_word.mjs";
import { each } from "./each.mjs";
import { list_size } from "./list_size.mjs";
import { positive_is } from "./positive_is.mjs";
import { subtract_1 } from "./subtract_1.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_turn_menu(overlay, prompt, choices, discern, leave) {
  ("render a menu turn — a prompt + one green button per choice (the player's OWN words); a pray-for-discernment button reveals the correct choice. choices: [{label, on_click, correct}]. the pray-for-discernment button only appears when there are 2+ choices — with a single option there is nothing to discern.\n\nthe parting line (",
    app_g_button_conversation_end.name,
    ", running `leave`) is one of the CHOICES here, listed last among them and ABOVE the discernment prayer: it is a thing you say to this person, exactly like the openers, so it belongs in the same box rather than hanging off the overlay below. the discernment prayer is not something you say to them, so it sits under the whole set of sayings. `leave` is only reached from a choice the player taps, so nothing here can end a conversation on its own.\n\nleaving is NOT a discernment candidate — the count that decides the prayer button reads `choices` alone, so a lone opener still has nothing to discern even though two buttons are on screen.");
  let container = app_g_container_player(overlay);
  app_g_p_text(container, prompt);
  let correct = null;
  function render_choice(choice) {
    let text = property_get(choice, "label");
    let lambda = property_get(choice, "on_click");
    let b = app_g_button_green(container, text, lambda);
    if (property_get(choice, "correct")) {
      correct = b;
    }
  }
  each(choices, render_choice);
  app_g_button_conversation_end(container, leave);
  let n = list_size(choices);
  let i = subtract_1(n);
  let multiple = positive_is(i);
  if (multiple) {
    app_g_pray_discern(container, correct, app_g_reveal_word, discern);
  }
  return container;
}
