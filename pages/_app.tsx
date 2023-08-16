import MainProvider from '../app/providers/MainProvider';
import type { AppProps } from 'next/app';
import { TypeComponentAuthFields } from '@/shared/types/auth.types';
import '../app/assets/styles/globals.scss';

type TypeAppProps = AppProps & TypeComponentAuthFields;

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<MainProvider Component={Component}>
			<Component {...pageProps} />
		</MainProvider>
	);
};

export default MyApp;

