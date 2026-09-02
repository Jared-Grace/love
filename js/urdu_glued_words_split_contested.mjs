import { arguments_assert } from "./arguments_assert.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
export function urdu_glued_words_split_contested() {
  "The Urdu words a split was ruled for and then withdrawn, because the two printings of the control Bible do not back the ruling up.";
  "There are two grounds for withdrawing and they are not the same strength, so the words are grouped by which one applies. In the first group the control cannot answer the question, because it answers it both ways itself. In the second the control answers plainly and says the ruling was wrong. Either way the word comes out of the repair, but only the second group is a word we now know we were damaging, so keeping them apart is what lets that be read off the list.";
  "★ THE FIRST GROUP IS NOT WORDS A RULING GOT WRONG. Every one of them is a verb carrying the ending that makes it future - will do, will take, will see - and the question is only whether that ending is written onto the verb or a space away from it. The Urdu Geo Version is printed twice, once in Urdu script and once in the Latin alphabet, one translation set in two alphabets by one publisher. The Urdu-script printing puts the space in. Its own Latin printing runs them together. Measured on the word for he will do, that is seven hundred and twelve occurrences with the space against seven hundred and twelve without, in the same verses. One house cannot be said to have got its own convention wrong, so there is no fact here for a ruling to be right about.";
  "★ THE SECOND GROUP IS WORDS BOTH PRINTINGS WRITE AS ONE WORD AND NEVER APART. This is not a silence and not a disagreement; it is the control saying the opposite of what was ruled, twice, in two alphabets, with nothing on the other side. The word for a person who is not a Jew stands as one word seventy-four times in one printing and fifty-four times in its singular, and neither printing ever puts a space in it. A split ruled on a word like that puts a space inside a word that is whole, which is the one outcome the whole repair exists to avoid, so it comes out on the same evidence that would have stopped it being ruled.";
  "★ THE WITHDRAWAL IS THE ONLY MOVE THAT CANNOT MAKE THE TEXT WORSE. Leaving what the publisher wrote costs nothing that can be pointed at: a reader who would have written it the other way is looking at a spelling that is in print elsewhere. Putting a space in costs something real if the convention goes the other way, and it is a mark nobody can explain, because it appears in no other Urdu Bible and looks like damage rather than a choice. The two mistakes are not the same size, so the doubtful ones all fall the same way - which is the rule the ruling table already states for itself, applied to doubts that only showed up later.";
  "★ IT IS SUBTRACTED FROM THE RULINGS RATHER THAN DELETED OUT OF THEM. The rulings are the record of a sitting where somebody read Urdu word by word, and editing that record would leave no trace that a judgment was ever made or on what grounds. So the words stay written where they were decided, and this list takes them back out afterwards, in one place, with the reason beside it. Ruling one of them back in is deleting a line from here, and nothing else.";
  "The words are twenty-one and they stand at one thousand two hundred and fifty-five places in the text, which is better than a quarter of every space this repair puts back. The size is the reason this is worth a named list rather than a note: withdrawing them is the largest single change to what readers get, and it should be as easy to find and to argue with as the rulings themselves.";
  arguments_assert(arguments, 0);
  let printings_disagree_with_each_other = [
    "کرےگا",
    "کروگے",
    "جاؤگے",
    "رہوگے",
    "لوگے",
    "دوگے",
    "کرےگی",
    "پڑےگا",
    "دیکھوگے",
    "رکھےگا",
    "پڑےگی",
    "رکھوگے",
    "کہےگی",
    "آؤگے",
    "جاؤگی",
    "لوگی",
    "بچےگی",
    "کروگی",
    "دیکھوگی",
  ];
  let printings_both_refuse_the_split = ["غَیریہُودیوں", "غَیریہُودی"];
  let contested = list_concat_multiple([
    printings_disagree_with_each_other,
    printings_both_refuse_the_split,
  ]);
  return contested;
}
