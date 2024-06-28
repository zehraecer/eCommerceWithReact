import { useContext } from "react"
import { GetProducts } from "../components/api"
import { userContext } from "../App"
import { Link, Outlet } from "react-router-dom"

export const Home = () => {

    return (

        <>
            <h1>Burası Anasayfa</h1>
            <Link to="/product"> Ürünleri görmek istiyorsan tıkla</Link>
        </>
    )
}