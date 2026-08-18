export function bible_glyph_artwork_source() {
  "Where the drawn artwork for this picture Bible comes from, under what licence, and how one glyph's file is addressed.";
  "The glyph vocabulary stores a font CHARACTER as each glyph's default, and says in its own prose that the character is only a default because a drawn file could replace it. This is that file set, recorded before anything downloads any of it, because the licence is the part that decides whether the plan is allowed at all and it costs nothing to settle first.";
  "THE LICENCE WAS READ AT SOURCE and not taken from a summary. The repository carries one LICENSE file at its root, it is the MIT licence, and the copyright line reads Copyright (c) Microsoft Corporation. There is no separate or narrower licence file under the assets folder, so the artwork is covered by the same grant as the code: use, copy, modify, publish and distribute, provided the copyright notice and the permission notice travel with it.";
  "THE NOTICE MUST TRAVEL, and that is the one obligation this project takes on by using these files. MIT is permissive about what may be done and strict about attribution, so shipping the artwork means shipping the notice with it. That is a requirement on this repo rather than a warning about a risk.";
  "A GLYPH'S FILE IS DERIVED, never listed. The address is the assets folder, then the emoji's name in words, then the style, then the file named for the same two joined by an underscore - so the flat fire is assets slash Fire slash Flat slash fire underscore flat dot svg. Storing a list of file paths instead would be a second copy of a naming rule that already exists, and it would go stale the first time the set grows.";
  "FLAT IS THE STYLE TO TAKE of the four offered. Three-D is a rendered image with lighting, Color is the detailed flat drawing, High Contrast is a single-colour outline, and Flat is the plain filled shape. Flat is chosen because a glyph in this Bible is read at the size of a word in a line of text, and at that size the lighting and the fine detail are noise that costs bytes - the flat fire is six hundred and sixty bytes.";
  let source = {
    name: "Fluent Emoji",
    owner: "Microsoft Corporation",
    licence: "MIT",
    repository: "https://github.com/microsoft/fluentui-emoji",
    licence_url:
      "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/LICENSE",
    assets_url:
      "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets",
    tree_url:
      "https://api.github.com/repos/microsoft/fluentui-emoji/git/trees/main",
    style: "Flat",
  };
  return source;
}
