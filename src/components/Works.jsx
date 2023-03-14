import React, { useState } from 'react';
import styled from 'styled-components';
import Development from './Development';
import ProductDesign from './ProductDesign';
import WebDesign from './WebDesign';

const data = [
    "Web Design",
    "Development",
    "Illustration",
    "Product Design",
    "Social Media",
];

const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }
  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }
  &:hover {
    ::after {
      animation: moveText 0.5s linear both;
      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;
const Works = () => {
    const [work, setWork] = useState("Web Design");
    return (
        <div className='worksSection'>
            <div className='containerWork'>
                <div className='leftWork'>
                    <ul className='listWork'>
                        {data.map((item) => (
                            <ListItem key={item} text={item} onClick={() => setWork(item)}>
                                {item}
                            </ListItem>
                        ))}
                    </ul>
                </div>
                <div className='rightWork'>
                {work === "Web Design" ? (
            <WebDesign />
          ) : work === "Development" ? (
            <Development />
          ) : (
            <ProductDesign />
          )}
                </div>
            </div>
        </div>
    );
};

export default Works
