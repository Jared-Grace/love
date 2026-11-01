import { text_combine } from "./text_combine.mjs";
export function easton_article_url(file) {
  "The whole address of an entry of Easton's Bible Dictionary on BibleStudyTools.com, given the entry's own file on that site.";
  let url = text_combine(
    "https://www.biblestudytools.com/dictionaries/eastons-bible-dictionary/",
    file,
  );
  return url;
}
