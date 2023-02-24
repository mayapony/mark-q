import { InfoCard, InfoCardProps } from "./components/InfoCard";

export const Home = () => {
  let cur = 0;
  const datas = Array.from({ length: 10 }, () => {
    return {
      title: "张宇三十讲",
      createDate: new Date().toLocaleDateString(),
      status: true,
      key: cur++,
    };
  });

  const cards = datas.map((data) => {
    return <InfoCard key={data.key} {...(data as InfoCardProps)} />;
  });

  return <div className="grid grid-cols-1 gap-3 p-5 bg-slate-200">{cards}</div>;
};
