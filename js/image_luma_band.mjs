export function image_luma_band(luma) {
  "how a measured brightness reads to somebody choosing a picture to sit behind gold words: the text to show and the colour to show it in; the bands are set where they are because a picture above about 150 goes on reading as a grey slab even at low opacity, and one below about 80 leaves the words their whole contrast";
  if (equal(luma, null)) {
    let unknown = {
      text: "?",
      colour: "#676767",
    };
    return unknown;
  }
  let number = String(luma);
  if (luma < 80) {
    let dark = {
      text: "dark " + number,
      colour: "#7ec97e",
    };
    return dark;
  }
  if (luma < 150) {
    let middling = {
      text: "mid " + number,
      colour: "#ffe994",
    };
    return middling;
  }
  let bright = {
    text: "bright " + number,
    colour: "#e08a8a",
  };
  return bright;
}
