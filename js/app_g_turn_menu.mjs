import { app_g_container_player } from "./app_g_container_player.mjs";
import { app_g_p_text } from "./app_g_p_text.mjs";
import { app_g_button_green } from "./app_g_button_green.mjs";
import { app_g_pray_reveal } from "./app_g_pray_reveal.mjs";
import { each } from "./each.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine } from "./text_combine.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
export function app_g_turn_menu(overlay, prompt, choices) {
  "render a menu turn — a prompt + one green button per choice (the player's OWN words); a pray-for-discernment button reveals the correct choice. choices: [{label, on_click, correct}]";
  let container = app_g_container_player(overlay);
  app_g_p_text(container, prompt);
  let correct = null;
  function render_choice(choice) {
    let b = app_g_button_green(
      container,
      property_get(choice, "label"),
      property_get(choice, "on_click"),
    );
    if (property_get(choice, "correct")) {
      correct = b;
    }
  }
  each(choices, render_choice);
  let pray = text_combine(
    emoji_pray(),
    " Pray to God for discernment for what to say",
  );
  app_g_pray_reveal(container, correct, pray);
}
