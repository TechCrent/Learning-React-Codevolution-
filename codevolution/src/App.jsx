import './App.css'
import {Welcome} from './Welcome.jsx'
import {Button} from './Button.jsx'
import {Card} from './Card.jsx'
import {ContactForm} from './ContactForm.jsx'
import { CandidateProfile } from './CandidateProfile.jsx'
import { Product } from './Product.jsx'
import { Greeting } from './Greeting.jsx'
import { CardWrapper } from './CardWrapper.jsx'


function App() {

  return (
    <>
      <h1 className='text-blue-600'>Codevolution React Course</h1>

      <Greeting name="Crent" message="Good morning" />
      <Greeting name="Abby"/>
      <Greeting message="Fuck you"/>
      <Greeting />

      <Welcome name="Crent" alias="Spiderman"/>
      <Welcome name="Abby" alias="Catwoman"/>
      <Button />
      <Card/>
      <ContactForm />
      <CandidateProfile />

      <Product 
      title="Gaming laptop" 
      price={1299.99} 
      inStock={true} 
      categories={["Electronics","Computers","Gaming"]} 
      />
    </>
  )
}

export default App
