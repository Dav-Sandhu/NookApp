import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
    handleNotification: async () => {
      return {
        shouldShowAlert: true,
      }
    },
})

const sendNotification = (props) => {

    Notifications.scheduleNotificationAsync({
        content: {
        title: "Click for the punch line",
        body: props.setup,
        },
        trigger: null,
    })
}

export default sendNotification;