import { arguments_assert } from "./arguments_assert.mjs";
import { invoke_cache_file_global } from "./invoke_cache_file_global.mjs";
import { bible_glyph_proper_name_numbers } from "./bible_glyph_proper_name_numbers.mjs";
export async function bible_glyph_proper_name_numbers_cache(testament_name) {
  "Which Strong's numbers of one testament are proper names, worked out once and kept.";
  "$plain testament_name";
  "the testament names which half of the Bible to read. It is compared against the name each chapter reports and nothing about it runs.";
  "THE ANSWER IS THE SAME FOR EVERY CHAPTER AND WAS BEING WORKED OUT PER CHAPTER. Deciding it walks every word of a whole testament, so a command that asks one chapter at a time paid a whole-testament walk for each chapter it touched - and the reason to ask one chapter at a time is that a chapter is what gets committed, so that shape is not going away.";
  "NOTHING ABOUT THE ANSWER CHANGES HERE, only how often it is worked out. The decision still lives next door, which matters because the decision is the arguable part - a cache that also decided would be a second place the rule was written, and the two would part the day either was improved.";
  arguments_assert(arguments, 1);
  let v = await invoke_cache_file_global(bible_glyph_proper_name_numbers, [
    testament_name,
  ]);
  return v;
}
