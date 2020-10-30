import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const PageMetadata = ({
  metadata,
  fallbackData,
}) => {
  const {
    metaTitle,
    metaDescription,
    ogTitle,
    ogDescription,
    ogImage,
  } = metadata;
  const {
    title,
    description,
    image,
  } = fallbackData;

  const metaTitleText = metaTitle || title;
  const metaDescriptionText = metaDescription || description;
  const ogTitleText = ogTitle || title;
  const ogDescriptionText = ogDescription || description;
  const ogImageSrc = ogImage || image.src;
  return (
    <Head>
      { metaTitleText && <title>{ metaTitleText }</title>}
      { metaDescriptionText && <meta name="description" content={metaDescriptionText} /> }
      { ogTitleText && <meta property="og:title" content={ogTitleText} />}
      { ogDescriptionText && <meta property="og:description" content={ogDescriptionText} />}
      { ogImageSrc && <meta property="og:image" content={ogImageSrc} />}
    </Head>
  );
}

PageMetadata.propTypes = {
  metadata: PropTypes.shape({
    metaTitle: PropTypes.string,
    metaDescription: PropTypes.string,
    ogTitle: PropTypes.string,
    ogDescription: PropTypes.string,
    ogImage: PropTypes.string,
  }),
  fallbackData: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.shape({
      src: PropTypes.string,
    }),
  }),
};

PageMetadata.defaultProps = {
  metadata: {},
  fallbackData: {},
};

export default PageMetadata;
