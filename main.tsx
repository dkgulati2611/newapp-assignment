import * as ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './src/App';
import SecondPage from './src/secondpage';

const theme = createTheme();


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {/* <App /> */}
    <Router>
      <Routes>
        <Route path="/"  element={<App />} />
        <Route path="/second-page" element={<SecondPage />} />
      </Routes>
  </Router>
    
  </ThemeProvider>,
  document.getElementById('root')
);