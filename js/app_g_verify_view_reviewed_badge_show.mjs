import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_api } from "./app_shared_api.mjs";
import { fn_name } from "./fn_name.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { app_g_verify_view_suggestion_applied_is } from "./app_g_verify_view_suggestion_applied_is.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { app_shared_font_size_label } from "./app_shared_font_size_label.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
export function app_g_verify_view_reviewed_badge_show(
  chapter_code,
  verse,
  value,
  container,
  small_gap,
  reviewed,
) {
  arguments_assert(arguments, 6);
  async function reviewed_show() {
    try {
      let r = await app_shared_api({
        f_name: fn_name("g_verify_reviewed_read"),
        args: [chapter_code],
      });
      let reviewed_verse = property_get(r, "verse");
      if (equal(reviewed_verse, verse)) {
        let note = property_get(r, "note");
        let text = "✓ Claude reviewed your suggestion for v" + verse;
        let applied = await app_g_verify_view_suggestion_applied_is(
          chapter_code,
          verse,
          value,
        );
        if (applied) {
          text =
            "✓ Claude used your suggestion for v" + verse + " as you sent it";
        }
        if (note) {
          text = text + " — " + note;
        }
        let badge = html_p_text(container, text);
        app_shared_text_deemphasized(badge);
        let value9 = app_shared_font_size_label();
        html_style_font_size(badge, value9);
        html_style_margin_top(badge, small_gap);
        reviewed.badge = badge;
      }
    } catch (ignore) {
      ignore;
    }
  }
  reviewed_show();
}
