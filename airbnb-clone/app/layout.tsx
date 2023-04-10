import { Nunito } from 'next/font/google';
import './globals.css';

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};
const font = Nunito({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={font.className}>{children}</body>
		</html>
	);
}
