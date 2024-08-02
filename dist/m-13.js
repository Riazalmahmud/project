"use strict";
const processNotificationObj03 = {
    id: 1,
    notificationMessage: 'hello i am checking your key',
    createdAt: new Date(),
    isRead: false,
};
function processNotificationFunction(notifications) {
    notifications.forEach(notification => {
        console.log(`notification id is ${notification.id}`);
        console.log(`notification message ${notification.notificationMessage}`);
        console.log(`notification created at ${notification.createdAt}`);
        console.log(`notification is read ${notification.isRead}`);
    });
}
const processNotificationUpdate = [
    {
        id: 1,
        notificationMessage: 'hello i am checking your key',
        createdAt: new Date(),
        isRead: false,
    },
    {
        id: 2,
        notificationMessage: 'hello i am checking your key 2',
        createdAt: new Date(),
        isRead: true,
    },
    {
        id: 4,
        notificationMessage: 'hello i am checking your key 2',
        createdAt: new Date(),
        isRead: true,
    }
];
processNotificationFunction(processNotificationUpdate);
