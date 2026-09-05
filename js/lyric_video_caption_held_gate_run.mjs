import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { data_given_lyric_videos_folder } from "./data_given_lyric_videos_folder.mjs";
import { folder_read_paths_async } from "./folder_read_paths_async.mjs";
import { list_filter_ends_with } from "./list_filter_ends_with.mjs";
import { lyric_video_transcripts_path } from "./lyric_video_transcripts_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { lyric_video_caption_unwritten_floor } from "./lyric_video_caption_unwritten_floor.mjs";
import { lyric_video_caption_unwritten_allowed } from "./lyric_video_caption_unwritten_allowed.mjs";
import { file_path_name_last } from "./file_path_name_last.mjs";
import { text_without_ending } from "./text_without_ending.mjs";
import { equal } from "./equal.mjs";
import { list_last } from "./list_last.mjs";
import { lyric_video_document_caption_unwritten_worst } from "./lyric_video_document_caption_unwritten_worst.mjs";
import { add } from "./add.mjs";
import { list_includes } from "./list_includes.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { not } from "./not.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function lyric_video_caption_held_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: no timing document leaves one caption standing on the screen while the recording sings a verse that caption does not say.");
  ("★ THE FAULT THIS CATCHES WAS FOUND BY READING A TRANSCRIPT, AND EVERY CHEAPER READER HAD ALREADY PASSED IT. Psalm 133 is sung twice over with a wordless bridge between; its document wrote each line once, so a viewer read running down on the beard for sixty-eight seconds while five other verses were sung underneath. Every line in that document was in order, every line was placed within a second of where the aligner said, and the recording matched the psalm - so the ordering gate, the lateness flags and the match rate were all green. The aligner cannot report it, because it was handed the words and must place all of them somewhere; only the listener that was shown no words can say a verse was sung that nobody wrote.");
  ("★ IT GUARDS WORK THAT CANNOT BE REDONE BY MACHINE. Timing a repeat is a person deciding which line a second hearing belongs to, and re-timing a document throws that decision away and writes the aligner's answer back over it. Psalm 133's repeat was authored by hand this way and is one careless re-run from being lost, with nothing else anywhere that would notice.");
  ("★ HOW MANY SONGS WERE MEASURED TRAVELS OUT WITH THE VERDICT, because a record that has moved or been emptied reads here as every song passing. Only songs that have actually been listened to can be judged at all, so the count is smaller than the number of documents on purpose, and a fall in it means the transcripts were lost rather than that the psalms were fixed.");
  ("A song already known to hold this fault is listed rather than fixed here, and a listed song that no longer holds it fails too - a debt paid off has to be struck off the list, or the list slowly turns into a place faults go to be forgotten.");
  let folder = data_given_lyric_videos_folder();
  let paths = await folder_read_paths_async(folder);
  let paths_json = list_filter_ends_with(paths, ".json");
  let path_findings = lyric_video_transcripts_path();
  let transcripts = await file_read_json(path_findings);
  let floor = lyric_video_caption_unwritten_floor();
  let allowed = lyric_video_caption_unwritten_allowed();
  let over = [];
  let paid = [];
  let measured = 0;
  for (let path of paths_json) {
    let file = file_path_name_last(path);
    let name = text_without_ending(file, ".json");
    let runs = transcripts[name];
    let unheard = equal(runs, undefined);
    if (unheard) {
      continue;
    }
    let heard = list_last(runs);
    let document = await file_read_json(path);
    let worst = lyric_video_document_caption_unwritten_worst(document, heard);
    measured = add(measured, 1);
    let known = list_includes(allowed, name);
    let enough = greater_than_equal(worst.count, floor);
    let one = {
      name,
      line: worst.line,
      held: worst.held,
      count: worst.count,
      said: worst.said,
    };
    if (enough && not(known)) {
      over.push(one);
    }
    if (known && not(enough)) {
      paid.push(one);
    }
  }
  list_empty_is_assert_json(over, {
    hint: "a caption stands on the screen while the recording sings words it does not say - read the transcript around the named line, and if a verse is genuinely sung twice, author the repeat into the document and time it from the hearing; never raise the floor to make this green",
  });
  list_empty_is_assert_json(paid, {
    hint: text_combine_multiple([
      "a song listed as a known offender no longer holds the fault - take its name out of ",
      fn_name("lyric_video_caption_unwritten_allowed"),
      " so the list keeps meaning what it says",
    ]),
  });
  let r = {
    measured,
    floor,
  };
  return r;
}
