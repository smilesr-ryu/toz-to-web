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
import { useState } from 'react';
import Join from './Join';

const Login = ({ open, closeDialog }) => {
  const [isJoin, setIsJoin] = useState(false);
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
          {isJoin ? (
            <Join />
          ) : (
            <>
              <TextField fullWidth variant="outlined" label="아이디" />
              <TextField fullWidth variant="outlined" label="비밀번호" />
              <Button variant="contained">로그인</Button>
              <Button variant="contained" onClick={() => setIsJoin(true)}>
                회원가입
              </Button>
            </>
          )}
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default Login;
