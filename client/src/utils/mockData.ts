import { DetailItemModel } from "@/interfaces/DetailItemProps";
import { faker } from "@faker-js/faker";

export function createDetailItemData(level = 0): DetailItemModel[] {
  const detailItemData: DetailItemModel[] = [];

  if (level === 3) return [];
  for (let i = 0; i < 10; i++) {
    detailItemData.push({
      _id: faker.datatype.uuid(),
      children: createDetailItemData(level + 1),
    });
  }

  return detailItemData;
}
