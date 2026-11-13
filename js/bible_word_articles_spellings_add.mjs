import { bible_word_articles_spellings_add_cased } from "./bible_word_articles_spellings_add_cased.mjs";
import { bible_word_articles_spellings_add_spellings } from "./bible_word_articles_spellings_add_spellings.mjs";
import { bible_word_articles_spellings_add_row } from "./bible_word_articles_spellings_add_row.mjs";
export function bible_word_articles_spellings_add(table) {
  "A site's table with a second row for each name that holds a word the bibles also spell another way, so a tapped Nazirite opens the article the site files under Nazarite.";
  "$plain table";
  "the table is rows of a name, what an article is about and the article's own address on its site; it is read and copied, and nothing in it runs.";
  "THE OTHER SPELLING KEEPS THE WORD'S CAPITALS - Nazarite gives Nazirite, a lower-case word stays lower case, one in capitals stays in capitals - because a name is matched by its capitals. A word inside a longer name is swapped too, so Kirjath-jearim also answers to Kiriath-jearim.";
  let others = new Map();
  bible_word_articles_spellings_add_spellings(others);
  let cased = bible_word_articles_spellings_add_cased();
  let r = bible_word_articles_spellings_add_row(table, others, cased);
  return r;
}
