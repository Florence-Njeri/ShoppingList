import React, {useState} from "react";
import {View, Text, StyleSheet, FlatList, Alert} from "react-native";
import Header from './components/Header';
import {uuid} from 'uuidv4';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App=()=>{
const[items,setItems]=useState([
    // Hard-coded list of shopping list items
{id: uuid,text:'Sausages'},
{id: uuid,text:'Milk'},
{id: uuid, text:'Eggs'},
{id: uuid, text:'Muffins'}
]);

const deleteItem= id => {
    setItems(prevItem => {
        return prevItem.filter(item => item.id != id);
    });
};

const addItem = text =>{
if(!text){
    Alert.alert('Error', 'Please enter an item', {text:'OK'})
}
else{
    setItems(prevItems => {
return [{id: uuid, text }, ...prevItems];
    });}
    
};
    return(
<View style={
    styles.container
}>
    <Header />
    <AddItem addItem={addItem}/>

    <FlatList  data={items} 
//{item.text} in Kotlin would be $item.text
    renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem} /> 
    } ></FlatList>
    
</View>

    );
};

const styles=StyleSheet.create({
    container: {
flex:1,
paddingTop:60
     }
});
export default App;