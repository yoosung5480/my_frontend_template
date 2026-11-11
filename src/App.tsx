import { Link, Outlet, Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import LetterPage from "./letterPages/LetterPage"

// URL이 달라져도 유지되는 사이트 공통 영역
function SiteLayout() {
  return (
    <div>
      <header>
        <nav aria-label="사이트 메뉴">
          <ul>
            <li><Link to="/">홈</Link></li>
            <li><Link to="/about">소개</Link></li>
            <li><Link to="/letter">편지 작성</Link></li>
          </ul>
        </nav>
      </header>

      {/* 현재 URL에 해당하는 페이지가 들어갈 자리 */}
      <Outlet />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="letter" element={<LetterPage />} />

        <Route
          path="*"
          element={<main><h1>페이지를 찾을 수 없습니다.</h1></main>}
        />
      </Route>
    </Routes>
  )
}