import { app_reply_buttons_languages_on_toggle } from "../../../love/public/src/app_reply_buttons_languages_on_toggle.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
export function app_reply_buttons_languages(languages_chosen, root, languages) {
  let on_toggle = noop;
  app_reply_buttons_languages_on_toggle(
    languages_chosen,
    on_toggle,
    root,
    languages,
  );
}
