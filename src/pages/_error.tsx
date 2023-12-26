import { NextApiResponse } from 'next';
import Layout from '../components/layout';

interface ErrorProps {
  statusCode?: string;
}

function Error({ statusCode }: ErrorProps) {
  return (
    <Layout slug={statusCode ?? ''}>
      <h1>Не удалось отобразить страницу</h1>
      <p>
        <a href='/easy-markup'>Вернуться на главную</a>
      </p>
    </Layout>
  );
}

Error.getInitialProps = ({
  res,
  err,
}: {
  res: NextApiResponse;
  err: Error & { statusCode?: string };
}) => {
  const statusCode = res ? res.statusCode : err ? err?.statusCode : 404;
  return { statusCode };
};

export default Error;
