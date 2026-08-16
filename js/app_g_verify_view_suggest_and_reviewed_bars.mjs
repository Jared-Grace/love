import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { html_centered } from "./html_centered.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { app_shared_api } from "./app_shared_api.mjs";
import { fn_name } from "./fn_name.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { app_g_verify_view_draft_drop } from "./app_g_verify_view_draft_drop.mjs";
import { html_display_none } from "./html_display_none.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { app_g_verify_view_suggestion_applied_is } from "./app_g_verify_view_suggestion_applied_is.mjs";
import { app_shared_font_size_label } from "./app_shared_font_size_label.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
export function app_g_verify_view_suggest_and_reviewed_bars(
  container,
  small_gap,
  suggest_area,
  chapter_code,
  verse,
  draft_key,
  base_key,
  value,
) {
  arguments_assert(arguments, 8);
  let reviewed_badge = null;
  let suggest_bar = html_div(container);
  html_style_margin_top(suggest_bar, small_gap);
  html_centered(suggest_bar);
  async function on_suggest() {
    try {
      let value5 = html_value_get(suggest_area);
      await app_shared_api({
        f_name: fn_name("g_verify_suggest_set"),
        args: [chapter_code, verse, value5],
      });
      ("also record it in the per-passage history so it can be viewed later; non-fatal if it fails");
      try {
        await app_shared_api({
          f_name: fn_name("g_verify_suggest_history_append"),
          args: [chapter_code, verse, value5],
        });
      } catch (ignore_hist) {
        ignore_hist;
      }
      html_clear(suggest_bar);
      let sent = html_p_text(suggest_bar, "Suggestion sent — I'll review it ✓");
      app_shared_text_deemphasized(sent);
      app_g_verify_view_draft_drop(draft_key, base_key);
      ("a fresh suggestion supersedes any prior reviewed-badge, so clear the marker and hide the badge until this new one is reviewed");
      try {
        await app_shared_api({
          f_name: fn_name("g_verify_reviewed_set"),
          args: [chapter_code, "", ""],
        });
      } catch (ignore_clear) {
        ignore_clear;
      }
      if (reviewed_badge) {
        html_display_none(reviewed_badge);
      }
    } catch (failed) {
      html_clear(suggest_bar);
      let msg = html_p_text(suggest_bar, "Couldn't send — please try again.");
      app_shared_text_deemphasized(msg);
      app_shared_button(suggest_bar, "Send suggestion", on_suggest);
    }
  }
  app_shared_button(suggest_bar, "Send suggestion", on_suggest);
  ("compare two suggestions the way the READER sees them: line endings, trailing spaces and blank lines are formatting they cannot see on the page, so none of them may make an applied-as-sent suggestion look declined");
  ("did the loop apply the reviewer's last suggestion word for word? the saved lines ARE what Claude decided, so comparing them with the newest suggestion for this verse answers it — no extra state to write and nothing that can disagree with the page");
  ("show a badge if the loop has already reviewed a suggestion for this verse, so the reviewer knows it was seen and handled — and when the saved lines match what they sent, SAY that it was taken as sent, because accepted and declined are the two answers they are waiting for and the neutral wording cannot tell them apart");
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
        reviewed_badge = badge;
      }
    } catch (ignore) {
      ignore;
    }
  }
  reviewed_show();
  ("show the reviewer their own past suggestions for this verse; Load drops one back into the box to view or build on");
}
