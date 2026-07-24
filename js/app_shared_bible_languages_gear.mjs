import { app_shared_gear_languages_text } from "../../love/js/app_shared_gear_languages_text.mjs";
import { app_shared_button } from "../../love/js/app_shared_button.mjs";
import { ebible_languages } from "../../love/js/ebible_languages.mjs";
import { list_multiple_is } from "../../love/js/list_multiple_is.mjs";
import { window_reload } from "../../love/js/window_reload.mjs";
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
      "standing on its own, so back is a plain reload to the reading it came from";
      app_shared_bible_languages_choose(
        content,
        languages,
        languages_chosen,
        window_reload,
      );
    }
    app_shared_button(bar, app_shared_gear_languages_text(), on_gear);
  }
}
