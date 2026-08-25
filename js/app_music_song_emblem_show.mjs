import { html_width_full } from "./html_width_full.mjs";
import { html_display_block } from "./html_display_block.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_kept_url } from "./song_image_kept_url.mjs";
import { song_image_couplet_get } from "./song_image_couplet_get.mjs";
import { song_image_couplet_symbol_references } from "./song_image_couplet_symbol_references.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { html_img } from "./html_img.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { app_music_song_line_show } from "./app_music_song_line_show.mjs";
import { equal } from "./equal.mjs";
export function app_music_song_emblem_show(folds, parent, n, caption) {
  "$plain n";
  "$plain caption";
  "The picture drawn for one line of this hymn, with the passages that picture rests on folded behind it.";
  "THE PICTURE ANSWERS TO SCRIPTURE IN ITS OWN RIGHT, which is why it carries its own passages rather than borrowing the ones under the words. A reader who wonders why a broken fetter is standing beside this line can be told, in the words of the passage it was drawn from, without leaving the page.";
  "IT IS DRAWN AS WIDE AS THE READER'S PAGE ALLOWS. These are single shapes on black glass, made large on purpose so somebody whose eyes no longer read small things can see what they are, and shrinking one to sit politely beside the words would undo the one thing the drawing was for.";
  "The description the picture was drawn from is what a reader who cannot see it is given instead. It is already a plain account of the shape, written before the picture existed, so there is nothing to compose - and nothing else on the page says what is in the window.";
  "A line whose picture nobody has settled on yet is passed over in silence rather than left as a gap where a picture failed to load.";
  "EACH PICTURE IS FETCHED ONLY WHEN THE READER IS NEARLY AT IT. A hymn of thirty-six lines is thirty-six pictures, and asked for all at once on a phone they arrive together and therefore slowly - the person this was drawn for watched them fill in downwards a line at a time, which is what a browser does when every picture is sharing the one connection. Asked for one at a time as the page is scrolled, the first is alone and arrives at once, and every later one has the whole time the reader spends on the line above it.";
  "DECODING IS LEFT TO ITS OWN TIME for the same reason. Turning a picture back into an image is work, and done in the middle of everything else it stops the page moving while it happens - which on a page that is meant to be scrolled slowly through is felt as the scroll catching rather than as a picture appearing.";
  "It hands back the places waiting for words, the same way one sung line does, because the page fetches every passage on it in one go.";
  "WHAT TO CALL THE CARD IS DECIDED BY THE CALLER, because only the caller knows whether this picture has a neighbour. A line sung once has one picture and can simply say this picture; a line sung twice has two, one under the other, and two cards both saying this picture tell a reader who cannot see them apart nothing at all about which is which.";
  arguments_assert(arguments, 4);
  let url = song_image_kept_url(n);
  let unchosen = equal(url, "");
  if (unchosen) {
    let none = [];
    return none;
  }
  let couplet = song_image_couplet_get(n);
  let picture = html_img(parent, url);
  html_attribute_set(picture, "alt", couplet.symbol);
  html_img_lazy_full_block(picture);
  html_style_margin_top(picture, "12px");
  let references = song_image_couplet_symbol_references(n);
  let unreferenced = list_empty_is(references);
  if (unreferenced) {
    let none = [];
    return none;
  }
  let shown = app_music_song_line_show(folds, parent, caption, references);
  let r = shown.asked_list;
  return r;
}
