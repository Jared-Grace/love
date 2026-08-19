import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_languages_derivatives_forbidden_bible_folders } from "./ebible_languages_derivatives_forbidden_bible_folders.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_includes } from "./list_includes.mjs";
export async function ebible_bible_folders_derivatives_allowed_assert(
  bible_folders,
) {
  arguments_assert(arguments, 1);
  ("Refuses to go on when any of these translations is one whose own words may not be altered - what anything about to write into a verse owes the text before it writes.");
  ("The terms that forbid a derivative permit everything else, earning included, so such a translation is welcome to be read and closed only to being changed. That is why this is asked at the moment of changing rather than at the moment of shipping: refusing the text outright would refuse a translation that was given away freely.");
  ("It asks which translations those are rather than keeping a list of their names, so a translation whose terms are read differently later, and one added after this was written, are both caught without anybody remembering to come back here.");
  let forbidden = await ebible_languages_derivatives_forbidden_bible_folders();
  function forbidden_is(bible_folder) {
    let found = list_includes(forbidden, bible_folder);
    return found;
  }
  let offenders = list_filter(bible_folders, forbidden_is);
  list_empty_is_assert_json(offenders, {
    hint: "the terms this translation is given on forbid changing any of its words or punctuation, so nothing may be written into its verses - hold the note beside the verse instead, or write this from a translation whose terms allow a derivative",
    bible_folders,
  });
}
