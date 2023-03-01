import { Chip } from "@mui/material";

export const LevelManager = () => {
  return (
    <div className="w-full h-40 fixed bottom-0 flex justify-center items-center text-blue-500">
      {[1, 2, 3].map((value) => {
        return (
          <Chip
            label={value.toString()}
            color="primary"
            key={value}
            onClick={(event) => {
              console.log(event.currentTarget);
            }}
          />
        );
      })}
    </div>
  );
};
