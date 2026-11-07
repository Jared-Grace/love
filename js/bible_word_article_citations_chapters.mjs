import { object_property_names } from "./object_property_names.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { bible_word_article_names_in_text } from "./bible_word_article_names_in_text.mjs";
import { bible_references_in_text } from "./bible_references_in_text.mjs";
import { greater_than } from "./greater_than.mjs";
import { not_equal } from "./not_equal.mjs";
export function bible_word_article_citations_chapters(articles, bibles) {
  "Which article to offer for which word of which verse: an article is offered for a word of a verse when it cites that verse and also prints that word as a name.";
  "$plain articles";
  "$plain bibles";
  "the articles are objects each naming a site, a file, the article's own words, and a title or null; the bibles are lists of chapters, each with a code and its verses. All of it is read, and nothing in it runs.";
  "THE ANSWER IS KEYED chapter code, then verse number, then word, and holds pairs of site name and file - and a third item, the title, for an article whose title is given, which is an article no site table lists, so the reader has a name to show for it.";
  "A VERSE ALONE DOES NOT SAY WHICH WORD THE ARTICLE IS ABOUT, and that is why both halves are asked. An article on Gadarenes cites Mark 5:1 and prints Gerasenes, so a tap on Gerasenes there offers it, and a tap on sea there does not.";
  "A WORD ANY OF THESE BIBLES ALSO PRINTS IN SMALL LETTERS IS NOT A NAME, so He, The and Lord are never offered this way, whichever verse opens with them. That is read off the bibles rather than kept as a list. A single letter is not a name either, which is what keeps out I.";
  "AT MOST TWELVE ARTICLES ARE OFFERED FOR ONE WORD OF ONE VERSE, because a name like Jesus is printed by hundreds of articles citing the same verse, and a reader cannot choose among hundreds of buttons. Chosen 2026-11-07, when the whole of GotQuestions and the Catholic Encyclopedia gave one word 372.";
  "THE TWELVE ARE THE MOST FOCUSED: first an article whose title or file names the word, then those citing fewer verses in all, because an article citing three verses is about them and one citing three hundred is a survey that touches each. Rejected: keeping the first twelve in site order, which shows whichever site is listed first however broad its article; and ranking by how often the article prints the word, which favours long articles over focused ones.";
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
    let references = bible_references_in_text(article.text);
    for (let reference of references) {
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
            let row = [article.site, article.file];
            if (not_equal(article.title, null)) {
              row.push(article.title);
            }
            let named = (article.title ?? article.file).toLowerCase();
            let v = name.toLowerCase();
            index[chapter_code][verse_number][name].push({
              row,
              about: named.includes(v),
              count: references.length,
            });
          }
        }
      }
    }
  }
  for (let chapter of Object.values(index)) {
    for (let verse of Object.values(chapter)) {
      for (let name of object_property_names(verse)) {
        function lambda(offer) {
          let r2 = offer.row;
          return r2;
        }
        verse[name] = verse[name].sort(focus_first).slice(0, 12).map(lambda);
      }
    }
  }
  function focus_first(a, b) {
    if (not_equal(a.about, b.about)) {
      let r3 = a.about ? -1 : 1;
      return r3;
    }
    let difference = subtract(a.count, b.count);
    return difference;
  }
  let result = {
    index,
    citations,
    nowhere,
  };
  return result;
}
