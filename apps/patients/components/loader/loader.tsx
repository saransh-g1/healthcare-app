
import { Backdrop } from '@mui/material';
import {CircularProgress} from "@mui/material";
export function Loading({loading}:{loading:boolean}){
return(
<Backdrop
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open={loading}
>
  <CircularProgress color="inherit" />
</Backdrop>
)
}