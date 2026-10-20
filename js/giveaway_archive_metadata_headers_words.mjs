import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_not_is_assert } from "./list_empty_not_is_assert.mjs";
import { text_url_encode } from "./text_url_encode.mjs";
import { property_set } from "./property_set.mjs";
export function giveaway_archive_metadata_headers_words(words, mediatype) {
  arguments_assert(arguments, 2);
  ("$plain words");
  ("$plain mediatype");
  ("The notes that travel alongside the very first file of a box and become the words on its page, built from a list of named sayings plus the kind of thing the box holds.");
  ("★ EVERY VALUE IS SPELLED FOR AN ADDRESS AND WRAPPED IN THE WORD THE HOST UNWRAPS, BECAUSE THESE NOTES TRAVEL AS LINES OF A REQUEST AND A LINE CANNOT HOLD A NEW LINE. The description of a box runs to several paragraphs and names painters whose names are not in the plain alphabet, and either of those sent as it stands either breaks the request in two or arrives with the letters mangled. The host already answers this: a value spelled the way an address spells things and wrapped in uri of brackets is unwrapped on arrival. So all of them are spelled that way rather than only the ones that need it - a rule applied to some of the values would be a rule nobody could check, and the one value that slipped through it would be the long one.");
  ("★ WHICH WORDS A BOX CARRIES IS NOT DECIDED HERE ANY MORE, AND THAT IS THE POINT OF TAKING A LIST. This used to name four words of its own, while the patch that mends an already-public page named its own set next door - two copies of what a page says, which came apart the moment a word was added to one of them. A new word now reaches a box being made and a box made last month by the same change.");
  ("★ THE KIND OF THING THE BOX HOLDS COMES IN SEPARATELY, BECAUSE IT IS NOT A WORD ON THE PAGE. The host settles it when the box comes into being and treats it afterwards as what the box is rather than as something written on it. Keeping it out of the list is what lets the mending road send every word in the list and never ask the host to reconsider what a box is.");
  ("★ THESE ARE WORTH BEING WRONG ABOUT IN A WAY A FILENAME IS NOT, AND THAT IS WHY THEY ARE SENT RATHER THAN HELD BACK. The host keeps a box's notes in a file it rewrites in place, so a title, a description and even the licence as written can all be corrected afterwards - measured on a live item, not assumed. A filename cannot. So the sending can carry its words on the first file and be mended later, where the names of the files have to be right the first time.");
  ("An empty list stops this rather than making a box with no words on it at all. A box is named for good the moment it comes into being, so one made wordless is a public page that has to be mended by hand afterwards.");
  list_empty_not_is_assert(words);
  let headers = {};
  for (let word of words) {
    let spelled = text_url_encode(word.said);
    let wrapped = "uri(" + spelled + ")";
    let key = "x-archive-meta-" + word.name;
    property_set(headers, key, wrapped);
  }
  let mediatype_spelled = text_url_encode(mediatype);
  let mediatype_wrapped = "uri(" + mediatype_spelled + ")";
  property_set(headers, "x-archive-meta-mediatype", mediatype_wrapped);
  return headers;
}
