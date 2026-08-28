import { arguments_assert } from "./arguments_assert.mjs";
import { html_extension } from "./html_extension.mjs";
import { list_filter_ends_with } from "./list_filter_ends_with.mjs";
import { list_map } from "./list_map.mjs";
import { path_name } from "./path_name.mjs";
export function file_names_app_names(files) {
  "$plain files";
  "The apps a list of file names publishes: the name of every page among them, with the extension taken off.";
  "Where the list of files came from is deliberately not asked. One caller reads a folder on this machine and another asks what is live in production, and neither difference reaches this far - a page is a page whichever side of the wire it was listed from, so the two callers were doing the same four lines twice and only the fetching differed.";
  arguments_assert(arguments, 1);
  let sufix = html_extension();
  let htmls = list_filter_ends_with(files, sufix);
  let names = list_map(htmls, path_name);
  return names;
}
