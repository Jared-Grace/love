import { ebible_books_engbsb } from "./ebible_books_engbsb.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_random_item } from "./list_random_item.mjs";
export function bible_book_testament_new_random() {
  "One book of the New Testament picked at random, as its book code.";
  "The New Testament is every book from Matthew on, in the order the bible keeps them.";
  let books = ebible_books_engbsb();
  let codes = list_map_property(books, "book_code");
  let at = list_index_of(codes, "MAT");
  let testament_new = codes.slice(at);
  let code = list_random_item(testament_new);
  return code;
}
