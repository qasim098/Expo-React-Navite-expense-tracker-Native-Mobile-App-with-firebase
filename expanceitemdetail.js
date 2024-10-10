import { Pressable, View,StyleSheet,Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "./Constants/style";
export function Expanaceitemdetail({description,amount,date,id}){
    const navigation=useNavigation();
    function expenceitemhandel(){
        
        navigation.navigate('Manageexpenses',{expenceid:id});
    }
    return<Pressable onPress={expenceitemhandel} style={({pressed})=>pressed && styles.pressed}>
           <View style={styles.container}>
           <View>
            <Text style={styles.descriptionstyle}>{description}</Text>
            <Text style={styles.datestyle}>{date}</Text>
            </View>
          <View>
            <Text style={styles.amountstyle}>{amount}</Text>
          </View>
           </View>
              
        </Pressable>
          
    
}
const styles=StyleSheet.create({
    pressed:{
        opacity:0.75,
    },
    container:{
        padding:6,
        
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        
        marginTop:12,
        backgroundColor:GlobalStyles.colors.primary400,
       
        borderRadius:6
      
    },
    descriptionstyle:{
       color:"white",
       marginBottom:6,
       fontSize:16,
       fontWeight:"600"
       
    },
    amountstyle:{
color:GlobalStyles.colors.primary800,
backgroundColor:"white",
padding:10,
borderRadius:4,
fontSize:16,
fontWeight:"bold",
minWidth:75
    },
    datestyle:{
        color:"white"
            },
})