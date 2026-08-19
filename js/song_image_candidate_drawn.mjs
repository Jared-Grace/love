import { song_image_drawn_url } from "./song_image_drawn_url.mjs";
export function song_image_candidate_drawn(number) {
  "the drawn picture for a couplet, dressed as one more candidate, so that it is looked at and decided on beside the found ones rather than in a place of its own";
  "it carries where to fetch it from, which is the one thing that tells it apart from a found candidate - those are named on Wikimedia Commons and their address is worked out from the name, and this one has an address of its own";
  "the licence says who made it because that is the question asked of every other row, and the honest answer for this one is that it was drawn for this song and belongs to it";
  let candidate = {
    title: "drawn for this song",
    licence: "made here",
    src: song_image_drawn_url(number),
  };
  return candidate;
}
