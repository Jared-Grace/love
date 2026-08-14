import { html_parse_node } from "./html_parse_node.mjs";
import { html_parse_find_list_to } from "./html_parse_find_list_to.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
import { list_map } from "./list_map.mjs";
import { whitespace_normalize } from "./whitespace_normalize.mjs";
export function wolff_entry_texts(d, node, selector) {
  "What every part of one dictionary entry answering to a description says, read as a reader would have seen it.";
  "The book sets each kind of thing in its own type - the headword bold, the part of speech italic, the codes for how a verb conjugates in roman inside brackets - so asking for one kind is asking for one description, and every kind of question about an entry is then the same question with a different one. That is the whole of why this takes the description rather than holding one.";
  "The spaces are evened out because the page is broken into lines for printing rather than for reading, and a headword that fell across two of them otherwise comes back with a line break sitting in the middle of the word.";
  let within = html_parse_node(d, node);
  let found = html_parse_find_list_to(within, selector);
  function text_read(item) {
    let text = html_parse_text(d, item);
    let evened = whitespace_normalize(text);
    return evened;
  }
  let r = list_map(found, text_read);
  return r;
}
