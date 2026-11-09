import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { facebook_bible_sermon_posted_path } from "./facebook_bible_sermon_posted_path.mjs";
import { file_read_json_exists_ensure } from "./file_read_json_exists_ensure.mjs";
import { facebook_bible_sermon_after } from "./facebook_bible_sermon_after.mjs";
import { facebook_bible_sermon_post_text } from "./facebook_bible_sermon_post_text.mjs";
export async function facebook_bible_sermon_next_text() {
  arguments_assert(arguments, 0);
  ("The words the next sermon run would post, read off the same record and the same order, without posting or recording anything - so a post can be read before it goes out.");
  let record_path = facebook_bible_sermon_posted_path();
  let record = await file_read_json_exists_ensure(record_path);
  let last_chapter = record.chapter_code ?? null;
  let last_key = record.verses_key ?? null;
  let next = await facebook_bible_sermon_after(last_chapter, last_key);
  if (equal(next, null)) {
    return null;
  }
  let text = await facebook_bible_sermon_post_text(
    next.chapter_code,
    next.passage,
  );
  return text;
}
