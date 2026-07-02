export function app_code_lesson_symbols_letters_batch() {
  function lambda2() {
    let verse =
      "For God so loved the world that He gave His one and only Son, that everyone who believes in Him shall not perish but have eternal life";
    let split = text_split_space(verse);
    let mappers = [text_letters_only, text_lower_to, text_split_empty];
    let mapped = list_map_multiple(split, mappers);
    return mapped;
  }}
