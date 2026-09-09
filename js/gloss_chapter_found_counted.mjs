import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_size } from "./list_size.mjs";
export function gloss_chapter_found_counted(chapter_code, found) {
  arguments_assert(arguments, 2);
  ("One offending gloss chapter made from its name and the findings met in it: the name, how many there were, and the findings themselves.");
  ("$plain chapter_code");
  ("the code is a chapter's name, like PRO31, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.");
  ("This is the shape every reading that walks the gloss store for one kind of fault hands back a chapter in, and each of those readings was ending with the same three lines: count what was found, gather the name and the count and the findings, hand that over. The work is not the interesting part of any of them - what they went and fetched is - and having it written out at the end of each one meant a reader had to check three times that the three were the same three.");
  ("It is the making side of ",
    fn_name("gloss_chapter_found_count"),
    ", which takes the count back off a chapter once it has been made, and the two hold the same one word between them so that neither can drift from the other.");
  ("The count is worked out here rather than asked for, because a count handed in beside a list is a second thing that can be wrong, and a chapter that met nothing carries an empty list and a nought rather than being left out.");
  let count = list_size(found);
  let r = {
    chapter_code,
    count,
    found,
  };
  return r;
}
