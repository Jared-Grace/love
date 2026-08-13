import { text_wrap_brackets } from "./text_wrap_brackets.mjs";
import { property_list_join_comma } from "./property_list_join_comma.mjs";
import { list_copy } from "./list_copy.mjs";
import { integer_to } from "./integer_to.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function g_sermon_chapter_verses_text(passages) {
  "One chapter's written passages as plain numbered text - the Scripture an arc is allowed to answer from, ready to sit in a prompt.";
  "Numbered rather than run together, because every turn an arc writes has to name the verses that answer it. A block of unnumbered text can be quoted from but not cited, so the numbers are the part that makes the answer checkable.";
  "The SCRIPTURE is what goes over, not the sermon lines written from it. The lines are the game's own words and an arc that answered from them would be answering from a paraphrase of Scripture rather than from Scripture.";
  "A passage's verses are given together on one line because that is the unit the sermon was written against - splitting them back into single verses would offer a smaller answer than any passage actually makes.";
  "The numbers are BRACKETED, which is the whole of what handing this over as JSON would have bought. Measured over every written chapter, JSON cost 41 percent more characters to repeat the same two keys 835 times, and the escaping that would have argued for it never arises - this translation writes speech with curly quotes, so not one passage in 835 holds a quote JSON would escape.";
  "What the brackets buy is the boundary. Without them the rule separating the citation from the Scripture is FIRST SPACE, which is left to be inferred and is invisible where it matters most - the words the reading call has to quote back. Bracketed verse numbers are also how plain-text Scripture is written nearly everywhere, so it is a convention already known rather than one being taught. It costs two characters a passage against JSON's forty-one percent.";
  "Put back into VERSE ORDER, because the order they are stored in is the order somebody wrote them in - 1 John 1 opens on verse two - and a chapter handed over out of order reads as a chapter that has been cut about. The copy is taken first so sorting cannot reach back into the caller's own list.";
  let copied = list_copy(passages);
  function first_verse(passage) {
    let numbers = property_get(passage, "verse_numbers");
    let first = numbers[0];
    let number = integer_to(first);
    return number;
  }
  let ordered = list_sort_number_mapper(copied, first_verse);
  let lines = [];
  for (let passage of ordered) {
    let joined = property_list_join_comma(passage, "verse_numbers");
    let cited = text_wrap_brackets(joined);
    let scripture = property_get(passage, "scripture");
    let line = list_join_space([cited, scripture]);
    list_add(lines, line);
  }
  let r = list_join_newline(lines);
  return r;
}
