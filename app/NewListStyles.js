import { StyleSheet, Dimensions } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const { height, width } = Dimensions.get('window');
export default StyleSheet.create({

    viewCard: {
        marginVertical: 10,
        justifyContent: 'center',
        width: wp('90%'),
        alignSelf: 'center',

    },
    t1: {
        fontWeight: 'bold', fontSize: 25, textAlign: 'center'
    },
    head: {
        color: '#1B2631', fontWeight: 'bold'
    }

})