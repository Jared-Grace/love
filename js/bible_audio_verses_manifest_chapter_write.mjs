import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_chapter_reading_units } from "./ebible_chapter_reading_units.mjs";
import { bible_audio_verses_manifest_write } from "./bible_audio_verses_manifest_write.mjs";
export async function bible_audio_verses_manifest_chapter_write(
  bible_folder,
  chapter_code,
) {
  "$plain bible_folder";
  "$plain chapter_code";
  "Writes the note of which recorded piece holds which verses for a chapter already on disk, gathering the chapter into reading pieces itself - which is how audio generated before the note existed can be asked whether it lines up.";
  "★ IT EXISTS SO THE QUESTION CAN BE ASKED OF AUDIO NOBODY IS GENERATING RIGHT NOW. The writer underneath takes the pieces as an argument because the generator already has them in hand, which is right for the generator and useless from a command line. Given only a chapter code this gathers the chapter and answers, so a folder of recordings of unknown provenance can be judged without regenerating it.";
  "★ IT GATHERS THE SAME WAY THE GENERATOR CUTS, WHICH IS WHY IT CAN JUDGE THE GENERATOR'S WORK. Both go through one place that turns a chapter into pieces, so a disagreement between the note and the sound is a fault in the recording rather than a difference of opinion about where a piece ends.";
  "★ THE ANSWER FOR EVERY CHAPTER RECORDED SO FAR IS EXPECTED TO BE NO, AND THAT IS THE POINT OF ASKING. Those were made from a chapter flattened into one string with the verse boundaries thrown away, so the engine cut them wherever its own chunking landed and no piece corresponds to a verse. A note saying ALIGNED FALSE is the evidence that they cannot be indexed, which until now was a claim rather than a measurement.";
  arguments_assert(arguments, 2);
  let units = await ebible_chapter_reading_units(bible_folder, chapter_code);
  let manifest = await bible_audio_verses_manifest_write(
    bible_folder,
    chapter_code,
    units,
  );
  return manifest;
}
