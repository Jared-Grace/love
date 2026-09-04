import { lyric_video_picture_style } from "./lyric_video_picture_style.mjs";
import { list_concat_single } from "./list_concat_single.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
export function lyric_video_picture_prompt(scene) {
  "$plain scene";
  "The wording to hand an image generator for one picture of a lyric video: what this picture shows, followed by the look every picture in every one of these videos shares.";
  "THE SCENE LEADS AND THE LOOK FOLLOWS, because the look is the same for all of them and lives in one place of its own. What is particular to a picture is only the first few words, which is also what makes a scene worth reading on its own in the document that holds it.";
  "★ THE SCENE IS AUTHORED AND THE SUNG LINES ARE NEVER HANDED OVER. It would be easy to pass the lines a picture stands behind and let the drawing decide what they are about, and it would be wrong twice. Words in a prompt are the surest way there is to get words drawn into a picture, against the clause in the look that forbids exactly that. And a psalm addresses God directly - praise Him, He gave the command - so a line handed over is a line asking for a figure to praise and a figure to command, which is the one thing these pictures must not show. Somebody reads the lines, decides what created thing they call on, and writes that down; the drawing is given the answer and never the working.";
  "A picture is therefore arguable by reading one short sentence, without opening the picture or the psalm. That is the point of keeping the scene in the document rather than in the wording of a command: a wording typed at a command line is a wording nothing else can see, and the picture would then say something no reader could check.";
  let style = lyric_video_picture_style();
  let parts = list_concat_single(scene, style);
  let prompt = list_join_comma_space(parts);
  return prompt;
}
