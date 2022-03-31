/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */

import { graphql } from 'gatsby';
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import { TitleContext } from '../components/Layout';
import SanityImageBox from '../components/SanityImageBox';
import { Modal } from '../components/SimpleModal';
import SEO from '../components/SEO';
import { GalleryLayout } from '../styles';
import { useBreakpoint } from '../hooks/useBreakpoint';

const Gallery = ({ data }) => {
  const { setTitle } = useContext(TitleContext);
  const [openModal, setOpenModal] = useState(false);
  const [index, _setIndex] = useState(-1);
  const indexRef = useRef(index);
  const mql = useBreakpoint();

  useEffect(() => {
    setTitle(data.title.name);
  }, [setTitle, data.title.name]);

  const propsArray = data.allSanityPicture.edges.map(({ node }) => {
    const { image, name, dimensions, id, category } = node;
    return {
      image,
      id,
      alt: name,
      name,
      show: category.border,
      aspectRatio: image.asset.metadata.dimensions.aspectRatio,
      dimensions,
    };
  });

  const sorted = propsArray.sort(function (p1, p2) {
    return p2.aspectRatio - p1.aspectRatio;
  });

  const pictures = sorted.map((props, idx) => {
    const { aspectRatio, ...rest } = props;
    return <SanityImageBox idx={idx} mql={mql} {...rest} />;
  });

  const setIndex = useCallback(
    idx => {
      idx += pictures.length;
      idx %= pictures.length;
      indexRef.current = idx;
      _setIndex(idx);
    },
    [pictures.length]
  );

  const clickHandler = useCallback(
    evt => {
      console.log(evt.target.nodeName);
      if (evt.target.nodeName !== 'IMG') {
        return;
      }
      setIndex(parseInt(evt.target.attributes.idx.value));
      setOpenModal(true);
    },
    [setIndex, setOpenModal]
  );

  const handleKeyUp = useCallback(
    e => {
      const keys = {
        27: () => {
          e.preventDefault();
          setOpenModal(state => !state);
          // window.removeEventListener('keyup', handleKeyUp, false);
        },
      };

      if (keys[e.keyCode]) {
        keys[e.keyCode]();
      }
    },
    [setOpenModal]
  );

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp, false);
    window.addEventListener('click', clickHandler, false);

    return () => {
      document.removeEventListener('keyup', handleKeyUp, false);
      window.removeEventListener('click', clickHandler, false);
    };
  }, [clickHandler, handleKeyUp]);

  return (
    <GalleryLayout onClick={clickHandler}>
      <SEO title={data.title.name} />
      {pictures.map(pic => {
        const { image, id } = pic.props;
        return (
          <div key={id}>
            <SEO imageSrc={image.asset.url} />
            {pic}
          </div>
        );
      })}
      {openModal && (
        <Modal onCloseRequest={() => setOpenModal(false)}>
          {pictures[index]}
        </Modal>
      )}
    </GalleryLayout>
  );
};

export default Gallery;

export const pageQuery = graphql`
  query GalleryPageQuery($slug: String!) {
    allSanityPicture(
      filter: { category: { slug: { current: { eq: $slug } } } }
    ) {
      edges {
        node {
          name
          id
          dimensions {
            height
            width
          }
          category {
            border
          }
          image {
            asset {
              url
              gatsbyImageData(
                layout: CONSTRAINED
                width: 650
                placeholder: BLURRED
              )
              metadata {
                dimensions {
                  aspectRatio
                }
              }
            }
          }
        }
      }
    }
    title: sanityCategory(slug: { current: { eq: $slug } }) {
      name
    }
  }
`;
