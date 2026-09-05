import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_transcripts_path } from "./lyric_video_transcripts_path.mjs";
import { file_json_named_keep } from "./file_json_named_keep.mjs";
export async function lyric_video_transcript_record(name_document, transcript) {
  arguments_assert(arguments, 2);
  ("$plain name_document");
  ("$plain transcript");
  ("Keeps every word one song sounded like it said, to a listener that was never shown the psalm, beside the same reading's summary, and hands back the whole record.");
  ("★ IT IS KEPT BECAUSE THE SUMMARY THROWS AWAY THE ONLY THING THAT CAN EXPLAIN ITS OWN WORST ANSWER. A line the listener could not place at all is written down as nothing, and nothing is exactly the shape that cannot be argued with: a person asking why is told that a line was unplaced and given no way to find out what was heard there instead. Psalm 150 came back with two such lines, both of them the word Hallelujah, and both of them moved by seconds rather than tenths - and the words that would have settled it existed for a minute inside one run and were then dropped.");
  ("★ HEARING A SONG AGAIN COSTS TWENTY MINUTES, SO A THING HEARD ONCE IS KEPT WHOLE RATHER THAN SUMMARISED. Everything a summary leaves out is a question that can only be answered by paying that again, and the answers are cheap to store: a few hundred words with a number each.");
  ("The document is named rather than the chapter, the same way the summary names it, because one chapter sung in a second translation is a different recording with different words and a key that could not tell them apart would keep only whichever was heard last.");
  let path_findings = lyric_video_transcripts_path();
  let record = await file_json_named_keep(
    path_findings,
    name_document,
    transcript,
  );
  return record;
}
