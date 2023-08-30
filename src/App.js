
import { useEffect, useState } from 'react';
import './App.css';
import DashboardHome from './components/home/index'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Projectview from './components/Projectview/index'
import NewSiteForm from './components/NewSiteForm/index'
import NewProjectForm from './components/NewProjectForm/index'
import Scenarios from './components/Scenarios/index'
import ScenariosForm from './components/ScenariosForm/index'
import Optimization from './components/Optimization/index'
import Library from './components/Library/index'
import Contacts from './components/Contacts/index'
import ContactsForm from './components/ContactsForm/index'
import Userprofile from './components/Userprofile/index'
import WebsiteHome from './Website/Home/Index';

import Login from './Website/Login/Login'
import Signup from './Website/Signup/Signup'
import Forgotpassword from './Website/Forgotpassword/Forgotpassword'
import Emailsent from './Website/ForgotpasswordEmailsent/Emailsent'
import Resetpassword from './Website/Resetpassword/Resetpassword'

import { useSelector, useDispatch } from 'react-redux';
import { setUserMiniProfile } from "./redux/slices/userSlice";

function App() {
  const [ loaded, setLoaded ] = useState(false);

  const dispatch = useDispatch();
  
  const user = useSelector((state) => state.user.profile);
  useEffect(() => {
    if (!user.id && localStorage.getItem('user')) {

      const data = JSON.parse(localStorage.getItem('user'));

      dispatch(setUserMiniProfile(data));
    }

    setTimeout(() => setLoaded(true), 500); 
  }, [ user.id, dispatch ]);

  if (!loaded) {
    return <p>Loading...</p>
  }

  return (
    < >
      <Router>
        <Routes>
          {/* Website page routing started */}
          <Route exact path="/" element={<WebsiteHome />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/forgotpassword" element={<Forgotpassword />} />
          <Route exact path="/emailsent" element={<Emailsent />} />
          <Route exact path="/resetpassword" element={<Resetpassword />} />
          {/* Website page routing ended */}

          {/* Dashboard pages rounting started */}
          <Route exact path="/dashboard" element={<DashboardHome />} />

          <Route  path="/project/create" element={<NewProjectForm/>} />
          <Route  path="/project/edit/:id" element={<NewProjectForm/>} />
          <Route  path="/project/view/:id" element={<Projectview/>} />
          <Route  path="/site/create/:project_id" element={<NewSiteForm/>} />
          <Route  path="/scenarios/view/:site_id" element={<Scenarios/>} />
          <Route  path="/scenarios/create/:site_id" element={<ScenariosForm/>} />

          {/* <Route path="/projectview" element={<Projectview />} />
          <Route path="/newsiteform" element={<NewSiteForm />} />
          <Route path="/newprojectform" element={<NewProjectForm />} />
          <Route path="/scenarios" element={<Scenarios />} />
          <Route path="/scenariosform" element={<ScenariosForm />} />
           */}
          <Route path="/optimization" element={<Optimization />} />
          <Route path="/library" element={<Library />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/contact/create" element={<ContactsForm />} />
          <Route path="/userprofile" element={<Userprofile />} />
          {/* Dashboard pages routing ended */}
        </Routes>
      </Router>

    </>
  );
}

export default App;
