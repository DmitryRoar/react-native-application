import React from 'react'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {DATA} from '../data'
import {AppHeaderIcon} from '../components/AppHeaderIcon'
import {PostList} from '../components/PostList'


export const BookedScreen = ({navigation}) => {

  const openPostHandler = post => {
    navigation.navigate('Post', {
       postId: post.id,
       date: post.date,
       booked: post.booked
    })
  }

  return <PostList 
            data={DATA.filter(p => p.booked)} 
            onOpen={openPostHandler} 
          /> 
}

BookedScreen.navigationOptions = ({navigation}) => ({
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
    onPress={() => navigation.toggleDrawer()} 
  />
  </HeaderButtons>
})