import { not } from "./not.mjs";
import { browser_is } from "./browser_is.mjs";
import { function_import_relative } from "./function_import_relative.mjs";
import { fn_name } from "./fn_name.mjs";
import { web_assets_english_words_path } from "./web_assets_english_words_path.mjs";
import { web_assets_url } from "./web_assets_url.mjs";
import { http_json_memoized_on_success } from "./http_json_memoized_on_success.mjs";
import { null_is } from "./null_is.mjs";
import { english_words_lookup_from_lines } from "./english_words_lookup_from_lines.mjs";
export async function english_words_lookup() {
  "The English words and names, read off this machine's own word list when this is a program, and fetched as an asset when it is a page. Nothing, when a page cannot fetch it - offline, say.";
  "★ THE DISK HALF IS ASKED FOR BY NAME AND NOT IMPORTED, so a page's bundle never carries the code that reads a machine's disk.";
  "A page fetches the list once and keeps it while the page is open.";
  let b = browser_is();
  if (not(b)) {
    let system = await function_import_relative(
      fn_name("english_words_system_lookup"),
    );
    let lookup = await system();
    return lookup;
  }
  let path = web_assets_english_words_path();
  let url = web_assets_url(path);
  let lines = await http_json_memoized_on_success(
    english_words_lookup,
    path,
    url,
  );
  if (null_is(lines)) {
    return null;
  }
  let lookup = english_words_lookup_from_lines(lines);
  return lookup;
}
