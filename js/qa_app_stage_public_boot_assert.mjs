import { folder_web_latest_absolute } from "./folder_web_latest_absolute.mjs";
import { file_name_html } from "./file_name_html.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { server_url } from "./server_url.mjs";
import { page_route_root_from_folder } from "./page_route_root_from_folder.mjs";
import { page_boot_cold_capture_generic } from "./page_boot_cold_capture_generic.mjs";
import { property_get } from "./property_get.mjs";
import { page_boot_reasons } from "./page_boot_reasons.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function qa_app_stage_public_boot_assert(app_name) {
  "$plain app_name";
  "Opens the build waiting to go out for one app as the public opens it - at the top of the site, in a browser that has never been there - and throws if the page threw, drew nothing, or never got past its loading message. Answers with what it saw when it arrived.";
  "★ A PAGE DECIDES WHAT IT IS BY THE ADDRESS IT WAS OPENED AT. The same files show the whole course when opened under latest and only the released lessons when opened at the top, so a walk under latest says nothing about the page people get. 2026-11-06: code went out after a six-hour walk under latest and every learner opening it got an error, because the milestones looked for the While lesson and the public run does not hold it. Nothing ever opened the page at the top before it was sent.";
  "The files are answered out of the waiting folder rather than moved up first, so a page that will not open is refused before the folder that gets sent has been touched.";
  "It opens the home screen and nothing more. It takes seconds where the walk takes hours, and it asks the one question the walk cannot: does the public page open at all.";
  let folder = folder_web_latest_absolute();
  let file_name = file_name_html(app_name);
  let url2 = server_url();
  let url = text_combine_multiple([url2, "/", file_name]);
  async function page_prepare(page) {
    await page_route_root_from_folder(page, folder);
  }
  let capture = await page_boot_cold_capture_generic(url, page_prepare);
  let errors = property_get(capture, "errors");
  let body_text = property_get(capture, "body_text");
  let reasons = page_boot_reasons(body_text, errors);
  list_empty_is_assert_json(reasons, {
    hint: "the build waiting to go out does not open as the public would open it, so it was not moved up",
    app_name,
    url,
    errors,
    body_text,
  });
  return capture;
}
