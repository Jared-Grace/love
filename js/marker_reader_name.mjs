export function marker_reader_name(marker) {
  "The function a mark is named after - the mark's own name with the word it claims taken off the end.";
  "This is the whole of the convention, and the reason a mark is worth writing. A stranger meeting one in a body has nowhere else to ask what it means, so the name has to carry the answer: take off the last word and open what is left.";
  let underscore = "_";
  let cut = text_index_of_last(marker, underscore);
  let reader = text_slice(marker, 0, cut);
  return reader;
}
