import { list_get } from "./list_get.mjs";
import { list_get_end } from "./list_get_end.mjs";
import { list_index_last } from "./list_index_last.mjs";

export function list_last( list ){return list_get_end(list,0)}