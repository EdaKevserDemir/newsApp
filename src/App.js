import React from 'react'
import {Image,ScrollView,StyleSheet, Text, View,FlatList,SafeAreaView} from 'react-native';
import NewsCard from './components/NewsCard';

import news_data from './news_data.json';
import news_banner_data from './news_banner_data.json'
import { Dimensions } from 'react-native';

function App() {


  const renderNews=({item})=><NewsCard news={item}/>
 
  return (   
    
    <View style={styles.container}>
     
      <Text style={styles.headerText}>NEWS</Text>
     <FlatList
     ListHeaderComponent={()=>
     <ScrollView
      horizontal showsHorizontalScrollIndicator={false}>
     {
       news_banner_data.map(bannerNews=> 
       <Image style={styles.bannerImage} source={{uri:bannerNews.imageUrl}} />)
     }

     </ScrollView>}

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
 },
 bannerImage:{
   height:Dimensions.get('window').height/4,
   width:Dimensions.get('window').width
 },
 headerText:{
   fontSize:50,
   fontWeight:'bold',
   fontStyle:'italic',
   marginTop:25,
   textAlign:'center'
   
 },

 
 });
  export default App;

