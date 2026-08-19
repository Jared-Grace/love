import { door43_version_credit } from "./door43_version_credit.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { ebible_copyright_credit_lines } from "./ebible_copyright_credit_lines.mjs";
import { ebible_version_copyright_page_read } from "./ebible_version_copyright_page_read.mjs";
import { ebible_version_page_url } from "./ebible_version_page_url.mjs";
import { html_parse_find_text } from "./html_parse_find_text.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export async function ebible_version_credit(bible_folder) {
  "$plain bible_folder";
  "Everything needed to credit one translation the way its own licence asks - what it calls itself, what it is in English, the credit block it must travel with, the terms it is offered on, and where it came from.";
  "Read off the copy on disk rather than off the web, so the credit a reader is shown is the credit that came with the very text they are reading. A page fetched later could have changed under it, and then the app would be crediting a text nobody has.";
  "Opening the page and reading its terms and its own name off it is done next door, because the language reader alongside starts from exactly the same three. What is this one's own is the English description and the credit block.";
  "A translation nobody has downloaded is answered with nothing rather than refused, so a sweep over a part-finished download runs to the end instead of stopping at the first gap.";
  "A bible from the Door43 catalogue keeps its credit beside itself rather than on a page here, and is answered from there. The shape that comes back is the same either way, so whatever credits a translation or reads its terms never has to ask where it came from.";
  let door = door43_version_credit(bible_folder);
  let elsewhere = null_not_is(door);
  if (elsewhere) {
    return door;
  }
  let page = await ebible_version_copyright_page_read(bible_folder);
  let missing = null_is(page);
  if (missing) {
    return null;
  }
  let licence = property_get(page, "licence");
  let root = property_get(page, "root");
  let d = property_get(page, "d");
  let name = property_get(page, "name");
  let description = html_parse_find_text(root, d, "h2");
  let credit = ebible_copyright_credit_lines(root, d);
  let url = ebible_version_page_url(bible_folder);
  let v = {
    bible_folder,
    name,
    description,
    credit,
    licence,
    url,
  };
  return v;
}
