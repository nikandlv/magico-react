import Link from 'next/link'
import Wrapper from '../components/Wrapper';
import Header from '../components/Header';
function scrollTo(element, to, duration) {
  var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;
      
  var animateScroll = function(){        
      currentTime += increment;
      var val = Math.easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if(currentTime < duration) {
          setTimeout(animateScroll, increment);
      }
  };
  animateScroll();
}

Math.easeInOutQuad = function (t, b, c, d) {
t /= d/2;
if (t < 1) return c/2*t*t + b;
t--;
return -c/2 * (t*(t-2) - 1) + b;
};
function Index() {
    return (
      <Wrapper>
        <Header/>
        <section className="full-section">        
          <div className="section-cover b-1" />
          <div className="large-section purple" />
          <div className="gutter small"/>
          <h1 className="header-title">Mágico</h1>
          <h2 className="header-slogan">Fresh brewed coffee 24/7</h2>
          <i className="fa fa-2x fa-chevron-down header-more-icon"/>
        </section>
        <section className="full-section">
        <div className="section-cover b-3" />
          <div className="large-section red" />
          <div className="gutter small"/>
        </section>

      </Wrapper>
    )
}
  export default Index