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
            <div className="product">

                <div className="product-left">
                    <img src={`${post.images}`} alt="" />

                </div>

                <div className="product-right">

                    <h4>Sneaker Company</h4>
                    <h3>Fall Limited Edition Sneakers</h3>
                    <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

                    <div className="price">
                        <div className="price-left">
                            <h5>$125.00</h5>
                            <h6>$250.00</h6>
                        </div>
                        <div>

                            <button>50%</button>
                        </div>
                    </div>

                    <div className="product-lower">

                        <div className="stock">
                            <button>-</button>
                            <h4>0</h4>
                            <button>+</button>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}