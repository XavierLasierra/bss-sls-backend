import { Order } from "sequelize/dist";

export function parseSortParameters(sortParamStr: string): Order {
  const sortParams = sortParamStr.split(",");
  return sortParams.map((sortParam) => {
    const [name, direction] = sortParam.split(" ");
    return [name, direction.toUpperCase()];
  });
}
