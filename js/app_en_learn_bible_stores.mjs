import { ebible_language_urdu } from "./ebible_language_urdu.mjs";
import { app_en_learn_bible_gloss_urdu_generate_download } from "./app_en_learn_bible_gloss_urdu_generate_download.mjs";
import { app_en_learn_bible_gloss_urdu_chapters_uploaded } from "./app_en_learn_bible_gloss_urdu_chapters_uploaded.mjs";
import { ebible_language_tagalog } from "./ebible_language_tagalog.mjs";
import { app_en_learn_bible_gloss_tagalog_generate_download } from "./app_en_learn_bible_gloss_tagalog_generate_download.mjs";
import { app_en_learn_bible_gloss_tagalog_chapters_uploaded } from "./app_en_learn_bible_gloss_tagalog_chapters_uploaded.mjs";
export function app_en_learn_bible_stores() {
  "Every store of English words explained in a reader's own language, each beside the language it explains in - how to fetch one of its chapters, and how to ask which chapters it has published.";
  "The app offers exactly these languages and nothing else, because a language here is only readable once somebody has explained the English in it word by word. So a new language is one more entry here, and the offering, the fetching and the chapter list all follow from it rather than each having to be told.";
  "The first entry is the one the app opens in when the reader has chosen none of them.";
  let urdu = {
    language: ebible_language_urdu(),
    download: app_en_learn_bible_gloss_urdu_generate_download,
    chapters_uploaded: app_en_learn_bible_gloss_urdu_chapters_uploaded,
  };
  let tagalog = {
    language: ebible_language_tagalog(),
    download: app_en_learn_bible_gloss_tagalog_generate_download,
    chapters_uploaded: app_en_learn_bible_gloss_tagalog_chapters_uploaded,
  };
  let r = [urdu, tagalog];
  return r;
}
