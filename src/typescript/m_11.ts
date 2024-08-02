

type Notifications =  
| {type: 'email', email: string} 
| {type: 'sms', phone: string}
| {type: 'push', deviceId: string}

type NotificationsMessage = Extract<Notifications , {type: 'fun'}>

const notificationObj: Notifications = {
    type: 'email',
    email: 'john.doe@example.com'
}
console.log(notificationObj)