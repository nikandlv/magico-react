import Wrapper from '../components/Wrapper';
import Header from '../components/Header';
import MainHeaderSection from './index/MainHeaderSection';
import GallerySection from './index/GallerySection';
import ServicesSection from './index/ServicesSection';
import AboutSection from './index/AboutSection';

function Index() {
    return (
      <Wrapper>
        <Header/>
        <MainHeaderSection />
        <GallerySection/>
        <ServicesSection/>
        <AboutSection />
      </Wrapper>
    )
}
  export default Index