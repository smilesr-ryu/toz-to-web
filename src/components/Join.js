import { Divider, Stack } from '@mui/material';
import { TextField, Button } from '@mui/material';
export default function Join() {
  return (
    <Stack sx={{ gap: 2 }}>
      <TextField fullWidth variant="outlined" label="아이디" />
      <TextField fullWidth variant="outlined" label="비밀번호" />
      <TextField fullWidth variant="outlined" label="닉네임" />
      <TextField fullWidth variant="outlined" label="이름" />
      <TextField fullWidth variant="outlined" label="성별" />
      <TextField fullWidth variant="outlined" label="생년월일" />
      <TextField fullWidth variant="outlined" label="국적" />
      <TextField fullWidth variant="outlined" label="이메일" />
      <Divider />
      <TextField fullWidth variant="outlined" label="좋아하는 선수" />
      <TextField fullWidth variant="outlined" label="쓰는 라켓" />

      <Button variant="contained">가입</Button>
    </Stack>
  );
}
