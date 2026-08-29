import { multiply_round } from "./multiply_round.mjs";
import { subtitles_time_text } from "./subtitles_time_text.mjs";
import { number_is } from "./number_is.mjs";
export function lyric_video_subtitles_text(document) {
  "$plain document";
  "The whole subtitle file of a lyric video, written out of one authored document: the passage and the translation that stand at the foot of every frame, how long the song runs, how big the frame is, how big the three lettering sizes are, and the lines with the moment each is sung.";
  "THE TIMES ARE AUTHORED, NOT WORKED OUT HERE. Where a sung line begins is heard, not derived - a singer holds a word, an instrument plays alone for eight bars, a verse is repeated and the printed text is not. Nothing about the words on the page says any of that, so a rule that placed them would be guessing at the one thing the video exists to get right. This packs what somebody heard; it never decides it.";
  "A LINE THE DOCUMENT HAS NO TIME FOR IS LEFT OUT OF THE VIDEO RATHER THAN PLACED SOMEWHERE. It follows from the line above: where a line belongs is heard and nothing here can hear it, so there is no moment to put it at that would not be invented. Leaving it out loses a line of the psalm, which is a real loss and a visible one - the person who timed the passage watches the video and sees at once that they stopped one line early. The alternative loses the whole video quietly, because a line given a time it never had is a card standing over the singing at the wrong moment, and the worst of those times is zero, which puts it over every other line from the first frame to the last.";
  "EVERY LETTERING SIZE IS ASKED FOR, AND THE SMALLER ONES USED TO BE WORKED OUT AS A SHARE OF THE LARGER. Tying them together says they are one decision, and they are not: the words are sized to be read across a room from a phone lying on a table, the passage to be read at a glance by somebody arriving in the middle, and the translation to be findable by somebody who wants it without ever competing with the psalm. Making the words bigger through a fixed share drags all of that up with them into exactly that competition, and the only way out was to change a number that no document could see.";
  "THE PASSAGE AND THE TRANSLATION ARE TWO LINES RATHER THAN ONE, AND THE SIZES ARE WHY. They used to be one grey line with a dot between them, which forced both to be the same size - so making the passage large enough to read at a glance would have made the translation shout, and keeping the translation quiet kept the passage unreadable. Stacked, each is sized for what it is for: the passage above and large, the translation under it and small.";
  "WHERE THE UPPER LINE SITS IS WORKED OUT AND NOT AUTHORED. It has to clear the line beneath it, so its distance from the foot follows from that line's lettering size; a document that stated both would be stating one fact twice, and the two would part company the first time somebody changed a size.";
  "The words come from the translation unchanged, down to the couplet that begins in the lower case because it is the second half of a line. Repairing that capital would be correcting the poem to look like prose.";
  "Every line is one whole card rather than a word lit up at a time. A word-by-word sweep asks the reader to watch the screen; a card asks them to read it and then listen, which is what a psalm is for.";
  "Both lines at the foot stand through the whole song in grey, quiet enough to be ignored and always there. Together they are the attribution the translation asks for, and they also answer the question a person arriving in the middle of a video actually has.";
  "The words sit at the middle of the frame rather than at the foot, because a phone is held with the lower part of the screen under a thumb and the middle is the part a person is already looking at.";
  let width = document.width;
  let height = document.height;
  let font_size = document.font_size;
  let passage_size = document.passage_font_size;
  let credit_size = document.credit_font_size;
  let credit_margin = 70;
  let passage_margin = credit_margin + multiply_round(credit_size, 1.5);
  let styles_format =
    "Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding";
  let lyric_style =
    "Style: Lyric,Noto Sans," +
    font_size +
    ",&H00FFFFFF,&H00FFFFFF,&H00000000,&H00000000,-1,0,0,0,100,100,0,0,1,0,0,5,80,80,0,1";
  let passage_style =
    "Style: Passage,Noto Sans," +
    passage_size +
    ",&H00B4B4B4,&H00B4B4B4,&H00000000,&H00000000,0,0,0,0,100,100,2,0,1,0,0,2,80,80," +
    passage_margin +
    ",1";
  let credit_style =
    "Style: Credit,Noto Sans," +
    credit_size +
    ",&H00828282,&H00828282,&H00000000,&H00000000,0,0,0,0,100,100,2,0,1,0,0,2,80,80," +
    credit_margin +
    ",1";
  let song_end = subtitles_time_text(document.duration);
  let passage_event =
    "Dialogue: 0,0:00:00.00," +
    song_end +
    ",Passage,,0,0,0,,{\\fad(900,900)}" +
    document.passage;
  let credit_event =
    "Dialogue: 0,0:00:00.00," +
    song_end +
    ",Credit,,0,0,0,,{\\fad(900,900)}" +
    document.credit;
  let head = [
    "[Script Info]",
    "ScriptType: v4.00+",
    "PlayResX: " + width,
    "PlayResY: " + height,
    "WrapStyle: 0",
    "ScaledBorderAndShadow: yes",
    "",
    "[V4+ Styles]",
    styles_format,
    lyric_style,
    passage_style,
    credit_style,
    "",
    "[Events]",
    "Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text",
    passage_event,
    credit_event,
  ];
  function line_timed_is(line) {
    let started = number_is(line.start);
    let ended = number_is(line.end);
    let r = started && ended;
    return r;
  }
  function line_event(line) {
    let event =
      "Dialogue: 0," +
      subtitles_time_text(line.start) +
      "," +
      subtitles_time_text(line.end) +
      ",Lyric,,0,0,0,,{\\fad(260,320)}" +
      line.text;
    return event;
  }
  let lines_heard = document.lines.filter(line_timed_is);
  let events = lines_heard.map(line_event);
  let written = head.concat(events).join("\n") + "\n";
  return written;
}
