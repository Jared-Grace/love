import { round } from "./round.mjs";
import { multiply } from "./multiply.mjs";
import { subtitles_time_text } from "./subtitles_time_text.mjs";
export function lyric_video_subtitles_text(document) {
  "$plain document";
  "The whole subtitle file of a lyric video, written out of one authored document: the reference that stands at the foot of every frame, how long the song runs, how big the frame is, and the lines with the moment each is sung.";
  "THE TIMES ARE AUTHORED, NOT WORKED OUT HERE. Where a sung line begins is heard, not derived - a singer holds a word, an instrument plays alone for eight bars, a verse is repeated and the printed text is not. Nothing about the words on the page says any of that, so a rule that placed them would be guessing at the one thing the video exists to get right. This packs what somebody heard; it never decides it.";
  "The words come from the translation unchanged, down to the couplet that begins in the lower case because it is the second half of a line. Repairing that capital would be correcting the poem to look like prose.";
  "Every line is one whole card rather than a word lit up at a time. A word-by-word sweep asks the reader to watch the screen; a card asks them to read it and then listen, which is what a psalm is for.";
  "The reference stands through the whole song in grey at the foot, small enough to be ignored and always there. It is the attribution the translation asks for, and it also answers the question a person arriving in the middle of a video actually has.";
  "The words sit at the middle of the frame rather than at the foot, because a phone is held with the lower part of the screen under a thumb and the middle is the part a person is already looking at.";
  let width = document.width;
  let height = document.height;
  let font_size = document.font_size;
  let n = multiply(font_size, 0.4);
  let reference_size = round(n);
  let styles_format =
    "Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding";
  let lyric_style =
    "Style: Lyric,Noto Sans," +
    font_size +
    ",&H00FFFFFF,&H00FFFFFF,&H00000000,&H00000000,-1,0,0,0,100,100,0,0,1,0,0,5,110,110,0,1";
  let reference_style =
    "Style: Ref,Noto Sans," +
    reference_size +
    ",&H00787878,&H00787878,&H00000000,&H00000000,0,0,0,0,100,100,2,0,1,0,0,2,110,110,140,1";
  let reference_event =
    "Dialogue: 0,0:00:00.00," +
    subtitles_time_text(document.duration) +
    ",Ref,,0,0,0,,{\\fad(900,900)}" +
    document.reference;
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
    reference_style,
    "",
    "[Events]",
    "Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text",
    reference_event,
  ];
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
  let events = document.lines.map(line_event);
  let written = head.concat(events).join("\n") + "\n";
  return written;
}
