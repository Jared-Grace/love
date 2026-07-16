import { emoji_gear } from "../../love/js/emoji_gear.mjs";
import { app_replace_button } from "../../love/js/app_replace_button.mjs";
import { ebible_languages } from "../../love/js/ebible_languages.mjs";
import { list_multiple_is } from "../../love/js/list_multiple_is.mjs";
import { app_shared_bible_languages_choose } from "../../love/js/app_shared_bible_languages_choose.mjs";
export function app_shared_bible_languages_gear(
  bar,
  content,
  languages_chosen,
) {
  let languages = ebible_languages();
  ("only offer the gear when the chapter can be shown in more than one language");
  let multiple = list_multiple_is(languages);
  if (multiple) {
    function on_gear() {
      app_shared_bible_languages_choose(content, languages, languages_chosen);
    }
    app_replace_button(bar, emoji_gear(), on_gear);
  }
}
