import { app_ceb_bible_gloss_chapter_known_capitalised } from "./app_ceb_bible_gloss_chapter_known_capitalised.mjs";
import { property_get } from "./property_get.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { app_ceb_bible_gloss_passage_verses_read } from "./app_ceb_bible_gloss_passage_verses_read.mjs";
import { app_ceb_bible_gloss_passages } from "./app_ceb_bible_gloss_passages.mjs";
import { g_sermon_passage_verses_key } from "./g_sermon_passage_verses_key.mjs";
import { gloss_write_chapter_file_path } from "./gloss_write_chapter_file_path.mjs";
import { list_map } from "./list_map.mjs";
export async function app_ceb_bible_gloss_write_passages(chapter_code) {
  "Everything needed to author a whole Cebuano chapter in one sitting: every passage of it, each with its Cebuano wording, its English wording, and each of its verses cut into words beside what a dictionary says each word is built from.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names text to read and nothing that runs.";
  "The single-passage twin answers the same thing about one passage, and everything it says about why the root and the affixes are handed over rather than worked out holds here word for word. This one exists for the size of the work rather than for a different question: the whole store was generated and is being authored over, and a chapter asked for a passage at a time costs an exchange per passage.";
  "The dictionary and the list of words the book never writes in small letters are read once and serve every passage, which is the whole of what makes a chapter cheaper than its passages added up.";
  "It also answers with the one file to write the whole chapter's explanations into, keyed by the verses each passage covers, because that name is a convention and a convention nobody can see is a convention nobody can follow.";
  let passages = await app_ceb_bible_gloss_passages(chapter_code);
  let sources =
    await app_ceb_bible_gloss_chapter_known_capitalised(chapter_code);
  let known = property_get(sources, "known");
  let capitalised = property_get(sources, "capitalised");
  function passage_read(passage) {
    let verse_key = g_sermon_passage_verses_key(passage);
    let verses = app_ceb_bible_gloss_passage_verses_read(
      passage,
      known,
      capitalised,
    );
    let r = {
      verse_key,
      verses,
    };
    return r;
  }
  let read = list_map(passages, passage_read);
  let file = gloss_write_chapter_file_path(
    chapter_code,
    app_ceb_bible_gloss_generate,
  );
  let r2 = {
    chapter_code,
    file,
    passages: read,
  };
  return r2;
}
