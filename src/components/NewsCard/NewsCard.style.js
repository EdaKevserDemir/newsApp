import {Dimensions,StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        backgroundColor:'white',
        margin:10,
        borderRadius:10
    },
    image:{
        height:Dimensions.get('window').height/4,
    borderTopLeftRadius:10,
    borderTopRightRadius:10
    },

    title:{
        fontWeight:'bold',
        fontSize:18,
        padding:5,
        textAlign:'center'

    },
    description:{
        marginTop:3,
        marginBottom:5,
      padding:5,
      textAlign:'justify'
    },
    inner_container:{
        padding:5
    },
    author:
    {
        fontWeight:'bold',
        fontSize:15,
        fontStyle:'italic',
        textAlign:'right',
        marginBottom:5,
        padding:5

    }
});