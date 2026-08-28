import { arguments_assert } from "./arguments_assert.mjs";
import { door43_versions } from "./door43_versions.mjs";
import { bible_versions_english_choices } from "./bible_versions_english_choices.mjs";
export function door43_versions_english_choices() {
  arguments_assert(arguments, 0);
  ("Every English translation this repo carries from Door43 rather than from eBible, each against what it calls itself, the terms it is offered on, and whether those terms leave us free to ship it and to earn from what is built on it.");
  ("THESE ARE NOT WHOLE BIBLES AND THAT IS WHY THEY ARE LISTED APART. The eBible side is defined as the translations we hold all sixty-six books of, and these two are published a book at a time - fifty-six of the sixty-six at the release read here. Folding them in would either break that definition or lose them, so they are their own list and the comparison holds both.");
  ("Naming the shelf is the whole of what is this one's own. Answering in the shape every shelf answers in, and asking for the language by the plain name each entry writes rather than by its code, are the same work for every shelf and are said once next door.");
  let versions = door43_versions();
  let choices = bible_versions_english_choices(versions);
  return choices;
}
