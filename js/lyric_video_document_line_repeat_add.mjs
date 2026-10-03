import { arguments_assert } from "./arguments_assert.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { lyric_video_document_name_found } from "./lyric_video_document_name_found.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { greater_than } from "./greater_than.mjs";
import { lyric_video_document_lines_relaid_write } from "./lyric_video_document_lines_relaid_write.mjs";
import { property_get } from "./property_get.mjs";
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
  ("THE SECOND SHOWING GOES WHERE ITS MOMENT PUTS IT RATHER THAN AFTER THE LINE IT COPIES, because what the document holds is an order of moments and a repeat of an early verse arrives late in the song. Where the moment is later than every line there is, it goes at the end and the passage closes on it.");
  ("WHAT THE DOCUMENT SAYS ITS TIMES CAME FROM IS LEFT AS IT WAS. A document a machine timed may be listened to again, and the next listening is handed the words to place - the repeat among them - so it places both showings itself and improves on these moments rather than losing them.");
  ("★ THE WRITER'S REFUSAL IS CARRIED UP RATHER THAN LEFT IN THE BOX IT ARRIVED IN. Laying the document out again is refused where its endings hold something a person decided by hand, and that refusal comes back inside the writer's own answer. An answer that named where the second showing had gone and said nothing at all about whether anything was saved read exactly like a success, so a document that refused every time looked mended - and the word a refusal here is told apart by is the same word, so it has to be on both ways out or on neither.");
  let index = number_from_text(index_said);
  let start = number_from_text(start_said);
  let found = await lyric_video_document_name_found(name);
  let unknown = equal(found, null);
  if (unknown) {
    let nothing = {
      wrote: false,
      why: "no timing document answers to that name",
    };
    return nothing;
  }
  let lines = found.document.lines;
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
  let written = await lyric_video_document_lines_relaid_write(
    found,
    starts,
    texts,
  );
  let r = {
    wrote: property_get(written, "wrote"),
    why: property_get(written, "why"),
    written,
    text,
    at: place,
  };
  return r;
}
