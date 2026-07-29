import { fn_name } from "./fn_name.mjs";
export function markers_names() {
  "Every mark that can be written in a function body to say something to a search that reads the code rather than runs it.";
  "A mark is named after the function that reads it, with a word for what it claims on the end. That name is the whole convention: a stranger meeting one in a body opens the function it is named after and finds out who was listening and why.";
  "They are gathered in one place because two things need to know them and neither should guess. The shape of a function is taken with its marks removed, so that marking one of a pair does not quietly split the pair and make the finding vanish instead of being answered. And a gate reads this list to check every mark still names a live reader, since renaming the reader leaves the mark spelling a name that no longer exists.";
  let names = [fn_name("function_duplicate_kind_parallel")];
  return names;
}
