export function song_image_drawn_url(number) {
  "the address the drawn picture for a couplet can be fetched at while working locally";
  "the local server hands out the whole folder the repos sit in, so a picture deliberately kept out of git is still reachable by name - which is what lets it stay out of a history that is already too heavy and still be looked at in frame";
  let name = "couplet_" + String(number) + ".png";
  let url = "/love/gitignore/song_images/" + name;
  return url;
}
