export function app_shared_font_size_label() {
  "the size of a label set beside the thing being read - a little under the text around it so it reads as a note on what it names rather than as part of it";
  "Fourteen pixels is the floor a label may not go under, and this number is chosen to land exactly on it. Sixteen pixels is what a browser is set to out of the box, and seven eighths of that is fourteen.";
  "It was seven eighths of twenty before, which is seventeen, and it read as a note because the text around it was twenty. When the page root stopped overriding the reader's own browser size the text around it became sixteen, and this label came down with it to thirteen point six - under the floor, and nothing went red, because a proportion cannot tell what it will be a proportion OF.";
  "That is the lesson worth keeping rather than the number: a size written as a proportion moves whenever the thing it hangs off moves, so changing a base silently resizes everything measured against it. The ones that were already comfortable stay comfortable; the ones that were near a floor go under it.";
  let v = "0.875em";
  return v;
}
