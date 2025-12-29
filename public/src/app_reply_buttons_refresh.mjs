import { html_text_get } from "../../../love/public/src/html_text_get.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { html_display_none_or_block } from "../../../love/public/src/html_display_none_or_block.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
import { string_starts_with } from "../../../love/public/src/string_starts_with.mjs";
import { string_lower_to } from "../../../love/public/src/string_lower_to.mjs";
import { string_letters_only } from "../../../love/public/src/string_letters_only.mjs";
export function app_reply_buttons_refresh(typed_get, chosens, buttons) {
  let v4 = function lambda10() {
    function lambda2(item) {
      let text2 = html_text_get(item);
      let letters = string_letters_only(text2);
      let lower = string_lower_to(letters);
      let prefix = typed_get();
      let sw = string_starts_with(lower, prefix);
      let includes = list_includes(chosens, item);
      const condition = includes || not(sw);
      html_display_none_or_block(condition, item);
    }
    each(buttons, lambda2);
  };
  return v4;
}
