import { atom } from "recoil";
import { books } from "../types/types";

// Atoms
export const loadingState = atom<boolean>({
  key: "loadingState",
  default: true,
});

export const errorState = atom<boolean>({
  key: "errorState",
  default: false,
});

export const booksState = atom<books | []>({
  key: "booksState",
  default: [],
});

export const hasMoreState = atom<boolean>({
  key: "hasMoreState",
  default: false,
});

export const pageNumberState = atom<number>({
  key: "pageNumberState",
  default: 1,
});
