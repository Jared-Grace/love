import { arguments_assert } from "./arguments_assert.mjs";
import { text_replace_to_space } from "./text_replace_to_space.mjs";
import { ebible_reference_line_aliased } from "./ebible_reference_line_aliased.mjs";
import { ebible_book_longest_named_or_null } from "./ebible_book_longest_named_or_null.mjs";
export function song_file_book_named_or_null(file_name, book_names) {
  arguments_assert(arguments, 2);
  ("$plain file_name");
  ("$plain book_names");
  ("The book of the bible a song's file name opens with, or nothing where it opens with none of them.");
  ("UNDERSCORES ARE READ AS SPACES, because a downloaded song's file name is its title with the spaces taken out and there is no telling which songs got that treatment. One folder here holds Psalm 148.mp3 beside Psalm_148.wav, the same passage sung twice, so a rule that saw only one spelling would be sorting on how a file happened to be saved rather than on what is in it.");
  ("A BOOK NAME ONLY COUNTS AT THE FRONT. Inspired by Psalm 148.mp3 names a psalm and is not one, and no reading of the words alone tells the two apart - where the name opens the line is the whole of what separates a passage set to music from a song that merely mentions one.");
  ("The matching is the one the written passage references already use, rather than a second one living here. That is what makes Psalm understood as Psalms and Song of Solomon as Song, lets the longer of two names that both fit win, and ignores upper and lower case. A second answer to which book a line names is a second answer that can come to disagree with the first, and the disagreement would show up as songs quietly sorted one way here and another way everywhere else.");
  let spaced = text_replace_to_space(file_name, "_");
  let aliased = ebible_reference_line_aliased(spaced);
  let named = ebible_book_longest_named_or_null(aliased, book_names);
  return named;
}
