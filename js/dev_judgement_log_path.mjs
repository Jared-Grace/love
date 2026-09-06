import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
export function dev_judgement_log_path() {
  "Where a judgement a person made on a /dev/ page is written down. In the ignored folder: it is a record of what one person heard or saw on one machine while testing, not shared history.";
  let name = "dev_judgements.jsonl";
  let f_path = folder_gitignore_join(name);
  return f_path;
}
