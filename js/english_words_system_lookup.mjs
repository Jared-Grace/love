import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { file_read_lines } from "./file_read_lines.mjs";
export async function english_words_system_lookup() {
  "The English words this machine's own word list holds, in small letters, split into ordinary words and names.";
  "The list writes a name with a capital letter (Jared) and an ordinary word without one (main), so a capitalized entry whose small-letter spelling is not also an ordinary word is a name. Telling them apart is the point: a name may sit inside a stretch of another language, but a name alone never makes one - my name is Jared is English.";
  let lines = await file_read_lines("/usr/share/dict/american-english");
  let words = {};
  let names = {};
  for (let line of lines) {
    let lower = line.toLowerCase();
    if (equal(line, lower)) {
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
