import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_bible_text_renderings } from "./giveaway_bible_text_renderings.mjs";
import { giveaway_passage_file_name } from "./giveaway_passage_file_name.mjs";
import { list_add } from "./list_add.mjs";
export function giveaway_passage_text_file_names(passage_code, bible_folder) {
  arguments_assert(arguments, 2);
  ("$plain passage_code");
  ("$plain bible_folder");
  ("What the files holding one passage's words are called inside its box - all three of them, named without reading a word of the passage.");
  ("★ THE NAMES ARE DERIVED AND SO NEED NO RECORD, WHICH IS THE WHOLE DIFFERENCE FROM THE SINGING. A recording's published name depends on how many recordings of that passage exist and in what order they were downloaded, so it has to be frozen in a record the moment it is right, and a refresh can move it. A text file's name depends on nothing but the passage and the translation - ask twice a year apart and get the same three names - so there is nothing here to freeze, nothing to drift, and no refresh that could renumber anything.");
  ("★ IT READS NOTHING, ON PURPOSE, BECAUSE WHAT WANTS THE NAMES MOSTLY DOES NOT WANT THE WORDS. The sentence under a box has to say the box holds the psalm's words, and a listing has to show the three names; neither needs the psalm itself. Were the names only available alongside the text, describing eighty-two boxes would mean eighty-two readings of the store to count to three.");
  ("The naming rule itself is not spelled here. It is the same rule every other file in a box is named by, so it is asked for rather than repeated - which is what keeps a text file and a recording of the same psalm sorting together on a download page.");
  let renderings = giveaway_bible_text_renderings();
  let names = [];
  for (let rendering of renderings) {
    let file_name = giveaway_passage_file_name(
      passage_code,
      bible_folder,
      "text",
      rendering.mark,
      rendering.ending,
    );
    let one = {
      kind: "text",
      mark: rendering.mark,
      ending: rendering.ending,
      file_name,
    };
    list_add(names, one);
  }
  return names;
}
