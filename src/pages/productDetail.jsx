import { useContext } from "react"
import { useParams } from "react-router-dom"
import { userContext } from "../App"

export const ProductDetail = () => {
    const { data } = useContext(userContext)

    const { id } = useParams()
    return (
        <>

        </>
    )
}