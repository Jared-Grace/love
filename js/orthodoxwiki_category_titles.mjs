import { json_from } from "./json_from.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { http_text_or_null } from "./http_text_or_null.mjs";
export async function orthodoxwiki_category_titles(category) {
  "The titles of every article OrthodoxWiki files under one category, given the category's name with underscores for spaces - Biblical_Saints, Prophets, Disambiguation_pages.";
  "THE SITE AND THE QUESTION ARE FIXED HERE AND ONLY THE CATEGORY IS ASKED FOR, and it has to be letters and underscores alone, so it can neither leave the site nor ask it anything else; it writes nothing.";
  let plain = /^[A-Za-z_]+$/.test(category);
  if (not(plain)) {
    throw new Error(
      "the category must be letters and underscores alone, such as Biblical_Saints - got " +
        category,
    );
  }
  let base =
    "https://orthodoxwiki.org/api.php?action=query&format=json&list=categorymembers&cmlimit=500&cmtitle=Category:" +
    category;
  let r = [];
  let more = "";
  while (true) {
    let url = base + more;
    let text = await http_text_or_null(url);
    if (equal(text, null)) {
      throw new Error("OrthodoxWiki did not answer for " + url);
    }
    let answer = json_from(text);
    for (let member of answer.query?.categorymembers ?? []) {
      r.push(member.title);
    }
    if (equal(answer.continue, undefined)) {
      break;
    }
    more = "";
    for (let [key, value] of Object.entries(answer.continue)) {
      more += "&" + key + "=" + encodeURIComponent(value);
    }
  }
  return r;
}
