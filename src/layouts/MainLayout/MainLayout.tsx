import { Outlet } from "react-router-dom"
import { Footer } from "../../components/partials/Footer/Footer"
import { Header } from "../../components/partials/Header/Header"
import { MainStyle } from "../../styled/elements"

export const MainLayout = () => {
  return (
    <>
        <Header />
        <MainStyle>
            <Outlet />
        </MainStyle>
        <Footer />
    </>
  )
}
