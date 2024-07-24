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
```
<KeyboardAvoidingView
  behavior={Platform.OS === 'ios' ? 'padding' : behaviourHeight ? 'height' : undefined}
  ...
/>
```
with `behaviourHeight == false` should be equivalent to just having
```
<KeyboardAvoidingView
  ...
/>
```
Which should be how the KAV works on Android by default. 

You can also remove `behaviour=...` in the code, and see the same issue

## Video demonstrating the problem

[Android Emulator](https://github.com/user-attachments/assets/5dc15d55-5760-4c51-b4c6-dbb6d40955be)

### Steps:
- Use link to get into Shop Mini
- Click TextField
    - KAV doesn't change the screen
- Minimize keyboard using the keyboard's down-chevron in the bottom left
- Toggle KAV behaviour using top Shop Mini ToggleBotton
- Click TextField
    - KAV moves content, but still has minor overlap
