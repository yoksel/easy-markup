import './global.scss';
import './prism.scss';

// <title>{{ site.title }}{% if page.title %} &bull; {{ page.title }}{% endif %}</title>
// <meta name="description" content="">
export const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <html lang='ru'>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
