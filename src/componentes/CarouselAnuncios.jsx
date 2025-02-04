import { Carousel } from "react-bootstrap"
import img1 from "../assets/images/banner_img (1).jpg"
import img2 from "../assets/images/banner_img (2).jpg"
import img3 from "../assets/images/banner_img (3).jpg"
import img4 from "../assets/images/banner_img (4).jpg"
import img5 from "../assets/images/banner_img (5).jpg"
import img6 from "../assets/images/banner_img (6).jpg"
import img7 from "../assets/images/banner_img (7).jpg"


function CarouselAnuncios() {
    return (
        <Carousel data-bs-theme="light">
            <Carousel.Item>
                <img className="d-block w-100" src={img1} alt="Primeiro Slide" />    
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={img2} alt="Segundo Slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={img3} alt="Terceiro Slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={img4} alt="Quarto Slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={img5} alt="Quinto Slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={img6} alt="Sexto Slide" />
            </Carousel.Item>
        </Carousel>



    )
}

export { CarouselAnuncios }