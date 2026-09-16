import { math_max } from "./math_max.mjs";
import { lyric_video_frames_per_second } from "./lyric_video_frames_per_second.mjs";
import { lyric_video_picture_fade_seconds } from "./lyric_video_picture_fade_seconds.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_lead_seconds } from "./lyric_video_lead_seconds.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { add } from "./add.mjs";
import { lyric_video_picture_light_text } from "./lyric_video_picture_light_text.mjs";
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
  ("★ EVERY PICTURE IS SHOWN AT ITS OWN BRIGHTNESS, AND THAT IS A CHANGE FROM WHAT THIS USED TO DO. Every picture used to be halved on its way in, because the words are white and a picture can come back with a shaft of white light down the middle of the frame - the first one drawn did exactly that. Halving guaranteed the words could be read whatever the picture turned out to be, and it also turned every painting into a night scene: a lit cloud went grey, a sunrise went brown, and the thing the picture was of stopped being visible. The guarantee was worth keeping and the halving was not, so the guarantee moved onto the lettering, where a black border and a black shadow are drawn from the lettering's own size and hold against any picture at all.");
  ("★ A PICTURE MAY STILL BE LIFTED, BUT ONLY WHERE THE DOCUMENT SAYS SO, AND THAT IS NOT THE THING THAT WAS REMOVED. What was removed was one number standing in for a guarantee on every picture there is; what is here is somebody having looked at one painting, found it flatter or darker than the scene it was given, and written that down beside it. It is the same distinction the scene itself keeps - what is true of all these pictures is said once and elsewhere, and what is true of one of them lives with that one. A picture the document is silent about is passed through with nothing done to it at all.");
  ("★ EVERY PICTURE COMES UP THE SAME MOMENT EARLY THE WORDS DO, AND ONLY ITS BEGINNING IS MOVED. Each card is put on the screen a fraction before the line it holds is sung, so that somebody has time to take the line in; a picture left standing on the sung moment therefore arrives after the words it belongs to, and what a watcher sees is the drawing changing late against words that changed correctly. That was watched and reported rather than reasoned about. Only the beginning is pulled back because the pictures are laid one over the next in the order they are given - a picture whose end stays where it was is simply covered by the one that follows at the moment that one begins. So the change happens early, the run stays unbroken with no black between two pictures, and the last picture still reaches the end of the song instead of letting go a fraction before it.");
  ("★ THE EARLY MOMENT IS NOT LET BACK PAST THE START OF THE SONG. The first picture of a song usually begins on its first note, so reaching back by the lead asks for a moment before the song has begun - and while the instruction that decides when a picture is shown reads that as simply always, the one that fades a picture in refuses it outright and the whole render stops before a frame is drawn. It is pulled up to the start here because this is where the moment is spelled out, and a moment is only ever allowed or disallowed by whatever has to read it.");
  ("★ A PICTURE COMES UP THROUGH THE ONE BEFORE IT RATHER THAN REPLACING IT AT A STROKE. Laid straight on, a picture arrives whole on a single frame, and what a watcher sees at every change is a jolt that has nothing to do with the song. Instead the arriving picture is brought up from nothing while the one before it is still underneath at full strength, so for that moment both are seen at once, less of the old and more of the new. Only the arriving one is faded, and that is what makes one number enough: taking the old one down as well would empty both in the middle of the crossing and show the black ground through the gap.");
  ("★ THE FADE IS WHY A PICTURE IS BROUGHT UP TO THE RATE OF THE VIDEO, AND WHY THE ONE BEFORE IT IS HELD ON PAST ITS END. A still is handed over one frame a second because fitting it is the expensive part and a still has nothing to say between frames - but a fade has something different to say on every frame, and asked of a stream carrying one a second it can only step once a second, which is a flicker rather than a fade. The frames are therefore multiplied after the fitting and never before, so what the slow handing over bought is untouched. And the lead already leaves two neighbours on the screen together, but only for as long as the lead is: a fade longer than that would run out of anything to cross from and come up out of black, so every picture is held past its end by the difference. What is held is wholly covered by the time the fade is done, so nothing is shown that was not shown before.");
  ("EACH PICTURE IS CENTRED AND THE WORDS SIT AT THE MIDDLE TOO, ON PURPOSE. The words are what the video is for, so they take the part of the frame a person is already looking at; the picture is behind them and shares it. Putting the picture anywhere else would move it out from under the words and into the corner a thumb covers.");
  ("THE SPAN IS WRITTEN IN THE TOOL'S OWN QUOTES AND NOT THE SHELL'S. Saying when a picture is shown needs two numbers and therefore a comma, and a comma is exactly what divides one step of this instruction from the next - so written plainly the second number becomes the beginning of a step that does not exist, and the render fails naming a filter nobody wrote. The quotes around it are read by the tool itself and never by a shell, which is why they survive being handed over as one word and why nothing here should be escaped a second time on the way out.");
  ("THE STEPS ARE JOINED BY THEIR NUMBERS RATHER THAN BY A RUNNING NAME. Each picture lays itself over what the picture before it left, so there is an order and something has to carry it. Counting to it from the picture's own place in the list means nothing is remembered between steps, and a step can be read on its own and still say what it stands on.");
  ("The pictures begin at the third input because the black ground is the first and the song is the second, and the song is kept ahead of them so that its number never moves.");
  let size = width + ":" + height;
  let ground = "[0:v]";
  let lead = lyric_video_lead_seconds();
  function picture_steps(picture, index) {
    let first = equal(index, 0);
    let early = subtract(picture.start, lead);
    let ahead = math_max(early, 0);
    let rate = lyric_video_frames_per_second();
    let span = lyric_video_picture_fade_seconds();
    let crossed = add(ahead, span);
    let rising =
      ",format=yuva420p,fps=" +
      rate +
      ",fade=t=in:st=" +
      ahead +
      ":d=" +
      span +
      ":alpha=1:enable='between(t," +
      ahead +
      "," +
      crossed +
      ")'";
    let under = first ? ground : "[over" + subtract(index, 1) + "]";
    let source = "[" + add(index, 2) + ":v]";
    let fitted = "[fitted" + index + "]";
    let over = "[over" + index + "]";
    let lit = lyric_video_picture_light_text(picture);
    let fit =
      source +
      "scale=" +
      size +
      ":force_original_aspect_ratio=decrease" +
      lit +
      rising +
      fitted;
    let right = subtract(span, lead);
    let held = add(picture.end, right);
    let shown = "enable='between(t," + ahead + "," + held + ")'";
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
