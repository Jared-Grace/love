import { arguments_assert } from "./arguments_assert.mjs";
import { folder_public } from "./folder_public.mjs";
import { folder_read_htmls } from "./folder_read_htmls.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
export async function pages_published_names() {
  "The file name of every page this repo serves, which is to say every address of it a person can reach, keep, or send to somebody else. Read-only.";
  "Read off the folder rather than listed, because what is served is what is in there. A list would be answering from memory about something that can be looked at.";
  "Every page in there counts and none is filtered out. A page nobody meant to be public is still reachable by anybody who types it, and the one that looks least worth keeping - the page shown when nothing else matched - is the one a broken link lands on.";
  "The name is kept whole, ending and all, because the ending is part of what is typed into the bar. Half a name would be a word this repo made up about the file rather than the thing that left it.";
  arguments_assert(arguments, 0);
  let folder = folder_public();
  let htmls = await folder_read_htmls(folder);
  let names = list_sort_text(htmls);
  return names;
}
