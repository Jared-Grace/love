import { app_g_view_set } from "./app_g_view_set.mjs";
import { app_g_player_get } from "./app_g_player_get.mjs";
import { app_g_npcs_get } from "./app_g_npcs_get.mjs";
import { app_g_npc_says } from "./app_g_npc_says.mjs";
import { g_greeting } from "./g_greeting.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_overlay } from "./app_g_overlay.mjs";
import { app_g_container } from "./app_g_container.mjs";
import { app_g_p_text } from "./app_g_p_text.mjs";
import { app_g_button_uncolored } from "./app_g_button_uncolored.mjs";
import { app_g_button_green } from "./app_g_button_green.mjs";
import { app_g_button_back } from "./app_g_button_back.mjs";
import { html_div } from "./html_div.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_remove } from "./html_remove.mjs";
import { text_combine } from "./text_combine.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
export async function app_g_view_render_opener(div_map) {
  let player = await app_g_player_get();
  let name_player = property_get(player, "name");
  let greeting = g_greeting(false, name_player);
  let npcs = await app_g_npcs_get();
  let npc = list_random_item(npcs);
  let overlay = app_g_overlay(div_map);
  async function close() {
    await app_g_view_set(null);
    html_remove(overlay);
  }
  let container = app_g_container(overlay);
  let content = html_div(container);
  function choose(label) {
    html_clear(content);
    app_g_button_back(content, draw_choices);
    app_g_p_text(content, text_combine(label, " — coming soon"));
  }
  function opener(label) {
    function chosen() {
      choose(label);
    }
    app_g_button_uncolored(content, label, chosen);
  }
  function pray_chosen() {
    choose("Pray for discernment");
  }
  function draw_choices() {
    html_clear(content);
    app_g_button_back(content, close);
    app_g_p_text(content, greeting);
    opener("Share the gospel");
    opener("How are you?");
    opener("What do you believe?");
    let pray = text_combine(emoji_pray(), " Pray for discernment");
    app_g_button_green(content, pray, pray_chosen);
  }
  draw_choices();
}
