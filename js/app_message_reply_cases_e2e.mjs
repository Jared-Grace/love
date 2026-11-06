import { arguments_assert } from "./arguments_assert.mjs";
import { reply_cases } from "./reply_cases.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_size } from "./list_size.mjs";
import { app_shared_url_stage_local } from "./app_shared_url_stage_local.mjs";
import { app_message } from "./app_message.mjs";
import { storage_key_name_get } from "./storage_key_name_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { json_to } from "./json_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_message_reply_cases_e2e_bubbles } from "./app_message_reply_cases_e2e_bubbles.mjs";
import { playwright_test_url } from "./playwright_test_url.mjs";
import { app_shared_contact_received_text } from "./app_shared_contact_received_text.mjs";
import { property_get } from "./property_get.mjs";
import { list_get } from "./list_get.mjs";
import { json_equal_not } from "./json_equal_not.mjs";
import { list_add } from "./list_add.mjs";
import { each_index } from "./each_index.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { error_json } from "./error_json.mjs";
export async function app_message_reply_cases_e2e(stage_name) {
  "$plain stage_name";
  "opens the message app built at one stage in a headless browser, puts every worked reply case into its thread, and throws unless each reply it draws is the one the case expects - the case's lines when the rules answer it, and the received note when they do not.";
  "★ NOTHING IS SENT. The messages are written straight into the thread the app keeps on the device and the page is opened again, because pressing Send on a message the rules do not answer posts it to the real inbox.";
  "This is the only check that runs the rules where people meet them: bundled into the page and worked out in the browser.";
  arguments_assert(arguments, 1);
  let cases = await reply_cases();
  let messages = list_map_property(cases, "message");
  let count = list_size(messages);
  let url = await app_shared_url_stage_local(app_message, stage_name);
  let key = storage_key_name_get(fn_name("app_message"), "messages");
  let stored = json_to({
    value: messages,
  });
  let json = json_to(key);
  let json2 = json_to(stored);
  let script = text_combine_multiple([
    "localStorage.setItem(",
    json,
    ",",
    json2,
    ")",
  ]);
  let drawn = null;
  async function on_page(page) {
    await page.evaluate(script);
    await page.reload();
    drawn = await app_message_reply_cases_e2e_bubbles(page, count);
  }
  await playwright_test_url(url, on_page);
  let received = app_shared_contact_received_text();
  let wrong = [];
  function check(c, i) {
    let answered = property_get(c, "answered");
    let expected = [received];
    if (answered) {
      expected = property_get(c, "outputs");
    }
    let actual = list_get(drawn, i);
    if (json_equal_not(actual, expected)) {
      let message = property_get(c, "message");
      list_add(wrong, {
        message,
        expected,
        actual,
      });
    }
  }
  each_index(cases, check);
  if (list_empty_not_is(wrong)) {
    let size = list_size(wrong);
    let text = text_combine_multiple([
      "message app e2e: ",
      size,
      " of ",
      count,
      " replies drawn in the app differ from their case",
    ]);
    error_json({
      text,
      wrong,
    });
  }
  let r = {
    cases: count,
    url,
  };
  return r;
}
