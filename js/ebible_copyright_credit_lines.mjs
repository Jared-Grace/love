import { html_parse_find_list_to } from "./html_parse_find_list_to.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_filter_text_empty_not_is } from "./list_filter_text_empty_not_is.mjs";
import { list_first } from "./list_first.mjs";
import { list_map } from "./list_map.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_trim } from "./text_trim.mjs";
export function ebible_copyright_credit_lines(root, d) {
  "The credit a licence page opens with, one fact to a line - who holds the text, what language it is in, who translated it, and who else worked on it.";
  "It is the page's first paragraph and nothing else, because that paragraph is exactly what the licence points at when it asks that the above copyright and source information be included. So this is not a summary of the credit - it is the credit, carried across whole.";
  "Taken by where it sits rather than by what it says, which is what lets a page owned by somebody and a page in the public domain be read the same way. One opens with a holder's name and the other with the words public domain, and either way it is the block that has to travel with the text.";
  "Blank lines are dropped, because a break before the paragraph closes is punctuation rather than a fact.";
  let paragraphs = html_parse_find_list_to(root, "p");
  let none = list_empty_is(paragraphs);
  if (none) {
    let r = [];
    return r;
  }
  let first = list_first(paragraphs);
  let text = html_parse_text(d, first);
  let split = text_split_newline(text);
  let trimmed = list_map(split, text_trim);
  let lines = list_filter_text_empty_not_is(trimmed);
  return lines;
}
