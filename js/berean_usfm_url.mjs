import { arguments_assert } from "./arguments_assert.mjs";
export function berean_usfm_url() {
  arguments_assert(arguments, 0);
  ("Where the Berean Standard Bible is published as usfm by the people who made it.");
  ("The publisher's own address rather than an archive's copy of it. An archive carries whichever printing it last rebuilt from, and that is how this repo came to be a whole printing behind on a text whose publisher had already shipped the newer one - eleven hundred verses of it, reading as current the whole time because the archive's copy was faithfully up to date with the archive.");
  ("The address does not name a printing. The publisher writes each new one over the last at the same address, so which printing is on this disk cannot be pinned in the link and is written down beside the text instead.");
  let url = "https://bereanbible.com/bsb_usfm.zip";
  return url;
}
