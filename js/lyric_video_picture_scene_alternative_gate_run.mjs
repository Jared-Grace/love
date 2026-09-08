import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_picture_scene_alternative_missing } from "./lyric_video_picture_scene_alternative_missing.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function lyric_video_picture_scene_alternative_gate_run() {
  "QA gate: every authored scene that draws a person carries a second wording beside it drawing nobody, so that a listener who writes in objecting to figures can be answered with a video rather than with a promise.";
  "★ THE FAULT IT KEEPS OUT IS ONLY EVER FOUND MONTHS LATE AND BY SOMEBODY ELSE. Nothing about a scene naming shepherds is wrong when it is written; it becomes a debt on the day a letter arrives, and the letter arrives long after the psalm has left anybody's head. Then the second wording has to be invented cold, and the person who wrote in has already watched the thing they object to. Asking for it while the line is still in front of the author is the whole of the saving.";
  "IT IS CHECKED AGAINST NOTHING RATHER THAN AGAINST A LIST OF KNOWN OFFENDERS, because there is no scene that is worth drawing a person into and not worth spending one more sentence on. The repair is always available and always cheap at the moment it is asked for.";
  "★ HOW MUCH WAS READ TRAVELS OUT WITH THE VERDICT, because finding no fault and reading no scene are the same green word otherwise. It will sit at a small number for a long time - most of these documents have their timings and not their grounds - and a fall back toward nothing while psalms are being authored means the sweep has lost the folder rather than that the folder came clean.";
  arguments_assert(arguments, 0);
  let r2 = await lyric_video_picture_scene_alternative_missing();
  let missing = property_get(r2, "missing");
  let documents = property_get(r2, "documents");
  let scenes_read = property_get(r2, "scenes_read");
  list_empty_is_assert_json(missing, {
    hint: "a lyric video scene draws a person and has no scene_no_people beside it; write the same line a second way with nobody in the frame - the flock rather than the shepherd, the fold rather than the keeper, the crown laid down rather than the king",
  });
  let r = {
    documents,
    scenes_read,
  };
  return r;
}
