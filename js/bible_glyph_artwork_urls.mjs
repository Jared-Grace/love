export function bible_glyph_artwork_urls(asset_name) {
  "Every address one glyph's drawn file could be at, in the order they are worth asking.";
  "$plain asset_name";
  "the name is the artwork set's own folder name for one emoji, such as Red heart. It names a file to fetch and nothing that runs.";
  "THE SET KEEPS TWO SHAPES, not one, and which shape an emoji is kept in is decided by whether that emoji can be drawn in different skin tones. A thing has one drawing and sits directly under its style; a person, a hand or an ear has one drawing per tone and sits under a tone folder first, with the tone's name added to the file as well. That is the set's own arrangement rather than a choice made here.";
  "SO THE SHAPE IS TRIED RATHER THAN LOOKED UP. Which emoji carry a tone is a fact about Unicode that this repo would otherwise have to keep a second copy of, and a copy that would go stale as the set grows; asking for two addresses instead costs one extra request only for the ones that carry a tone, and it can never disagree with the set.";
  "THE DEFAULT TONE IS THE ONE TAKEN. It is the yellow drawing, the same one a font shows for a person with no tone chosen, so a page of glyphs stays a page of drawings rather than a page that has quietly cast every person in a particular skin.";
  arguments_assert(arguments, 1);
  let plain = bible_glyph_artwork_url(asset_name);
  let toned = bible_glyph_artwork_url_default_tone(asset_name);
  let urls = [plain, toned];
  return urls;
}
