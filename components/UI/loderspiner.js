import { ActivityIndicator,View ,StyleSheet} from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Loderspiner(){
    return<View style={styles.container}>
        <ActivityIndicator size={"large"} color={"white"}/>
    </View>
}
export default Loderspiner;
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:GlobalStyles.colors.primary700,
        alignItems:"center",
        justifyContent:"center"
    }
})