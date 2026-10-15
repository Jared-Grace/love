import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_file_kinds } from "./giveaway_file_kinds.mjs";
import { list_includes_assert } from "./list_includes_assert.mjs";
import { list_includes } from "./list_includes.mjs";
export function giveaway_file_kind_words_is(kind) {
  arguments_assert(arguments, 1);
  ("$plain kind");
  ("Whether a given-away file of this kind carries the words of a translation, and so has to name which translation in its own name.");
  ("★ A SONG, A LYRIC VIDEO AND A TEXT FILE ALL CARRY THE WORDS; A PICTURE CARRIES NONE. A song is the words sung. A lyric video is the words sung and printed on the screen as well. A text file is the words themselves. A crop of a painting has no words in it at all - it was chosen for what the psalm says at that line, and every translation of that psalm says the same thing there, so the choosing was never a translation's. What a picture does owe to one translation is its timing: which line of which wording it comes up on, which is a fact about the video it was cut for and not about the file. So the translation belongs in the name of the three and not in the name of the fourth.");
  ("★ THE LIST IS OF THE KINDS THAT DO CARRY WORDS, SO A KIND NOBODY HAS THOUGHT ABOUT YET ANSWERS NO - BECAUSE THE TWO MISTAKES ARE NOT EQUALLY CHEAP. Answering no wrongly gives two translations' files one name between them, and two separate checks already ask that: the record reports a repeated given-away name, and the picture gatherer refuses to let a second file claim a name already taken and hands the pair back by path. Answering yes wrongly publishes the same bytes twice under two permanent names, and nothing anywhere asks that question - a name on an item is its address forever, so the second copy could only be left where it was. Naming the one kind that does not carry words was the other way to write this, and it was rejected for exactly that: it makes a new kind default to the mistake nothing catches.");
  ("★ THE KIND IS PUT TO THE FIXED LIST FIRST, SO THIS ANSWERS NOTHING ABOUT A WORD THAT IS NOT A KIND. Without that, a kind spelled wrong would quietly answer no, the translation would drop out of a name, and the name would still look like a name. The same assert stands in the function that spells the name, and it stands here too because a question asked of a word has to be total in the word, not total in whoever happened to ask it.");
  let kinds = giveaway_file_kinds();
  list_includes_assert(kinds, kind);
  let carrying = ["song", "lyric_video", "text"];
  let words_is = list_includes(carrying, kind);
  return words_is;
}
