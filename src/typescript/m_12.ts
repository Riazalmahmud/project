type Notice = string | undefined | null

function myNotice () : Notice{
    return 'sofiq'
}
const noticeType : NonNullable<Notice> = myNotice()! 
console.log(noticeType)


// type Notification02 ={
//     id: number,
//     message: string | number,
//     timestamp: Date
// }


// type NonNullableNotification = {
//     [k in keyof Notification02]: NonNullable<Notification02 [k]>
// }

// const nonNullAbleObj:Notification02 = {
// id: 1,
// message: 'hello world',
// timestamp: new Date(),
// }

// function processNotification (notfication: NonNullableNotification){
// console.log(`notifcation id ${notfication.id}`)
// console.log(`message ${notfication.message}`)
// console.log(`timeStemp ${notfication.message}`)
// }


// const processNotificationObj:NonNullableNotification = {
// id: nonNullAbleObj.id,
// message: nonNullAbleObj.message,
//  timestamp: nonNullAbleObj.timestamp,
// }


// processNotification(processNotificationObj)


type Notification03 ={
    id: number,
    message: string | number,
    timestamp: Date
}
type NonNullableNotification = {
    [k in keyof Notification03] : NonNullable<Notification03 [k]>
}
const nonNullAbleObj:Notification03 ={
    id: 1,
    message: 'hello world',
    timestamp: new Date(),
}
function processNotification(notification: NonNullableNotification){
    console.log(`notification id ${notification.id}`)
    console.log(`notification message ${notification.message}`)
    console.log(`notification timestamp ${notification.timestamp}`)
}
const processNotificationObj:NonNullableNotification ={
id: nonNullAbleObj.id,
message: nonNullAbleObj.message,
timestamp: nonNullAbleObj.timestamp
}
processNotification(processNotificationObj)
