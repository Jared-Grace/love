export function probe_fold_helper(root, count, total, name) {
  let a = add_1(count);
  let s = text_combine_multiple([name, " ", a, " out of ", total]);
  let caption = text_first_upper_to(s);
  let text_div = html_div_text_centered(root, caption);
  let value = html_progress_caption_font_size();
  html_style_font_size(text_div, value);
  return text_div;
}
