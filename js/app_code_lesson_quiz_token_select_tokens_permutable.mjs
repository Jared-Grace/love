export function app_code_lesson_quiz_token_select_tokens_permutable(code) {
  "The tiles of this line, without a closing semicolon, when there are few enough of them to try every ordering and enough of them to be a sentence at all - and nothing when there are not.";
  "Every ordering of the tiles is tried one by one, so the count of them decides the cost outright: seven tiles is five thousand orderings and eight is forty thousand. The cap is where that is declined rather than paid.";
  "Fewer than three tiles cannot make a sentence out of two sides and something between them, so there is nothing to rearrange.";
  let tokens = app_code_quiz_tokens(code);
  let semicolon = ";";
  let has_semicolon = list_last_is(tokens, semicolon);
  if (has_semicolon) {
    list_remove_last(tokens);
  }
  let size = list_size(tokens);
  let cap = 7;
  let too_big = greater_than(size, cap);
  if (too_big) {
    return null;
  }
  let too_small = less_than(size, 3);
  if (too_small) {
    return null;
  }
  return tokens;
}
