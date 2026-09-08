import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_subtitles_style_line } from "./lyric_video_subtitles_style_line.mjs";
export function lyric_video_subtitles_styles(sizes, room) {
  arguments_assert(arguments, 2);
  ("$plain sizes");
  ("$plain room");
  ("Writes the whole styles section of a subtitle file: the format line that names the fields, then one line for each of the three kinds of lettering a lyric video shows.");
  ("★ THE THREE STYLES ARE HELD TOGETHER IN ONE PLACE BECAUSE THE FORMAT LINE ABOVE THEM DECIDES WHAT EVERY ONE OF THEM MEANS. A Style line is positional: its fields carry no names, and the only thing saying which number is the outline and which is the shadow is the Format line sitting above. Split them apart and a field could be added to one without the line that describes it moving, which reads as a working file and draws nonsense.");
  ("The lyric is white, bold, placed rather than aligned, and so takes no vertical margin of its own; the passage and the credit stand at the foot of the screen, each at the height the screen room worked out for it. The two are still a step apart from each other on purpose - the passage is the thing a reader may want to look up and the credit is the thing they are only owed, so the credit stays the fainter of the two.");
  ("★ THE TWO AT THE FOOT USED TO BE MUCH DARKER GREYS AND WERE RAISED BECAUSE THEY COULD NOT BE READ. They were chosen against a black frame, where a middling grey is already well clear of its ground; the moment a painting stood behind them the same grey was sitting on paint of about its own lightness and disappeared into it. What tells a reader which psalm they have arrived in the middle of has to survive whatever picture happens to be behind it, so both were lifted towards white and the step between them was kept.");
  ("The room is handed in rather than asked for here, because the same reckoning also places the lyric in the middle of the screen and it must be the one reckoning, not two that could drift.");
  let font_size = sizes.font_size;
  let passage_size = sizes.passage_font_size;
  let credit_size = sizes.credit_font_size;
  let side_margin = room.side_margin;
  let sides = side_margin + "," + side_margin;
  let format =
    "Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding";
  let lyric = lyric_video_subtitles_style_line({
    name: "Lyric",
    font_size,
    colour: "&H00FFFFFF",
    bold: -1,
    spacing: 0,
    alignment: 5,
    sides,
    margin: 0,
  });
  let passage = lyric_video_subtitles_style_line({
    name: "Passage",
    font_size: passage_size,
    colour: "&H00F0F0F0",
    bold: 0,
    spacing: 2,
    alignment: 2,
    sides,
    margin: room.passage_margin,
  });
  let credit = lyric_video_subtitles_style_line({
    name: "Credit",
    font_size: credit_size,
    colour: "&H00C8C8C8",
    bold: 0,
    spacing: 2,
    alignment: 2,
    sides,
    margin: room.credit_margin,
  });
  let lines = [format, lyric, passage, credit];
  return lines;
}
