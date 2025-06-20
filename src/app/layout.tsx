import "./globals.css"
import { Roboto_Condensed } from "next/font/google";


const robotoCondensed = Roboto_Condensed({
  subsets: ["latin", "cyrillic"], // Поддерживаемые языки
  weight: ["300", "400", "600", "700"], // Начертания
  variable: "--font-roboto-condensed", // CSS-переменная (опционально)
});

export const metadata = {
  title: 'Портфолио Илья Колымажнов',
  description: 'Здесь вся нужная информация обо мне как о разработчике',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={robotoCondensed.className}>{children}</body>
    </html>
  )
}
