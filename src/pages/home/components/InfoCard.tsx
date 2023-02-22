import { useNavigate } from "react-router-dom";

export type InfoCardProps = {
  title: string;
  status: boolean;
  createDate: string;
};

export const InfoCard = ({ title, status, createDate }: InfoCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="h-auto pl-3 bg-orange-600 w-full rounded-md shadow-md">
      <div className="bg-white h-full px-4 relative">
        <div className=" border-b-gray-200 border-b py-1">
          <h1 className="text-xl font-bold ">{title}</h1>
          <p className="text-sm text-right text-gray-500">
            创建时间：{createDate}
          </p>
        </div>
        <div className="py-2 text-right">
          <button
            className="bg-orange-600 py-1 px-3 rounded-lg text-white"
            onClick={() => {
              navigate("/detail");
            }}
          >
            查看
          </button>
        </div>
        <div
          className={`h-4 w-4 -right-1 -top-1 absolute rounded-full ${
            !status ? "bg-red-600" : "bg-green-600"
          }`}
        />
      </div>
    </div>
  );
};
