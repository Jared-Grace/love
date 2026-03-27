import { each } from "../../../love/public/src/each.mjs";
import { storage_local_set_context } from "../../../love/public/src/storage_local_set_context.mjs";
import { emoji_clock } from "../../../love/public/src/emoji_clock.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { app_replace_button } from "../../../love/public/src/app_replace_button.mjs";
import { app_replace_button_home } from "../../../love/public/src/app_replace_button_home.mjs";
import { app_replace_font_size_adjust_curried } from "../../../love/public/src/app_replace_font_size_adjust_curried.mjs";
import { multiply_curried_right } from "../../../love/public/src/multiply_curried_right.mjs";
import { divide_curried_right } from "../../../love/public/src/divide_curried_right.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_replace_font_size_factor } from "../../../love/public/src/app_replace_font_size_factor.mjs";
import { emoji_font_smaller } from "../../../love/public/src/emoji_font_smaller.mjs";
import { emoji_font_larger } from "../../../love/public/src/emoji_font_larger.mjs";
export function app_replace_settings(context) {
  let root = property_get(context, "root");
  app_replace_button_home(root, context);
  const factor = app_replace_font_size_factor();
  let value_get_multiply = multiply_curried_right(factor);
  let value_get_divide = divide_curried_right(factor);
  let div = html_div(root);
  let c = app_replace_font_size_adjust_curried(context);
  async function lambda2() {
    await c(value_get_multiply);
  }
  app_replace_button(div, emoji_font_larger() + " Font size larger", lambda2);
  async function lambda3() {
    await c(value_get_divide);
  }
  let component = app_replace_button(
    div,
    emoji_font_smaller() + " Font size smaller",
    lambda3,
  );
  let div2 = html_div(parent);
  let left = emoji_clock();
  let choices = [
    {
      ending: "off",
      animation_duration: 0,
    },
    {
      ending: "fast",
      animation_duration: 111,
    },
    {
      ending: "slow",
      animation_duration: 555,
    },
  ];
  function lambda(choice) {
    let ending2 = property_get(choice, "ending");
    let animation_duration2 = property_get(choice, "animation_duration");
    let combined2 = text_combine("Animations ", ending2);
    let combined = text_combine(left, combined2);
    function lambda4() {
      storage_local_set_context(
        context,
        "animation_duration",
        animation_duration2,
      );
    }
    let b = app_replace_button(div2, combined, lambda4);
  }
  each(choices, lambda);
}
