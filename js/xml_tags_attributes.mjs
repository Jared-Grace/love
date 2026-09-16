import { arguments_assert } from "./arguments_assert.mjs";
import { xml_text_unescape } from "./xml_text_unescape.mjs";
export function xml_tags_attributes(text, tag) {
  "$plain text";
  "$plain tag";
  "Every opening tag of one name in a piece of xml, each answered as an object from its attribute names to their values, in the order the tags are written.";
  "★ ONLY THE OPENING TAG IS READ, NOT WHAT IT HOLDS. A program's saved file such as a recording session writes what it knows about a thing as attributes, so this answers most questions without a whole parser; a question about what sits inside a tag cuts the text first and asks this over the piece.";
  "A tag whose name merely begins with the one asked for is not counted, because the name has to be followed by a space, a slash or the closing bracket.";
  arguments_assert(arguments, 2);
  let found = text.matchAll(new RegExp("<" + tag + "(?=[\\s/>])[^>]*>", "g"));
  let list = [];
  for (let match of found) {
    let attributes = {};
    for (let pair of match[0].matchAll(/([\w:.-]+)="([^"]*)"/g)) {
      attributes[pair[1]] = xml_text_unescape(pair[2]);
    }
    list.push(attributes);
  }
  return list;
}
