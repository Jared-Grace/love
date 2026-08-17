import { ebible_copyright_credit_lines } from "./ebible_copyright_credit_lines.mjs";
import { ebible_text_licence } from "./ebible_text_licence.mjs";
import { ebible_version_copyright_path } from "./ebible_version_copyright_path.mjs";
import { ebible_version_page_url } from "./ebible_version_page_url.mjs";
import { file_read_try } from "./file_read_try.mjs";
import { html_parse } from "./html_parse.mjs";
import { html_parse_find_text } from "./html_parse_find_text.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export async function ebible_version_credit(bible_folder) {
  "$plain bible_folder";
  "Everything needed to credit one translation the way its own licence asks - what it calls itself, what it is in English, the credit block it must travel with, the terms it is offered on, and where it came from.";
  "Read off the copy on disk rather than off the web, so the credit a reader is shown is the credit that came with the very text they are reading. A page fetched later could have changed under it, and then the app would be crediting a text nobody has.";
  "One opening of the page answers all of it, because the page is opened once and asked five questions rather than opened five times.";
  "A translation nobody has downloaded is answered with nothing rather than refused, so a sweep over a part-finished download runs to the end instead of stopping at the first gap.";
  let f_path = ebible_version_copyright_path(bible_folder);
  let contents = await file_read_try(f_path);
  let missing = null_is(contents);
  if (missing) {
    return null;
  }
  let licence = ebible_text_licence(contents);
  let parsed = await html_parse(contents);
  let root = property_get(parsed, "root");
  let d = property_get(parsed, "d");
  let name = html_parse_find_text(root, d, "h1");
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
