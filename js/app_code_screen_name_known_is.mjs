export function app_code_screen_name_known_is(screen_name) {
  "Whether a word standing where a screen goes in a link names a screen the code app has.";
  let names = app_code_screen_names();
  let known = list_includes(names, screen_name);
  return known;
}
