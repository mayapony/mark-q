import { getDetailDatas } from "@/assets/data";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import { DetailItem } from "./components/DetailItem";

export function Detail() {
  const datas = getDetailDatas();

  return (
    <div className="w-full h-full">
      <List
        sx={{ width: "100%", bgcolor: "background.paper", height: "100%" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            This is a title
          </ListSubheader>
        }
      >
        {datas.map((data, index) => (
          <DetailItem {...data} key={index} index={index} />
        ))}
      </List>
    </div>
  );
}
