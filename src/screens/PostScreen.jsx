import React, {useCallback, useEffect} from 'react'
import {Alert, Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native'
import {THEME} from '../theme'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {AppHeaderIcon} from '../components/AppHeaderIcon'
import {useDispatch, useSelector} from 'react-redux'
import {removePost, toggleBooked} from '../store/actions/post'

export const PostScreen = ({navigation}) => {
  const dispatch = useDispatch()
  const postId = navigation.getParam('postId')

  const post = useSelector(state =>
    state.post.allPosts.find(p => p.id === postId)
  )

  const booked = useSelector(state =>
    state.post.bookedPosts.some(post => post.id === postId)
  )

  useEffect(() => {
    navigation.setParams({booked})
  }, [booked])

  const toggleHandler = useCallback(() => {
    dispatch(toggleBooked(post))
  }, [dispatch, post])

  useEffect(() => {
    navigation.setParams({toggleHandler})
  }, [toggleHandler])

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
          onPress() {
            navigation.navigate('Main')
            dispatch(removePost(postId))
          },
          style: 'destructive'
        }
      ],
      {cancelable: false}
    )
  }

  if (!post) {
    return null
  }

  return (
    <ScrollView>
      <Image
        source={{
          uri: post.img
        }}
        style={styles.image}
      />
      <View style={styles.textWrap}>
        <Text style={styles.title}>{post.text}</Text>
      </View>
      <Button title='Remove' color={THEME.DANGER_COLOR} onPress={removeHandler}/>
    </ScrollView>
  )
}

PostScreen.navigationOptions = ({navigation}) => {
  const date = navigation.getParam('date')
  const booked = navigation.getParam('booked')
  const toggleHandler = navigation.getParam('toggleHandler')
  const iconName = booked ? 'ios-star' : 'ios-star-outline'

  return {
    headerTitle: `Post ${new Date(date).toLocaleDateString()}`,
    headerRight: () => (<HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title='Take photo'
        iconName={iconName}
        onPress={toggleHandler}
      />
    </HeaderButtons>),
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