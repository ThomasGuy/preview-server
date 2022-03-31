import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { mediaQuery } from '../styles';

const Box = styled.div`
  /* set max-width to sane width as gatsbyImageData */
  max-width: 65rem;
  margin: 0 auto;

  p {
    text-align: center;
    color: var(--white);
    opacity: 0.9;
    margin: 0;
    padding: 1rem 0;
    font-size: 1.2rem;
    line-height: 1.4;

    .dim {
      color: var(--offWhite);
      opacity: 0.8;
      font-size: 1.1rem;
    }

    ${mediaQuery('sm')`
      font-size: 1.6rem;
      line-height: 1.8;
      .dim {
        font-size: 1.4rem;
      }
    `};
  }
`;

const SanityImageBox = ({
  image,
  name,
  idx,
  alt,
  show,
  mql,
  dimensions = null,
}) => {
  const trigger = mql.navChange;
  return (
    <Box>
      <GatsbyImage
        image={image.asset.gatsbyImageData}
        alt={alt}
        idx={idx}
        loading="eager"
        imgStyle={show && { border: `${trigger ? '12px' : '18px'} solid #fff` }}
      />
      {name && (
        <p>
          {name}
          {'  '}
          <span className="dim">
            {dimensions ? `${dimensions.width}x${dimensions.height}cm` : ''}
          </span>
        </p>
      )}
    </Box>
  );
};

export default SanityImageBox;
