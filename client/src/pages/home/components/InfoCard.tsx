import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export type InfoCardProps = {
  title: string;
  status: boolean;
  createDate: string;
};

export const InfoCard = ({ title, createDate }: InfoCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="h-auto pl-2 bg-blue-500 w-full rounded-md shadow-blue-200 shadow-md">
      <div className="bg-white h-full px-4 relative rounded-md">
        <div className=" border-b-gray-200 border-b py-2">
          <h1 className="text-xl font-bold ">{title}</h1>
          <p className="text-sm text-right text-gray-500">
            创建时间：{createDate}
          </p>
        </div>
        <div className="py-2 text-right">
          <Button
            variant="outlined"
            size="small"
            onClick={() => navigate(`/detail/${title}`)}
          >
            查看
          </Button>
        </div>
      </div>
    </div>
  );
};
