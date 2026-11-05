import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { bible_word_article_names_in_text } from "./bible_word_article_names_in_text.mjs";
import { bible_references_in_text } from "./bible_references_in_text.mjs";
export function bible_word_article_citations_chapters(articles, bibles) {
  "Which article to offer for which word of which verse: an article is offered for a word of a verse when it cites that verse and also prints that word as a name.";
  "$plain articles";
  "$plain bibles";
  "the articles are objects each naming a site, a file and the article's own words; the bibles are lists of chapters, each with a code and its verses. All of it is read, and nothing in it runs.";
  "THE ANSWER IS KEYED chapter code, then verse number, then word, and holds pairs of site name and file.";
  "A VERSE ALONE DOES NOT SAY WHICH WORD THE ARTICLE IS ABOUT, and that is why both halves are asked. An article on Gadarenes cites Mark 5:1 and prints Gerasenes, so a tap on Gerasenes there offers it, and a tap on sea there does not.";
  "A WORD ANY OF THESE BIBLES ALSO PRINTS IN SMALL LETTERS IS NOT A NAME, so He, The and Lord are never offered this way, whichever verse opens with them. That is read off the bibles rather than kept as a list. A single letter is not a name either, which is what keeps out I.";
  "A MISNUMBERED CITATION COSTS NOTHING: the Catholic Encyclopedia counts Psalms differently, and a citation landing on the wrong verse is dropped here unless that verse also holds the name.";
  let small = new Set();
  let verse_names = new Map();
  for (let chapters of bibles) {
    for (let chapter of chapters) {
      for (let verse of chapter.verses) {
        let key = chapter.chapter_code + ":" + verse.verse_number;
        let names = verse_names.get(key) ?? new Set();
        for (let match of verse.text.matchAll(/\p{L}[\p{L}’'-]*/gu)) {
          let word = match[0].replace(/['’]s?$/, "");
          let right = word.toLowerCase();
          if (equal(word, right)) {
            small.add(word);
          } else {
            names.add(word);
          }
        }
        verse_names.set(key, names);
      }
    }
  }
  let index = {};
  let citations = 0;
  let nowhere = 0;
  for (let article of articles) {
    let r = bible_word_article_names_in_text(article.text);
    let printed = new Set(r);
    for (let reference of bible_references_in_text(article.text)) {
      citations = citations + 1;
      let names = verse_names.get(reference);
      if (equal(names, undefined)) {
        nowhere = nowhere + 1;
      } else {
        let [chapter_code, verse_number] = reference.split(":");
        for (let name of names) {
          let offered =
            greater_than(name.length, 1) &&
            equal(small.has(name.toLowerCase()), false) &&
            printed.has(name);
          if (offered) {
            index[chapter_code] ??= {};
            index[chapter_code][verse_number] ??= {};
            index[chapter_code][verse_number][name] ??= [];
            index[chapter_code][verse_number][name].push([
              article.site,
              article.file,
            ]);
          }
        }
      }
    }
  }
  let result = {
    index,
    citations,
    nowhere,
  };
  return result;
}
