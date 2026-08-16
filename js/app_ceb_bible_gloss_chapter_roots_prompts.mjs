import { app_ceb_bible_gloss_generate_chapter_bible_folders } from "./app_ceb_bible_gloss_generate_chapter_bible_folders.mjs";
import { app_ceb_bible_gloss_passage_roots_prompt } from "./app_ceb_bible_gloss_passage_roots_prompt.mjs";
import { bible_passages_grouped } from "./bible_passages_grouped.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { list_map } from "./list_map.mjs";
export async function app_ceb_bible_gloss_chapter_roots_prompts(chapter_code) {
  "The dictionary roots that would be put in front of the machine for each passage of one Cebuano chapter, without generating anything.";
  "$plain chapter_code";
  "the code is a chapter's name, like PRO22, chosen from the Bible's own book and chapter numbering - it is looked up, never run, and nothing here can be steered by it";
  "What a machine is shown is as much of the work as what it is told, and it is the half nobody can see. The generating call reaches a paid service and writes a chapter, so it is the wrong place to find out whether the block came out empty or came out wrong. This builds the same block from the same two functions and hands it back to be read.";
  "It divides the chapter into passages exactly as generating does, by asking the same divider, so the blocks answered here are the blocks that would be sent and not an approximation of them.";
  let bible_folders = app_ceb_bible_gloss_generate_chapter_bible_folders();
  let passages = await bible_passages_grouped(bible_folders, [chapter_code]);
  let known = await binisaya_words_known();
  function passage_read(passage) {
    let reference = app_ceb_bible_gloss_passage_roots_prompt(passage, known);
    return reference;
  }
  let r = list_map(passages, passage_read);
  return r;
}
