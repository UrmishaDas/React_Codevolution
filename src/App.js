import React, { Component } from "react";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from './components/Message'
import Counter from './components/Counter'

import RefsDemo from './components/refs/RefsDemo'
import RefsDemo2 from './components/refs/RefsDemo2'
import FocusInput from './components/refs/FocusInput'
import FRParentInput from './components/refs/FRParentInput'

import HoverCounter from './components/HOCs/HoverCounter'
import ClickCounter from './components/HOCs/ClickCounter'

import ComponentA from './components/context/ComponentA'
import { UserProvider } from './components/context/userContext'

import AppComponent from './components/Reacthttp/AppComponent'

class App extends Component {

  
  render() {
    return (
      <div className="App">
        {/* <Greet name="Sweetie">
          <button> Next</button>
        </Greet>

        <Greet name="Pinky" />
        <Greet name="Mona" />

        <Welcome name="Sweetie">
          <p> This is a child </p>
        </Welcome>
        <Welcome name="Pinky" />
        <Welcome name="Mona" /> */}

        {/* <Message /> */}

        {/* <Counter /> */}

        {/* <RefsDemo /> */}

        {/* <RefsDemo2 /> */}

        {/* <FocusInput /> */}
        {/* <FRParentInput /> */}

        {/* <HoverCounter name="Urmisha" />
        <ClickCounter name="Sushanta" /> */}

        {/* <UserProvider message="HELLO WORLD!!!!!">
          <ComponentA />
        </UserProvider> */}

        <AppComponent />
        
      </div>
    );
  }
}

export default App;
