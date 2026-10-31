import { arguments_assert } from "./arguments_assert.mjs";
export function gloss_explain_bible_quotes_urdu(explain) {
  "Every place an Urdu explanation quotes another chapter of the Bible by name and number, each with the words before the number, the number as written, and the quoted words.";
  "Two shapes are read, the two the store writes: the book and number followed by says, then a colon and the quote; and the book and number followed by in and a few words saying who spoke, then the colon and the quote. Anything else that quotes is left alone.";
  "The few words saying who spoke hold no number, because a number there is a second citation nearer the quote, and the quote belongs to that one: 'Genesis 33 they made peace, but Ezekiel 35 God says to Edom:' quotes Ezekiel.";
  "The words before the number are handed back as they stood, one or two of them, and nothing here decides whether they name a book. The same shape also says which verse of the chapter is meant, and telling the two apart is the book list's question rather than this one's.";
  arguments_assert(arguments, 1);
  let pattern =
    /([^\s:'،؛۔]+(?: [^\s:'،؛۔]+)?) ([۰-۹]+)(?: میں [^'۔:۰-۹]{1,60}| کَہتا ہے): '([^']+)'/g;
  let r = [];
  for (let m of explain.matchAll(pattern)) {
    r.push({
      book_said: m[1],
      chapter_said: m[2],
      quote: m[3],
    });
  }
  return r;
}
