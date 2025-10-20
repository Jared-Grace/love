import { list_first } from "../../../love/public/src/list_first.mjs";
import { app_karate_button_back_text } from "../../../love/public/src/app_karate_button_back_text.mjs";
import { app_karate_button_next } from "../../../karate_code/public/src/app_karate_button_next.mjs";
import { emoji_check } from "../../../love/public/src/emoji_check.mjs";
import { emoji_secure } from "../../../love/public/src/emoji_secure.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { app_karate_button_back } from "../../../karate_code/public/src/app_karate_button_back.mjs";
import { html_checkboxes } from "../../../love/public/src/html_checkboxes.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { html_document_body } from "./html_document_body.mjs";
export function app_sandbox_main() {
  let root = html_document_body();
  marker("1");
  let context = {
    root,
  };
  let button_back = function lambda(context, parent) {
    let button2 = app_karate_button_back(parent, noop);
    return button2;
  };
  let top_text =
    "Will you provide for all of my travel? Please choose one of the following:";
  let value_previous_get = function lambda2() {
    let v = null;
    return v;
  };
  const choices = [
    {
      value: "no",
      title:
        emoji_secure() +
        " I cannot agree to provide for all of your travel at this time",
      details:
        'If you cannot provide for all of my travel, then I have no money to pay for my travel to you. Please choose "' +
        app_karate_button_back_text() +
        '"',
    },
    {
      value: "yes",
      title: emoji_check() + " Yes, I will provide for all of your travel",
      details:
        "May God you reap abundant blessings from your generosity: knowing that whatever good anyone does, he will receive the same from the Lord, whether he is slave or free (Ephesians 6:8)!",
    },
  ];
  let on_next = noop;
  let button_next = app_karate_button_next;
  let valid_get = function lambda3(checkboxes) {
    let first = list_first(list);
  };
  html_checkboxes(
    context,
    button_back,
    top_text,
    value_previous_get,
    "agree",
    choices,
    on_next,
    button_next,
    valid_get,
  );
}
