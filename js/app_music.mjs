export async function app_music(context) {
  "The page the songs' words live on: the song the address names, or the list of songs when it names none.";
  "IT EXISTS BECAUSE A DESCRIPTION UNDER A SONG CANNOT HOLD ALL OF THIS. What a video can carry is capped, and the passages a song rests on written out run past that cap several times over - so the description names them and this page holds them, and the link between the two is what keeps a named reference from being a dead end.";
  "It borrows the reading column the bible pages stand in rather than dressing itself, because it is the same thing: a page of words somebody is going to read on a phone.";
  arguments_assert(arguments, 1);
  html_reload_on_hash_change();
  let content = app_shared_reading_column(context);
  let name = html_hash_name_get();
  let song = app_music_song_named(name);
  let unnamed = null_is(song);
  if (unnamed) {
    app_music_songs_show(content);
    app_shared_footer(content);
    return;
  }
  html_div_text_bold(content, song.title);
  app_music_home_button(content);
  await song.show(content);
  app_music_home_button(content);
  app_shared_footer(content);
}
