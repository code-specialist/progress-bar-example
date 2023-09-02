import React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";

interface IProps {
    progress: number
}

const Progressbar: React.FC<IProps> = (props: IProps) => {
    return(
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" value={props.progress}/>
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="white">{`${Math.round(
            props.progress,
          )}%`}</Typography>
        </Box>
      </Box>
    )


}

export default Progressbar;