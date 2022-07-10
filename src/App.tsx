import React, {useState} from 'react';
import styled from 'styled-components';
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import NavigationBar from './components/Navigation';
import Mobilebar from './components/Navigation/Mobilebar';

export const PageWrapper = styled.div`
  height: 100%;
`;
export const PageContainer = styled.div`
  height: calc(100vh - 80px);
  margin-top: 80px;
  overflow-y: scroll;
  bottom: 0;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
`
export const PageElement = styled.div`
  height: 100%;
  text-align: center;
  scroll-snap-align: start;
  position: relative;
`

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = React.useState('');
  const pageNames = ['Home', 'About', 'Contact'];
  const onToggle = () => {
    setIsOpen(!isOpen);
  };
  React.useEffect(() => {
    if(currentPage.length > 0){
      const el = document.querySelector(`#${currentPage}`) as HTMLElement;
      el.scrollIntoView();
    }
  }, [currentPage])
  function changeCurrentPage(page:string) {
    setCurrentPage(page)
  }
  return (
    <PageWrapper style={{flexDirection: 'column'}}>
      <NavigationBar pageArrayNames={pageNames} onToggle={onToggle} onPageChange={changeCurrentPage} />
      <Mobilebar isOpen={isOpen} pageArrayNames={pageNames} onToggle={onToggle} onPageChange={changeCurrentPage} />
      <PageContainer>
        <PageElement>
          <Home page={'Home'}/>
        </PageElement>
        <PageElement>
          <About page={'About'}/>
        </PageElement>
        <PageElement>
          <Contact page={'Contact'}/>
        </PageElement>
      </PageContainer>
    </PageWrapper>
  );
};

export default App;
