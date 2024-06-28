import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { userContext } from "../App"
import { NotFound } from "./notFound"

export const ProductDetail = () => {
    const { data } = useContext(userContext)
    const { id } = useParams()
    const [stock, setStock] = useState(0)

    const post = data.find((element) => element.id == id)
    if (!post) {
        return <NotFound />
    }

    const stockIn = () => {
        if (stock > 0) {
            setStock(stock - 1)

        }
    }

    console.log(post);
    return (
        <>
            <div className="product">

                <div className="product-left">
                    <img src={`${post.images}`} alt="" />

                </div>

                <div className="product-right">

                    <h4>{post.title}</h4>
                    <h3>{post.brand}</h3>
                    <p>{post.description}</p>

                    <div className="price">
                        <div className="price-left">
                            <h5>{post.price}</h5>
                            <h6>$250.00</h6>
                        </div>
                        <div>

                            <button>{post.discountPercentage}%</button>
                        </div>
                    </div>

                    <div className="product-lower">

                        <div className="stock">
                            <button className="stockIn" onClick={stockIn}>-</button>
                            <h4>{stock}</h4>
                            <button onClick={() => setStock(stock + 1)} >+</button>

                        </div >

                        <div className="addToCart">

                            <img src="../white-shape.svg" alt="" />
                            <span  >  Add to cart</span>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}