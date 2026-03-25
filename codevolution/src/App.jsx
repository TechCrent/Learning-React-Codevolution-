import './App.css'
import { Counter } from './Counter'
import { LoginCard } from './LoginCard'
import { SimpleCounter } from './SimpleCounter'
import { UserDashboard } from './UserDashboard'
import { PrevStateCounter } from './PrevStateCounter'
import { BatchingStateCounter } from './BatchingCounter'
import { UserProfile } from './UserProfile'
import { TodoList } from './TodoList'
import { ShoppingCart } from './ShoppingCart'
import { CounterWithReducer } from './CounterWithReducer'
import { ShoppingCartWithReducer } from './ShoppintCartWithReducer'

function App() {

  return (
    <>
      <h2>Codevolution React Course (Learning State)</h2>
      {/* <SimpleCounter />
      <PrevStateCounter /> 
      <BatchingStateCounter />
      <UserProfile />
      <TodoList />
      <ShoppingCart />
      <CounterWithReducer /> */}

      <ShoppingCartWithReducer />
    </>
  )
}

export default App
