export function bible_glyph_artwork_composed() {
  "The glyphs the artwork set has no single picture for, each drawn instead as several of the set's own pictures standing together.";
  "THE DRAWN BIBLE AND THE EMOJI BIBLE ARE SEPARATE PRODUCTS. The emoji text keeps whatever character the font has, two men holding hands for brother; the drawn text owes the reader a picture in the set's own hand, and where the set draws one person but never two, two of its people side by side are that picture.";
  "THE ORDER IS THE ORDER THEY STAND IN, left to right.";
  let composed = [
    {
      glyph: "brother",
      assets: ["Boy", "Boy"],
    },
    {
      glyph: "sister",
      assets: ["Girl", "Girl"],
    },
    {
      glyph: "family",
      assets: ["Man", "Woman", "Boy"],
    },
  ];
  return composed;
}
