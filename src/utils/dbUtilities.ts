import { LimitOffsetParams, SortParam } from "../models/api";

export function parseSortParameters(sortParamStr: string): SortParam[] {
  const result: SortParam[] = [];

  const sortParams = sortParamStr.split(",");
  for (const sortParam of sortParams) {
    const parts = sortParam.split(" ");
    result.push({
      name: parts[0],
      direction: parts[1],
    });
  }

  return result;
}

export function buildOrderBySqlString(
  sortParams: SortParam[],
  sortPropertyMap: { [key: string]: string }
): string {
  if (sortParams.length === 0) return "";

  const sortParts: string[] = [];
  for (const sortParam of sortParams) {
    const mappedName = sortPropertyMap[sortParam.name];
    if (mappedName === undefined) {
      continue;
    }

    sortParts.push(`${mappedName} ${sortParam.direction}`);
  }

  if (sortParts.length === 0) return "";
  return `ORDER BY ${sortParts.join(",")}`;
}

export function buildOffsetLimitSqlString(
  limitOffset: LimitOffsetParams
): string {
  return `OFFSET ${limitOffset.offset} LIMIT ${limitOffset.limit}`;
}
