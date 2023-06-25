import { Box, Typograpghy, useTheme, useMediaQuery } from "@mui/material";
import { Form } from "./Form";


const LoginPage = () => {
    const theme = useTheme();
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px");
    return <Box>
        <Box width="100%" backgroundColor={theme.palette.background.alt} p="1rem 6%" textAlign="center">
        <Typography
          fontWeight="bold"
          fontSize="32"
          color="primary"
        >
          Social Media
        </Typography>
        </Box>

        <Box
            width={isNonMobileScreens ? "50%" : "93%"}
            p="2rem"
            m="2rem auto"
            borderRadius="1.5rem"
            backgroundColor={theme.palette.background.alt}
        >
          <Typograpghy fontWeight="500" variant="h5" sx={{ mb: "15rem" }}>
            Welcome to my Social Media app!
          </Typograpghy>
          <Form></Form>
        </Box>
    </Box>
}

export default LoginPage;