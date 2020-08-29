import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Item, HeaderButtons } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'

export const CreateScreen = () => {
  return (
    <View style={styles.center}>
      <Text>CreateScreen</Text>
    </View>
  )
}

CreateScreen.navigationOptions = ({navigation}) => {
  return {
    headerTitle: 'Create Post',
    headerLeft: <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
    <Item 
      title='Toggle Drawer' 
      iconName='ios-menu' 
      onPress={() => navigation.toggleDrawer()} 
    />
    </HeaderButtons>
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})