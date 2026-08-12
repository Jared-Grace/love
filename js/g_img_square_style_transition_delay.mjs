export function g_img_square_style_transition_delay(tile, seconds) {
  "hold a square still for a moment before it slides to where it has been put, so several squares given the same instruction do not all set off together.";
  "It has to be written AFTER the position, never before. Positioning writes the whole `transition` in one word, and writing that word sets every part of it - including the wait - back to nothing. So a delay set first is silently erased by the very move it was meant to stagger.";
  let value = text_combine(seconds, "s");
  html_style_assign(tile, {
    transitionDelay: value,
  });
}
