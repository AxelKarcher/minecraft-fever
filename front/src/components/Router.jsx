import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import {background, light} from '../config/colors'

// const routes = [
//   {path: '/', elem: '/home'},
//   {path: '/home', elem: <HomePage />},
//   {path: '/projects', elem: <ProjectsPage />},
//   {path: '*', elem: '/home'}
// ]

const Router = ({routes}) => {
  return (
    <div style={{color: light, backgroundColor: background}}>
      <BrowserRouter>
        <Routes>
          {routes.map(({path, elem}, i) => (
            <Route
              key={i}
              path={path}
              element={typeof elem === 'string' ? <Navigate replace to={elem} /> : elem}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router