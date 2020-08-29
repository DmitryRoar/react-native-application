import React from 'react'
import {View, StyleSheet, FlatList} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {DATA} from '../data'
import {Post} from '../components/Post'
import {AppHeaderIcon} from '../components/AppHeaderIcon'

export const BookedScreen = ({navigation}) => {

  const openPostHandler = post => {
    navigation.navigate('Post', {
       postId: post.id,
       date: post.date,
       booked: post.booked
    })
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={DATA.filter(p => p.booked)}
        keyExtractor={post => post.id.toString()}
        renderItem={
          ({item}) => 
          <Post 
            post={item} 
            onOpen={openPostHandler} 
          />
        }
      />
    </View>
  )
}

BookedScreen.navigationOptions = {
  headerTitle: 'My blog',
  headerRight: <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
    <Item 
      title='Take photo' 
      iconName='ios-camera' 
      onPress={() => console.log('Press Photo')} 
    />
  </HeaderButtons>,
  headerLeft: <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
  <Item 
    title='Toggle Drawer' 
    iconName='ios-menu' 
    onPress={() => console.log('Press Photo')} 
  />
  </HeaderButtons>
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  }
})