import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  Button,
  ScrollView
} from "react-native";

import Elevatedcards from "./components/Elevatedcards";
import AppPro from "./AppPro";

function App(){
  return (
    <SafeAreaView>
      <ScrollView>
      
        
       <AppPro />
         
        
      </ScrollView>
     
    </SafeAreaView>
  )
}


export default App;