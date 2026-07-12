export function text_letters_is(str) {
  let r = /^[A-Za-z]+$/;
  let li = r.test(str);
  return li;
}
