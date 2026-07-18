import { null_is } from "../../love/js/null_is.mjs";
import { app_replace_animation_duration_get } from "../../love/js/app_replace_animation_duration_get.mjs";
import { app_shared_screen_go } from "../../love/js/app_shared_screen_go.mjs";
import { html_style_background_color_set } from "../../love/js/html_style_background_color_set.mjs";
import { equal } from "../../love/js/equal.mjs";
import { app_shared_color_light_green } from "../../love/js/app_shared_color_light_green.mjs";
import { app_replace_animation_duration_default } from "../../love/js/app_replace_animation_duration_default.mjs";
import { each } from "../../love/js/each.mjs";
import { emoji_clock } from "../../love/js/emoji_clock.mjs";
import { text_combine } from "../../love/js/text_combine.mjs";
import { html_div } from "../../love/js/html_div.mjs";
import { app_shared_button } from "../../love/js/app_shared_button.mjs";
import { app_replace_button_home } from "../../love/js/app_replace_button_home.mjs";
import { app_replace_font_size_adjust_curried } from "../../love/js/app_replace_font_size_adjust_curried.mjs";
import { multiply_curried_right } from "../../love/js/multiply_curried_right.mjs";
import { divide_curried_right } from "../../love/js/divide_curried_right.mjs";
import { property_get } from "../../love/js/property_get.mjs";
import { app_replace_font_size_factor } from "../../love/js/app_replace_font_size_factor.mjs";
import { emoji_font_smaller } from "../../love/js/emoji_font_smaller.mjs";
import { emoji_font_larger } from "../../love/js/emoji_font_larger.mjs";
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
  app_shared_button(
    div,
    text_combine(emoji_font_larger(), " Font size larger"),
    lambda2,
  );
  async function lambda3() {
    await c(value_get_divide);
  }
  let component = app_shared_button(
    div,
    text_combine(emoji_font_smaller(), " Font size smaller"),
    lambda3,
  );
  let div2 = html_div(root);
  let left = emoji_clock();
  let highlight = app_shared_color_light_green();
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
        app_shared_screen_go(
          context,
          "animation_duration",
          animation_duration,
          app_replace_settings,
        );
      }
      let b = app_shared_button(div2, combined, lambda4);
      if (equal(animation_duration, duration)) {
        html_style_background_color_set(b, highlight);
      }
    }
    each(choices, lambda);
  }
}
