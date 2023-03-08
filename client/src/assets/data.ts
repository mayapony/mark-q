import { DetailItemModel } from "@/interfaces/DetailItemProps";

export function getDetailDatas() {
  const datas: DetailItemModel[] = [
    {
      type: "汉字",
      level: 0,
      children: [
        {
          type: "汉字",
          level: 1,
          children: [],
        },
        {
          type: "汉字",
          level: 1,
          children: [],
        },
        {
          type: "汉字",
          level: 1,
          children: [],
        },
        {
          type: "汉字",
          level: 1,
          children: [],
        },
        {
          type: "汉字",
          level: 1,
          children: [],
        },
      ],
    },
    {
      type: "汉字",
      level: 0,
      children: [],
    },
    {
      type: "汉字",
      level: 0,
      children: [],
    },
    {
      type: "汉字",
      level: 0,
      children: [],
    },
    {
      type: "汉字",
      level: 0,
      children: [],
    },
  ];

  return datas;
}
