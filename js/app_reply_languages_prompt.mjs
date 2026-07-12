import { html_p_text } from "./html_p_text.mjs";
export function app_reply_languages_prompt(root) {
  let p = html_p_text(
    root,
    "1. What language or languages you want the Bible verses to be translated into?",
  );
  return p;
}
