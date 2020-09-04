const { useEffect, useState, useRef, useCallback, useMemo, Fragment } = React;
const { render } = ReactDOM;
const {
  HashRouter: Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation,
  useHistory,
  useParams
} = ReactRouterDOM;



const utils = {
  isLogined(){
    return localStorage.getItem('LOGINED')
  }
}
