import { greater_than } from "./greater_than.mjs";
import { facebook_page_open } from "./facebook_page_open.mjs";
import { sleep_human_pace } from "./sleep_human_pace.mjs";
import { facebook_page_main_text_names_hidden } from "./facebook_page_main_text_names_hidden.mjs";
import { text_lines_words_masked } from "./text_lines_words_masked.mjs";
export async function facebook_profile_tab_lines_masked(profile_url, tab) {
  "$plain profile_url";
  "$plain tab";
  "The lines of one tab of the facebook profile at profile_url - tab is its address word, like directory_intro - with names hidden by where they sit and every other word but labels and countries masked as *. For finding which tab holds what, never who the person is.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let url = profile_url.includes("profile.php")
    ? profile_url + "&sk=" + tab
    : profile_url.replace(/\/+$/, "") + "/" + tab;
  let o = await facebook_page_open(url);
  let page = o.page;
  try {
    await sleep_human_pace();
    let text = await facebook_page_main_text_names_hidden(page);
    function lambda(l) {
      let r2 = l.trim();
      return r2;
    }
    function lambda2(l) {
      let g = greater_than(l.length, 0);
      return g;
    }
    let lines = text.split("\n").map(lambda).filter(lambda2);
    let r = {
      url,
      lines: text_lines_words_masked(lines),
    };
    return r;
  } finally {
    await o.browser.close();
  }
}
