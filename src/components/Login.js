import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Stack,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { TextField, Button } from '@mui/material';

const Login = ({ open, closeDialog }) => {
  return (
    <Dialog open={open} onClose={closeDialog} fullScreen>
      <DialogActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <DialogTitle>Login</DialogTitle>
        <IconButton onClick={closeDialog}>
          <CloseIcon />
        </IconButton>
      </DialogActions>
      <DialogContent sx={{ display: 'flex', flexDirection: 'column' }}>
        <Stack sx={{ gap: 2 }}>
          <TextField fullWidth variant="outlined" label="아이디" />
          <TextField fullWidth variant="outlined" label="비밀번호" />
          <Button variant="contained">로그인</Button>

          <Button variant="contained">회원가입</Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default Login;
