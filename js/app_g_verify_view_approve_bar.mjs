import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { html_centered } from "./html_centered.mjs";
import { app_shared_api } from "./app_shared_api.mjs";
import { fn_name } from "./fn_name.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
export function app_g_verify_view_approve_bar(
  container,
  small_gap,
  chapter_code,
  verse,
  on_approved,
) {
  arguments_assert(arguments, 5);
  let approve_bar = html_div(container);
  html_style_margin_top(approve_bar, small_gap);
  html_centered(approve_bar);
  async function on_approve() {
    try {
      await app_shared_api({
        f_name: fn_name("g_verify_approval_set"),
        args: [chapter_code, verse],
      });
      html_clear(approve_bar);
      let done = html_p_text(approve_bar, "Approved v" + verse + " ✓");
      app_shared_text_deemphasized(done);
      on_approved(verse);
    } catch (failed) {
      html_clear(approve_bar);
      let msg = html_p_text(approve_bar, "Couldn't save — please try again.");
      app_shared_text_deemphasized(msg);
      app_shared_button(approve_bar, "Approve v" + verse, on_approve);
    }
  }
  app_shared_button(approve_bar, "Approve v" + verse, on_approve);
}
