import "./App.css";
import "./components/myStyles.css";
import ClassClick from "./components/ClassClick";
import Counter from "./components/Counter";
import EventBind from "./components/EventBind";
import FunctionClick from "./components/FunctionClick";
import Greet from "./components/Greet";
import Hello from "./components/Hello";
import Message from "./components/Message";
import NameList from "./components/NameList";
import ParentComponent from "./components/ParentComponent";
import Stylesheet from "./components/Stylesheet";
import UserGreeting from "./components/UserGreeting";
import Welcome from "./components/Welcome";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import FavouriteColor from "./components/useState/FavouriteColor";
import Car from "./components/useState/Car";
import Timer from "./components/useEffect/Timer";
import CounterUE from "./components/useEffect/Counter";
import Component1 from "./components/useContext/Component1";
import Ref from "./components/useRef/Ref";
import AccessDOMFocus from "./components/useRef/AccessDOMFocus";
import TrackingStateChange from "./components/useRef/TrackingStateChange";
import Counter1 from "./components/useReducer/Counter1";
import Counter2 from "./components/useReducer/Counter2";
import CounterUseMemo from "./components/useMemo/CounterUseMemo";
import MainuseCallb from "./components/useCallback/MainuseCallb";
import HoCMain from "./components/HOC/HoCMain";
import { lazy, Suspense } from "react";
import RenderProps from "./components/RenderProps";
const LazyMainUseCallBack = lazy(() =>
    import("./components/useCallback/MainuseCallb")
);

function App() {
    return (
        <>
            <RenderProps />
            {/* <HoCMain /> */}
            <Suspense fallback={<div>Loading...</div>}>
                <LazyMainUseCallBack />
            </Suspense>
            {/* <MainuseCallb /> */}
            {/* <CounterUseMemo /> */}
            {/* <Counter2 /> */}
            {/* <Counter1 /> */}
            {/* <TrackingStateChange /> */}
            {/* <AccessDOMFocus /> */}
            {/* <Ref /> */}
            {/* <Component1 /> */}
            {/* <CounterUE /> */}
            {/* <Timer /> */}
            {/* <Car /> */}
            {/* <FavouriteColor /> */}
            {/* <h1 className="error">Error</h1>
            <h1 className={styles.success}>Success</h1> */}
            {/* <Inline /> */}
            {/* <Stylesheet primary={true} /> */}
            {/* <NameList /> */}
            {/* <UserGreeting /> */}
            {/* <ParentComponent /> */}
            {/* <EventBind /> */}
            {/* <FunctionClick />
            <ClassClick /> */}
            {/* <Counter/> */}
            {/* <Message/> */}
            {/* <Greet name="Bruce" heroName="Batman"> This is children</Greet>
      <Greet name="Clark" heroName="Superman"> <button>Action </button> </Greet>
      <Greet name="Diana" heroName="Wonder Woman"/>
      <Welcome name="Bruce" heroName="Batman"> This is children</Welcome>
      <Welcome name="Clark" heroName="Superman"> <button>Action </button> </Welcome>
      <Welcome name="Diana" heroName="Wonder Woman"> </Welcome> */}
            {/* <Welcome/> */}
            {/* <Hello/> */}
        </>
    );
}

export default App;
