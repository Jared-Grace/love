import { text_combine } from "./text_combine.mjs";
export function smith_article_url(file) {
  "The whole address of an entry of Smith's Bible Dictionary on BibleStudyTools.com, given the entry's own file on that site.";
  let url = text_combine(
    "https://www.biblestudytools.com/dictionaries/smiths-bible-dictionary/",
    file,
  );
  return url;
}
