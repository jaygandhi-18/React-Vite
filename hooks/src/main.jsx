import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import AAuseState from "./hooks/useState/AAuseState.jsx";
import AAuseEffect from "./hooks/useEffect/AAuseEffect.jsx";
import AAuseRef from "./hooks/useRef/AAuseRef.jsx";
import Home from "./components/Home.jsx";
import Counter from "./hooks/useState/Counter.jsx";
import TextArea from "./hooks/useState/TextArea.jsx";
import CheckBox from "./hooks/useState/CheckBox.jsx";
import From from "./hooks/useState/From.jsx";
import ChatRooms from "./hooks/useEffect/chatRooms.jsx";
import VisiblityElement from "./hooks/useEffect/VisiblityElement.jsx";
import GlobalEvent from "./hooks/useEffect/GlobalEvent.jsx";
import StopWatch from "./hooks/useRef/StopWatch.jsx";
import ClickCount from "./hooks/useRef/ClickCount.jsx";
import EffectHome from "./hooks/useEffect/EffectHome.jsx";
import StateHome from "./hooks/useState/StateHome.jsx";
import RefHome from "./hooks/useRef/RefHome.jsx";
import AAuseReducer from "./hooks/useReducer/AAuseReducer.jsx";
import ReducerHome from "./hooks/useReducer/ReducerHome.jsx";
import AgeReducer from "./hooks/useReducer/AgeReducer.jsx";
import ToDoListReducer from "./hooks/useReducer/ToDoListReducer.jsx";
import RefTextArea from "./hooks/useRef/RefTextArea.jsx";

// Lazy — useMemo
const AAuseMemo = lazy(() => import("./hooks/useMemo/AAuseMemo.jsx"));
const MemoHome = lazy(() => import("./hooks/useMemo/MemoHome.jsx"));
const MemoEnable = lazy(() => import("./hooks/useMemo/MemoEnable.jsx"));
const MemoDisable = lazy(() => import("./hooks/useMemo/MemoDisable.jsx"));

// Lazy — useCallBack
const AAuseCallBack = lazy(
  () => import("./hooks/useCallBack/AAuseCallBack.jsx"),
);
const CallBackHome = lazy(() => import("./hooks/useCallBack/CallBackHome.jsx"));
const CallBackEnable = lazy(
  () => import("./hooks/useCallBack/CallBackEnable.jsx"),
);
const CallBackDisable = lazy(
  () => import("./hooks/useCallBack/CallBackDisable.jsx"),
);

const S = ({ children }) => (
  <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/useState",
        element: <AAuseState />,
        children: [
          { path: "StateHome", element: <StateHome /> },
          { path: "Counter", element: <Counter /> },
          { path: "TextArea", element: <TextArea /> },
          { path: "CheckBox", element: <CheckBox /> },
          { path: "From", element: <From /> },
        ],
      },
      {
        path: "/useEffect",
        element: <AAuseEffect />,
        children: [
          { path: "EffectHome", element: <EffectHome /> },
          { path: "ChatRooms", element: <ChatRooms /> },
          { path: "GlobalEvent", element: <GlobalEvent /> },
          { path: "VisiblityElement", element: <VisiblityElement /> },
        ],
      },
      {
        path: "/useRef",
        element: <AAuseRef />,
        children: [
          { path: "RefHome", element: <RefHome /> },
          { path: "ClickCount", element: <ClickCount /> },
          { path: "StopWatch", element: <StopWatch /> },
          { path: "RefTextArea", element: <RefTextArea /> },
        ],
      },
      {
        path: "/useMemo",
        element: (
          <S>
            <AAuseMemo />
          </S>
        ),
        children: [
          {
            path: "MemoHome",
            element: (
              <S>
                <MemoHome />
              </S>
            ),
          },
          {
            path: "MemoEnable",
            element: (
              <S>
                <MemoEnable />
              </S>
            ),
          },
          {
            path: "MemoDisable",
            element: (
              <S>
                <MemoDisable />
              </S>
            ),
          },
        ],
      },
      {
        path: "/useCallBack",
        element: (
          <S>
            <AAuseCallBack />
          </S>
        ),
        children: [
          {
            path: "CallBackHome",
            element: (
              <S>
                <CallBackHome />
              </S>
            ),
          },
          {
            path: "CallBackEnable",
            element: (
              <S>
                <CallBackEnable />
              </S>
            ),
          },
          {
            path: "CallBackDisable",
            element: (
              <S>
                <CallBackDisable />
              </S>
            ),
          },
        ],
      },
      {
        path: "/useReducer",
        element: <AAuseReducer />,
        children: [
          { path: "ReducerHome", element: <ReducerHome /> },
          { path: "AgeReducer", element: <AgeReducer /> },
          { path: "ToDoListReducer", element: <ToDoListReducer /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
// import { createBrowserRouter, RouterProvider } from "react-router";
// import AAuseState from "./hooks/useState/AAuseState.jsx";
// import AAuseEffect from "./hooks/useEffect/AAuseEffect.jsx";
// import AAuseRef from "./hooks/useRef/AAuseRef.jsx";
// import Home from "./components/Home.jsx";
// import Counter from "./hooks/useState/Counter.jsx";
// import TextArea from "./hooks/useState/TextArea.jsx";
// import CheckBox from "./hooks/useState/CheckBox.jsx";
// import From from "./hooks/useState/From.jsx";
// import ChatRooms from "./hooks/useEffect/chatRooms.jsx";
// import VisiblityElement from "./hooks/useEffect/VisiblityElement.jsx";
// import GlobalEvent from "./hooks/useEffect/GlobalEvent.jsx";
// import StopWatch from "./hooks/useRef/StopWatch.jsx";
// import ClickCount from "./hooks/useRef/ClickCount.jsx";
// import EffectHome from "./hooks/useEffect/EffectHome.jsx";
// import StateHome from "./hooks/useState/StateHome.jsx";
// import RefHome from "./hooks/useRef/RefHome.jsx";
// import AAuseMemo from "./hooks/useMemo/AAuseMemo.jsx";
// import MemoHome from "./hooks/useMemo/MemoHome.jsx";
// import MemoEnable from "./hooks/useMemo/MemoEnable.jsx";
// import MemoDisable from "./hooks/useMemo/MemoDisable.jsx";
// import AAuseCallBack from "./hooks/useCallBack/AAuseCallBack.jsx";
// import CallBackHome from "./hooks/useCallBack/CallBackHome.jsx";
// import CallBackEnable from "./hooks/useCallBack/CallBackEnable.jsx";
// import CallBackDisable from "./hooks/useCallBack/CallBackDisable.jsx";
// import AAuseReducer from "./hooks/useReducer/AAuseReducer.jsx";
// import ReducerHome from "./hooks/useReducer/ReducerHome.jsx";
// import AgeReducer from "./hooks/useReducer/AgeReducer.jsx";
// import ToDoListReducer from "./hooks/useReducer/ToDoListReducer.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { path: "/", element: <Home /> },
//       {
//         path: "/useState",
//         element: <AAuseState />,
//         children: [
//           { path: "StateHome", element: <StateHome /> },
//           { path: "Counter", element: <Counter /> },
//           { path: "TextArea", element: <TextArea /> },
//           { path: "CheckBox", element: <CheckBox /> },
//           { path: "From", element: <From /> },
//         ],
//       },
//       {
//         path: "/useEffect",
//         element: <AAuseEffect />,
//         children: [
//           { path: "EffectHome", element: <EffectHome /> },
//           { path: "ChatRooms", element: <ChatRooms /> },
//           { path: "GlobalEvent", element: <GlobalEvent /> },
//           { path: "VisiblityElement", element: <VisiblityElement /> },
//         ],
//       },
//       {
//         path: "/useRef",
//         element: <AAuseRef />,
//         children: [
//           { path: "RefHome", element: <RefHome /> },
//           { path: "ClickCount", element: <ClickCount /> },
//           { path: "StopWatch", element: <StopWatch /> },
//         ],
//       },
//       {
//         path: "/useMemo",
//         element: <AAuseMemo />,
//         children: [
//           { path: "MemoHome", element: <MemoHome /> },
//           { path: "MemoEnable", element: <MemoEnable /> },
//           { path: "MemoDisable", element: <MemoDisable /> },
//         ],
//       },
//       {
//         path: "/useCallBack",
//         element: <AAuseCallBack />,
//         children: [
//           { path: "CallBackHome", element: <CallBackHome /> },
//           { path: "CallBackEnable", element: <CallBackEnable /> },
//           { path: "CallBackDisable", element: <CallBackDisable /> },
//         ],
//       },
//       {
//         path: "/useReducer",
//         element: <AAuseReducer />,
//         children: [
//           { path: "ReducerHome", element: <ReducerHome /> },
//           { path: "AgeReducer", element: <AgeReducer /> },
//           { path: "ToDoListReducer", element: <ToDoListReducer /> },
//         ],
//       },
//     ],
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>,
// );
