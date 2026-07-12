import { null_is } from "./null_is.mjs";
import { app_replace_animation_duration_get } from "./app_replace_animation_duration_get.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { equal } from "./equal.mjs";
import { app_replace_rule_set_highlight } from "./app_replace_rule_set_highlight.mjs";
import { app_replace_animation_duration_default } from "./app_replace_animation_duration_default.mjs";
import { each } from "./each.mjs";
import { storage_local_set_context } from "./storage_local_set_context.mjs";
import { emoji_clock } from "./emoji_clock.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_div } from "./html_div.mjs";
import { app_replace_button } from "./app_replace_button.mjs";
import { app_replace_button_home } from "./app_replace_button_home.mjs";
import { app_replace_font_size_adjust_curried } from "./app_replace_font_size_adjust_curried.mjs";
import { multiply_curried_right } from "./multiply_curried_right.mjs";
import { divide_curried_right } from "./divide_curried_right.mjs";
import { property_get } from "./property_get.mjs";
import { app_replace_font_size_factor } from "./app_replace_font_size_factor.mjs";
import { emoji_font_smaller } from "./emoji_font_smaller.mjs";
import { emoji_font_larger } from "./emoji_font_larger.mjs";
export function app_replace_settings(context) {
  let root = property_get(context, "root");
  app_replace_button_home(root, context);
  let factor = app_replace_font_size_factor();
  let value_get_multiply = multiply_curried_right(factor);
  let value_get_divide = divide_curried_right(factor);
  let div = html_div(root);
  let c = app_replace_font_size_adjust_curried(context);
  async function lambda2() {
    await c(value_get_multiply);
  }
  app_replace_button(
    div,
    text_combine(emoji_font_larger(), " Font size larger"),
    lambda2,
  );
  async function lambda3() {
    await c(value_get_divide);
  }
  let component = app_replace_button(
    div,
    text_combine(emoji_font_smaller(), " Font size smaller"),
    lambda3,
  );
  let div2 = html_div(root);
  let left = emoji_clock();
  let highlight = app_replace_rule_set_highlight();
  let duration = app_replace_animation_duration_get(context);
  ("if not null then speed is being overwritten by hash so don't show choices");
  if (null_is(duration)) {
    let choices = [
      {
        ending: "off",
        animation_duration: 0,
      },
      {
        ending: "fast",
        animation_duration: 200,
      },
      {
        ending: "medium",
        animation_duration: 355,
      },
      {
        ending: "slow",
        animation_duration: app_replace_animation_duration_default(),
      },
    ];
    function lambda(choice) {
      let ending = property_get(choice, "ending");
      let animation_duration = property_get(choice, "animation_duration");
      let combined2 = text_combine("Animations ", ending);
      let combined = text_combine(left, combined2);
      function lambda4() {
        storage_local_set_context(
          context,
          "animation_duration",
          animation_duration,
        );
        app_shared_screen_set(context, app_replace_settings);
      }
      let b = app_replace_button(div2, combined, lambda4);
      if (equal(animation_duration, duration)) {
        html_style_background_color_set(b, highlight);
      }
    }
    each(choices, lambda);
  }
}
