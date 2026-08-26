import { arguments_assert } from "./arguments_assert.mjs";
import { properties_get } from "./properties_get.mjs";
import { texts_start_shared_family } from "./texts_start_shared_family.mjs";
import { object_family_first } from "./object_family_first.mjs";
export function functions_prose_search_answer(result, searched, silent) {
  "What a search over what functions say they are for hands back: the functions it found, how far it could see, how much of the repo says nothing about itself, and the family they all belong to when they all belong to one.";
  "The family matters more here than it does over names, not less. Words describing a purpose are chosen by somebody who does not know what the thing is called, so an answer that is entirely one corner of the repo is the likeliest way for those words to be wrong - and it is the answer that looks most like success, because it is full.";
  "No comparison against the words asked for, which is the one thing that differs from the search over names. There the typed word is the front of every name found, so a family only says something when it runs past what was typed. Here the typed words are a description and match anywhere in a paragraph, so they are not the front of anything, and a shared front is worth saying whenever there is one.";
  arguments_assert(arguments, 3);
  let names = properties_get(result);
  let family = texts_start_shared_family(names);
  let report = {
    searched,
    silent,
    found: result,
  };
  let r = object_family_first(family, report);
  return r;
}
