import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { ebible_verses } from "./ebible_verses.mjs";
import { bible_verses_reading_units } from "./bible_verses_reading_units.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { bible_audio_folder } from "./bible_audio_folder.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { text_to_speech } from "./text_to_speech.mjs";
import { bible_audio_verses_manifest_write } from "./bible_audio_verses_manifest_write.mjs";
export async function ebible_text_to_speech_chapters(
  bible_folder,
  chapter_codes,
) {
  "$plain bible_folder";
  "$plain chapter_codes";
  "Reads several chapters and speaks them in one go, handing the engine the whole list at once, and returns the note per chapter saying which recorded piece holds which verse.";
  "★ THE MODEL IS READ OFF DISK ONCE PER WORKER HERE AND ONCE PER CHAPTER THE OTHER WAY, WHICH IS THE WHOLE REASON THIS EXISTS. Speaking a book chapter by chapter starts a fresh engine every time, and the engine is a third of a gigabyte of weights; a book of fifty chapters paid that fifty times and spoke on one core while thirteen others waited. Handing the list over once lets the workers load once and then simply take the next chapter. Measured over Jonah, four chapters, that records at 0.49 times real time against 0.39 one chapter at a time - a quarter faster, and short of the 0.85 that had been projected before anything was recorded end to end. Four chapters is mostly tail, so the honest reading is that the loading cost is gone and the steady rate is still unmeasured.";
  "★ THE NOTE IS STILL WRITTEN HERE, FROM THE FILES, ONE CHAPTER AT A TIME. The engine is only ever asked to speak; what a piece actually holds is compared against what it was meant to hold afterwards, exactly as it is for a single chapter, so a chapter the engine cut some other way says so on its own disk rather than being covered over by the fifty that went well.";
  "★ EACH CHAPTER'S WORDS ARE GATHERED BEFORE ANY OF THEM IS SPOKEN, BECAUSE THE ENGINE IS GIVEN ONE LIST AND NOT A STREAM. That is also what makes a bad chapter code fail before an hour of recording rather than after it.";
  arguments_assert(arguments, 2);
  let codes = text_split_comma(chapter_codes);
  async function plan_each(chapter_code) {
    let verses = await ebible_verses(bible_folder, chapter_code);
    let units = bible_verses_reading_units(verses);
    let texts = list_map_property(units, "text");
    let text = texts.join("\n");
    let path_output = bible_audio_folder(bible_folder, chapter_code);
    let plan = {
      chapter_code,
      units,
      text,
      path_output,
    };
    return plan;
  }
  let plans = await list_map_async(codes, plan_each);
  function job_each(plan) {
    let text = property_get(plan, "text");
    let path_output = property_get(plan, "path_output");
    let job = {
      text,
      path_output,
    };
    return job;
  }
  let jobs = list_map(plans, job_each);
  let workers = bible_audio_speech_workers();
  await text_to_speech({
    jobs,
    workers,
  });
  async function manifest_each(plan) {
    let chapter_code = property_get(plan, "chapter_code");
    let units = property_get(plan, "units");
    let manifest = await bible_audio_verses_manifest_write(
      bible_folder,
      chapter_code,
      units,
    );
    return manifest;
  }
  let manifests = await list_map_async(plans, manifest_each);
  return manifests;
}
