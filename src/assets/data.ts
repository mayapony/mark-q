import { DetailItemProps } from "@/interfaces/DetailItemProps";

export function getDetailDatas() {
  const datas: DetailItemProps[] = [
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
