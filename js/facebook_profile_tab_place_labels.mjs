import { facebook_page_open } from "./facebook_page_open.mjs";
import { sleep_human_pace } from "./sleep_human_pace.mjs";
export async function facebook_profile_tab_place_labels(profile_url, tab) {
  "$plain profile_url";
  "$plain tab";
  "Which place labels - Lives in, From, Hometown, Current city, Moved to, Lived in - start a line on one tab of the facebook profile at profile_url, and how many lines each starts. Tells a profile that hides its places from one that names only a city.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  "★ ONLY LABELS LEAVE: each line is tested on this machine and only the fixed label words come back, never the rest of the line.";
  let labels = [
    "Lives in",
    "From",
    "Hometown",
    "Current city",
    "Moved to",
    "Lived in",
    "Went to",
  ];
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
    function lambda(l) {
      let r2 = l.trim();
      return r2;
    }
    function lambda2(l) {
      let r3 = l.length > 0;
      return r3;
    }
    let lines = text.split("\n").map(lambda).filter(lambda2);
    let counts = {};
    for (let label of labels) {
      function lambda3(l) {
        let r4 = l === label || l.startsWith(label + " ");
        return r4;
      }
      let n = lines.filter(lambda3).length;
      if (n > 0) {
        counts[label] = n;
      }
    }
    let r = {
      url,
      lines: lines.length,
      counts,
    };
    return r;
  } finally {
    await o.browser.close();
  }
}
