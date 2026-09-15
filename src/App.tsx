import { Route, Routes } from "react-router-dom"
import { MainLayout } from "./layouts/MainLayout/MainLayout.tsx"
import { HomePage } from "./pages/HomePage/HomePage.tsx"
import { CountryList } from "./components/modules/CountryList/CountryList.tsx"
import { CountryDetails } from "./components/modules/CountryDetails/CountryDetails.tsx"
import { AttractionList } from "./components/modules/AttractionList/AttractionList.tsx"
import { AttrationDetails } from "./components/modules/AttractionDetails/AttractionDetails.tsx"

export const App = () => {
   return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/countries" element={<CountryList mode="popular" />} />
        <Route path="/countries/:id" element={<CountryDetails />} />
        <Route path="/attractions" element={<AttractionList />} />
        <Route path="/attractions/:id" element={<AttrationDetails />} />
      </Route>
    </Routes>
   )
}
