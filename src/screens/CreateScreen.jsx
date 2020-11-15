import React, {useState} from 'react'
import {TextInput, Button, Keyboard, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {useDispatch} from 'react-redux'

import {PhotoPicker} from '../components/PhotoPicker'
import {AppHeaderIcon} from '../components/AppHeaderIcon'
import {addPost} from '../store/actions/post'
import {THEME} from '../theme'

export const CreateScreen = ({navigation}) => {
  const dispatch = useDispatch()
  const [text, setText] = useState('')
  const [img, setImg] = useState()

  const savePostHandler = () => {
    const post = {
      date: new Date().toJSON(),
      text,
      img,
      booked: false
    }
    dispatch(addPost(post))
    navigation.navigate('Main')
  }

  const photoPickHandler = uri => {
    setImg(uri)
  }

  return (
    <ScrollView style={styles.wrapper}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View>
          <Text style={styles.title}>Create New Post!</Text>
          <TextInput
            style={styles.textarea}
            placeholder='Enter text post'
            value={text}
            onChangeText={setText}
            multiline
          />
          <PhotoPicker onPick={photoPickHandler}/>
          <Button
            title='Create Post'
            color={THEME.MAIN_COLOR}
            onPress={savePostHandler}
            disabled={!text || !img}
          />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  )
}

CreateScreen.navigationOptions = ({navigation}) => {
  return {
    headerTitle: 'Create Post',
    headerLeft: () => (<HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title='Toggle Drawer'
        iconName='ios-menu'
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>)
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'open-regular',
    marginVertical: 10
  },
  textarea: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'open-regular'
  }
})