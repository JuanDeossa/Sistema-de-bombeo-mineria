import { Box, Button, Paper, Stack } from "@mui/material";

export const MainPage = () => {
  return (
    <Stack direction="column" alignItems="center" spacing={3} paddingTop={4} width={390} border="1px solid gray" borderBottom="0px">
      <Paper elevation={4}>
        <Box width={300} height={300}></Box>
      </Paper>
      <Button variant="contained">Calcular</Button>
    </Stack>
  );
};
