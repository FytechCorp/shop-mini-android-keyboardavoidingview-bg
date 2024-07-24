## Steps to create

1) `npm init @shopify/shop-mini@latest`
    - Give you Shopify Mini a name: `android-keyboard-avoiding-view-bug`
    - Select a template: `Blank`
    - Would you like to create an extension for this Shop Mini?: `y`
    - Select the extension target where your Mini will be shown: `Product Page - Before Variants Picker`
    - Select the type of extension you want to create: `Link`

2) `npm start`

3) Updated App content to demonstrate the problem

### Note:

By default, Shop Mini's KAV component uses `'padding'` for iOS behaviour, and `undefined` for Android:

via `.../node_modules/@shopify/shop-minis-platform-sdk/src/components/KeyboardAvoidingView.tsx`
```
...
import {
  ...
  KeyboardAvoidingView as RNKeyboardAvoidingView,
  ...
} from 'react-native'
...
export const KeyboardAvoidingView = ({
  ...
}: KeyboardAvoidingViewProps) => {
  ...
  return (
    <View
      ...
    >
      <RNKeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
...
```

Where React Native seems to suggest using `'height'` on Android, which you can see in the code on [this page](https://reactnative.dev/docs/keyboardavoidingview).

In this demo, the [following code](https://github.com/FytechCorp/shop-mini-android-keyboardavoidingview-bg/blob/9cf77cf91e3863c270df72dd95ad28f555c0c135/src/App.tsx#L17-L18) lets a Shop Mini toggle between `undefined` and `'height'` for Android, and the video below demonstrates their differences

```
<KeyboardAvoidingView
  behavior={Platform.OS === 'ios' ? 'padding' : behaviourHeight ? 'height' : undefined}
  ...
/>
```

When so when `behaviourHeight == false` (which the demo starts off with) should be equivalent to just having

```
<KeyboardAvoidingView
  ...
/>
```

Which should be how the KAV works on Android by default in Shop Minis. You can also remove `behaviour=...` in the code, and see the same issues persist.

## Video demonstrating the problem

[Android Emulator](https://github.com/user-attachments/assets/5dc15d55-5760-4c51-b4c6-dbb6d40955be)

### Steps:
- Use link to get into Shop Mini
- Click TextField
    - Same behaviour as how Shop Mini's work by default
    - KAV doesn't change the screen
- Minimize keyboard using the keyboard's down-chevron in the bottom left
- Toggle KAV behaviour using top Shop Mini ToggleBotton
- Click TextField
    - Using `'height'` over `undefined`
    - KAV moves content, but still has minor overlap
