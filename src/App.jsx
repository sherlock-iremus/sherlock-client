import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Home'
import About from './About'
import DescribeSherlockId from './features/navigation/SherlockId'
import DescribeUri from './features/navigation/Uri'
import DescribeTweet from './features/navigation/Tweet'
import YasguiC from './features/yasgui/YasguiC'
import User from './features/user/User'
import React from 'react'
import TestComponent from './TestComponent'
import AuthenticatedRoute from './common/AuthenticatedRoute'

const App = () => {
  /* https://github.com/remix-run/react-router/issues/7285
   * 
   * Since optionnal parameters are not supported anymore in react-router v6, 
   * we have to use two children routes routes.
   */
  return (
    <BrowserRouter basename={'/' + process.env.REACT_APP_BASENAME}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/id/:id/">
          <Route path=":view" element={<DescribeSherlockId />} />
          <Route path="" element={<DescribeSherlockId />} />
        </Route>
        <Route path="/describe/:uri/">
          <Route path=":view" element={<DescribeUri />} />
          <Route path="" element={<DescribeUri />} />
        </Route>
        <Route path="/tweet/">
          <Route path="" element={<DescribeTweet />} />
          <Route path=":userScreenName/">
            <Route path="" element={<DescribeTweet />} />
            <Route path=":statusId/" >
              <Route path=":view" element={<DescribeTweet />} />
              <Route path="" element={<DescribeTweet />} />
            </Route>
          </Route>
        </Route>
        <Route path="/yasgui" element={<YasguiC />} />
        <Route path="/test/:id" element={<TestComponent />} />
        <Route path="/me" element={<AuthenticatedRoute><User /></AuthenticatedRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

//TODO https://reactrouter.com/docs/en/v6/upgrading/v5
//TODO https://reactrouter.com/docs/en/v6/examples/auth
