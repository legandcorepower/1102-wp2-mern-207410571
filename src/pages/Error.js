import img from '../assets/images/not-found.svg'
import styled from 'styled-components';
import Wrapper from '../assets/wrappers/Error';
import {Link} from 'react-router-dom';
const Error = () => {
  return (
    
      <Wrapper className="full-page"> 
         <div>
             <img src={img} alt="not found" />
             <h3>Oh! page not found</h3>
             <p>We can't seem to find the page you're looking for</p>
             <Link to="/">back home</Link>
         </div>
      </Wrapper>
    
  )
}

export default Error


