import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { emoji_wave } from "../../../love/public/src/emoji_wave.mjs";
import { app_g_button_green } from "../../../love/public/src/app_g_button_green.mjs";
import { string_random_or_empty } from "../../../love/public/src/string_random_or_empty.mjs";
import { g_random_dot_bang } from "../../../love/public/src/g_random_dot_bang.mjs";
import { string_first_upper_to } from "../../../love/public/src/string_first_upper_to.mjs";
import { app_g_container } from "../../../love/public/src/app_g_container.mjs";
import { app_g_p_text } from "../../../love/public/src/app_g_p_text.mjs";
import { html_click_none } from "../../../love/public/src/html_click_none.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { app_g_button_back } from "../../../love/public/src/app_g_button_back.mjs";
import { g_rows_count } from "../../../love/public/src/g_rows_count.mjs";
import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { g_img_square_style_position } from "../../../love/public/src/g_img_square_style_position.mjs";
import { app_g_refresh } from "../../../love/public/src/app_g_refresh.mjs";
import { global_function_property_set } from "../../../love/public/src/global_function_property_set.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { html_remove } from "../../../love/public/src/html_remove.mjs";
import { emoji_pray } from "../../../love/public/src/emoji_pray.mjs";
import { app_karate_container_background_color } from "../../../love/public/src/app_karate_container_background_color.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { app_g_overlay } from "../../../love/public/src/app_g_overlay.mjs";
import { list_random_item } from "./list_random_item.mjs";
export function app_g_click_npc(div, npcs_matched, tutorial, body, player) {
  marker("1");
  let overlay = app_g_overlay(body);
  let prayer = object_property_get(player, "prayer");
  let conversation = object_property_get(prayer, "conversation");
  if (conversation) {
    object_property_set(prayer, "conversation", false);
    let npc = list_single(npcs_matched);
    let name = object_property_get(npc, "name");
    let gender = object_property_get(npc, "gender");
    let container = app_g_container(overlay);
    html_style_assign(container, {
      "background-color": "#80a0ff" + "bc",
    });
    let name2 = object_property_get(player, "name");
    const greet = list_random_item(["hi", "hello", "greetings", "hey"]);
    let v = string_first_upper_to(greet);
    let s2 = list_random_item(["nice", "great", "pleasure", "good"]);
    const a = list_random_item(["it's", "it is"]) + " ";
    let meet_message =
      " " + string_first_upper_to(string_random_or_empty(a) + s2 + " to ");
    let meet = object_property_get(npc, "meet");
    if (not(meet)) {
      object_property_set(npc, "meet", true);
      meet_message += "meet you";
    } else {
      ((meet_message +=
        list_random_item(["see", "talk to", "hear from you"]) +
        " you" +
        string_random_or_empty(", again") +
        g_random_dot_bang() +
        " " +
        "What "),
        list_random_item([
          "do you " + list_random_item(["want", "wish"]) + " to talk about",
          "is on your " + list_random_item(["mind", "heart"]),
        ]) + "?");
    }
    meet_message += g_random_dot_bang();
    app_g_p_text(
      container,
      name + " says: " + v + " " + name2 + g_random_dot_bang() + meet_message,
    );
    app_g_button_green(
      overlay,
      emoji_pray() +
        emoji_wave() +
        " Pray and then politely end the conversation",
      overlay_close,
    );
  } else {
    let container = app_g_container(overlay);
    html_style_assign(container, {
      "background-color": app_karate_container_background_color() + "bc",
    });
    app_g_p_text(
      container,
      emoji_pray() +
        " You remember that you have not prayed, yet, before your next conversation!",
    );
    app_g_p_text(
      container,
      " To pray, tap or click on yourself (You glow with white)",
    );
    function lambda21() {
      overlay_close();
      tutorial = html_div(div);
      html_click_none(tutorial);
      global_function_property_set(app_g_refresh, "tutorial", tutorial);
      g_img_square_style_position(tutorial, player, "tutorial");
      let text = emoji_pray();
      html_text_set(tutorial, text);
      let rows = g_rows_count();
      const square_size = "calc(100vh / " + rows + " * .7)";
      html_style_assign(tutorial, {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: square_size,
        animation: "upDown 1.25s infinite ease-in-out alternate",
      });
    }
    app_g_button_back(overlay, lambda21);
  }
  return tutorial;
  function overlay_close() {
    html_remove(overlay);
  }
}
