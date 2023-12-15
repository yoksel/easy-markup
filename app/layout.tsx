import './global.scss';

export const RootLayout = ({children}: React.PropsWithChildren) => {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  )
}

export default RootLayout;
