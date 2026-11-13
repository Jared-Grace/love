import { bible_word_articles_spellings_add_row } from "./bible_word_articles_spellings_add_row.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { bible_word_spellings } from "./bible_word_spellings.mjs";
export function bible_word_articles_spellings_add(table) {
  "A site's table with a second row for each name that holds a word the bibles also spell another way, so a tapped Nazirite opens the article the site files under Nazarite.";
  "$plain table";
  "the table is rows of a name, what an article is about and the article's own address on its site; it is read and copied, and nothing in it runs.";
  "THE OTHER SPELLING KEEPS THE WORD'S CAPITALS - Nazarite gives Nazirite, a lower-case word stays lower case, one in capitals stays in capitals - because a name is matched by its capitals. A word inside a longer name is swapped too, so Kirjath-jearim also answers to Kiriath-jearim.";
  let others = new Map();
  for (let spellings of bible_word_spellings()) {
    for (let spelling of spellings) {
      function lambda(s) {
        let neq = not_equal(s, spelling);
        return neq;
      }
      let v = spellings.filter(lambda);
      others.set(spelling, v);
    }
  }
  function cased(like, word) {
    let right = like.toUpperCase();
    if (equal(like, right) && not_equal(like, like.toLowerCase())) {
      let r2 = word.toUpperCase();
      return r2;
    }
    let right2 = like[0].toLowerCase();
    if (not_equal(like[0], right2)) {
      let r3 = word[0].toUpperCase() + word.slice(1);
      return r3;
    }
    return word;
  }
  let r = bible_word_articles_spellings_add_row(table, others, cased);
  return r;
}
