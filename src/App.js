import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Practice from './components/Practicess'
import Counting from './components/Counting'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import NameList02 from './components/NameList02'
import PersonList02 from './components/PersonList02';
import IndexKey from './components/IndexKey'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';

function App() {
  return (
    <div className="App">
      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}
      <RefsDemo />
      {/* <ParentComp /> */}
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
      {/* <LifecycleA /> */}
      {/* <Form /> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Inline /> */}
      {/* <Stylesheet primary={true} /> */}
      {/* <IndexKey /> */}
      {/* <PersonList02 /> */}
      {/* <NameList02 /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <ClassClick /> */}
      {/* <FunctionClick /> */}
      {/* <Counting /> */}
      {/* <Practice /> */}
      {/* <Message /> */}
      {/* <Greet name="Joshua" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Isaac" heroName="Superman" >
        <button>Action</button>
      </Greet> */}
      {/* <Greet name="Jed" heroName="Wonderman" /> */}
      {/* <Welcome name="Joshua" heroName="Batman" />
      <Welcome name="Isaac" heroName="Superman" />
      <Welcome name="Jed" heroName="Wonderman" /> */}

      {/* <Hello /> */}
    </div>
  );
}

export default App;
