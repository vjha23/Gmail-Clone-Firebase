import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import './App.css'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Mail from "./components/Mail";
import EmailList from "./components/EmailList";
import SendMail from "./components/SendMail";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  return (
    <BrowserRouter>
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
    </BrowserRouter>

  );
}

export default App;
