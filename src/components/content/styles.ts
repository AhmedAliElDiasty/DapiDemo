import { StyleSheet } from 'react-native';
import colors from '../../utils/colors'

export const styles = StyleSheet.create({
  headerContainer: {
    alignSelf: 'stretch',
    justifyContent:'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop:5,
    height: 40,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderColor: colors.borderColor,
    backgroundColor: colors.backgroundGrey
  },
  headerText: {
    fontSize: 10,
    color: colors.textGrey,
  },
  itemContainer: {
    flexDirection: 'row',
    height: 60,
    paddingHorizontal: 10,
    alignItems:'center',
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    backgroundColor: 'pink',
    marginRight:10
  },
  contentText: {
    fontSize: 14,
  },
  contentDetails: {
    fontSize: 10,
    color:colors.textGrey
  },
  borderView: {
    height: 1,
    marginLeft:30,
    backgroundColor:colors.borderColor
  }
});
