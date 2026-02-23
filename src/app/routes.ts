import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import AgeCalculator from "./pages/AgeCalculator";
import DateDifference from "./pages/DateDifference";
import ReligiousCalendar from "./pages/ReligiousCalendar";
import NationalDays from "./pages/NationalDays";
import Calculators from "./pages/Calculators";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "kalkulator-umur", Component: AgeCalculator },
      { path: "selisih-tanggal", Component: DateDifference },
      { path: "kalender-keagamaan", Component: ReligiousCalendar },
      { path: "hari-penting", Component: NationalDays },
      { path: "kalkulator", Component: Calculators },
      { path: "blog", Component: Blog },
      { path: "blog/:slug", Component: BlogPost },
      { path: "*", Component: NotFound },
    ],
  },
]);
