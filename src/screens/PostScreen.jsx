import React from 'react'
import {View, StyleSheet, Image, Text, Button, ScrollView, Alert} from 'react-native'
import {DATA} from '../data'
import {THEME} from '../theme'
import {Item, HeaderButtons} from 'react-navigation-header-buttons'
import {AppHeaderIcon} from '../components/AppHeaderIcon'

export const PostScreen = ({navigation}) => {
  const postId = navigation.getParam('postId')
  const post = DATA.find(p => p.id === postId)

  const removeHandler = () => {
    Alert.alert(
      'Remove Post',
      'Are you sure you want to delete this post?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        { 
          text: 'Remove', 
          onPress: () => console.log('removed'),
          style: 'destructive' 
        }
      ],
      { cancelable: false }
    )
  }

  return (
    <ScrollView>
      <Image source={{
        uri: post.img
      }} />
      <View style={styles.textWrap}>
        <Text style={styles.title}>{post.text}</Text>
      </View>
      <Button title='Remove' color={THEME.DANGER_COLOR} onPress={removeHandler} />
    </ScrollView>
  )
}

PostScreen.navigationOptions = ({navigation}) => {
  const date = navigation.getParam('date')
  const booked = navigation.getParam('booked')
  const iconName = booked ? 'ios-star' : 'ios-star-outline'

  return {
    headerTitle: `Post ${new Date(date).toLocaleDateString()}`,
    headerRight: <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item 
        title='Take photo' 
        iconName={iconName} 
        onPress={() => console.log('Press Photo')} 
      />
    </HeaderButtons>,
  }

}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  textWrap: {
    padding: 10
  },
  title: {
    fontFamily: 'open-regular'
  }
})