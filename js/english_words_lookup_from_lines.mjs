import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function english_words_lookup_from_lines(lines) {
  "The English words a word list holds, in small letters, split into ordinary words and names - given the list's lines, one word to a line.";
  "The list writes a name with a capital letter (Jared) and an ordinary word without one (main), so a capitalized entry whose small-letter spelling is not also an ordinary word is a name. Telling them apart is the point: a name may sit inside a stretch of another language, but a name alone never makes one - my name is Jared is English.";
  "The one capital that is not a name is I, which English always writes large - so I, I'm, I'll, I'd and I've are ordinary words.";
  "★ ONE READING OF THE LIST FOR THE MACHINE AND THE PAGE ALIKE. The machine reads the lines off its disk and a page fetches the same lines as an asset; both hand them here, so the two can never disagree about what is a word.";
  let words = {};
  let names = {};
  for (let line of lines) {
    let lower = line.toLowerCase();
    let pronoun_i = equal(line, "I") || line.startsWith("I'");
    if (equal(line, lower) || pronoun_i) {
      words[lower] = true;
    }
  }
  for (let line of lines) {
    let lower = line.toLowerCase();
    if (not(lower in words)) {
      names[lower] = true;
    }
  }
  let lookup = {
    words,
    names,
  };
  return lookup;
}
