import React from "react";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

const ListItem= ({item, deleteItem})=>{

    return(

    <TouchableOpacity style={styles.listItem}>
        <View style={styles.listItemView}>

<Text style={styles.listitemText}>{item.text}</Text>

<Icon name="remove" size={24} color='firebrick' 
onPress={() => deleteItem(item.id)}/>
        </View>
 
    
</TouchableOpacity>

    );
};

const styles=StyleSheet.create({
   listItem:{
       padding:16,
       backgroundColor:'#F8F8F8',
       borderBottomWidth:0.5,
       borderColor:'#888888'
   },
   listItemView:{
       //Same as orientation horizontal
       flexDirection:"row",
       justifyContent:"space-between",
       alignItems:"center"
   },
   listItemText:{
       fontSize:18
   }
});
export default ListItem;
