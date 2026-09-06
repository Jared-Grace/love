import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_outline_width } from "./lyric_video_outline_width.mjs";
import { lyric_video_shadow_width } from "./lyric_video_shadow_width.mjs";
export function lyric_video_subtitles_style_line(
  name,
  font_size,
  colour,
  bold,
  spacing,
  alignment,
  sides,
  margin,
) {
  arguments_assert(arguments, 8);
  ("$plain name");
  ("$plain font_size");
  ("$plain colour");
  ("$plain bold");
  ("$plain spacing");
  ("$plain alignment");
  ("$plain sides");
  ("$plain margin");
  ("Writes one Style line of a subtitle file: the named lettering a Dialogue line later asks for by that name.");
  ("★ THE BORDER AND THE SHADOW ARE NOT ASKED FOR, THEY ARE WORKED OUT FROM THE SIZE, so a lettering size can be changed anywhere without anyone remembering that two more numbers move with it. They were spelled out three times before this function existed, and three sizes each needing two derived numbers is six chances to change one and leave the other behind. Everything a reader would actually choose differently for one style than another is a parameter; everything that follows from a choice already made is not.");
  ("★ THE FIRST AND SECOND COLOURS ARE DELIBERATELY THE SAME WORD. The second is what karaoke sweeps a line to as it is sung, and nothing here sweeps: the lines are shown and hidden whole. Passing one colour and writing it twice says that on the face of it, where two parameters holding equal values would only invite someone to make them differ.");
  ("The back colour is the shade behind the lettering, and it is the same soft black for every style because it is not a choice about the style, it is how a subtitle stays readable over any picture.");
  ("The unnamed numbers are the fixed part of the format: no italic, no underline, no strikeout, full width and height, no angle, and an outlined border rather than a filled box. They are the same for every style here, so they are written once rather than handed in.");
  let shade = "&H64000000";
  let start = "Style: " + name + ",Noto Sans," + font_size + ",";
  let colours = colour + "," + colour + ",&H00000000," + shade + ",";
  let flags = bold + ",0,0,0,100,100," + spacing + ",0,1,";
  let outline = lyric_video_outline_width(font_size);
  let shadow = lyric_video_shadow_width(font_size);
  let border = outline + "," + shadow + ",";
  let place = alignment + "," + sides + "," + margin + ",1";
  let line = start + colours + flags + border + place;
  return line;
}
