import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_subtitles_style_line } from "./lyric_video_subtitles_style_line.mjs";
export function lyric_video_subtitles_styles(sizes, room) {
  arguments_assert(arguments, 2);
  ("$plain sizes");
  ("$plain room");
  ("Writes the whole styles section of a subtitle file: the format line that names the fields, then one line for each of the three kinds of lettering a lyric video shows.");
  ("★ THE THREE STYLES ARE HELD TOGETHER IN ONE PLACE BECAUSE THE FORMAT LINE ABOVE THEM DECIDES WHAT EVERY ONE OF THEM MEANS. A Style line is positional: its fields carry no names, and the only thing saying which number is the outline and which is the shadow is the Format line sitting above. Split them apart and a field could be added to one without the line that describes it moving, which reads as a working file and draws nonsense.");
  ("The lyric is white, bold, placed rather than aligned, and so takes no vertical margin of its own; the passage and the credit are two quieter greys sitting at the foot of the screen, each at the height the screen room worked out for it. Those greys are two different words on purpose: the passage is the thing a reader may want to look up and the credit is the thing they are only owed, so the credit is the fainter of the two.");
  ("The room is handed in rather than asked for here, because the same reckoning also places the lyric in the middle of the screen and it must be the one reckoning, not two that could drift.");
  let font_size = sizes.font_size;
  let passage_size = sizes.passage_font_size;
  let credit_size = sizes.credit_font_size;
  let side_margin = room.side_margin;
  let sides = side_margin + "," + side_margin;
  let format =
    "Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding";
  let lyric = lyric_video_subtitles_style_line(
    "Lyric",
    font_size,
    "&H00FFFFFF",
    -1,
    0,
    5,
    sides,
    0,
  );
  let passage = lyric_video_subtitles_style_line(
    "Passage",
    passage_size,
    "&H00B4B4B4",
    0,
    2,
    2,
    sides,
    room.passage_margin,
  );
  let credit = lyric_video_subtitles_style_line(
    "Credit",
    credit_size,
    "&H00828282",
    0,
    2,
    2,
    sides,
    room.credit_margin,
  );
  let lines = [format, lyric, passage, credit];
  return lines;
}
