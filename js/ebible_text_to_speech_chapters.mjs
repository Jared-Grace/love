import { bible_audio_speech_not_started } from "./bible_audio_speech_not_started.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_filter } from "./list_filter.mjs";
import { bible_audio_night_seconds_left_or_null } from "./bible_audio_night_seconds_left_or_null.mjs";
import { bible_audio_speech_memory_floor_bytes } from "./bible_audio_speech_memory_floor_bytes.mjs";
import { bible_audio_speech_swap_floor_bytes } from "./bible_audio_speech_swap_floor_bytes.mjs";
import { bible_audio_speech_workers } from "./bible_audio_speech_workers.mjs";
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
  "Reads several chapters and speaks them in one go, handing the engine the whole list at once, and returns the note per chapter that was recorded, saying which recorded piece holds which verse, alongside the folders the engine refused to begin.";
  "★ THE MODEL IS READ OFF DISK ONCE PER WORKER HERE AND ONCE PER CHAPTER THE OTHER WAY, WHICH IS THE WHOLE REASON THIS EXISTS. Speaking a book chapter by chapter starts a fresh engine every time, and the engine is a third of a gigabyte of weights; a book of fifty chapters paid that fifty times and spoke on one core while thirteen others waited. Handing the list over once lets the workers load once and then simply take the next chapter. Measured over Jonah, four chapters, that records at 0.49 times real time against 0.39 one chapter at a time - a quarter faster, and short of the 0.85 that had been projected before anything was recorded end to end. Four chapters is mostly tail, so the honest reading is that the loading cost is gone and the steady rate is still unmeasured.";
  "★ THE NOTE IS STILL WRITTEN HERE, FROM THE FILES, ONE CHAPTER AT A TIME. The engine is only ever asked to speak; what a piece actually holds is compared against what it was meant to hold afterwards, exactly as it is for a single chapter, so a chapter the engine cut some other way says so on its own disk rather than being covered over by the fifty that went well.";
  "★ EACH CHAPTER'S WORDS ARE GATHERED BEFORE ANY OF THEM IS SPOKEN, BECAUSE THE ENGINE IS GIVEN ONE LIST AND NOT A STREAM. That is also what makes a bad chapter code fail before an hour of recording rather than after it.";
  "★ HOW MANY WORKERS TO RUN IS DECIDED HERE ONCE, SO EVERYTHING THAT COULD CHANGE ITS MIND LATER IS HANDED OVER RATHER THAN DECIDED. A count sized against the machine at the moment a book starts is still that count three and a half hours later, and on 2026-08-28 that ended with the kernel killing the browser and the editor. The deadline and the two floors go down to the workers so that each one asks again before every chapter, which is the only place the answer can still be fresh.";
  "★ NOTHING HERE STOPS A CHAPTER THAT HAS STARTED, AND THAT IS WHAT MAKES STOPPING SAFE RATHER THAN COSTLY. A chapter is written piece by piece into its own folder, and a folder that exists counts as recorded and is never asked for again, so a chapter cut off in the middle would be lost silently. Refusing to start the next one leaves nothing half written.";
  "★ A CHAPTER THAT WAS REFUSED GETS NO NOTE WRITTEN BESIDE IT, AND THAT IS NOT TIDINESS BUT THE WHOLE POINT. Writing the note creates the chapter folder, and a folder that exists counts as recorded and is never asked for again, so writing a note for a chapter nobody spoke would retire that chapter permanently with no sound in it. The engine says which folders it never began; those are the ones left alone, so the next run finds them exactly as it would have found them had the run never happened.";
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
  let seconds_at_most = bible_audio_night_seconds_left_or_null();
  let memory_floor_bytes = bible_audio_speech_memory_floor_bytes();
  let swap_floor_bytes = bible_audio_speech_swap_floor_bytes();
  let spoken = await text_to_speech({
    jobs,
    workers,
    seconds_at_most,
    memory_floor_bytes,
    swap_floor_bytes,
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
  let not_started = bible_audio_speech_not_started(spoken);
  function started_is(plan) {
    let path_output = property_get(plan, "path_output");
    let began = list_includes_not(not_started, path_output);
    return began;
  }
  let started = list_filter(plans, started_is);
  let manifests = await list_map_async(started, manifest_each);
  let recorded = {
    manifests,
    not_started,
    spoken,
  };
  return recorded;
}
