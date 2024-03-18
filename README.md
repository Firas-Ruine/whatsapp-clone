# WhatsApp Clone App 📱

A WhatsApp clone app developed using React Native and Expo, providing users with a familiar messaging experience on mobile devices. This app allows users to send text messages, images, and videos, just like the original WhatsApp application.

## Technologies 🚀⚛

**Client:** Node 18, npm 10, React Native 0.73.5, Expo 50

**Server:** Firebase Auth, Firestore

## Features

- **Real-Time Messaging:** Instant messaging functionality enables users to send and receive messages in real-time.
- **User Authentication:** Secure authentication system ensures that only authorized users can access the app.
- **Contact List:** Users can see their contacts and start conversations with them.
- **Push Notifications:** Receive push notifications for new messages even when the app is in the background.
- **Settings :** User can custome the app based on his preferences.

## Acknowledgements

- [Expo](https://docs.expo.dev/)
- [React Native](https://reactnative.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [Firebase](https://console.firebase.google.com/)

## Project Structure

```
__tests__
.expo
app/
│
├── auth/
│   ├── login.jsx
│   └── register.jsx
├── settings/
│   ├── _layout.jsx
│   ├── account.jsx
│   ├── desktop.jsx
│   └── starredMessages.jsx
└── tabs/
    ├── _layout.jsx
    ├── calls.jsx
    ├── chat.jsx
    ├── communities.jsx
    ├── index.jsx
    └── settings.jsx


src/
├── assets/
├── components/
├── constants/
├── helpers/
├── services/
└── utils/

.env
App.jsx
app.json
firebaseConfig.js
metro.config.js
package.json
```

This structure consists of:

- `__tests__/`: Test files for testing the application.
- `.expo/`: Expo-specific configuration and cache files.
- `app/`: Contains the main application code.
  - `auth/`: Authentication-related components and logic.
  - `settings/`: Components and logic related to user settings.
  - `tabs/`: Components and logic for different tabs in the application.
- `src/`: Additional source files like assets, components, constants, helpers, services, and utilities.
- `.env`: Environment configuration file.
- `App.jsx`: Entry point of the application.
- `app.json`: Expo configuration file.
- `firebaseConfig.js`: Firebase configuration file.
- `metro.config.js`: Metro bundler configuration file.
- `package.json`: Node.js package configuration file.## Color Reference

| Color           | Hex                                                              |
| --------------- | ---------------------------------------------------------------- |
| Primary Color   | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |
| Secondary Color | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`FIREBASE_URL`

## Authors

- [@Firas-Ruine](https://www.github.com/Firas-Ruine)

## Support

For support, email fruine6@gmail.com.
