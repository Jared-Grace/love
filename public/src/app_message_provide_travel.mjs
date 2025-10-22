import { emoji_x_purple } from "../../../love/public/src/emoji_x_purple.mjs";
import { app_message_flow_travel } from "../../../love/public/src/app_message_flow_travel.mjs";
import { html_checkboxes } from "../../../love/public/src/html_checkboxes.mjs";
import { html_checkboxes_checked_value_get } from "../../../love/public/src/html_checkboxes_checked_value_get.mjs";
import { app_karate_button_next } from "../../../karate_code/public/src/app_karate_button_next.mjs";
import { app_generic_flow_next } from "../../../love/public/src/app_generic_flow_next.mjs";
import { emoji_check } from "../../../love/public/src/emoji_check.mjs";
import { app_karate_button_back_text } from "../../../love/public/src/app_karate_button_back_text.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { app_karate_button_back } from "../../../karate_code/public/src/app_karate_button_back.mjs";
export function app_message_provide_travel(context) {
  let button_back = function lambda(context, parent) {
    let button2 = app_karate_button_back(parent, noop);
    return button2;
  };
  let top_text =
    "Will you provide for all of my travel? 🛬 Please choose one of the following:";
  let value_previous_get = function lambda2() {
    let v = null;
    return v;
  };
  const yes = "yes";
  const choices = [
    {
      value: "no",
      title:
        emoji_x_purple() +
        " I cannot agree to provide for all of your travel at this time",
      details:
        'If you cannot provide for all of my travel, then I have no money to pay for my travel to you. Please choose "' +
        app_karate_button_back_text() +
        '"',
    },
    {
      value: yes,
      title: emoji_check() + " Yes, I will provide for all of your travel 🛬",
      details:
        "May you reap abundant blessings from God for your generosity: knowing that whatever good anyone does, he will receive the same from the Lord, whether he is slave or free (Ephesians 6:8)!",
    },
  ];
  let on_next = function lambda4() {
    let screens = app_message_flow_travel();
    app_generic_flow_next(context, screens);
  };
  let button_next = app_karate_button_next;
  let valid_get = function lambda3(checkboxes) {
    let value_checked = html_checkboxes_checked_value_get(checkboxes);
    let v2 = value_checked === yes;
    return v2;
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
