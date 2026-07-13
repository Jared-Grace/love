import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_shared_languages_prompt_text } from "./app_shared_languages_prompt_text.mjs";
export function app_reply_languages_prompt(root) {
  let text = text_combine("1. ", app_shared_languages_prompt_text());
  let p = app_shared_text_body(root, text);
  return p;
}
