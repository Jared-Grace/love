import { g_verify_chapter_query_key } from "./g_verify_chapter_query_key.mjs";
export function g_verify_chapter_url(base, chapter_code) {
  "The approve-your-lines address for one chapter, built onto a base address. The chapter travels after the question mark rather than after the hash, which is why it is worth a function of its own: a word written into the middle of a joined-up string is invisible to every reading that looks at where a field is named, so the three places that used to spell it out could each have been reworded on their own.";
  let spelled = g_verify_chapter_query_key();
  let url = base + "?" + spelled + "=" + chapter_code;
  return url;
}
