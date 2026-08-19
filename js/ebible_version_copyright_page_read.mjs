import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_text_licence } from "./ebible_text_licence.mjs";
import { ebible_version_copyright_path } from "./ebible_version_copyright_path.mjs";
import { file_read_try } from "./file_read_try.mjs";
import { html_parse } from "./html_parse.mjs";
import { html_parse_find_text } from "./html_parse_find_text.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export async function ebible_version_copyright_page_read(bible_folder) {
  "$plain bible_folder";
  "A downloaded translation's licence page opened once and read down to the three things every reader of it starts from - the terms it is offered on, what it calls itself, and the parsed page itself to go on asking. Nothing when that translation has not been downloaded.";
  "Two readers of this page were written out with these same nine lines at the top of each, and both then went on to ask the page different further questions. Opening it, giving up on a translation nobody has, and finding its own name are not what either of them is about; they are what both had to do first.";
  "The page is opened once and asked, rather than opened once per question. Fifteen hundred translations are on disk and each extra opening is fifteen hundred more.";
  "A translation that has not been downloaded is answered with nothing rather than refused, so a sweep over every name eBible lists runs to the end on a partial download.";
  arguments_assert(arguments, 1);
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
  let page = {
    licence,
    root,
    d,
    name,
  };
  return page;
}
