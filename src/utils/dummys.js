import { ELEMENTS_BY_PAGE } from "./contants"

export const omdPaginationCalculator = (total) => {
  return (total/ELEMENTS_BY_PAGE).toFixed(0)
}