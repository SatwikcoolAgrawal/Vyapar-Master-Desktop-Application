
import React from 'react';


export default function App() {

  return (
    <>
      <h1>Hello World</h1>
      <button onClick={() => {
        electron.notificationApi.sendNotification('My custom notification!');
      }}>Notify</button>
    </>
  )
}