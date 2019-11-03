
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({// 테마를 명시함
    typography: {
        useNextVariants: true,
        fontFamily: "Noto Sans KR"
    }
});


ReactDOM.render(<MuiThemeProvider theme={theme}><App /></MuiThemeProvider>, document.getElementById('app'));

