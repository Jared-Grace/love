import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
export function bible_word_article_bodies_folder() {
  "The folder on this machine holding the words of every article fetched from every site, one file per article, under a folder per site.";
  "IT IS GITIGNORED ON PURPOSE: this repo is public and the articles are other people's writing. Only what is worked out from them - which verse cites which article - is ever published.";
  let folder = folder_gitignore_join("bible_word_article_bodies");
  return folder;
}
