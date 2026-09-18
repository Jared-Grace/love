import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_lit_colours } from "./lyric_video_lit_colours.mjs";
import { property_get } from "./property_get.mjs";
export function lyric_video_line_lit_colour(line) {
  "$plain line";
  "The colour one sung line's words light to, spelled the way the renderer reads a colour: what the line asked for by name, and red where the line asked for nothing.";
  "★ A LINE THAT SAYS NOTHING GETS EXACTLY WHAT IT GOT BEFORE THIS EXISTED, WHICH IS WHAT MAKES THIS SAFE TO ADD. Every song already rendered and watched says nothing about colour on any of its lines, so every one of them renders red throughout and character for character the same file. Only a line somebody has written a colour beside changes at all.";
  "★ A NAME NOTHING ANSWERS TO IS REFUSED HERE RATHER THAN DRAWN. The alternative is a mistyped colour falling back to red, which looks exactly like a line nobody had got to yet - so the person who wrote it would watch the whole song, see red, and conclude the colour had not worked rather than that they had spelled it wrong.";
  arguments_assert(arguments, 1);
  let colours = lyric_video_lit_colours();
  let name = line.colour;
  if (not(name)) {
    let resting = colours.red;
    return resting;
  }
  let colour = property_get(colours, name);
  return colour;
}
