import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { RouteList } from "../routes"
import Header from "./header/Header"

const Layout = () => {
  return (
    <div>
      <Suspense>
        <Routes>
          {RouteList.map((row, index) => {
            if (!row.allowWithoutLogin) {
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
      </Suspense>
    </div>
  )
}
export default Layout;