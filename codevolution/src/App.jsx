import './App.css'
import {Welcome} from './Welcome.jsx'
import {ContactForm} from './ContactForm.jsx'
import { CandidateProfile } from './CandidateProfile.jsx'
import { CardWrapper } from './CardWrapper.jsx'
import { UserDetails } from './UserDetails.jsx'
import { ProductList } from './ProductList.jsx'
import {Alert} from './Alert.jsx'
import { CustomButton } from './CustomButton.jsx'
import { Contact } from './Contact.jsx'
import { Newsletter } from './Newsletter.jsx'
import { Menu } from './Menu.jsx'


function App() {

  return (
    <>
      <Menu />
      <Contact/>
      <Newsletter/>
      
      <Alert> Your changes have been saved!</Alert>
      <h1 className='text-blue-600'>Codevolution React Course</h1>

      <UserDetails name="Crent" isOnline={true}/>
      <UserDetails name="Abby" isOnline={false}/>

      <CardWrapper title="User Profile">
        <p>Ciici Crentsil</p>
        <p>ciicicrensil@gmail.com</p>
        <button>Edit profile</button>
      </CardWrapper>

      <ProductList />


    </>
  )
}

export default App
