import { app_shared_text_body } from "./app_shared_text_body.mjs";
export function app_reply_languages_prompt(root) {
  let p = app_shared_text_body(
    root,
    "1. What language or languages you want the Bible verses to be translated into?",
  );
  return p;
}
