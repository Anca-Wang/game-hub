import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import GameDetailPage from "./pages/GameDetailPage";

const router = createBrowserRouter([
    {
        path: 'https://game-hub-seven-peach.vercel.app/',
        element: <Layout />,
        children: [
            {index: true, element: <HomePage />},
            {path: 'games/:id', element: <GameDetailPage />},
        ]
    }
])

export default router;