import React, {useState} from 'react'
import {AppLoading} from 'expo'
import {AppNavigation} from './src/navigation/AppNavigation'
import {bootstrap} from './src/bootstrap'
import {Provider} from 'react-redux'
import store from './src/store'

export default function App() {
  const [isReady, setIsReady] = useState(false)

  if (!isReady) {
    return (
      <AppLoading 
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)}
        onError={(error) => console.log(error)}
      />
    )
  }

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  )
}