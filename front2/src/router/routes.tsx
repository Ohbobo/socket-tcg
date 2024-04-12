import { Routes, Route } from "react-router-dom";
import { CardsCollection } from "../components/menu/CardsCollection";
import { Shop } from "../components/menu/Shop";
import { Settings } from "../components/menu/Settings";
import { Game } from "../components/game/Game";
import { Homepage } from "../components/menu/Homepage";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/game" element={<Game />} />
            <Route path="/cards-collection" element={<CardsCollection />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
    )
}