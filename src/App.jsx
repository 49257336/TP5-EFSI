import { useState } from 'react'
import buscador from './Buscador.jsx'
import lista from './Lista.jsx'
import './App.css'
//API key https://www.omdbapi.com/apikey.aspx?__EVENTTARGET=freeAcct&__EVENTARGUMENT=&__LASTFOCUS=&__VIEWSTATE=%2FwEPDwUKLTIwNDY4MTIzNQ9kFgYCAQ9kFgICBw8WAh4HVmlzaWJsZWhkAgIPFgIfAGhkAgMPFgIfAGhkGAEFHl9fQ29udHJvbHNSZXF1aXJlUG9zdEJhY2tLZXlfXxYDBQtwYXRyZW9uQWNjdAUIZnJlZUFjY3QFCGZyZWVBY2N0MXBaUo2PpHbEmO0KsvHCBMiAqbwPSispxmMnBH5rXb8%3D&__VIEWSTATEGENERATOR=5E550F58&__EVENTVALIDATION=%2FwEdAAV6O6wfBwA%2F81aWW2BYfVtumSzhXfnlWWVdWIamVouVTzfZJuQDpLVS6HZFWq5fYpioiDjxFjSdCQfbG0SWduXFd8BcWGH1ot0k0SO7CfuulGztfcyzE1Lkxwo9dYYBItHiFDZeQhYzawd9QWEG%2BI9i&at=freeAcct&Email=
//  https://www.omdbapi.com/
function App() {

  return (
    <>
      <header>
        <nav>
          <buscador />
        </nav>
      </header>
      <body>
          <lista />
      </body>
    </>
  )
}

export default App
