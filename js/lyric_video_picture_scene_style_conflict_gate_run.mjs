import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_picture_scene_style_conflicts } from "./lyric_video_picture_scene_style_conflicts.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function lyric_video_picture_scene_style_conflict_gate_run() {
  "QA gate: no authored scene asks for a thing the shared look of these pictures refuses, so that no prompt is ever sent contradicting itself.";
  "THE FAULT IT KEEPS OUT IS PAID FOR IN MONEY AND FOUND BY EYE. A scene and the look are joined into one sentence and handed to a house that charges per picture; a sentence asking for a road and refusing roads is drawn either way, and the only reader who ever notices is somebody opening the finished picture and wondering why it went wrong. Reading the scenes takes no measurable time and says the same thing before the drawing is ordered.";
  "It is checked against nothing rather than against a written-down number of known offenders, because there is no reading under which a scene contradicting the look is worth drawing. The repair is always available and always cheap: say the same scene in words the look does not refuse.";
  "★ HOW MUCH WAS READ TRAVELS OUT WITH THE VERDICT, because finding no fault and reading no scene are the same green word otherwise. The overwhelming majority of these documents have no scenes authored yet, so this gate will sit at a small number for a long time and the number is the point: if it ever falls back toward nothing while psalms are being authored, the sweep has lost the folder or the shape of a document has moved underneath it.";
  arguments_assert(arguments, 0);
  let r2 = await lyric_video_picture_scene_style_conflicts();
  let conflicts = property_get(r2, "conflicts");
  let documents = property_get(r2, "documents");
  let scenes_read = property_get(r2, "scenes_read");
  list_empty_is_assert_json(conflicts, {
    hint: "a lyric video scene asks for something the shared picture look refuses; reword the scene so the sentence handed to the drawer says one thing - a rock face becomes a cliff of bare rock, a stone road becomes a worn footpath",
  });
  let r = {
    documents,
    scenes_read,
  };
  return r;
}
