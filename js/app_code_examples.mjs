import { property_get } from "./property_get.mjs";
import { app_code_examples_example_another } from "./app_code_examples_example_another.mjs";
import { app_code_examples_lambda } from "./app_code_examples_lambda.mjs";
import { app_code_lesson_examples_complete_is } from "./app_code_lesson_examples_complete_is.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { property_equals_not } from "./property_equals_not.mjs";
import { app_code_lesson_previous_set } from "./app_code_lesson_previous_set.mjs";
import { app_code_home } from "./app_code_home.mjs";
import { app_shared_button_screen_wide } from "./app_shared_button_screen_wide.mjs";
import { app_shared_button_home_text } from "./app_shared_button_home_text.mjs";
import { app_code_go_back } from "./app_code_go_back.mjs";
import { emoji_arrow_left } from "./emoji_arrow_left.mjs";
import { app_code_lesson_first_id } from "./app_code_lesson_first_id.mjs";
import { app_code_next } from "./app_code_next.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_code_container_padded_x } from "./app_code_container_padded_x.mjs";
import { app_code_button_skip_lesson } from "./app_code_button_skip_lesson.mjs";
import { html_clear_context } from "./html_clear_context.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
export function app_code_examples(context) {
  let root = html_clear_context(context);
  let r2 = app_code_examples_example_another(context, root);
  let example_another = property_get(r2, "example_another");
  let refresh = property_get(r2, "refresh");
  let another = property_get(r2, "another");
  let c = property_get(r2, "c");
  let lesson = property_get(r2, "lesson");
  let value_initial = app_code_lesson_first_id();
  let lesson_first_not = property_equals_not(lesson, "id", value_initial);
  let on_back = null;
  let back_text = null;
  let more_text = text_combine("See ", another);
  let complete = app_code_lesson_examples_complete_is(lesson);
  let on_more = refresh;
  if (complete) {
    on_more = null;
  }
  app_code_next(
    context,
    c,
    more_text,
    on_more,
    example_another,
    on_back,
    back_text,
    root,
  );
  if (lesson_first_not) {
    async function previous() {
      app_code_lesson_previous_set(context);
      await app_shared_screen_set(context, app_code_examples);
    }
    let backs = [];
    list_add_multiple(backs, [
      {
        emoji: emoji_arrow_left(),
        text: "Previous lesson",
        on_click: previous,
      },
      {
        emoji: emoji_arrow_left(),
        text: "Previous lesson's last quiz",
        on_click: async function lambda() {
          let r = await app_code_examples_lambda(context);
          return r;
        },
      },
    ]);
    app_code_go_back(root, backs);
  }
  let g = app_code_container_padded_x(root);
  app_code_button_skip_lesson(context, g);
  let text = app_shared_button_home_text();
  let b = app_shared_button_screen_wide(context, app_code_home, g, text);
  let value = app_shared_spaced_gap();
  html_style_margin_top(b, value);
}
