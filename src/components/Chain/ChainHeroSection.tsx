// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { FC } from 'react';

import styled, { keyframes } from 'styled-components';
import { TbArrowUpRight } from 'react-icons/tb';

import { device } from '../../../src/config/globals';
import useMediaQuery from '../../../src/hooks/useMediaQuery';

import { A, Button, H2, H3, ItemV } from '../../css/SharedStyling';
import ChainAlertBar from './ChainAlertBar';
import ImageHolder from '../../../src/components/ImageHolder';

const ChainHeroSection: FC = () => {
  const isMobile = useMediaQuery(device.mobileL);
  const isTablet = useMediaQuery(device.laptop);

  const HeroGrid = [
    {
      count: '4MB',
      label: 'Block Size',
    },
    {
      count: '~1s',
      label: 'Finality',
    },
    {
      count: '20k',
      label: 'Transactions',
    },
    {
      imageUrl: 'supported-chains',
      label: 'Supported Chains',
    },
  ];

  return (
    <ChainHeroSectionWrapper>
      <ChainAlertBar
        text='Push Chain Governance Proposal is Live'
        url='https://governance.push.org/'
        center={true}
      />
      <TypewriterText>Build Universal App</TypewriterText>
      <HeroSubText>
        Push Chain is a shared-state blockchain that allows all chains to unify,
        enabling consumer apps that function from any chain. <br /> Push is the
        layer 1 for the web3 app ecosystem.
      </HeroSubText>
      <HeroButtons>
        <Button
          background='#D548EC'
          fontFamily='N27'
          fontWeight='500'
          fontSize='18px'
          width={isMobile && '100%'}
        >
          Get Notified about Testnet
        </Button>
        <Button
          background='#FFF'
          fontFamily='N27'
          fontWeight='500'
          fontSize='18px'
          color='#000'
          width={isMobile && '100%'}
        >
          Explore Push Chain
        </Button>
      </HeroButtons>

      <ItemV padding='48px 0'>
        <ImageHolder
          src={
            require(`@site/static/assets/website/chain/chain-hero.webp`).default
          }
          srcSet={`${require(`@site/static/assets/website/chain/chain-hero@2x.webp`).default} 2x, ${require(`@site/static/assets/website/chain/chain-hero@3x.webp`).default} 3x`}
          alt={'alt'}
          title={'title'}
        />
      </ItemV>
      <SectionText>
        Consumer applications that work from any chain, reach instant finality,
        and achieve true scalability.
      </SectionText>

      <CountSection>
        <GridSection>
          {HeroGrid.map((item) => (
            <ItemV alignItems={isTablet ? 'center' : 'flex-start'}>
              {item.count && (
                <H2
                  fontSize={isMobile ? '40px' : '72px'}
                  fontWeight='500'
                  fontFamily='N27'
                  lineHeight={isMobile ? '80px' : '100px'}
                >
                  {item.count}
                </H2>
              )}

              {item.imageUrl && (
                <ImageHolder
                  src={
                    require(
                      `@site/static/assets/website/chain/${item?.imageUrl}.webp`
                    ).default
                  }
                  srcSet={`${require(`@site/static/assets/website/chain/${item?.imageUrl}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/chain/${item?.imageUrl}@3x.webp`).default} 3x`}
                  alt={'alt'}
                  title={'title'}
                />
              )}
              <H3
                fontSize={isMobile ? '20px' : '24px'}
                fontWeight='500'
                fontFamily='N27'
                lineHeight={isMobile ? '20px' : '24px'}
              >
                {item.label}
              </H3>
            </ItemV>
          ))}
        </GridSection>

        <GridText>
          Create shared app experiences, eliminating chain boundaries for your
          users, allowing them to just simply <b>use your application</b>.
          <br />
          <br />
          Linear scalability and dynamic sharding ensure read and write
          transactions continue to increase as more nodes are added to the
          network.
          <TextLink
            href='https://scan.push.org'
            target='_blank'
            title='Discord Push Network'
            fontSize={isMobile ? '16px' : '20px'}
            margin={isMobile ? '24px auto 0 auto' : '29px 0 0 0'}
            background='transparent'
            padding='0'
            color='#D548EC'
            fontFamily='N27'
            hoverBackground='transparent'
          >
            <p>Discover Push Network</p>
            <TbArrowUpRight className='anchorSVGlink' />
          </TextLink>
        </GridText>
      </CountSection>

      <ItemV margin='300px auto 0 auto' maxWidth='870px'>
        <H3
          fontSize={isMobile ? '36px' : '48px'}
          fontWeight='500'
          fontFamily='N27'
          lineHeight='120%'
          letterSpacing='-0.72px'
          textAlign='center'
        >
          A layer 1 built on the foundations from pioneering web3
          communications.
        </H3>
      </ItemV>

      <ItemV margin='48px 0 0 0'>
        <ImageHolder
          src={
            require(`@site/static/assets/website/chain/second-hero-image.webp`)
              .default
          }
          srcSet={`${require(`@site/static/assets/website/chain/second-hero-image@2x.webp`).default} 2x, ${require(`@site/static/assets/website/chain/second-hero-image@3x.webp`).default} 3x`}
          alt={'alt'}
          title={'title'}
        />
      </ItemV>

      <ItemV margin='0px auto 0 auto' maxWidth='806px'>
        <H3
          fontSize={isMobile ? '20px' : '28px'}
          fontWeight='400'
          fontFamily='N27'
          lineHeight='140%'
          textAlign='center'
        >
          After four years of building the leading notifications protocol and a
          thriving ecosystem, Push Protocol is evolving to launch and scale Push
          Chain.
        </H3>
      </ItemV>
    </ChainHeroSectionWrapper>
  );
};

export default ChainHeroSection;

const ChainHeroSectionWrapper = styled.div`
  margin: 213px auto 0 auto;

  @media ${device.mobileL} {
    margin: 103px auto 0 auto;
  }
`;

const typing = keyframes`
  0% { width: 0; }               /* Start typing */
  40% { width: 9ch; }           /* Fully typed */
  50% { width: 9ch; }           /* Pause briefly */
  100% { width: 0; }             /* Erase text */
`;

const cursor = keyframes`
  50% { border-color: transparent; }
`;

const TypewriterText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
  font-family: 'N27', sans-serif;
  font-size: 72px;
  font-weight: 500;
  line-height: 140%;
  color: #000;

  p {
    animation: none;
    // display: inline-block;
    // white-space: nowrap;
    // overflow: hidden;
    // width: 9ch;
    // animation:
    //   ${typing} 4s steps(9) infinite,
    //   ${cursor} 0.6s step-end infinite;
  }

  @media (max-width: 768px) {
    font-size: 48px;

    p {
      animation: none;
      white-space: normal;
      border: none;
    }
  }
`;

const HeroSubText = styled.div`
  text-align: center;
  color: #000;
  text-align: center;
  font-family: N27;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;

  width: 800px;
  margin: 0 auto;

  @media (max-width: 900px) {
    width: 100%;
    font-size: 20px;
    font-weight: 400;
    line-height: 140%;
    margin: 24px auto 0 auto;
  }
`;

const HeroButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  margin: 48px auto 0 auto;

  @media ${device.mobileL} {
    flex-direction: column;
    width: 100%;
    margin: 64px auto 0 auto;
  }
`;

const SectionText = styled.div`
  color: #000;
  font-family: N27;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.96px;
  margin-top: 72px;

  @media ${device.mobileL} {
    text-align: center;
    font-size: 36px;
    letter-spacing: -0.72px;
  }
`;

const CountSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 90px;

  @media ${device.laptop} {
    flex-direction: column;
    margin-top: 120px;
  }
`;
const GridSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  width: 500px;
  row-gap: 40px;

  @media ${device.laptop} {
    width: 100%;
  }
`;

const GridText = styled.div`
  width: 500px;
  color: #000;
  font-family: N27;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;

  @media ${device.laptop} {
    flex-direction: column;
    width: 100%;
    margin-top: 48px;
    text-align: center;
  }
`;

const TextLink = styled(A)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  cursor: pointer;

  @media ${device.laptop} {
    justify-content: center;
  }

  p {
    margin: 0px !important;
  }
  .anchorSVGlink {
    color: #d548ec;
    top: 0px;
  }

  &:hover {
    text-decoration: none !important;
    .anchorSVGlink {
      color: #d548ec;
    }
  }
`;
