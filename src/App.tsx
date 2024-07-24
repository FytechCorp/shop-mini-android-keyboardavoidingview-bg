import React, {
  useState,
} from 'react'
import {
  Box,
  Button,
  KeyboardAvoidingView,
  Text,
  TextField,
  ToggleButton,
  SafeAreaView,
} from '@shopify/shop-minis-platform-sdk'

export function App() {
  const [behaviourHeight, setBehaviourHeight] = useState(false);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : behaviourHeight ? 'height' : undefined}
      style={{ flex: 1 }}
    >
      <Box flex={1} backgroundColor="backgrounds-regular" padding="xl">
        <SafeAreaView
          style={{ flex: 1, gap: 25 }}
        >
          <ToggleButton
            label="Toggle Android KAV behaviour"
            selected={behaviourHeight}
            onPress={() => setBehaviourHeight((prev) => !prev)}
          />
          <TextField
            placeholder="I'm a text box"
            multiline={true}
            textAlignVertical="top"
            containerStyle={{ flex: 1, }}
          />
          <Button
            size="l"
            text="I just help show how I get hidden by the KAV"
          />
        </SafeAreaView>
      </Box>
    </KeyboardAvoidingView>
  )
}
