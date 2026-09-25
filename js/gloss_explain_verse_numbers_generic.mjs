import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { text_punctuation_dash_kept_split } from "./text_punctuation_dash_kept_split.mjs";
import { list_join } from "./list_join.mjs";
import { property_set } from "./property_set.mjs";
import { list_size } from "./list_size.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { list_max } from "./list_max.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_words_punctuation_split } from "./text_words_punctuation_split.mjs";
import { text_comma_marks } from "./text_comma_marks.mjs";
import { less_than } from "./less_than.mjs";
import { list_includes } from "./list_includes.mjs";
import { subtract } from "./subtract.mjs";
import { list_get_or_null } from "./list_get_or_null.mjs";
import { not } from "./not.mjs";
import { text_tokens_number_run_or_null } from "./text_tokens_number_run_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
import { or } from "./or.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
import { each_index } from "./each_index.mjs";
import { list_unique } from "./list_unique.mjs";
export function gloss_explain_verse_numbers_generic(
  explain,
  verse_numbers,
  markers,
  joiner,
  distances,
  lambda_spell,
  counters,
) {
  "The verses of its own chapter that one word explanation names, read in whatever language the explanation was written in, as a list with nothing said twice.";
  "$plain markers";
  "$plain distances";
  "$plain counters";
  "the markers are the words the explanation's own language uses for verse, the joiner is its word for and, the distances are its words for counting backwards from here, and the counters are its words for how many verses rather than which one. All of them are words from a language and none names anything that runs.";
  "AN EXPLANATION THAT SAYS WHERE ELSE IN THE CHAPTER A WORD STANDS IS MAKING A CLAIM ANYONE CAN CHECK, and it makes that claim the same way in every language: it says the word for verse, and then it says which. What changes from one store to the next is only the word and the shapes the number is written with, so those are handed in and the reading itself is written once.";
  "The chapter's own verse numbers are handed in and written out here rather than the writing being read back into numbers. Writing forward needs only the one speller the language already has; reading backward would want a second table saying the same thing, which would then be free to come to disagree with the first. It also means a verse the chapter does not have is never named, however the sentence spells it.";
  "A number counts only where it follows the word for verse, because ordinary prose is full of small numbers that are not verses at all. A list carries on past its joining word, so verses thirteen, sixteen, nineteen and twenty names four of them, and the run ends at the first word that is not one.";
  "PUNCTUATION IS READ RATHER THAN THROWN AWAY, BECAUSE A SENTENCE THAT ENDED IS NOT A SENTENCE THAT CARRIED ON. It is the only one in the whole verse. Two doing words are tied by it says nothing about verse two, and a reading that had already lost the full stop could not tell it from one that did. Measured on 2026-09-25 that one confusion was most of what the original-language store was being accused of.";
  "A MARK OR A JOINING WORD CARRIES THE READING ON ONLY ONCE SOMETHING HAS ALREADY BEEN NAMED, and that one question is asked of both of them together. Verses thirteen, sixteen is a list of two and two verses, two pairs is a sentence about pairs, and the difference between them is whether a number came before the comma or after it. A joining word joins one thing to another, so before the first number there is nothing there for it to join: it is said twice in this one verse and three more times names no verse at all, and neither does there are two reasons, one in this verse and one in the next. The comma had always asked this and the joining word never had, which was the whole of that fault - three of the hundred and fifty-two rows the original-language store stood accused of on 2026-09-25, each of them a sentence that named nothing. Every other mark ends the run wherever it stands.";
  "A WORD OF COUNT BEFORE THE WORD FOR VERSE MEANS HOW MANY, AND WHAT FOLLOWS IS NOT A VERSE AT ALL. Within a few verses two hands will take hold of this man is counting verses and then beginning a fresh phrase, and it has the same shape as in verses two the word stands again. The telling word stands in front of the marker rather than behind the number, so it is the one token before the marker that is looked at, and a marker counted rather than naming is shut before it ever opens.";
  "Only words of unstated count are listed, and that is a deliberate line rather than an oversight. A few verses, several verses, some verses: none of those can be followed by a verse label, because nobody writes a few verses three and four for those two verses - they write verses three and four. A definite count can be: the two verses three and four is awkward but sayable, and so is the last verses one and two. Listing those would buy two more rows and risk dropping a real claim in silence, which is the dearer mistake of the two. The two shapes left uncovered were met once each on 2026-09-25 and are written down here rather than guessed at.";
  "A NUMBER SAYING HOW FAR BACK IS NOT A NUMBER SAYING WHICH. It stood twice in the verse two back counts two verses backwards from here and names no verse at all, and it has the same five words in the same order as a sentence that does. The word after the number is what tells them apart, so it is looked at, and a number answered by a word of distance is dropped rather than named.";
  "How many words a number takes to write is asked of the writing rather than assumed to be one. English writes every verse up to ninety-nine in a single word and verse one hundred and seven in three, so a reading that stepped one word at a time was blind to every verse past ninety-nine while saying nothing about it. Psalm one hundred and nineteen is the only chapter in the whole Bible with that many verses, and it is authored in one of these stores, so the blindness was real rather than only possible.";
  "Words already swallowed by a number are stepped over rather than read again. Otherwise the second word of one hundred seven would be read as the start of a fresh number and the sentence would be said to name two verses where it named one.";
  "A chapter with no verse numbers at all is answered straight away. Nothing could be named from an empty list, and asking how long the longest of no writings is has no answer to give.";
  "Everything is folded to one case before it is read. That is what the English reading needs and it costs the others nothing, because a script with no capitals is handed back exactly as it came.";
  arguments_assert(arguments, 7);
  let none = list_empty_is(verse_numbers);
  if (none) {
    let nothing = [];
    return nothing;
  }
  let written_numbers = {};
  let written_sizes = [];
  function verse_number_read(verse_number) {
    let written = lambda_spell(verse_number);
    let words = text_punctuation_dash_kept_split(written);
    let key = list_join(words, " ");
    property_set(written_numbers, key, verse_number);
    let size = list_size(words);
    list_add(written_sizes, size);
  }
  each(verse_numbers, verse_number_read);
  let longest = list_max(written_sizes);
  let lower = text_lower_to(explain);
  let tokens = text_words_punctuation_split(lower);
  let commas = text_comma_marks();
  let named = [];
  let inside = false;
  let since = 0;
  let eaten = 0;
  function token_read(token, index) {
    let swallowed = less_than(index, eaten);
    if (swallowed) {
      return;
    }
    let marker_is = list_includes(markers, token);
    if (marker_is) {
      let back = subtract(index, 1);
      let before = list_get_or_null(tokens, back);
      let counting = list_includes(counters, before);
      if (counting) {
        inside = false;
        return;
      }
      inside = true;
      since = 0;
      return;
    }
    if (not(inside)) {
      return;
    }
    let run = text_tokens_number_run_or_null(
      tokens,
      index,
      longest,
      written_numbers,
    );
    if (null_is(run)) {
      let comma_is = list_includes(commas, token);
      let joining = equal(token, joiner);
      let carrying = or(comma_is, joining);
      if (carrying) {
        let listing = less_than(0, since);
        if (listing) {
          return;
        }
      }
      inside = false;
      return;
    }
    let number = property_get(run, "number");
    let size = property_get(run, "size");
    let after = add(index, size);
    let answering = list_get_or_null(tokens, after);
    let distance_is = list_includes(distances, answering);
    if (distance_is) {
      inside = false;
      eaten = after;
      return;
    }
    list_add(named, number);
    since = add(since, 1);
    eaten = after;
  }
  each_index(tokens, token_read);
  let once = list_unique(named);
  return once;
}
