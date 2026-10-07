import { arguments_assert } from "./arguments_assert.mjs";
import { html_code_meta_property } from "./html_code_meta_property.mjs";
import { text_includes_assert } from "./text_includes_assert.mjs";
import { text_index_of_take } from "./text_index_of_take.mjs";
import { text_index_of_skip } from "./text_index_of_skip.mjs";
import { text_includes } from "./text_includes.mjs";
import { not } from "./not.mjs";
import { text_empty } from "./text_empty.mjs";
import { text_between } from "./text_between.mjs";
export function apps_prod_description_shipped_text(page_text) {
  "$plain page_text";
  "The sentence a shared link shows for a page that has already been written, read back out of the page itself - or nothing at all where the page carries no such tag.";
  "WHERE TO LOOK IS ASKED OF THE WRITER RATHER THAN SPELLED HERE. Reading formatted text back needs the rule the formatter used, and the only way to be certain of that rule is to have the formatter state it: the tag is written once with a word standing in for the sentence, and what sits either side of that word is exactly what to look for. Spelled out by hand this would be a second copy of a format - correct right up until somebody changed the first copy, and then silently reading nothing from every page.";
  "The stand-in word only has to be absent from the tag's own two halves, which are punctuation and the words of the property, so any word of letters will do and nothing about the page constrains it. It never meets a page: it is put in and taken straight back out. Asserting it came back is still worth its line: the reading underneath would refuse anyway, but it would refuse holding a whole page of text and a number, naming neither this function nor the word that went missing.";
  "ABSENCE IS TESTED BEFORE THE READING, NOT AFTER IT, BECAUSE THE READING REFUSES RATHER THAN RETURNS. Asked for something a page does not contain, it stops the program. A page carrying no such tag is not a fault though - it is one of the ordinary answers, and the commonest one - so a single page without a card would end a walk across every page that was shipped, and the pages after it would never be looked at at all. Testing first turns that into the empty answer it should always have been.";
  arguments_assert(arguments, 1);
  let stand_in = "apps_prod_description_shipped_text_stands_here";
  let written = html_code_meta_property("og:description", stand_in);
  text_includes_assert(written, stand_in);
  let before = text_index_of_take(written, stand_in);
  let after = text_index_of_skip(written, stand_in);
  let present = text_includes(page_text, before);
  if (not(present)) {
    let none = text_empty();
    return none;
  }
  let sentence = text_between(page_text, before, after);
  return sentence;
}
