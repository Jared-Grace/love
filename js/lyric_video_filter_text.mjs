import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { add } from "./add.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { list_flat } from "./list_flat.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_add } from "./list_add.mjs";
export function lyric_video_filter_text(
  pictures,
  width,
  height,
  path_subtitles,
) {
  arguments_assert(arguments, 4);
  ("$plain pictures");
  ("$plain width");
  ("$plain height");
  ("$plain path_subtitles");
  ("The one instruction that turns the inputs of a lyric video into its finished frames: every picture fitted and laid over the black ground for the span it was given, and the words drawn last over all of it.");
  ("THE PICTURES GO OVER THE BLACK RATHER THAN INSTEAD OF IT, and that is what makes adding them safe. A video asked for no pictures is the same instruction with the middle left out, so it renders the video this always rendered; and a stretch of a song no picture was given renders black, which is the same frame it was before anybody thought of pictures. Nothing already timed can come back different, and that can be read off the instruction rather than being watched for.");
  ("EVERY PICTURE IS FITTED INSIDE THE FRAME AND NEVER CROPPED TO FILL IT. Filling means throwing away whatever hangs over the edge, and what hangs over the edge of a drawn symbol is usually the symbol. Fitting leaves a margin instead, and the margin costs nothing here because these pictures are drawn on black and the ground behind them is the same black - so the edge that fitting would ordinarily show is an edge between black and black, which is no edge.");
  ("EACH PICTURE IS CENTRED AND THE WORDS SIT AT THE MIDDLE TOO, ON PURPOSE. The words are what the video is for, so they take the part of the frame a person is already looking at; the picture is behind them and shares it. Putting the picture anywhere else would move it out from under the words and into the corner a thumb covers.");
  ("THE SPAN IS WRITTEN IN THE TOOL'S OWN QUOTES AND NOT THE SHELL'S. Saying when a picture is shown needs two numbers and therefore a comma, and a comma is exactly what divides one step of this instruction from the next - so written plainly the second number becomes the beginning of a step that does not exist, and the render fails naming a filter nobody wrote. The quotes around it are read by the tool itself and never by a shell, which is why they survive being handed over as one word and why nothing here should be escaped a second time on the way out.");
  ("THE STEPS ARE JOINED BY THEIR NUMBERS RATHER THAN BY A RUNNING NAME. Each picture lays itself over what the picture before it left, so there is an order and something has to carry it. Counting to it from the picture's own place in the list means nothing is remembered between steps, and a step can be read on its own and still say what it stands on.");
  ("The pictures begin at the third input because the black ground is the first and the song is the second, and the song is kept ahead of them so that its number never moves.");
  let dim = lyric_video_picture_dim();
  let dimmed =
    ",colorchannelmixer=rr=" + dim + ":gg=" + dim + ":bb=" + dim;
  let size = width + ":" + height;
  let ground = "[0:v]";
  function picture_steps(picture, index) {
    let first = equal(index, 0);
    let under = first ? ground : "[over" + subtract(index, 1) + "]";
    let source = "[" + add(index, 2) + ":v]";
    let fitted = "[fitted" + index + "]";
    let over = "[over" + index + "]";
    let fit =
      source +
      "scale=" +
      size +
      ":force_original_aspect_ratio=decrease" +
      dimmed +
      fitted;
    let shown = "enable='between(t," + picture.start + "," + picture.end + ")'";
    let lay = under + fitted + "overlay=x=(W-w)/2:y=(H-h)/2:" + shown + over;
    let steps_picture = [fit, lay];
    return steps_picture;
  }
  let nested = list_map_index(pictures, picture_steps);
  let steps = list_flat(nested);
  let none = list_empty_is(pictures);
  let topmost = none ? ground : "[over" + subtract(pictures.length, 1) + "]";
  let lettering = topmost + "ass=" + path_subtitles + "[out]";
  list_add(steps, lettering);
  let text = steps.join(";");
  return text;
}
