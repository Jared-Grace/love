import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_file_kinds } from "./giveaway_file_kinds.mjs";
import { list_includes_assert } from "./list_includes_assert.mjs";
import { text_empty_not_is_assert } from "./text_empty_not_is_assert.mjs";
import { giveaway_file_kind_words_is } from "./giveaway_file_kind_words_is.mjs";
import { list_join_underscore } from "./list_join_underscore.mjs";
import { text_combine } from "./text_combine.mjs";
export function giveaway_passage_file_name(
  passage_code,
  bible_folder,
  kind,
  mark,
  ending,
) {
  arguments_assert(arguments, 5);
  ("$plain passage_code");
  ("$plain bible_folder");
  ("$plain kind");
  ("$plain mark");
  ("$plain ending");
  ("What one given-away file of a passage is called inside its box - the passage, the translation whose words it carries where it carries any, what kind of thing it is, and which one of several it is.");
  ("★ THE WHOLE NAME GOES IN THE FILE NAME RATHER THAN IN FOLDERS ABOVE IT, BECAUSE THE MP3 A PLAYER SHOWS HAS NO FOLDER AND NO TITLE. The free mp3 the host derives from a wav carries a tag holding only a details url and a length - no title, no artist, no track, measured on two of two items - so the file name is the only text that ever reaches the screen of the player somebody loads these onto. `song.mp3` under a tidy folder tree reads as `song` on that screen, over and over, once per psalm.");
  ("★ THE SAME NAME IS WHAT STOPS TWO BOXES OVERWRITING EACH OTHER ON UNZIP. A zip the host builds carries no wrapper folder of its own, so it opens straight into wherever it is opened. Two boxes that both held `song/plain.wav` would unzip over each other and the second psalm would silently replace the first - and somebody downloading the whole shelf is exactly the person who unzips them all into one folder.");
  ("★ A PICTURE IS NOT NAMED AFTER A TRANSLATION, BECAUSE THERE ARE NO WORDS IN IT TO TRANSLATE. A song is the words sung, a lyric video is the words sung and printed, a text file is the words themselves - and a crop of a painting is a painting. It was chosen for what the psalm says at that line, which every translation of that psalm says too; what it owes to one translation is only its timing, which line of which wording it comes up on, and that is a fact about the video it was cut for rather than about the file. Named with the translation in it, the same painting would go up twice the day a second translation was sung - the same bytes, in the same box, under two names neither of which could ever be taken back. Which kinds carry words is asked of its own function, so a kind added later has to answer the question instead of inheriting an answer from the shape of this one.");
  ("★ THE TRANSLATION IS STILL HANDED IN FOR A PICTURE, AND THAT IS THE RIGHT DIVISION RATHER THAN AN ARGUMENT GOING TO WASTE. The caller knows a true thing - which translation's document this crop was timed against - and the record keeps it beside the name, where it says where the crop came from. Whether a true thing belongs in a published address is a naming question, and the naming rule lives here. Dropping the argument instead would have moved the decision out to every caller, and a caller that decides what to leave out of a name is a second naming rule.");
  ("★ THE PASSAGE KEEPS ITS UPPER CASE WHILE THE BOX NAME AROUND IT IS LOWERCASED, ON PURPOSE. The whole-translation bundle keys its chapters by this very code in the upper case, so keeping it means the word in the file name and the key in the text are the same characters and an automator joins the singing to the words with no table in between. The box name is lowercased for the opposite reason - it is retyped by people into addresses, where case is a way to spell one name two ways.");
  ("★ THE PASSAGE IS A WHOLE CHAPTER'S CODE OR A PART OF ONE, IN THE SAME SLOT, BECAUSE A BOX IS A CHAPTER AND A CHAPTER IS SUNG BOTH WAYS. Psalm 147 and Psalm 149 are each sung whole and also sung in parts, measured over the recordings on this disk, so a box holding only one of those two shapes would have to split a psalm to hold the other. A whole chapter hands in the code it already has and a part hands in what the part-naming function spells, which is that same code with a padded verse range joined onto it - and that function is where the reasons for the range's shape are written, including the test that tells the two shapes apart. The join to the text still works for a part, because a part's code opens with its chapter's code unchanged.");
  ("★ NOTHING IS UNMARKED, BECAUSE SEVERAL SONGS PER PASSAGE IS THE AIM AND NOT AN ACCIDENT TO BE TIDIED AWAY. An empty mark used to be allowed here and gave one file of each set the short, plain name - the rule the timing documents on this disk follow. That rule exists to stop a rename stranding times somebody corrected by hand, which is a fact about this disk and about no box. Carried into a box it would say the quiet opposite of the intention: one file reading as the song and the rest as spares. So a mark is required, and an empty one is refused rather than quietly joined, which would have written a name ending in an underscore and published it.");
  ("The kind is checked against the fixed list rather than trusted, because an unchecked kind is only wrong once and then it is wrong forever.");
  ("The order is passage, then translation where there is one, then kind, then which one. Sorted, that groups a passage together, then its translations, then each kind, then the songs in the order they were sung - which is the order somebody narrows down in, and a sorted listing is all a reader of a bare download page gets.");
  ("A picture, having no translation in its name, sorts on its kind word where the others sort on their translation - so a passage's pictures stand together after everything that carries words, rather than inside the run of one translation. That is the listing a reader wants of them anyway: the paintings of this psalm, as a set, because the set is what they are.");
  let kinds = giveaway_file_kinds();
  list_includes_assert(kinds, kind);
  text_empty_not_is_assert(mark);
  let words_is = giveaway_file_kind_words_is(kind);
  let pieces = words_is
    ? [passage_code, bible_folder, kind, mark]
    : [passage_code, kind, mark];
  let stem = list_join_underscore(pieces);
  let name = text_combine(stem, ending);
  return name;
}
