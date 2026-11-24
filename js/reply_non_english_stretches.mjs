import { reply_word_kind_of } from "./reply_word_kind_of.mjs";
import { reply_message_words_placed } from "./reply_message_words_placed.mjs";
import { reply_pairs_unparsable } from "./reply_pairs_unparsable.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { list_get } from "./list_get.mjs";
import { not } from "./not.mjs";
import { not_equal } from "./not_equal.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
export function reply_non_english_stretches(message, lookup) {
  "The stretches of a message written in some other language, each with where it starts and ends among the characters the reply rules read, and the words it holds.";
  "Every word is one of four kinds: a dictionary word, a name, a number, or a word no dictionary holds. Each side of a dictionary word either joins - its neighbour is a dictionary word or a number, and the two are not a pair recorded as not joining up - or fails, or has no neighbour at all. The word is foreign when no side joins and at least one side fails. So in with entry lo energy both entry and lo stay English, while in abhi entry lo main khud all three are foreign.";
  "★ A SIDE WITH NO NEIGHBOUR IS NO EVIDENCE EITHER WAY. A word at the start or end of a message, or with a comma, a full stop or an emoji beside it, has nothing there to join or to fail against. Two other readings were rejected. Counting an empty side as failing made every one-word message foreign. Counting it as joining let one emoji rescue a word: in entry lo 🔥 main khud, lo and main each had an emoji on one side, and both came out English while every neighbour they did have failed.";
  "A name beside a word is no evidence either, for the same reason: Samuel from Kenya is English, and a name standing next to from says nothing about whether from is. Measured over the approved samples, counting a name as a failing side made from and in foreign in every sample that named a place.";
  "A stretch is a run of foreign words and names together, and it needs at least one word that is not a name: names may sit inside another language, but my name is Jared is English. Numbers are never foreign, because no dictionary lists 2000 and every language writes it.";
  "Every word of a link counts as a word no dictionary holds, whatever it spells: in https://j4.oui8889.com/s/..., com and s are dictionary words and j4 is a number, and read as words they kept the link out of the stretch beside it. A link is an address, so a rule that reads one - such as the TikTok link - is still cheaper than skipping it.";
  let words = reply_message_words_placed(message);
  let pairs2 = reply_pairs_unparsable();
  let unparsable = new Set(pairs2);
  function kind_of(word) {
    let r = reply_word_kind_of(word, lookup);
    return r;
  }
  function word_kind(placed) {
    if (placed.link) {
      let unknown = "unknown";
      return unknown;
    }
    let kind = kind_of(placed.word);
    return kind;
  }
  let kinds = words.map(word_kind);
  function kind_pairs_is(kind) {
    let pairs = equal(kind, "dictionary") || equal(kind, "number");
    return pairs;
  }
  function side_of(left, right) {
    if (less_than(left, 0) || greater_than_equal(right, words.length)) {
      let none = "none";
      return none;
    }
    let word_left = list_get(words, left);
    let word_right = list_get(words, right);
    let kind_left = list_get(kinds, left);
    let kind_right = list_get(kinds, right);
    if (word_right.cut_before) {
      let none2 = "none";
      return none2;
    }
    let name_beside = equal(kind_left, "name") || equal(kind_right, "name");
    if (name_beside) {
      let none3 = "none";
      return none3;
    }
    let both_pair = kind_pairs_is(kind_left) && kind_pairs_is(kind_right);
    let pair = word_left.word + " " + word_right.word;
    let joins = both_pair && not(unparsable.has(pair));
    let side = joins ? "joins" : "fails";
    return side;
  }
  function foreign_is(i) {
    let kind = kinds[i];
    if (equal(kind, "unknown")) {
      return true;
    }
    if (not_equal(kind, "dictionary")) {
      return false;
    }
    let previous = subtract(i, 1);
    let v = side_of(previous, i);
    let v2 = side_of(i, i + 1);
    let sides = [v, v2];
    let any_joins = sides.includes("joins");
    let any_fails = sides.includes("fails");
    let foreign = not(any_joins) && any_fails;
    return foreign;
  }
  let stretches = [];
  let run = [];
  function name_not_is(i) {
    let neq = not_equal(kinds[i], "name");
    return neq;
  }
  function word_at(i) {
    let word = words[i].word;
    return word;
  }
  function run_close() {
    let has_foreign = run.some(name_not_is);
    if (greater_than(run.length, 0) && has_foreign) {
      let index = list_first(run);
      let first = list_get(words, index);
      let index2 = list_last(run);
      let last = list_get(words, index2);
      let held = run.map(word_at);
      stretches.push({
        start: first.start,
        end: last.end,
        words: held,
      });
    }
    run = [];
  }
  for (let i = 0; less_than(i, words.length); i++) {
    let joins_run = foreign_is(i) || equal(kinds[i], "name");
    if (joins_run) {
      run.push(i);
    } else {
      run_close();
    }
  }
  run_close();
  return stretches;
}
