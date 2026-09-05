import { object_property_names } from "./object_property_names.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_transcripts_path } from "./lyric_video_transcripts_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { list_is } from "./list_is.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function lyric_video_transcripts_runs_migrate() {
  arguments_assert(arguments, 0);
  ("Makes the songs already heard once keep that hearing as the first of several, so the readings taken before every hearing was kept are not thrown away to start keeping them.");
  ("★ THE ALTERNATIVE TO MIGRATING WAS DELETING, AND DELETING WOULD HAVE BROKEN THE VERY RULE THE CHANGE WAS MADE FOR. Overwriting a reading loses one reading; discarding the file loses all of them, so a change made because readings are worth keeping cannot open by not keeping the ones there are.");
  ("★ IT CAN BE RUN TWICE BECAUSE THE TWO SHAPES CAN BE TOLD APART BY LOOKING, RATHER THAN BY REMEMBERING WHETHER IT HAS BEEN RUN. A song heard once holds a list of words, and a word is a thing with a spelling and a moment; a song migrated holds a list of hearings, and a hearing is a list. So the first thing in the list is either a list or it is not, and that single question is the whole test - which is what keeps this from being the kind of repair that doubles what it touches when it is run again by someone who could not tell.");
  let path_findings = lyric_video_transcripts_path();
  let there = await file_exists(path_findings);
  if (not(there)) {
    let nothing = {
      songs: 0,
      wrapped: 0,
    };
    return nothing;
  }
  let record = await file_read_json(path_findings);
  let names = object_property_names(record);
  let wrapped = [];
  for (let name of names) {
    let kept = record[name];
    let heard_first = kept[0];
    let already = list_is(heard_first);
    if (already) {
      continue;
    }
    let runs = [kept];
    record[name] = runs;
    wrapped.push(name);
  }
  await file_overwrite_json(path_findings, record);
  let answer = {
    songs: names.length,
    wrapped,
  };
  return answer;
}
