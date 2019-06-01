import Wrapper from '../components/Wrapper';
import Header from '../components/Header';
import MainHeaderSection from './index/MainHeaderSection';
import GallerySection from './index/GallerySection';

function Index() {
    return (
      <Wrapper>
        <Header/>
        <MainHeaderSection />
        <GallerySection/>
      </Wrapper>
    )
}
  export default Index