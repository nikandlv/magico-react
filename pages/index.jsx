import Link from 'next/link'
import Wrapper from '../components/Wrapper';
import Header from '../components/Header';
import MainHeaderSection from './index/MainHeaderSection';
import GallerySection from './index/GallerySection';
import ServicesSection from './index/ServicesSection';

function Index() {
    return (
      <Wrapper>
        <Header/>
        <MainHeaderSection />
        <GallerySection/>
        <ServicesSection/>
      </Wrapper>
    )
}
  export default Index