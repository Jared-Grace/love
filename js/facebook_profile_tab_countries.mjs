import { facebook_page_open } from "./facebook_page_open.mjs";
import { sleep_human_pace } from "./sleep_human_pace.mjs";
import { text_lines_countries } from "./text_lines_countries.mjs";
export async function facebook_profile_tab_countries(profile_url, tab) {
  "$plain profile_url";
  "$plain tab";
  "The countries named on one tab of the facebook profile at profile_url - tab is its address word, like directory_personal_details. Reads the whole text, links included, because a place is itself a link.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  "★ ONLY COUNTRIES LEAVE: the page's words are matched on this machine and only the countries found are returned, so no name ever reaches the answer.";
  let url = profile_url.includes("profile.php")
    ? profile_url + "&sk=" + tab
    : profile_url.replace(/\/+$/, "") + "/" + tab;
  let o = await facebook_page_open(url);
  let page = o.page;
  try {
    await sleep_human_pace();
    let text = await page.evaluate(
      "(function(){var m=document.querySelector('[role=main]');return (m||document.body).innerText})()",
    );
    let lines = text
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l.length > 0);
    let r = {
      url,
      countries: text_lines_countries(lines),
    };
    return r;
  } finally {
    await o.browser.close();
  }
}
