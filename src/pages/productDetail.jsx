import { useContext } from "react"
import { useParams } from "react-router-dom"
import { userContext } from "../App"
import { NotFound } from "./notFound"

export const ProductDetail = () => {
    const { data } = useContext(userContext)

    const { id } = useParams()

    const post = data.find((element) => element.id == id)
    if (!post) {
        return <NotFound />
    }

    console.log(post);

    return (
        <>

        </>
    )
}