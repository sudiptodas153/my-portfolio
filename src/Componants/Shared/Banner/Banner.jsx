import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = ({ data }) => {
    const settings = {
       
        infinite: false, 
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    const images = data.allImg
    // console.log(images)

    return (
        <div className="">
            <div className="slider-container md:h-[450px] overflow-hidden mt-9 px-1">
                <Slider {...settings}>
                    {
                        images.map( i =>
                            <div>
                                <img
                                    src={i}
                                    alt="Single Slide"
                                    className="w-full h-full object-cover rounded"
                                />
                            </div>
                        )
                    }

                </Slider>
            </div>
        </div>
    );
};

export default Banner;
