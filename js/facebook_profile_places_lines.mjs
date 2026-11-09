import { facebook_page_open } from "./facebook_page_open.mjs";
import { sleep_human_pace } from "./sleep_human_pace.mjs";
export async function facebook_profile_places_lines(profile_url) {
  "$plain profile_url";
  "Opens the places part of the about page of the facebook profile at profile_url - where the person lives and is from - and answers its lines of text. It reads; it never clicks.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  "★ ONLY THE PLACES PAGE IS READ: a country is all a language guess needs, so nothing else about the person leaves the machine.";
  "A profile.php address names its part with &sk=, a named profile with a folder on the end.";
  let places = profile_url.includes("profile.php")
    ? profile_url + "&sk=about_places"
    : profile_url.replace(/\/+$/, "") + "/about_places";
  let o = await facebook_page_open(places);
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
    let r = {
      profile_url,
      places,
      lines,
    };
    return r;
  } finally {
    await o.browser.close();
  }
}
