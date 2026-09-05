import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_transcripts_path } from "./lyric_video_transcripts_path.mjs";
import { lyric_video_transcripts_runs_migrate } from "./lyric_video_transcripts_runs_migrate.mjs";
import { file_json_named_append } from "./file_json_named_append.mjs";
export async function lyric_video_transcript_record(name_document, transcript) {
  arguments_assert(arguments, 2);
  ("$plain name_document");
  ("$plain transcript");
  ("Keeps every word one song sounded like it said, to a listener that was never shown the psalm, beside the same reading's summary, and hands back the whole record.");
  ("★ IT IS KEPT BECAUSE THE SUMMARY THROWS AWAY THE ONLY THING THAT CAN EXPLAIN ITS OWN WORST ANSWER. A line the listener could not place at all is written down as nothing, and nothing is exactly the shape that cannot be argued with: a person asking why is told that a line was unplaced and given no way to find out what was heard there instead. Psalm 150 came back with two such lines, both of them the word Hallelujah, and both of them moved by seconds rather than tenths - and the words that would have settled it existed for a minute inside one run and were then dropped.");
  ("★ HEARING A SONG AGAIN COSTS TWENTY MINUTES, SO A THING HEARD ONCE IS KEPT WHOLE RATHER THAN SUMMARISED. Everything a summary leaves out is a question that can only be answered by paying that again, and the answers are cheap to store: a few hundred words with a number each.");
  ("★ A SECOND HEARING IS ADDED BESIDE THE FIRST RATHER THAN OVER IT, BECAUSE THIS LISTENER IS THE ONE READER NOBODY HAD CHECKED FOR STEADINESS. The aligner was proved to answer the same way twice and it is not the reader being believed; this one is. Handed one recording twice it heard 165 words and then 161, and in the outro eight repetitions of a word and then four, at different seconds - so where the singing is plain the two runs agree and where it is held or repeated they do not, which is to say the scatter falls precisely on the passages the listener was brought in to settle. Two kept hearings show that for nothing. One kept hearing reports the scatter as a fact.");
  ("The document is named rather than the chapter, the same way the summary names it, because one chapter sung in a second translation is a different recording with different words and a key that could not tell them apart would keep only whichever was heard last.");
  ("The songs heard before hearings were kept are brought up to the shape first, on every write rather than once by hand, because the two shapes differ by one wrapping and adding a hearing to the older one would silently make a pile that is half words and half hearings. The bringing-up looks before it acts and so costs nothing when there is nothing to do.");
  let path_findings = lyric_video_transcripts_path();
  await lyric_video_transcripts_runs_migrate();
  let record = await file_json_named_append(
    path_findings,
    name_document,
    transcript,
  );
  return record;
}
