import { text_includes_not } from "./text_includes_not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
import { properties_get } from "./properties_get.mjs";
import { text_includes } from "./text_includes.mjs";
import { assert_json } from "./assert_json.mjs";
import { property_get } from "./property_get.mjs";
import { text_replace } from "./text_replace.mjs";
export function app_shared_text_reader_language_filled(texts, fills) {
  arguments_assert(arguments, 2);
  ("$plain texts");
  ("$plain fills");
  ("the texts are one saying written whole in each language, with a gap written as a name in braces wherever something is dropped in; the fills give each name the words it stands for. Both are only shown.");
  ("One saying in the reader's language with the words that change from one use to the next dropped into its gaps.");
  ("EACH LANGUAGE WRITES THE WHOLE SENTENCE AND PUTS THE GAPS WHERE ITS OWN ORDER WANTS THEM. English asks which verse from chapter three of the book of John; Urdu names the book before the chapter. Halves glued around a value in a fixed order come out backwards in one of them, and words added up at run time cannot be read by the gates that check every language is there - so the sentence is written out, and only the gap is filled.");
  ("A GAP THE CHOSEN SENTENCE DOES NOT HOLD IS AN ERROR, never a silent drop: a translation that lost its gap would otherwise show its reader a sentence with the one word that mattered missing.");
  ("The gaps are checked before any is filled, and a filled word holding a brace is refused, so a word dropped in can never be mistaken for a gap and filled again.");
  let text = app_shared_text_reader_language(texts);
  let names = properties_get(fills);
  for (let name of names) {
    let gap = "{" + name + "}";
    let held = text_includes(text, gap);
    assert_json(held, {
      name,
      text,
      hint: "the saying in the reader's language has no gap with this name, so the word meant for it would vanish; write the gap into that language's sentence",
    });
    let value = property_get(fills, name);
    let b = text_includes_not(value, "{");
    assert_json(b, {
      name,
      value,
      hint: "a word dropped into a gap may not hold a brace, or it could be filled again as if it were a gap",
    });
  }
  for (let name of names) {
    let gap = "{" + name + "}";
    let value = property_get(fills, name);
    text = text_replace(text, gap, value);
  }
  return text;
}
