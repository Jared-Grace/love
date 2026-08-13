import { assert_message } from "./assert_message.mjs";
import { buffer_text_to } from "./buffer_text_to.mjs";
import { file_name_html } from "./file_name_html.mjs";
import { file_name_js } from "./file_name_js.mjs";
import { firebase_project_url_jg } from "./firebase_project_url_jg.mjs";
import { http } from "./http.mjs";
import { list_join_underscore } from "./list_join_underscore.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_slash_forward } from "./text_slash_forward.mjs";

export async function app_shared_prod_snapshot_alive_assert(app_name, label) {
  "$plain app_name";
  "$plain label";
  "Makes sure a kept copy of an app is still whole out on the internet - the page is there, it sends for its own script, and that script is there too.";
  "The live site is asked rather than the folder on this machine, because the whole reason for keeping a copy is that somebody far away can still open it, and a file sitting here proves nothing about that.";
  "What the page sends for is read out of the page rather than worked out from the names, because a page still pointing at the live script is exactly the failure worth catching, and a check that works the answer out from the names would say yes to it every time.";
  "This is the whole of what a kept copy can be asked. What it does once it is running was settled when it was built and is not asked again - the tests move on with the app while the kept copy deliberately does not, so measuring the old one against today's tests would call the keeping broken for having worked.";
  let url_prefix = firebase_project_url_jg();
  let s = text_slash_forward();
  let name_kept = list_join_underscore([app_name, label]);
  let page = file_name_html(name_kept);
  let url_page = text_combine_multiple([url_prefix, s, page]);
  let buffer = await http(url_page);
  let text = buffer_text_to(buffer);
  let source = file_name_js(name_kept);
  let own = text_includes(text, source);
  assert_message(
    own,
    "The kept page is not sending for its own script, so what it shows is whatever the app has become rather than what was kept. Would you like to take the snapshot again?",
  );
  let url_source = text_combine_multiple([url_prefix, s, source]);
  await http(url_source);
  let checked = [url_page, url_source];
  return checked;
}
