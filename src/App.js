import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import './App.css'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Mail from "./components/Mail";
import EmailList from "./components/EmailList";
import SendMail from "./components/SendMail";
import { useSelector, useDispatch } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { selectUser, login } from "./features/userSlice";
import Login from "./components/Login";
import { useEffect } from "react";
import { auth } from "./firebase";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        // if user logged in
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL
        }))
      }
    })
  }, [])
  return (
    <BrowserRouter>
      {!user ? <Login /> : (
        <div className="app">
          <Header />
          <div className='app__body'>
            <Sidebar />

            <Switch>
              <Route path='/mail'>
                <Mail />
              </Route>

              <Route path='/'>
                <EmailList />
              </Route>
            </Switch>
          </div>

          {sendMessageIsOpen && <SendMail />}


        </div>
      )}

    </BrowserRouter>

  );
}

export default App;
