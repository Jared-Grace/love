import { arguments_assert } from "./arguments_assert.mjs";
import { text_url_encode } from "./text_url_encode.mjs";
export function giveaway_archive_metadata_headers(
  title,
  description,
  licence_url,
  mediatype,
) {
  arguments_assert(arguments, 4);
  ("$plain title");
  ("$plain description");
  ("$plain licence_url");
  ("$plain mediatype");
  ("The notes that travel alongside the very first file of a box and become the words on its page - its name, what it is, what anyone may do with it, and what kind of thing it holds.");
  ("★ EVERY VALUE IS SPELLED FOR AN ADDRESS AND WRAPPED IN THE WORD THE HOST UNWRAPS, BECAUSE THESE NOTES TRAVEL AS LINES OF A REQUEST AND A LINE CANNOT HOLD A NEW LINE. The description of a box runs to several paragraphs and names painters whose names are not in the plain alphabet, and either of those sent as it stands either breaks the request in two or arrives with the letters mangled. The host already answers this: a value spelled the way an address spells things and wrapped in uri of brackets is unwrapped on arrival. So all four are spelled that way rather than only the ones that need it - a rule applied to some of the values would be a rule nobody could check, and the one value that slipped through it would be the long one.");
  ("★ THESE ARE WORTH BEING WRONG ABOUT IN A WAY A FILENAME IS NOT, AND THAT IS WHY THEY ARE SENT RATHER THAN HELD BACK. The host keeps a box's notes in a file it rewrites in place, so a title, a description and even the licence as written can all be corrected afterwards - measured on a live item, not assumed. A filename cannot. So the sending can carry its words on the first file and be mended later, where the names of the files have to be right the first time.");
  ("The licence is the one of these four that is a promise as well as a note. Changing the words is allowed by the host; taking back a permission somebody already relied on is not, whatever the host permits, so the only safe direction to ever change it is a freer one.");
  function noted(said) {
    let spelled = text_url_encode(said);
    let wrapped = "uri(" + spelled + ")";
    return wrapped;
  }
  let headers = {
    "x-archive-meta-title": noted(title),
    "x-archive-meta-description": noted(description),
    "x-archive-meta-licenseurl": noted(licence_url),
    "x-archive-meta-mediatype": noted(mediatype),
  };
  return headers;
}
