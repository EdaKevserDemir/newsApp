import React from 'react'
import {StyleSheet, Text, View,FlatList,SafeAreaView} from 'react-native';
import NewsCard from './components/NewsCard';

import news_data from './news_data.json';

function App() {


  const renderNews=({item})=><NewsCard news={item}/>
 
  return (   
    <View style={styles.container}>
     <FlatList
     keyExtractor={item=>item.u_id.toString()}
       data={news_data}
       renderItem={renderNews}
     />  
 
    </View>
    
  );
  }
  const styles=StyleSheet.create({
   
    container:{
     flex:1,
     backgroundColor:'pink'
 }
 
 });
  export default App;

