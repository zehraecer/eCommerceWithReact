import { useContext } from "react"
import { GetProducts } from "../components/api"
import { userContext } from "../App"
import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
export const Product = () => {

    const { setData, data } = useContext(userContext)

    GetProducts.get().then(result => setData(result))

    return (

        <>
            <div>

                <div style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}>


                    {data.map((element) => {
                        return (

                            <Link to={`${element.id}`} key={element.id} >

                                <img style={{ width: "120px", height: "120px" }} src={element.thumbnail} alt="" />
                                <h3 >{element.title}</h3>
                            </Link>
                        )
                    })}
                </div>
                <Outlet />
            </div >
        </>
    )
}