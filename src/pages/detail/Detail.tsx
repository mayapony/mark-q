import { TitleContextType } from "@/App";
import { createDetailItemData } from "@/utils/mockData";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { DetailItem } from "./components/DetailItem";
import { LevelManager } from "./components/LevelManger";

export function Detail() {
  const [, setTitle] = useOutletContext<TitleContextType>();
  const { id } = useParams();

  useEffect(() => {
    setTitle("详情");
  }, []);

  const datas = createDetailItemData();

  return (
    <div className="h-full relative">
      <div className="w-full h-full">
        <List
          sx={{ width: "100%", bgcolor: "background.paper", height: "100%" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              {id}
            </ListSubheader>
          }
        >
          {datas.map((data, index) => (
            <DetailItem {...data} level={0} key={data._id} index={index} />
          ))}
        </List>
      </div>
      <LevelManager />
    </div>
  );
}
