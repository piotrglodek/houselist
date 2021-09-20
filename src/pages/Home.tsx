import React from 'react';
import styled from 'styled-components';
import { LinkButton } from '../components/LinkButton';
import carpenterImg from '../assets/carpenter.jpg';
import domexImg from '../assets/domex.png';
import familyImg from '../assets/family.jpg';
import handsImg from '../assets/hands.jpg';
import housebuildingImg from '../assets/housebuilding.jpg';
import woodfloorImg from '../assets/wood_floor.jpg';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

const StyledItem = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHeading = styled.h1`
  color: ${({ theme: { color } }) => color.black};
  margin-bottom: 0;
`;

const StyledSubHeading = styled.p`
  margin-top: 8px;
  color: ${({ theme: { color } }) => color.primary};
`;

const StyledText = styled.p`
  color: ${({ theme: { color } }) => color.gray};
`;

const StyledFirstItem = styled.div`
  background: radial-gradient(
      #47b5ff87,
      ${({ theme: { color } }) => color.primary}
    ),
    url(${woodfloorImg});
  display: grid;
  place-items: center;
  img {
    width: 75%;
  }
`;
const StyledSecondItem = styled.div`
  background: url(${carpenterImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
const StyledThirdItem = styled.div`
  background-image: url(${familyImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
const StyledFourthItem = styled.div`
  background: radial-gradient(
      #47b5ff87,
      ${({ theme: { color } }) => color.primary}
    ),
    url(${handsImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: grid;
  place-items: center;
  p {
    width: 75%;
  }
`;
const StyledFifthItem = styled.div`
  background: radial-gradient(
      #47b5ff87,
      ${({ theme: { color } }) => color.primary}
    ),
    url(${housebuildingImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: grid;
  place-items: center;

  h4 {
    text-align: center;
    color: ${({ theme: { color } }) => color.black};
  }
`;

export const Home = () => {
  return (
    <StyledGrid>
      <StyledItem>
        <StyledHeading>KILKA SŁÓW O NAS</StyledHeading>
        <StyledSubHeading>Czyli kim jesteśmy dokąd zmierzamy?</StyledSubHeading>
        <StyledText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quasi
          sequi eaque. Quidem, quod? Harum dolor labore accusamus non soluta
          deserunt optio natus repudiandae animi, nemo porro et a ullam ex amet?
          At dolorum cupiditate totam in, iste deserunt libero enim praesentium
          sit nisi a atque nostrum hic fuga autem distinctio minima? Atque, quod
          dicta? Magni dolorum maiores natus porro quas reprehenderit tempora ad
          expedita culpa ex non deleniti dolorem pariatur, suscipit quam, sunt
          praesentium sequi exercitationem eaque qui fugit! Minus adipisci quia
          et consequuntur reiciendis eum, nostrum eius? Est earum velit debitis
          ratione maiores culpa voluptate repudiandae. Deleniti, doloribus.
        </StyledText>
        <StyledText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          vel facere ipsam nostrum amet quos sapiente quam illo eligendi.
          Deleniti accusantium hic unde dolore magni aut blanditiis atque. Esse
          quae blanditiis ut nostrum quasi aperiam repellendus enim eveniet nam
          saepe.
        </StyledText>
        <LinkButton to="/houses">ZOBACZ WIĘCEJ</LinkButton>
      </StyledItem>
      <StyledGrid>
        <StyledFirstItem>
          <img src={domexImg} alt="" />
        </StyledFirstItem>
        <StyledSecondItem />
        <StyledThirdItem />
        <StyledFourthItem>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            doloremque laudantium, voluptatem, dolorem magni labore nihil quidem
            corporis, repudiandae dolorum distinctio iste cumque velit laborum
            ab deserunt earum doloribus suscipit?
          </p>
        </StyledFourthItem>
      </StyledGrid>
      <StyledFifthItem>
        <h4>
          BUDOWA DOMÓW Z DREWNA <br />
          BUDOWA BRAM WJAZDOWYCH <br />
          WYKOŃCZENIA WNĘTRZ <br />
          ALTANY OGRODOWE <br />
          KAMIENNE ELEMENTY ARCHITEKTURY OGRODOWE <br />
          REMONTY
        </h4>
      </StyledFifthItem>
      <StyledItem>
        <StyledHeading>NASZA OFERTA</StyledHeading>
        <StyledSubHeading>
          Dowiedz sie co mozemy tobie zaoferowac?
        </StyledSubHeading>
        <StyledText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quasi
          sequi eaque. Quidem, quod? Harum dolor labore accusamus non soluta
          deserunt optio natus repudiandae animi, nemo porro et a ullam ex amet?
          At dolorum cupiditate totam in, iste deserunt libero enim praesentium
          sit nisi a atque nostrum hic fuga autem distinctio minima? Atque, quod
          dicta? Magni dolorum maiores natus porro quas reprehenderit tempora ad
          expedita culpa ex non deleniti dolorem pariatur, suscipit quam, sunt
          praesentium sequi exercitationem eaque qui fugit! Minus adipisci quia
          et consequuntur reiciendis eum, nostrum eius? Est earum velit debitis
          ratione maiores culpa voluptate repudiandae. Deleniti, doloribus.
        </StyledText>
        <StyledText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          vel facere ipsam nostrum amet quos sapiente quam illo eligendi.
          Deleniti accusantium hic unde dolore magni aut blanditiis atque. Esse
          quae blanditiis ut nostrum quasi aperiam repellendus enim eveniet nam
          saepe.
        </StyledText>
        <LinkButton to="/houses">ZOBACZ WIĘCEJ</LinkButton>
      </StyledItem>
    </StyledGrid>
  );
};
