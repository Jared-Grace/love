import { audio_words_heard_model } from "./audio_words_heard_model.mjs";
import { numbers_apart } from "./numbers_apart.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { audio_pieces_words_timed } from "./audio_pieces_words_timed.mjs";
import { equal } from "./equal.mjs";
import { audio_words_heard } from "./audio_words_heard.mjs";
import { lyric_video_document_lines_started } from "./lyric_video_document_lines_started.mjs";
import { lyric_video_heard_shift } from "./lyric_video_heard_shift.mjs";
import { lyric_video_disagree_seconds } from "./lyric_video_disagree_seconds.mjs";
import { less_than } from "./less_than.mjs";
import { divide } from "./divide.mjs";
import { multiply_round } from "./multiply_round.mjs";
import { greater_than } from "./greater_than.mjs";
export async function lyric_video_document_times_measure(
  path_audio,
  path_document,
) {
  "$plain path_audio";
  "$plain path_document";
  "Where every line of a song begins according to two readings of the recording that were made without reference to each other, how much of the written psalm was actually heard, and the lines the two readings do not agree about.";
  "★ TWO READINGS ARE TAKEN BECAUSE NEITHER ONE CAN BE ASKED WHETHER IT IS RIGHT. The aligner is handed the words and lays them onto the sound whatever the sound holds, so it cannot disagree with the text; its own score is worked out by the model whose confusion is in doubt, and on singing that score came out at 0.367 for the right words against 0.25 for a different psalm's, which separates nothing. The transcriber is shown no words at all, so how much of the psalm it heard by itself is a judgement about the recording rather than about the alignment: 0.968 against 0.191 on the same pair.";
  "★ THE TIMES COME FROM THE ALIGNER AND ONLY THE VERDICT COMES FROM THE HEARING, WHICH IS WHY BOTH ARE RUN AND NEITHER IS PREFERRED OUTRIGHT. Measured against times a person had already confirmed, the aligner placed 27 of 32 lines inside a tenth of a second, and the transcriber stayed about a quarter of a second out even after its constant lead was taken off. So one is asked when and the other is asked what, and each is asked the thing it is good at.";
  "★ NOTHING IS WRITTEN ANYWHERE BY THIS, AND THAT IS THE POINT OF ITS NAME. A song whose lines are all agreed is finished and a song with seven flagged lines needs a person for a few minutes, and those are different amounts of work; a command that quietly saved either one would hide which of the two it had just done.";
  "The lines handed back are the ones where the two readings are further apart than a third of a second, together with any line neither reading could place. That threshold was chosen to accuse rather than to excuse: a line flagged wrongly costs one glance, and a line cleared wrongly ships a video whose words arrive at the wrong moment with nobody left to notice.";
  arguments_assert(arguments, 2);
  let document = await file_read_json(path_document);
  function line_text(line) {
    let text = line.text;
    return text;
  }
  let texts = list_map(document.lines, line_text);
  let piece = {
    audio: path_audio,
    text: list_join_space(texts),
  };
  let pieces = await audio_pieces_words_timed([piece]);
  if (equal(pieces, null)) {
    return null;
  }
  let aligned = pieces[0];
  let model = audio_words_heard_model();
  let words_heard = await audio_words_heard(path_audio, model);
  if (equal(words_heard, null)) {
    return null;
  }
  let timed = lyric_video_document_lines_started(document, aligned.words, 0);
  let shift = lyric_video_heard_shift();
  let listened = lyric_video_document_lines_started(
    document,
    words_heard,
    shift,
  );
  let apart_least = lyric_video_disagree_seconds();
  let flagged = [];
  for (let number = 0; less_than(number, document.lines.length); number++) {
    let start = timed.starts[number];
    let start_heard = listened.starts[number];
    let unplaced = equal(start, null) || equal(start_heard, null);
    let number2 = numbers_apart(start, start_heard);
    let top = multiply_round(number2, 1000);
    let apart = unplaced ? null : divide(top, 1000);
    let disagreed = unplaced || greater_than(apart, apart_least);
    if (disagreed) {
      let flag = {
        line: number,
        start,
        start_heard,
        apart,
        text: document.lines[number].text,
      };
      flagged.push(flag);
    }
  }
  let number3 = divide(listened.matched, listened.written);
  let top2 = multiply_round(number3, 1000);
  let measured = {
    path_audio,
    path_document,
    starts: timed.starts,
    starts_heard: listened.starts,
    confidence: aligned.confidence,
    dropped: aligned.dropped,
    words_written: listened.written,
    words_heard: listened.said,
    words_matched: listened.matched,
    match_rate: divide(top2, 1000),
    flagged,
  };
  return measured;
}
