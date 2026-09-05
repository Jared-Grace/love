import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_prod_asset_download } from "./firebase_prod_asset_download.mjs";
import { catch_message_async } from "./catch_message_async.mjs";
import { property_get } from "./property_get.mjs";
import { http_error_message_absent_is } from "./http_error_message_absent_is.mjs";
import { assert_message_get } from "./assert_message_get.mjs";
export async function firebase_prod_asset_download_or_null(file_name) {
  "$plain file_name";
  "the name of one file, as it sits in the folder that goes live";
  "What is being served right now under one name, or nothing at all when the far end says there is no such thing there.";
  "★ NOT-THERE IS AN ANSWER AND NOT A FAILURE, and telling those two apart is the whole of why this stands beside the plain download. A page that has fallen behind what is on disk gets asked for pieces its live build never had, and the far end says so plainly. That refusal is a fact about the page and exactly the kind of fact the record is being written to hold, so treating it as a failure throws the fact away - and throws away every other file of that page with it, because one refusal ends the whole reading.";
  "★ EVERY OTHER REFUSAL STILL STOPS THE RUN. A far end too busy to answer has said nothing at all about what it holds, so a timeout, a five hundred and a dropped socket are passed on untouched. Only the one refusal that means reached, working, and there is no such thing here becomes nothing at all - which is the same judgement the bible sweeps rest on, asked here rather than written out again.";
  arguments_assert(arguments, 1);
  async function lambda() {
    let downloaded = await firebase_prod_asset_download(file_name);
    return downloaded;
  }
  let caught = await catch_message_async(lambda);
  let answered = property_get(caught, "ok");
  if (answered) {
    let text = property_get(caught, "value");
    return text;
  }
  let message = property_get(caught, "message");
  let absent = http_error_message_absent_is(message);
  function message_get() {
    return message;
  }
  assert_message_get(absent, message_get);
  let unserved = null;
  return unserved;
}
