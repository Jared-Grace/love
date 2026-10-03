import { greater_than } from "./greater_than.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { lyric_video_documents_read } from "./lyric_video_documents_read.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { lyric_timing_lines_timed } from "./lyric_timing_lines_timed.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function lyric_video_document_line_repeat_add(
  name,
  index_said,
  start_said,
) {
  arguments_assert(arguments, 3);
  ("$plain name");
  ("$plain index_said");
  ("$plain start_said");
  ("Writes a second showing of a line a recording sings twice into the timing document of that recording, timed from the moment the repeat is heard to begin.");
  ("★ A SUNG REPEAT IS A FACT ABOUT THE RECORDING AND NOT A FAULT IN THE DOCUMENT, WHICH IS WHY THE REMEDY IS TO WRITE IT DOWN. The songs are generated, and the generator sometimes sings a verse or a line a second time. A document holding each line once then leaves the last caption standing on the screen while the singing goes back to an earlier verse, so a person reading the screen is told the wrong words - and the longer the repeat, the longer the lie. Lengthening the window a caption is allowed to be wrong for would make the complaint stop without making the screen right, so the repeat is authored instead.");
  ("★ WHICH LINE A SECOND HEARING BELONGS TO IS A PERSON'S DECISION, AND THAT IS WHY THIS IS HANDED THE LINE RATHER THAN LOOKING FOR IT. Where a song repeats whole lines in the order they are written, where each caption goes is arithmetic and anybody can read it off the hearing. Where two lines of the passage begin with the same words, a repeat of those words cannot be told apart by any amount of listening, and a machine choosing between them would put the wrong verse on the screen in the name of fixing exactly that. So the choosing stays outside and only the writing is here.");
  ("★ IT REFUSES RATHER THAN WRITING WHEN ANY OTHER LINE WOULD MOVE. The line builder is asked to lay the whole document out again, because a line ends where the next one begins and inserting a line changes where the line before it ends - and that rule lives in the builder and must not be spelled a second time here. Asked for the whole document, the builder could also quietly restate a line somebody had moved by hand to something arithmetic. So what it answers is read back against what was there, and anything that moved beyond the new line and the one before it ends this with the differences named.");
  ("THE PICTURES ARE LEFT ALONE BECAUSE THEY CARRY THEIR OWN MOMENTS. What is shown behind the words is timed in seconds as the lines are, not by which line is up, so a line arriving in the middle shifts nothing about them.");
  ("WHAT THE DOCUMENT SAYS ITS TIMES CAME FROM IS LEFT AS IT WAS. A document a machine timed may be listened to again, and the next listening is handed the words to place - the repeat among them - so it places both showings itself and improves on these moments rather than losing them.");
  let index = number_from_text(index_said);
  let start = number_from_text(start_said);
  let read = await lyric_video_documents_read();
  let found = null;
  for (let one of read) {
    let same = equal(one.name, name);
    if (same) {
      found = one;
    }
  }
  let unknown = equal(found, null);
  if (unknown) {
    let nothing = {
      wrote: false,
      why: "no timing document answers to that name",
    };
    return nothing;
  }
  let document = found.document;
  let lines = document.lines;
  let line = lines[index];
  let absent = equal(line, undefined);
  if (absent) {
    let missing = {
      wrote: false,
      why: "that document has no line at that number",
      lines: lines.length,
    };
    return missing;
  }
  let text = line.text;
  let starts = [];
  let texts = [];
  let place = null;
  for (let one_line of lines) {
    let untimed = equal(one_line.start, null);
    let after = not(untimed) && greater_than(one_line.start, start);
    let waiting = equal(place, null);
    if (after && waiting) {
      place = starts.length;
      starts.push(start);
      texts.push(text);
    }
    starts.push(one_line.start);
    texts.push(one_line.text);
  }
  let last = equal(place, null);
  if (last) {
    place = starts.length;
    starts.push(start);
    texts.push(text);
  }
  let built = lyric_timing_lines_timed(starts, texts, document.duration);
  let moved = [];
  for (let i = 0; less_than(i, built.length); i++) {
    let inserted = equal(i, place);
    if (not(inserted)) {
      let before = less_than(i, place);
      let was = before ? lines[i] : lines[subtract(i, 1)];
      let same_start = equal(built[i].start, was.start);
      if (not(same_start)) {
        moved.push(
          was.text + " begins " + was.start + " not " + built[i].start,
        );
      }
      let right = subtract(place, 1);
      let predecessor = equal(i, right);
      let same_end = equal(built[i].end, was.end);
      if (not(predecessor) && not(same_end)) {
        moved.push(was.text + " ends " + was.end + " not " + built[i].end);
      }
    }
  }
  let disagreed = greater_than(moved.length, 0);
  if (disagreed) {
    let refused = {
      wrote: false,
      why: "laying the document out again would move lines other than the new one and the one before it",
      moved,
    };
    return refused;
  }
  document.lines = built;
  await file_overwrite_json(found.path, document);
  let written = {
    wrote: true,
    name,
    text,
    at: place,
    line: built[place],
    lines: built.length,
  };
  return written;
}
