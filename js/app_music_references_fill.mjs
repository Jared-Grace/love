export async function app_music_references_fill(asked_list) {
  "$plain asked_list";
  "Goes and gets the words of every passage the song has made a place for, and writes each into its own place as it arrives.";
  "A HANDFUL AT A TIME. A song rests on forty chapters or so, and asking for all of them at once on a phone is how a page stops answering; asking for them one after another is how it takes a minute. The limit is the middle of those two.";
  "A passage this bible does not hold leaves its place empty rather than saying so. The name of it is already on the screen as a link, so the reader still has the one thing they came for - somewhere to go - and a line of apology in the middle of a song would be the loudest thing on the page.";
  arguments_assert(arguments, 1);
  let folder = ebible_folder_english();
  async function lambda$fill(asked) {
    let text = await app_shared_bible_reference_text(folder, asked.reference);
    let unheld = null_is(text);
    if (unheld) {
      return;
    }
    html_text_set(asked.words, text);
  }
  await list_map_limited_async(asked_list, lambda$fill, 4);
}
