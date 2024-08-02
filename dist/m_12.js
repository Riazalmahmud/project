"use strict";
function myNotice() {
    return 'sofiq';
}
const noticeType = myNotice();
console.log(noticeType);
const nonNullAbleObj = {
    id: 1,
    message: 'hello world',
    timestamp: new Date(),
};
function processNotification(notification) {
    console.log(`notification id ${notification.id}`);
    console.log(`notification message ${notification.message}`);
    console.log(`notification timestamp ${notification.timestamp}`);
}
const processNotificationObj = {
    id: nonNullAbleObj.id,
    message: nonNullAbleObj.message,
    timestamp: nonNullAbleObj.timestamp
};
processNotification(processNotificationObj);
