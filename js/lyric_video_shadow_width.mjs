import { arguments_assert } from "./arguments_assert.mjs";
import { multiply_round } from "./multiply_round.mjs";
export function lyric_video_shadow_width(font_size) {
  arguments_assert(arguments, 1);
  ("$plain font_size");
  ("How far to throw a soft black shadow behind lettering of a given size, so that the lettering keeps its shape against a picture that is exactly as bright as it is.");
  ("★ THIS IS WHAT LETS THE PICTURES BE SHOWN AT THEIR OWN BRIGHTNESS. Every picture used to be halved on its way into the frame, and that halving was the readability guarantee: whatever a picture turned out to be, it arrived dark enough for white lettering to stand off it. It also turned every painting into a night scene, which is not what any of them are. The guarantee had to go somewhere before the halving could go, and here is the place - a shadow is a property of the lettering, so it holds for a picture nobody has looked at yet, which is the same thing the halving was doing and the whole of why it was there.");
  ("A SHADOW AND A BORDER ARE NOT THE SAME GUARD AND NEITHER REPLACES THE OTHER. The border is a hard rim one stroke wide: it wins the fine edge, where a letter meets what is behind it. It wins nothing at all against a bright field a whole letter wide, because a white stroke inside a black rim on a white cloud is still a white stroke - the rim outlines it and the eye reads the outline as part of the cloud. The shadow is the broad guard: it darkens a soft area behind the whole letter, so the letter has its own ground rather than borrowing the picture's. Together they are what the halving used to do on its own.");
  ("IT IS WORKED OUT FROM THE LETTERING RATHER THAN AUTHORED, for the reason the border is. It is not an opinion about who is reading; it is a fact about the letters it stands behind, and a throw that reads as depth under the psalm would be a blur under the translation.");
  ("Five parts in a hundred - a little narrower than the border, so the shadow reads as the letter's own ground rather than as a second outline drawn badly, and wide enough at every size a document has asked for to be a soft area rather than a line.");
  let width = multiply_round(font_size, 0.05);
  return width;
}
