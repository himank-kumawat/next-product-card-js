import '@testing-library/jest-dom';

jest.mock('next/image', () => {
  const Image = ({ src, alt, width, height, fill, priority, ...props }) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img src={src} alt={alt} {...props} />;
  };
  Image.displayName = 'NextImageMock';
  return Image;
});


jest.mock('next/link', () => {
  const Link = ({ children, href, ...props }) => (
    <a href={href} {...props}>
      {children}
    </a>
  );
  Link.displayName = 'NextLinkMock';
  return Link;
});