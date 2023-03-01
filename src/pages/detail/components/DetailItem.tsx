import { DetailItemModel } from "@/interfaces/DetailItemProps";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import * as cn from "chinese-numbering";
import { useState } from "react";

interface DetailItemProps extends DetailItemModel {
  level: number;
  index: number;
}

export const DetailItem = ({ children, index, level }: DetailItemProps) => {
  const types = ["chinese", "arabic"];
  const [open, setOpen] = useState(false);

  const isFinal = !children.length;

  const handleClick = () => {
    if (isFinal) return;
    setOpen(!open);
  };

  const getPrimaryText = () => {
    const type = types[level];
    switch (type) {
      case "chinese":
        return cn.numberToChinese(index + 1) + "、";
      default:
        return (index + 1).toString();
    }
  };

  return (
    <>
      <ListItemButton
        onClick={handleClick}
        sx={{ pl: Math.max(level * 4 + 2, 2), pr: 2 }}
      >
        <ListItemText primary={getPrimaryText()} />
        {isFinal ? "" : open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {!isFinal && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children.map((detailItem, index) => (
              <DetailItem
                key={detailItem._id}
                index={index}
                level={level + 1}
                {...detailItem}
              />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};
