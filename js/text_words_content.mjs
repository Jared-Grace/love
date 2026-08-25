import { arguments_assert } from "./arguments_assert.mjs";
import { text_words } from "./text_words.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_letters_only } from "./text_letters_only.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";

export function text_words_content(text) {
  arguments_assert(arguments, 1);
  ("The words of a passage that carry a meaning of their own, lowercased and stripped of punctuation, with the ones that only join other words to each other left out.");
  ("$plain text");
  ("the passage is ordinary English. It is read as words and nothing that runs.");
  ("THIS EXISTS TO COMPARE TWO SAYINGS OF THE SAME THING. The interlinear glosses one Greek word as see, as you see, and as See to it, and those are one word in three sets of clothes; counting the sayings whole says they are three different meanings, which is false and is exactly the wrong answer where the question is whether a word has one meaning. Counting only the words that carry meaning says see three times, which is true.");
  ("THE LIST OF WORDS LEFT OUT IS A JUDGEMENT AND IS WRITTEN OUT HERE SO IT CAN BE ARGUED WITH. It is the English relations - the articles, the pronouns, the commonest prepositions, the parts of to be and to have and to do - and the test for membership is that the word says nothing on its own about what is being talked about. It is deliberately short: a longer list would start dropping words that do carry meaning, and a word wrongly kept only adds a row a reader can see past, while a word wrongly dropped takes evidence away silently.");
  ("NOT is kept on purpose, against the shape of the rest of the list, because it is the one small word that reverses everything around it - a gloss saying not knowing and a gloss saying knowing are opposite meanings and must not tally as one.");
  let relations = [
    "a",
    "an",
    "the",
    "of",
    "to",
    "in",
    "into",
    "on",
    "at",
    "by",
    "for",
    "with",
    "from",
    "as",
    "and",
    "or",
    "but",
    "that",
    "this",
    "these",
    "those",
    "it",
    "its",
    "he",
    "him",
    "his",
    "she",
    "her",
    "they",
    "them",
    "their",
    "you",
    "your",
    "i",
    "me",
    "my",
    "we",
    "us",
    "our",
    "who",
    "which",
    "what",
    "is",
    "are",
    "was",
    "were",
    "be",
    "been",
    "being",
    "am",
    "has",
    "have",
    "had",
    "do",
    "does",
    "did",
    "will",
    "shall",
    "may",
    "might",
    "would",
    "should",
    "there",
    "so",
    "up",
    "out",
    "one",
  ];
  let words = text_words(text);
  let kept = [];
  for (let word of words) {
    let bare = text_letters_only(word);
    let lowered = text_lower_to(bare);
    let some = greater_than(lowered.length, 0);
    if (some) {
      let carries = list_includes_not(relations, lowered);
      if (carries) {
        list_add(kept, lowered);
      }
    }
  }
  return kept;
}
