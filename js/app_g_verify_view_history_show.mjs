import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_api } from "./app_shared_api.mjs";
import { fn_name } from "./fn_name.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { app_g_verify_view_label_new } from "./app_g_verify_view_label_new.mjs";
import { app_shared_container_base } from "./app_shared_container_base.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_style_white_space } from "./html_style_white_space.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { app_g_verify_note_font_size } from "./app_g_verify_note_font_size.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { app_g_verify_view_draft_save } from "./app_g_verify_view_draft_save.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
export async function app_g_verify_view_history_show(
  chapter_code,
  verse,
  container,
  small_gap,
  suggest_area,
  sessionStorage,
  draft_key,
  base_key,
  value,
  autosize,
  ignore_h,
) {
  arguments_assert(arguments, 11);
  try {
    let all = await app_shared_api({
      f_name: fn_name("g_verify_suggest_history_read"),
      args: [chapter_code],
    });
    let mine = [];
    function lambda_hist(h) {
      let left = property_get(h, "verse");
      if (equal(left, verse)) {
        mine.push(h);
      }
    }
    all.forEach(lambda_hist);
    if (greater_than_equal(mine.length, 1)) {
      app_g_verify_view_label_new(
        "YOUR PAST SUGGESTIONS FOR v" + verse,
        container,
        small_gap,
      );
      function lambda_show(h) {
        let box = app_shared_container_base(container);
        let t = property_get(h, "text");
        let txt = html_p_text(box, t);
        html_style_white_space(txt, "pre-wrap");
        app_shared_text_deemphasized(txt);
        let value10 = app_g_verify_note_font_size();
        html_style_font_size(txt, value10);
        function load_this() {
          html_value_set(suggest_area, t);
          app_g_verify_view_draft_save(
            suggest_area,
            sessionStorage,
            draft_key,
            base_key,
            value,
          );
          autosize();
        }
        app_shared_button(box, "Load into box", load_this);
      }
      mine.forEach(lambda_show);
    }
  } catch (ignore_h) {
    ignore_h;
  }
}
