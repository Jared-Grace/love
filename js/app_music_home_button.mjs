export function app_music_home_button(parent) {
  "The way back from a song to the list of songs.";
  "It is the page's own home and not the way out to the other apps, which stands at the foot of every page here already. A song runs long enough that a reader who wants a different one should not have to scroll to find that out.";
  arguments_assert(arguments, 1);
  let text = app_shared_button_home_text();
  function lambda$home() {
    let none = "";
    html_hash_name_reload(none);
  }
  let button = app_shared_button_wide(parent, text, lambda$home);
  return button;
}
