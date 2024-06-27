import { Link } from "react-router-dom"

export const Header = () => {

    return (

        <>
            <div className="header">


                <div className="header-left">

                    <h3>sneakers</h3>
                    <div className="navBar">

                        <Link to="/">Anasayfa</Link>
                        <Link to="/product">Ürünler</Link>
                        <Link to="/basket">sepet</Link>
                    </div>
                </div>

                <div className="header-right">

                    <img className="shape" src="Shape.png" alt="" />
                    <img className="avatar" src="image-avatar.png" alt="" />
                </div>

            </div>

        </>
    )
}