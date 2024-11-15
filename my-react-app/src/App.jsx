import "./App.css";

function App() {
  return (
    <>
      {/* React Tutorial */}

      {/* React, sometimes referred to as a frontend JavaScript framework,
      is a JavaScript library created by Facebook.
      React is a tool for building UI components. */}

      {/* Instead of manipulating the browser's DOM directly,
      React creates a virtual DOM in memory,
      where it does all the necessary manipulating, before making the changes in the browser DOM. */}

      {/* React finds out what changes have been made, and changes only what needs to be changed. */}

      {/* To create a React Project using vite: npm create vite@latest */}
      {/* Then answer the first question of naming your React Project, followed by Choosing Framework usually JavaScript or TypeScript */}
      {/* cd ReactProjectName, npm i */}
      {/* npm run dev, to start the server */}

      {/* Directory Structure 
      node_modules: Contains all the JavaScript Dependencies our Project needs
      public: Contains all the public assets , i.e., images, videos, icons, etc..
      src: Brain of our Application, within the src folder we have assets folder that contain all the media and icons, and we have jsx and css files,
      the main,jsx is simply target the div element in our HTML with the id of root and rendering App.jsx in it
      App.jsx will contain our custom build components
      index.css is being imported in main.jsx while App.css is being imported in App.jsx

      index.html: this is the root of our file which will be rendered in our Browser
      package.json: this contains certain pre-built scripts and we can also write our own custom scripts, it also contains a map of all the dependencies being used


      */}

      {/*
      MAIN.JSX
      main .jsx has code in it which is saying to grab a div element in our HTML and render App.jsx component in it with React Strict mode
      If we see our Index.html we find that main.jsx is external JavaSCript file connected to HTML using the script tag
      React.StrictMode comes from react Library and it helps us to identify and fix errors and is recommended but not necessary, it is responsible for double execution that we see in our console whether it is logging or printing error 
       */}

      {/* INSTALL Tailwind
      Go to tailwind website and follow the steps
       */}

      {/* Dynamic Data :-
      we can declare a variable and a value to it, before the return statement 
      then using curly braces we can print that value in our JSX

      const hello = "Hello";
      return(<div>{hello}</div>)
       */}

      {/* Attribute Binding :- 
      We can even pass the attribute value as variables
      const attributeValue = 'text-4xl font-bold';
      return(<div className = {attributeValue}>{hello}</div>)

      We can also pass Dynamic Data or Attribute Biding conditionally using ternary operator

      const loggedIn = false;
      return(<div className = {loggedIn && attributeValue}>{loggedIn && hello}</div>)

      */}

      {/* List rendering :-
      const nums = [1, 2, 3, 4, 5, 6, 7];

      return (<div><ul>{nums.map((num, index) => (

        <li key={index}>{num}</li>
      
        ))</ul></div>)

       */}

      {/* Click Events and Reactivity :-

      let count = 0;

      return(<div> <p>The count is {count}</p>  <button onClick = {count = count + 1;}>Click Me</button></div>)

      The above code won't work, and we won't see our count increase even though the variable increases in value
      because the count variable is not reactive, i.e., it is not constantly looking for the changes it goes through and hence it is not updating itself
       */}

      {/* REACT HOOKS */}
      {/* UseState Hook
      import {useState} from "react";
      
      const [variableNameInCamelCasing, functionNameToChangeTheValueOfVariableInCamelCasing] = useState(valueOfVariable);
      console.log(useState());
      // Output : [undefined, function()]

      const [exampleObject, setExampleObject] = useState({
      id: 1,
      body: "post-body"
      })

      return(<div> <p>The count is {count}</p>  <button onClick = {() => functionNameToChangeTheValueOfVariableInCamelCasing((prev)=>prev+1;)}>Click Me</button></div>)
      // You need to pass the function Onclick as an anonymous function because not doing so calls the function right away and gives error
      // One of the most use case of UseState is in Form
      <form action="">
      <input type="text" onChange = {(e)=>functionNameToChangeTheValueOfVariableInCamelCasing(e.target.value} value={variableNameInCamelCasing}/>
      </form>

      // In react a state is considered read-only, hence it's value is to be replaced rather than mutate
      <form action="">
      <input type="text" value={exampleObject.id} onChange = (() => {setExampleObject({...title, id: e.target.value})}) />
      <input type="text" value={exampleObject.body} onChange = (() => {setExampleObject({...id, body: e.target.value})}) />
      </form>

      // We need a spread operator and even though we do not want to change the body of the object we need to pass it,
      // as values in state do not mutate they replace and not replacing the value of body and other future parameters will ensure that they are lost and our state will no longer have anything called `body`

      // You cannot use Hooks inside Conditional Statements or Loops
      */}

      {/* UseReducer Hook
      a useReducer Hook is used in place of useState when we want our variable to remember it first ever value when it was created and also to define and use multiple modifications through passing the currentValue in function and returning the modified value
      console.log(useReducer);
      // Output: 0: undefined, 1: f ()
      
      const initializationValue = {count : 0};
      function reducer(currentValue(takes it automatically, officially known as state), varModifierDesignation(needs to be passed through dispatch, officially known as action)) {
        switch (varModifierDesignation.type) {
            case 'increment':
                return { count: currentValue.count + 1 };
            case 'decrement':
                return { count: currentValue.count - 1 };
            default:
                return state;// not returning state can result in lost of initial value
        }
    }
      const ReducerExample = () => {
      const [varName(officially known as state), varModifierDesignation(officially known as dispatch)] = useReducer(reducer, initializationValue(officially known as initialState));
      // The reducer parameter in useReducer is a function that takes two arguments; currentValue(officially known as state) and ModifierDesignation(the name of the function in which the value needs to be passed, officially known as action)
      // The reducer function and the initializationValue should be defined before the useReducer hook
      // Defining the reducer function and initialState outside the our function component can improve performance

      return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => varModifierDesignation({ type: 'increment' })}>Increment</button>
            <button onClick={() => varModifierDesignation({ type: 'decrement' })}>Decrement</button>
        </div>
    );
    }




      Simple Example :-
      const [name, setName] = useReducer(() => {}, 'Mike');
      return (
      <div>
      <h1>{name}</h1>
      <button onClick = {()=>{setName("jon")}} ></button> //this will result in our state being lost because the dispatch(setName) is passing itself into an empty function(reducer)
      
      </div>
      )

      const [name, setName] = useReducer((state, action) => { 
        action.type === 'change' ? 'jon' : state;
        }, 'Mike');
      return (
      <div>
      <h1>{name}</h1>
      <button onClick = {()=>{setName({type: "change"})}} ></button> //this will not result in our state being lost because the dispatch(setName) is now returning either the same state or a modified state
      </div>
      )

      Form Example(useState is recommended) :-
      const FormEx = () => {

        const formReducer = (state, action) => {
          if(action.type === 'set'){
          return {...state, ...action};// We cannot output objects in react and using spread operators solve this problem
          }
          return state;
          }

        const [formData, setFormData] = useReducer(formReducer, {name: '', age: ''});
        console.log(formData);

        const handleSubmit = (e)=>{
          e.preventDefault();
          setFormData({
          type: "set",
          output: `$  {formData.name} is ${formData.age} years old`
          })
          }

        return (
        <div>
        <h1>{formData.output}</h1>
        <form action="" onSubmit = {handleSubmit}>
        <input placeholder = "Name" type="text" value = {formData.name} onChange = {(e) => setFormData({type: "set", name: e.target.value})}/> // This data can be found in action when we print formData
        <input placeholder = "Age" type="number" min = "0" max = "90" value = {formData.age} onChange = {(e) => setFormData({type: "set", age: e.target.value})} />
        <button>Submit</button>
        </form>
        </div>
        )
        }


      Object Example(useReducer is Recommended) :-
      const ObjectEx = () => {
        const initPost = () => {
          return [{id : 1, title : "post one", like : 0}]
          }

        const objectReducer = (state, action) => {
          switch(action.type){
          case 'add' :
            return [...state, {id : 2, title : "post two", likes : 1}]
            break;
          case 'delete' :
            return state.filter(p => p.id !== action.id)
            break;
          case 'add' :
            break;
          default:
            state;
          }
          }
        const [post, setPost] = useReducer(ObjectReducer, null, initPost)
        // initPost is an argument to the optional parameter `init`, The initializer function should return the initial state, If it is not specified, the initial state is set to initialArg(which in this case is `null` as specified)
        // initialization function does not run when the component re-renders, that is changing the value of `post` will not re-render the entire component when initializer function is passed
        // Hence useReducer is very effective in calling API's
        console.log(post);
        return (
        <div>
        <button onClick = {() => setPost({type : 'add'})}>Add</button>
        {post.length > 0 && post.map((p) => (
          <div key = {p.id}>
          <h2>{p.title}</h2>
          </div>
          ))}
        </div>
        )
        }
      */}

      {/* UseContext Hook 
      Context lets a component receive information from distant parent without passing it as a prop
      Using useContext in React is indeed a method of creating a "global" variable in a parent component that can be accessed by its children and grandchildren (and beyond) without the need to pass these values down through props at every level.

      console.log(createContext());
      // Output : We get an Object with bunch of properties, This is a component that we can wrap our whole component tree with it and then use the Provider property to send the data and share it with the component tree
      // So normally in real world application we would have an external file lat's say: MyContext.js, in it we write :-
      import { createContext } from "react";
      export const MyContext = createContext();

      in our Parent Component:-
      import { MyContext } from './MyContext';


      function App() {
      console.log(MyContext);

      const [user, setUser] = useState("Jon")

      return(
      <MyContext.Provider value ={{user, setUser}}>//Whatever we provide in this value will be available throughout the component tree
      <h1>React useContext</h1>
      <p>{user}</p>// It will change if we change the value in input tag of Form Component because they are communicating Back and Forth
      <Form />
      </MyContext.Provider>
      )

      Now inside Form Component(Child)
      import { useContext } from "react";
      import { MyContext } from './MyContext';
      const Form = () => {

        console.log(useContext(MyContext));//Output: {user: "Jon", setUser: f()}
        const {user, setUser} = useContext(MyContext);

        return(

        <>
        <input type="text" placeholder="Name" value = {user} onChange = {(e) => {setUser(e.target.value)}} />
        </>  
        )
        }
      }

      */}

      {/* UseRef Hook
      In short, it is a replacement of methods like document.querySelector or document.getElementById, because those methods are for ActualDOM, while in react we work with VirtualDOM hence we use useRef
      useRef is a hook in React that provides a way to create a mutable object that persists for the lifetime of the component.
      Note that useState is immutable and only replaceable
      It is typically used for accessing and interacting with DOM elements directly, or to store a mutable value that does not trigger a re-render when changed.
      useRef persists a value across re-renders without causing a re-render when the value changes.

      console.log(useRef());
      // Output: {current: undefined}
      useRef is not reactive like useState

      const myRef = useRef('Mike);

      myRef.current = "Jon";

      console.log(myRef);//Output: {current: Jon}

      
      
      *Now in our Form Component :-
      import { useRef } from "react";
      
      const Form = () => {
      const formData = useRef(null);
      console.log(formData);//Output: null

      useEffect(() => {
        console.log(formData);//Output: {current: form}
        })

      const handleSubmit = (e) =>{
        e.preventDefault();
        const userName = formData.current.username.value;
        console.log(userName);
        }

      // Now we want to attach formData reference to a form
      return(
      <form action="" ref ={formData}>
      <input type="text" name="username" />
      </form>
      //This is expected to return the value of formData to be {current: form}, but it doesn't and that is because of a warning in useRef called PitFall
      // which says that we should not write or read to the ref.current property during rendering
      // hence we should use something like useEffect or Event Handlers 
      )

      }
       */}

      {/* UseEffect Hook
      This hook runs on every state change and when the component Mounts or re-renders
      This is a good hook to fetch data in the initial load of our application
      We also have to be careful because it runs on every state change
      useEffect Hook lets you synchronize a component with an external system

      console.log(useEffect(() => {]}));// Output: undefined 
      
      import {useEffect} from "react";

      useEffect(() => {console.log("Effect Run")});//It will run every time the state changes
      
      Passing a state change function such as setCount will create an infinite loop as every time useEffect is called it changes the state and that state change will again trigger useEffect and the cycle continues
      If you need to change the state in useEffect the good thing is it accepts an array of dependencies
      and this dependencies contain values which will mean that the useEffect will only be triggered when the values in the dependency array changes
      // we cannot make the input function in useEffect as async. we need to create another function inside our argument function that can be made async
      useEffect(() => {
        const fetchData = async() => {
          await console.log("Hello");
          }
        fetchData();
        }, [])

      useEffect(() => {console.log("Effect Run")}, [num]);

      */}

      {/* Custom Components 

      Go to the src folder and  create a folder called components now inside that folder we will create our reusable jsx files whose name will be similar to the name of function component
      then we import them in app.jsx

      import {AddNum} from "./components/AddNum";

      <AddNum/>
      //or
      <AddNum></AddNum>
      */}

      {/* Component Props(variable and state) and Event(functions) and Slots
      In order to communicate from a PARENT to the CHILD we can use Props
      lets say there is a state or  variable or a function that we want to pass down to a child from a parent

      const [name, setName] = useState("Hardik");
      const editName = (name) => {
        setName(name)}
      // then to pass this state down we send it like assigning an attribute the the component ,
      the attribute name will be whatever we choose

      <AddNum myName = {name} changeName = {editName}> <h1>Child Element</h1>  </AddNum>

      now to access Event and Props in our child we pass the argument of props in our function

      const AddNum = (props) =>{
        {props.myName}
        {props.changeName}
        {props.children}
        }
      // we can also destructure it
      const AddNum = ({myName, editName, children}) =>{
        {myName}
        {editName}
        {children}
        }

      for our Child Element(<h1>) to show we need to define a placeholder in our Child Element
      */}

      {/* For good practice have two more folders just like components in src
      1. Pages, inside it create files such as Home.jsx and PostCreate .jsx, which will be imported in App.jsx, and used for Navigating and rendering different Pages
      2. Layout, inside it create a file called layout.jsx which consist of header, nav element with a main tag where the content of Pages will go; which will be imported in App.jsx, and used for Non Changeable part of our website

      These are also the structuring conditions to use ROUTER
      refer to w3School for react router documentation
      without react router, navigating pages will create a server call gain and again
       */}

      {/* React Router 

      Have the above written folder Structure

      npm i -D react-router-dom

      import { BrowserRouter, Routes, Route } from "react-router-dom";

      <BrowserRouter> // We wrap our content first with <BrowserRouter>.
        <Routes> // Then we define our <Routes>. An application can have multiple <Routes>. Our basic example only uses one.
          <Route path="/" element={<Layout />}> // <Route>'s can be nested. The first <Route> has a path of / and renders the Layout component. Basically Layout will always be there no matter what page
            <Route index element={<Home />} /> // It means if we combine "/" in the URL with nothing <Home/> Component will be rendered along side persisting <Layout /> Component
            <Route path="blogs" element={<Blogs />} /> // It means if we combine "/" in the URL with "blogs" <Blog/> Component will be rendered along side persisting <Layout /> Component
            <Route path="contact" element={<Contact />} /> // It means if we combine "/" in the URL with "contact" <Contact/> Component will be rendered along side persisting <Layout /> Component
            <Route path="*" element={<NotFound />} /> // It means if we combine "/" in the URL with "anyRouteThatWeDon'tDefine" <NotFound/> Component will be rendered along side persisting <Layout /> Component
          </Route>
        </Routes>
      </BrowserRouter>


      Now to navigate pages by clicking the respective buttons which were created in Layout we need to :-

      import {Link, Outlet} from "react-router-dom"; // in Layout.jsx

      and enclose Our buttons, div's, Content or whatever in Link element
      <Link to = "/"> Home </Link>
      <Link to = "/blogs"> Blogs </Link>
      <Link to = "/contact"> Contact </Link>


      Now all that remains is to render the components we want when a link is clicked, for that we will use Outlet which is very similar to props.children
      we place it wherever inside the Layout.jsx where we want to render the pages, which is mostly in <main><Outlet /></main>
      */}

      {/* Rendering
      You know the drill use .map also for functionalities such as Create, Read, Update, Delete we need to define them where the data is being defined or being called in not in the Child component  
      */}

      {/* JSON Server

      npm i -g json-server (for global installation)
      npm i -D json-server (for Dependency)

      create in root directory(MY-REACT-APP) db.json

      pass the data in db.json as value by creating an object and creating a key called "posts"

      then write command: npx json-server ./db.json -w

      this will give us an endpoint hosted on a localhost:3000/posts
      then we will use useEffect to make an API call
      
      useEffect(() => {
        fetch("http://localhost:3000/posts").then(res=>res.json()).then(data => setPosts(data));
        }, [])
       */}

      {/* Add Loading and Catch Error
      
      const [loading, setLoading] = useState(true);

      useEffect(() => {
        fetch("http://localhost:3000/posts").then(res=>res.json()).then(data => {
          setPosts(data);
          setLoading(false);
          });
        }, []).catch(err){ console.error(err.message);}

        return(
        {loading && <h1> Loading... </h1>}
        )
        */}

      {/* useNavigate Hook, used for redirect

      import {useNavigate} from "react-router-dom";

      const navigate = useNavigate();

      navigate('/');
      */}

      {/* SweetAlert2
      To install: npm i sweetalert2
      
      In our Component File
      import Swal from "sweetalert2";

      export default Component(){
      const handleClick = () => {
        Swal.fire(
        'The Internet ?,//This is like Card heading
        'That thing is still around',//This is like Card description
        'question'//This is the Icon that will render above heading
        //It will have a default button of OK
        )
        //Other icons include: success, error, warning, info, error
        //Other themes include: dark, minimal, borderless,
        
        Swal.fire(
        'Do you want to delete ?',
        'This will permanently delete this item',
        'question'
        ).then(result) =>{
          if(result.isAccepted){
          Swal(
          'Your File has been deleted',{
          icon: 'Success',
          }
          )};
          else{
          Swal("Well guess you'll appreciate it someday")
          }

          }
        }
      return(
      <button onClick={handleClick}>Alert!</button>
      )
      }
      */}
      {/* 
      React Quill
      It is a Text Editor
      To install: npm i react-quill
      In your component write :-
      import ReactQuill from 'react-quill';
      import 'react-quill/dist/quill.snow.css';
      import 'react-quill/dist/quill.bubble.css';
      // for every theme we need to import its corresponding css

      function MyComponent(){
      
      const [value, setValue] = useState('');
      
      var toolbarOptions = [['bold', 'italic'], ['link', 'image']];//this is the toolbar options or the text editing functions
      
      const modules = {
      toolbar: toolbarOptions,
      };

      return(
      <ReactQuill 
      theme = 'snow'//this is one of the themes which is provided by ReactQuill
      modules = {modules}
      value = {value}
      onChange = {setValue}
      />
      <ReactQuill 
      theme = 'bubble'
      value = {value}
      onChange = {setValue}
      />
      )
      }
       */}
      {/* Lexical
       It is a Text Editor 
       */}
      {/* Tiptap
       It is a text Editor
        */}

      {/* React Formik 
      It is a Library that allows us to deal with forms in react
      It handles the annoying part of forms such as onChange, validation(we will use `Yup` library for validation) and handling form submissions seamlessly
      It removes the need to use multiple useStates and handle changes when we overload our form with inputs
      To install: npm install formik, npm install yup
      In your React component
      import { useFormik } from 'formik';
      import * as Yup from 'yup';

      export default Form = () =>{
        const formik = useFormik(
          {
            // first define the initial empty state that we define while creating our own forms
          initialValue: {
          firstName: "",
          lastName: "",
          email: ""
          },
          validationSchema: Yup.object({
          firstName: Yup.string().max(15, "Provided name exceeds 15 Characters").required("This field is required and cannot be empty"),
          lastName: Yup.string().max(20, "Provided name exceeds 20 Characters").required("This field is required and cannot be empty"),
          email: Yup.string().email("Invalid Email address").required("This field is required and cannot be empty"),
          }),
          // handle form Submit
          // the values parameter are initialValues
          onSubmit: (values) => {
            console.log(values);
            }
          }
          );

          console.log(values);
          console.log(formik.errors);
          console.log(formik.touched);
        return(
        <form action="" onSubmit = {formik.handleSubmit}>//onSubmit calls the function onSubmit defined in const formik

        <div className="input-container">
        <input
        id="firstName" 
        name="firstName" 
        type="text" 
        placeholder="first Name" 
        onChange={formik.handleChange}//instead of setFirstName
        onBlur={formik.handleBlur}// through this we will only display errors when the input has been touched and not before they are touched  
        value={formik.values.firstName}// instead of firstName
        />
        // Displaying Validation errors below
        {formik.touched.firstName && formik.errors.firstName ? <p>{formik.firstName.errors}</p> : null}
        </div>
        
        <div className="input-container">
        <input
        id="lastName" 
        name="lastName" 
        type="text" 
        placeholder="last Name" 
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur}// through this we will only display errors when the input has been touched and not before they are touched  
        value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? <p>{formik.lastName.errors}</p> : null}
        </div>

        <div className="input-container">
        <input
        id="email" 
        name="email" 
        type="email" 
        placeholder="firstName" 
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}// through this we will only display errors when the input has been touched and not before they are touched  
        value={formik.values.email}
        />
        </div>
        {formik.touched.email && formik.errors.email ? <p>{formik.email.errors}</p> : null}
        <button type="submit">Submit Form</button>

        </form>
        )
        }
      */}
      {/* MERN Folder Structure
      client(Front End Folder)
        |
        |-node_modules(consist of all the libraries that we install and use)
        |-public(consist of images, videos, logo)
        |-src
          |-assets(We can keep our images folder, or svg's, or json files and CSS folder)
            |-css
            |-images
          |-components(consist folders and files of our React Component)
            |-PageNotFound.js
            |-Loader.js
            |-ScrollToTop.js
          |-context(Consist of our useContext)
            |-globalContext.js(consist of code like import {createContext} from React, export default const GlobalContext = createContext())
            |-GlobalContextProvider.js(consist of code )
          |-layouts
          |-pages
          |-hooks(consist of custom hooks)
            |-useCountdown.js
            |-useDebounce.js
          |-schemas
          |-utils(consist of anything small that is useful, and does not really have another folder which it makes sense to put it in)
            |-helpers.js
            |-formatting.js
          |-App.jsx(mainly contains BrowserRouter from react-router-dom)
          |-index.css
          |-main.jsx
        |-.gitignore
        |-.env
        |-index.html
        |-package-lock.json
        |-package.json

        server(Back End Folder)
          |
          |-node_modules(consist of all the libraries that we install and use)
          |-src
            |-controllers(files here are used to manage validations and other operations that we need to perform once the route gets hit, similar to controllers ono Laravel)
            |-models
            |-utils
            |-index.js(here we make our server listen and perform a Database connection, also we define the root route to route : const route = require("./routes") app.use('/', route))
            |-routes.js(here we define which routes should have which controller, similar to web.php in laravel)
          |-
          |-.gitignore
          |-.env
          |-package.json
          |-package-lock.json
          |-
          |-
          |-
          |-
          |-
          |-
          |-
          |-
          |-
          |-
         */}

      {/* React Fundamentals and Advanced Topics */}
      {/* React Hooks */}
      {/* React Redux */}
      {/* React Formik */}
      {/* React Storybook */}
      {/* React Render */}
      {/* Practical React */}

      {/* React Table
          To visualize data is inevitable and table is a great way to do so
          Building your own table component can be challenging and time consuming
          React Table is a component Library, a collection of hooks for building powerful tables and data grid experiences
          These hooks are lightweight, composable and ultra-extensible
          They do not render any MARKUP or STYLES for you
          React Table doesn't render or supply any actual UI elements
          It is a table utility and not a table component, hence we need to integrate existing UI themes 

          create a new folder in src folder called components
          install a package: npm i react-table
          use mockeroo.com to generate mock data
          Basic Table
          A basic tab;e can be implemented in 6 simple steps
          1.) Get the Data(the one you want to display in the table)
          2.) Define the Columns for your table
          3.) Use the Data and the Defined Columns to create a table instance using react-table
          4.) Define a basic table structure using plain HTML
          5.) Use the Table instance in STEP 3 to bring life to HTML table in STEP 4
          6.) Include the desired CSS
          
          Adding Footer to the Table
          1.) Go to columns.js, similar to specifying a Header property for each column we need to specify a Footer property
          2.) Use react table to render Footer, go to const which is using useTable hook or in this case table instance, and add `footerGroups` to spread operator
          3.) Add the jsx of footer below tbody tag, and add the css of tfoot in external CSS file
          
          Grouping Headers with React Table(putting multiple column sunder a common heading)
          We will group first name and last name under Name and rest of te column under Info
          1.) In column.js, export GROUPED_COLUMN named variable with an array stored in it
          2.) In BasicTable.js import GROUPED_COLUMNS from column.js and pass it into useMemo in place of Columns

          Implementing Sorting Feature in the React Table
          1.) Create a file in components folder called SortingTable.js
          2.) copy the code from Basic Table and paste it in sorting table and change the component name
          3.) import another hook from react-table called useSortBy, then pass it in the useTable hook
          4.) in the th tag in ...column.getHeaderProps(), pass column.getSortByToggleProps(): this adds properties related to the sorting feature on the individual column
          5.) We can now add icons to indicate if column is sorted

          In a file in the components folder called columns.js
          export const Columns = [
          {
          Header: 'ID',//Column Name we want to show
          Footer: 'ID',//Footer name we want to show
          accessor: 'id'//Data we want to fill the column with
          },
          {
          Header: 'First Name',//Column Name we want to show
          Footer: 'First Name',//Footer name we want to show
          accessor: 'first_name'//Data we want to fill the column with
          },
          {
          Header: 'Last Name',//Column Name we want to show
          Footer: 'Last Name',//Footer name we want to show
          accessor: 'last_name'//Data we want to fill the column with
          },
          {
          Header: 'Email',//Column Name we want to show
          Footer: 'Email',//Footer name we want to show
          accessor: 'email'//Data we want to fill the column with
          },
          {
          Header: 'Date of Birth',//Column Name we want to show
          Footer: 'Date of Birth',//Footer name we want to show
          accessor: 'date_of_birth'//Data we want to fill the column with
          },
          {
          Header: 'Country',//Column Name we want to show
          Footer: 'Country',//Footer name we want to show
          accessor: 'country'//Data we want to fill the column with
          },
          {
          Header: 'Phone Number',//Column Name we want to show
          Footer: 'Phone Number',//Footer name we want to show
          accessor: 'phone'//Data we want to fill the column with
          }
          ]

          export const GROUPED_COLUMNS = [
          {
          Header: 'ID',
          Footer: 'ID',
          accessor: 'id'
          },
          {
          Header: 'Name',
          Footer: 'Name',
          columns: [//This array consist of Objects where each Object consist of columns to be merged
            {
            Header: 'First Name',
            Footer: 'First Name',
            accessor: 'first_name'
            },
            {
            Header: 'Last Name',
            Footer: 'Last Name',
            accessor: 'last_name'
            }
          ]
          },
          {
          Header: 'Info',
          Footer: 'Info',
          columns: [//This array consist of Objects where each Object consist of columns to be merged
            {
              Header: 'Email',
              Footer: 'Email',
              accessor: 'email'
            },
            {
              Header: 'Date of Birth',
              Footer: 'Date of Birth',
              accessor: 'date_of_birth'
            },
            {
              Header: 'Country',
              Footer: 'Country',
              accessor: 'country'
            },
            {
              Header: 'Phone Number',
              Footer: 'Phone Number',
              accessor: 'phone'
            }
          ]
          }
          ]

          STEP 3 :- In the components folder create a new file called BasicTable.js
          
          import React, { useMemo } from "react";
          import { useTable, useSortBy } from "react-table";
          import MOCK_DATA from "./MOCK_DATA.json";
          import { Columns, GROUPED_COLUMNS } from "./columns";
          // STEP 6 :-
          import './table.css';

          export const BasicTable = () => {
            // a hook is simply a function, we call that function within a component
            // the useTable hook recommends that you memoize the rows and columns using useMemo hook
            
            const columns  = useMemo(() => {return GROUPED_COLUMNS}, []);
            const data  = useMemo(() => {return MOCK_DATA}, []);
            const tableInstance = useTable({
            columns: columns,
            data: data,
            }, useSortBy)
            // STEP 5 :-
            // begin with destructuring a couple of properties and methods
            const {
            getTableProps,//goes to the table tag as attribute
            getTableBodyProps,//goes to the tbody tag as attribute
            headerGroups, //goes to the thead tag as content
            footerGroups, //
            rows, //goes to the tbody tag as attribute
            prepareRow //goes to the tbody tag as attribute } = tableInstance
            return(
            <div>
            // STEP 4 :-
            <table {...getTableProps()}>
              <thead>
              {
              headerGroups.map((headerGroup) => {
              <tr {...headerGroup.getHeaderGroupProps()}>
              {
              headerGroup.headers.map( column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {
                  column.render('Header')
                  }
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? 'Descending' : 'Ascending') : 'Not at all sorted'}
                  </span>
                </th>
                ))
              }
              </tr>
                })
              }
              </thead>

              <tbody {...getTableBodyProps()}>
              {
              rows.map(row => {
                prepareRow(row)
                return (
                <tr {...row.getRowProps()}>
                {
                row.cells.map( cell => {
                  <td {...cell.getCellProps()}>
                  {cell.render('Cell)}
                  </td>
                  })
                }
                </tr>
                )
                })
              }
              </tbody>

              <tfoot>
              {
              footerGroups.map(footerGroup => {
                <tr {...footerGroup.getFooterGroupProps()}>
                {
                footerGroup.headers.map(column => (
                  <td {...column.getFooterProps}>
                  {
                  colunm.render('Footer')
                  }
                  </td>
                  ))
                }
                </tr>
                })
              }
              </tfoot>
            </table>

            </div>
            ) 
          }
        */}
    </>
  );
}

export default App;
