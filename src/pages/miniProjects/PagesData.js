import { BsFillCalculatorFill, BsListCheck } from "react-icons/bs";
import { TiWeatherCloudy } from "react-icons/ti";
import { ImSpinner10 } from "react-icons/im";
import IPhoneCalculator from "./pages/iPhoneCalculator/IPhoneCalculator";
import Spinners from "./pages/Spinners/Spinners";
import ToDoApp from "./pages/ToDoApp/ToDoApp";
import WeatherApp from "./pages/WeatherApp/WeatherApp";

export const pagesData = [
    {
        route: "weather-app",
        element: <WeatherApp />,
        icon: <TiWeatherCloudy className="icon" />,
        name: "Weather App",
    },
    {
        route: "iphone-calculator",
        element: <IPhoneCalculator />,
        icon: <BsFillCalculatorFill className="icon" />,
        name: "iPhone Calculator",
    },
    {
        route: "to-do-app",
        element: <ToDoApp />,
        icon: <BsListCheck className="icon" />,
        name: "To do App",
    },
    {
        route: "spinners",
        element: <Spinners />,
        icon: <ImSpinner10 className="icon" />,
        name: "Spinners",
    },
];
