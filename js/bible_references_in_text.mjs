import { object_property_names } from "./object_property_names.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { ebible_books_engbsb } from "./ebible_books_engbsb.mjs";
import { ebible_chapter_code_pad } from "./ebible_chapter_code_pad.mjs";
export function bible_references_in_text(text) {
  "Every verse a piece of writing cites, each once in the order first cited, written as a chapter code and a verse number like MRK05:1.";
  "$plain text";
  "the text is the words of an article from another site; it is read for citations, and nothing in it runs.";
  "A LIST CARRIES ITS BOOK AND ITS CHAPTER FORWARD: Luke 8:26, 37; 9:1 cites Luke 8:26, Luke 8:37 and Luke 9:1.";
  "A NUMBER BEFORE A NAME OPENS THE NEXT BOOK: Luke 8:26, 1 John 2:3 cites 1 John, not Luke 8:1 and John.";
  "A RUN OF VERSES CITES EVERY VERSE IN IT: Hebrews 5:4-5 cites both. A run across chapters - Genesis 9:1-10:2 - cites only its two ends, because how many verses a chapter holds is not in the citation.";
  "A CHAPTER CITED WITH NO VERSE CITES NOTHING HERE, because this list exists to say which verses an article speaks of and a whole chapter does not say that.";
  let books = ebible_books_engbsb();
  let codes = {
    Psalm: "PSA",
    Psalms: "PSA",
    "Song of Songs": "SNG",
    "Song of Solomon": "SNG",
    Revelation: "REV",
    Revelations: "REV",
    Apocalypse: "REV",
    "I Samuel": "1SA",
    "II Samuel": "2SA",
    "I Kings": "1KI",
    "II Kings": "2KI",
    "I Chronicles": "1CH",
    "II Chronicles": "2CH",
    "I Corinthians": "1CO",
    "II Corinthians": "2CO",
    "I Thessalonians": "1TH",
    "II Thessalonians": "2TH",
    "I Timothy": "1TI",
    "II Timothy": "2TI",
    "I Peter": "1PE",
    "II Peter": "2PE",
    "I John": "1JN",
    "II John": "2JN",
    "III John": "3JN",
  };
  for (let book of books) {
    codes[book.text] = book.book_code;
  }
  function longest_first(a, b) {
    let order = subtract(b.length, a.length);
    return order;
  }
  let names = object_property_names(codes).sort(longest_first).join("|");
  let dashed = text.replace(/(\d)\s*[-–—]\s*(\d)/g, "$1-$2");
  let item =
    "\\d+:\\d+(?:-\\d+(?::\\d+)?)?(?:,\\s*\\d+(?:-\\d+)?(?![\\d:]|\\s+[A-Z]))*";
  let pattern = new RegExp(
    "(?<![A-Za-z])(" +
      names +
      ")\\.?\\s+(" +
      item +
      "(?:\\s*[;,]\\s*" +
      item +
      ")*)",
    "g",
  );
  let r = [];
  function cite(book_code, chapter, verse) {
    let code = ebible_chapter_code_pad(book_code, chapter);
    let reference = code + ":" + verse;
    let left = r.includes(reference);
    if (equal(left, false)) {
      r.push(reference);
    }
  }
  for (let match of dashed.matchAll(pattern)) {
    let book_code = codes[match[1]];
    let chapter = 0;
    for (let part of match[2].split(/[;,]/)) {
      let piece = part.trim();
      let run = piece.split("-");
      let first = run[0];
      if (first.includes(":")) {
        let sides = first.split(":");
        chapter = Number(sides[0]);
        first = sides[1];
      }
      let start = Number(first);
      if (equal(run.length, 1)) {
        cite(book_code, chapter, start);
      } else if (run[1].includes(":")) {
        let far = run[1].split(":");
        cite(book_code, chapter, start);
        let v = Number(far[0]);
        let v2 = Number(far[1]);
        cite(book_code, v, v2);
      } else {
        for (
          let verse = start;
          less_than_equal(verse, Number(run[1]));
          verse++
        ) {
          cite(book_code, chapter, verse);
        }
      }
    }
  }
  return r;
}
