import Head from 'next/head';
import config from '../../config.json';

interface CustomHeadProps {
  title?: string | null;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  const postTitle = title ? `${title} • ` : '';
  const fullTitle = `${postTitle}${config.title}`;
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta
        name='description'
        content={config.description}
      ></meta>
    </Head>
  );
};

export default CustomHead;
