import { arguments_assert } from "./arguments_assert.mjs";
export function firebase_storage_list_url_cases() {
  "Page tokens a bucket really hands back, and whether the address built around one still carries that token unchanged.";
  "Every token here expects to survive, because there is no character a token is allowed to arrive as something else. The one case answering no is the absence of a token altogether: nothing asks for the FIRST page, and a first-page address carries no such field to read back at all. That case is what proves the reading is looking at the address rather than handing back the token it was given.";
  "The tokens are base64, because that is what the bucket sends. Base64's alphabet holds a plus and a slash, and it pads with equals - all three already mean something where the token is being put, so all three are written down here beside a plain one.";
  "Found by a listing of one bible's chapters that refused on its SECOND page. The first page needs no token at all, so nothing was wrong with it, and a prefix holding fewer files than one page would never have shown the fault at all.";
  arguments_assert(arguments, 0);
  let cases = [
    {
      page_token: "YmlibGUvZ3V6LzFDSDEyLmpzb24",
      survives: true,
      why: "a token of plain letters, which worked before and must keep working",
    },
    {
      page_token: "YmlibGUvZ3V6LzFDSDEyL+KFqeKFoy5qc29u",
      survives: true,
      why: "the real token that broke the listing - a plus already means a space in a query, so the far end saw a space and refused the whole request",
    },
    {
      page_token: "YmlibGUvZ3V6L/KFqeKFoy5qc29u",
      survives: true,
      why: "base64 spells a slash too, which reads as another step of a path rather than as part of a word",
    },
    {
      page_token: "YmlibGUvZ3V6LzFDSDEy==",
      survives: true,
      why: "the padding, which reads as the end of one query field and the start of the next",
    },
    {
      page_token: "YmlibGUvZ3V6&maxResults=1",
      survives: true,
      why: "an ampersand, which would otherwise let a token add a field of its own to the address it is being put in",
    },
    {
      page_token: null,
      survives: false,
      why: "no token at all asks for the first page, so the address carries no token field and there is nothing to read back",
    },
  ];
  return cases;
}
