import { Suspense } from 'react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import { RouteList } from './routes/index.js';
import Layout from './layout/Layout.jsx';
import Header from './layout/header/Header.jsx';


function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Suspense>
      {isLogin ? (<Layout />) : (
        <Suspense>
          <Header />
          <div className="wrapper">
          <Routes>
            
            {RouteList.map((row, index) => {
              if (row.allowWithoutLogin) {
                return (
                  <Route
                    key={index}
                    exact
                    path={row.path}
                    item={row}
                    element={<row.component />}
                  />
                )
              }
            })}
          </Routes>
          </div>
        </Suspense>
      )}
    </Suspense>
  )
}

export default App
