import { app_shared_font_size_buttons } from "./app_shared_font_size_buttons.mjs";
import { null_is } from "./null_is.mjs";
import { app_replace_animation_duration_get } from "./app_replace_animation_duration_get.mjs";
import { app_shared_screen_go } from "./app_shared_screen_go.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { equal } from "./equal.mjs";
import { app_shared_color_light_green } from "./app_shared_color_light_green.mjs";
import { app_replace_animation_duration_default } from "./app_replace_animation_duration_default.mjs";
import { each } from "./each.mjs";
import { emoji_clock } from "./emoji_clock.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_replace_button_home } from "./app_replace_button_home.mjs";
import { property_get } from "./property_get.mjs";
export function app_replace_settings(context) {
  let root = property_get(context, "root");
  app_replace_button_home(root, context);
  app_shared_font_size_buttons(root, context);
  let div = html_div(root);
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
      async function lambda4() {
        await app_shared_screen_go(
          context,
          "animation_duration",
          animation_duration,
          app_replace_settings,
        );
      }
      let b = app_shared_button(div, combined, lambda4);
      if (equal(animation_duration, duration)) {
        html_style_background_color_set(b, highlight);
      }
    }
    each(choices, lambda);
  }
}
