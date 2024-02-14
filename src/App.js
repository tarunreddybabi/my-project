import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

import NavigationStack from './navigationStack/navigation';
import LoginScreen from './screens/preLoginScreens/login';
import RegisterForm from './screens/preLoginScreens/register';

const App = () => {
  return (
    
     <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/" element={<NavigationStack />} />
      </Routes>
     </BrowserRouter>
    
  );
};

export default App;
