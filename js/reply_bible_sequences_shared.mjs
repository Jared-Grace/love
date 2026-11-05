import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than } from "./less_than.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
export function reply_bible_sequences_shared(verses_tokens, shared) {
  "Takes every run of two or more tokens said more than once out into a function of its own, longest first, until nothing repeats, looking inside the functions it has already made too. Returns the verses with those runs replaced by calls, and the functions in the order they were found.";
  function lambda(tokens) {
    let r = [...tokens];
    return r;
  }
  let lists = verses_tokens.map(lambda);
  let sequences = [];
  let names_taken = new Set();
  function token_key(token) {
    let mark = token.optional ? "?" : "";
    let key = token.call || `${mark}${token.elements.join(" ")}`;
    return key;
  }
  function run_key(list, at, size) {
    let key = list
      .slice(at, at + size)
      .map(token_key)
      .join("|");
    return key;
  }
  function repeated_find() {
    function lambda2(list) {
      let r2 = list.length;
      return r2;
    }
    let longest = Math.max(...lists.map(lambda2));
    for (let size = longest; greater_than_equal(size, 2); size--) {
      let seen = new Map();
      for (let index = 0; less_than(index, lists.length); index++) {
        let list = lists[index];
        for (let at = 0; less_than_equal(at + size, list.length); at++) {
          let key = run_key(list, at, size);
          let entry = seen.get(key) || {
            count: 0,
            index: -1,
            end: 0,
            tokens: list.slice(at, at + size),
          };
          if (
            not_equal(entry.index, index) ||
            greater_than_equal(at, entry.end)
          ) {
            entry.count = entry.count + 1;
            entry.index = index;
            entry.end = at + size;
          }
          seen.set(key, entry);
        }
      }
      for (let [key, entry] of seen) {
        if (greater_than(entry.count, 1)) {
          let repeat = {
            key,
            size,
            tokens: entry.tokens,
          };
          return repeat;
        }
      }
    }
    return null;
  }
  function token_word(token) {
    if (token.call) {
      let phrase = token.call.replace("reply_phrase_", "");
      return phrase;
    }
    let key = token.elements.join(" ");
    if (shared.keys.includes(key)) {
      let choice = shared.names[key].replace("reply_word_", "");
      return choice;
    }
    let word = token.elements[0].replace("*", "");
    return word;
  }
  function name_free(tokens) {
    let v = tokens.map(token_word).join("_");
    let base = `reply_phrase_${v}`;
    let name = base;
    let number = 2;
    while (names_taken.has(name)) {
      name = `${base}_${number}`;
      number = number + 1;
    }
    names_taken.add(name);
    return name;
  }
  let found = repeated_find();
  while (not_equal(found, null)) {
    let name = name_free(found.tokens);
    function list_folded(list) {
      let out = [];
      let at = 0;
      while (less_than(at, list.length)) {
        if (
          less_than_equal(at + found.size, list.length) &&
          equal(run_key(list, at, found.size), found.key)
        ) {
          out.push({
            call: name,
          });
          at = at + found.size;
        } else {
          out.push(list[at]);
          at = at + 1;
        }
      }
      return out;
    }
    lists = lists.map(list_folded);
    sequences.push({
      name,
      index: lists.length,
    });
    lists.push([...found.tokens]);
    found = repeated_find();
  }
  function sequence_finish(sequence) {
    let finished = {
      name: sequence.name,
      tokens: lists[sequence.index],
    };
    return finished;
  }
  let folded = {
    verses: lists.slice(0, verses_tokens.length),
    sequences: sequences.map(sequence_finish),
  };
  return folded;
}
