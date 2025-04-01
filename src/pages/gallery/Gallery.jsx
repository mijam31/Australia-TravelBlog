import GridGallery from "../../components/gridGallery/GridGallery";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Gallery = () => {
  return (
    <>
      <Header littleText="Oplev Australien:" biggerText="Mit Fotogalleri" />
      <div>
        <GridGallery />
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
