import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { texts_start_shared } from "./texts_start_shared.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { list_includes } from "./list_includes.mjs";
export function texts_start_shared_family(texts) {
  "The beginning that every one of some names shares, handed back only when that beginning is a family rather than a coincidence, and empty otherwise.";
  "Three things have to hold, and each one is a way for a shared beginning to be perfectly true and still say nothing. Two names or more, because one name shares the whole of itself with itself. Something shared at all. And the shared part has to stop where a word stops - it either ends at an underscore, or it is one of the names entire - because a name here is words joined by underscores, so a run that ends in the middle of a word is two names that merely start alike. That last rule is what keeps a half word like propert from being announced as a corner of the repo.";
  arguments_assert(arguments, 1);
  let nothing = "";
  let few = less_than(texts.length, 2);
  if (few) {
    return nothing;
  }
  let start = texts_start_shared(texts);
  let boundary = text_ends_with(start, "_");
  let whole = list_includes(texts, start);
  let family = boundary || whole;
  if (family) {
    return start;
  }
  return nothing;
}
