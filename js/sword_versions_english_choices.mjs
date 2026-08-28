import { arguments_assert } from "./arguments_assert.mjs";
import { sword_versions } from "./sword_versions.mjs";
import { bible_versions_english_choices } from "./bible_versions_english_choices.mjs";
export function sword_versions_english_choices() {
  arguments_assert(arguments, 0);
  ("Every English translation this repo carries as a Sword module rather than from eBible or Door43, each against what it calls itself, the terms it is offered on, and whether those terms leave us free to ship it and to earn from what is built on it.");
  ("Naming the shelf is the whole of what is this one's own. Answering in the shape every shelf answers in, so a comparison of wordings can put all three lists end to end and read them as one, and asking for the language by the plain name each entry writes rather than by its code, are the same work for every shelf and are said once next door.");
  let versions = sword_versions();
  let choices = bible_versions_english_choices(versions);
  return choices;
}
