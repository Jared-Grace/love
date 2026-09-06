export function lyric_video_picture_negative() {
  "The words handed to a drawing as the thing to steer away from, for the models that can be told such a thing at all.";
  "★ THIS IS NOT THE SAME MECHANISM AS A REFUSAL WRITTEN INSIDE THE PROMPT, AND THAT IS THE WHOLE REASON IT EXISTS. A `no text` clause in the prompt is read as words like any other and puts the forbidden thing in front of the drawing; a negative prompt is a second pass the drawing is pushed away from, and it never appears in the reading of what to paint. So the rule that a refusal summons what it refuses is about prompt wording, and says nothing about this.";
  "★ IT ONLY WORKS WHERE THE DRAWING STILL DOES THE TWO PASSES. A model distilled down to a handful of steps drops classifier-free guidance, and with it the second pass this is carried in - so a turbo model accepts these words and quietly ignores them, or refuses the parameter outright. Measured 2026-09-06: Z-Image Turbo takes no negative prompt at all, while Z-Image Base takes one and keeps full guidance. A model that cannot be told this is a model that has to be judged on its prompt alone.";
  "The words are kept short and name only the marks a lyric video cannot carry. A long list steers the picture as a whole, and what is wanted here is a picture unchanged in every other way.";
  let negative_prompt =
    "text, lettering, letters, words, writing, caption, subtitle, title, watermark, signature, logo, numbers, border, frame, vignette";
  return negative_prompt;
}
