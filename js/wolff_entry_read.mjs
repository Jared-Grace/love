import { html_parse_text } from "./html_parse_text.mjs";
import { list_first_try } from "./list_first_try.mjs";
import { list_skip_1 } from "./list_skip_1.mjs";
import { whitespace_normalize } from "./whitespace_normalize.mjs";
import { wolff_entry_texts } from "./wolff_entry_texts.mjs";
export function wolff_entry_read(d, node) {
  "One entry of Wolff's dictionary taken apart into the things it tells about a word - the word itself, the forms built on it, what part of speech it is, how it conjugates, what it points at, and the Cebuano sentences it is shown in.";
  "The book marks each of those in its own type rather than labelling them, and this is where that is read off, once, so that nobody downstream has to know that a headword is what is set in bold Cebuano and a conjugation code is what is set in roman inside brackets.";
  "The whole entry is kept as well as its pieces. What a person writing an explanation actually reads is the senses, and the senses are the plain prose between everything marked - so subtracting the marked parts from the whole is how they are had, and handing over only the parts would throw away the very thing the dictionary is for.";
  "A headword written twice in the book because it is two unrelated words comes back here as the book writes it, small digit and all. Deciding that two entries are one word is not a thing to do while reading one of them.";
  let bold = wolff_entry_texts(d, node, 'b[lang="ceb"]');
  let headword = list_first_try(bold);
  let derived = list_skip_1(bold);
  let parts = wolff_entry_texts(d, node, "i:not([lang])");
  let codes = wolff_entry_texts(d, node, "span.rm");
  let crossrefs = wolff_entry_texts(d, node, "span.sc");
  let examples = wolff_entry_texts(d, node, 'i[lang="ceb"]');
  let whole = html_parse_text(d, node);
  let text = whitespace_normalize(whole);
  let r = {
    headword,
    derived,
    parts,
    codes,
    crossrefs,
    examples,
    text,
  };
  return r;
}
