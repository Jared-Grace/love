import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_file_kinds } from "./giveaway_file_kinds.mjs";
import { list_includes_assert } from "./list_includes_assert.mjs";
import { text_empty_not_is_assert } from "./text_empty_not_is_assert.mjs";
import { list_join_underscore } from "./list_join_underscore.mjs";
import { text_combine } from "./text_combine.mjs";
export function giveaway_chapter_file_name(
  chapter_code,
  bible_folder,
  kind,
  mark,
  ending,
) {
  arguments_assert(arguments, 5);
  ("$plain chapter_code");
  ("$plain bible_folder");
  ("$plain kind");
  ("$plain mark");
  ("$plain ending");
  ("What one given-away file of a passage is called inside its box - the passage, the translation whose words it carries, what kind of thing it is, and which one of several it is.");
  ("★ THE WHOLE NAME GOES IN THE FILE NAME RATHER THAN IN FOLDERS ABOVE IT, BECAUSE THE MP3 A PLAYER SHOWS HAS NO FOLDER AND NO TITLE. The free mp3 the host derives from a wav carries a tag holding only a details url and a length - no title, no artist, no track, measured on two of two items - so the file name is the only text that ever reaches the screen of the player somebody loads these onto. `song.mp3` under a tidy folder tree reads as `song` on that screen, over and over, once per psalm.");
  ("★ THE SAME NAME IS WHAT STOPS TWO BOXES OVERWRITING EACH OTHER ON UNZIP. A zip the host builds carries no wrapper folder of its own, so it opens straight into wherever it is opened. Two boxes that both held `song/plain.wav` would unzip over each other and the second psalm would silently replace the first - and somebody downloading the whole shelf is exactly the person who unzips them all into one folder.");
  ("★ THE PASSAGE KEEPS ITS UPPER CASE WHILE THE BOX NAME AROUND IT IS LOWERCASED, ON PURPOSE. The whole-translation bundle keys its chapters by this very code in the upper case, so keeping it means the word in the file name and the key in the text are the same characters and an automator joins the singing to the words with no table in between. The box name is lowercased for the opposite reason - it is retyped by people into addresses, where case is a way to spell one name two ways.");
  ("★ NOTHING IS UNMARKED, BECAUSE SEVERAL SONGS PER PASSAGE IS THE AIM AND NOT AN ACCIDENT TO BE TIDIED AWAY. An empty mark used to be allowed here and gave one file of each set the short, plain name - the rule the timing documents on this disk follow. That rule exists to stop a rename stranding times somebody corrected by hand, which is a fact about this disk and about no box. Carried into a box it would say the quiet opposite of the intention: one file reading as the song and the rest as spares. So a mark is required, and an empty one is refused rather than quietly joined, which would have written a name ending in an underscore and published it.");
  ("The kind is checked against the fixed list rather than trusted, because an unchecked kind is only wrong once and then it is wrong forever.");
  ("The order is passage, then translation, then kind, then which one. Sorted, that groups a passage together, then its translations, then each kind, then the songs in the order they were sung - which is the order somebody narrows down in, and a sorted listing is all a reader of a bare download page gets.");
  let kinds = giveaway_file_kinds();
  list_includes_assert(kinds, kind);
  text_empty_not_is_assert(mark);
  let stem = list_join_underscore([chapter_code, bible_folder, kind, mark]);
  let name = text_combine(stem, ending);
  return name;
}
