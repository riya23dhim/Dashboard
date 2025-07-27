import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('Ngo9BigBOggjHTQxAR8/V1JEaF5cXmRCdkx0QHxbf1x1ZFRMYlhbRXVPMyBoS35Rc0VkW3lecXZRR2dUUUB2VEFd');
import './index.css';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client'
import App from './App';
import ContextProvider from './context/ContextProvider';
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
<StrictMode>
<ContextProvider>
<App/>
</ContextProvider>
</StrictMode>
)
 

