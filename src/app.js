import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createTheme  } from '@material-ui/core/styles';
import { Box, Typography } from "@material-ui/core";
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import MenuRounded from '@material-ui/icons/MenuRounded';
import {
   Root,
   Header,
   Nav,
   Content,
   Footer,
   presets,
} from 'mui-layout';

const baseTheme = createTheme(); // or use your own theme;
const config = presets.createStandardLayout();

const App = () => (
   <ThemeProvider theme={baseTheme}>
      <Root config={config}>
         <Header
            renderMenuIcon={open => (open ? <ChevronLeft /> : <MenuRounded />)}
         >
            header
       </Header>
         <Nav
            renderIcon={collapsed =>
               collapsed ? <ChevronRight /> : <ChevronLeft />
            }
         >
            nav
       </Nav>
         <Content>
            <Box p={{ xs: 2, sm: 3 }}>
               <Typography variant="h6" gutterBottom>
                  <b>This is content!</b>
               </Typography>
               <Typography color="textSecondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam
                  aliquam sem et tortor consequat id porta. Adipiscing commodo elit
                  at imperdiet. Lacus sed turpis tincidunt id aliquet risus feugiat
                  in ante. Cras tincidunt lobortis feugiat vivamus at augue eget
                  arcu. Hendrerit dolor magna eget est. Fames ac turpis egestas
                  maecenas. Cras semper auctor neque vitae tempus quam pellentesque.
                  Amet nisl purus in mollis nunc sed id semper. Molestie ac feugiat
                  sed lectus vestibulum mattis ullamcorper velit sed. Id aliquet
                  lectus proin nibh nisl condimentum.
            </Typography>
            </Box>
         </Content>
         <Footer>
            footer
       </Footer>
      </Root>
   </ThemeProvider>
)

export default App;