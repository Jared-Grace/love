import { add } from "./add.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_speech_quote_marks } from "./bible_speech_quote_marks.mjs";
export function bible_speech_spans(verses) {
  "One chapter's verses cut into runs of text that are all inside the same depth of quotation, each carrying the verse it belongs to, so that a reading knows where one voice stops and another begins.";
  "★ THE UNIT OF THE PARSE IS THE CHAPTER AND NOT THE VERSE, WHICH IS WHY THIS TAKES A WHOLE CHAPTER'S VERSES AND NOT ONE STRING. A quote is opened in one verse and closed several verses later, and the sentence that says who is speaking is routinely in the verse before the speech. A per-verse parser sees an unbalanced mark, has nothing to do with it, and gets every verse of a long discourse wrong.";
  "★ WHAT CROSSES THE VERSE BOUNDARY IS THE DEPTH AND NOT THE SPAN, AND THAT IS THE DESIGN RATHER THAN A LIMITATION. Every verse ends a span, so a discourse running through ten verses comes out as ten spans all at depth one, and reassembling them is a join. The reason to cut there is the audio: a recording has to be able to say where each verse begins, and a span that swallowed the boundary would have destroyed exactly the information the audio pipeline is missing today. Cutting more finely than the voice changes costs nothing, because two adjacent spans at the same depth are the same voice.";
  "★ THE MARKS ARE DROPPED FROM THE TEXT BECAUSE NOBODY READS THEM ALOUD. They were punctuation telling a silent reader what a change of voice tells a listener, so once the voice carries the information the character is noise. Where the text is shown on screen rather than heard, the original verse is still there to show.";
  "★ AN EMPTY RUN IS NOT EMITTED, WHICH IS WHAT KEEPS BACK-TO-BACK SPEECH FROM PRODUCING PHANTOM NARRATION. A verse closing one quotation and opening another immediately leaves nothing between the two marks, and a span of no text has no voice, no duration and nothing to read.";
  "★ AN UNCLOSED QUOTE AT THE END OF A CHAPTER IS LEFT UNCLOSED RATHER THAN REPAIRED, AND A STRAY CLOSER CANNOT DRIVE THE DEPTH BELOW ZERO. Both are real in printed bibles - a discourse can run past a chapter break, and typesetting slips exist - and both are the caller's problem to notice. Silently balancing them would hide the one signal that says this chapter needs a person to look at it.";
  arguments_assert(arguments, 1);
  let marks = bible_speech_quote_marks();
  let spans = [];
  let depth = 0;
  function verse_each(verse) {
    let gathered = "";
    function span_close() {
      let trimmed = gathered.trim();
      gathered = "";
      if (equal(trimmed, "")) {
        return;
      }
      let span = {
        verse_number: verse.verse_number,
        depth: depth,
        text: trimmed,
      };
      list_add(spans, span);
    }
    function character_each(character) {
      if (equal(character, marks.open)) {
        span_close();
        depth = add(depth, 1);
        return;
      }
      if (equal(character, marks.close)) {
        span_close();
        if (less_than(0, depth)) {
          depth = add(depth, -1);
        }
        return;
      }
      gathered = add(gathered, character);
    }
    let list = verse.text.split("");
    each(list, character_each);
    span_close();
  }
  each(verses, verse_each);
  return spans;
}
