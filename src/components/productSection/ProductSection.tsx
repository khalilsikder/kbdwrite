import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import img1 from '../../assets/key15.jpg';
import img2 from '../../assets/key8.jpg';
import img3 from '../../assets/key9.jpg';

const ProductSection = () => {
  return (
    <Carousel className="container">
                <div className="relative w-full  mx-auto">
                    <img src={img1} />
                   <div className="absolute top-0 left-0 pt-80  w-full h-full flex place-items-end gap-4 pb-20 justify-center bg-black bg-opacity-30 text-[#04D3E6] text-3xl">
                   <p>exclusive gaming</p>
                   <p>stock in available</p>
                   </div>
                </div>
                <div className="relative w-full  mx-auto">
                    <img src={img2} />
                   <div className="absolute top-0 left-0 pt-80  w-full h-full flex place-items-end gap-4 pb-20 justify-center bg-black bg-opacity-30 text-[#04d3e6] text-3xl">
                   <p>exclusive gaming</p>
                   <p>stock in available</p>
                   </div>
                </div>
                <div className="relative w-full  mx-auto">
                    <img src={img3} />
                   <div className="absolute top-0 left-0 pt-80  w-full h-full flex place-items-end gap-4 pb-20 justify-center bg-black bg-opacity-30 text-[#04d3e6] text-3xl">
                   <p>exclusive gaming</p>
                   <p>stock in available</p>
                   </div>
                </div>
            </Carousel>
  );
};

export default ProductSection;