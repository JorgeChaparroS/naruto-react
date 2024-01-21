import { useRouter } from 'next/router';
import en from '../public/i18n/en';
import es from '../public/i18n/es'; 

export function useLanguage() {
    const router = useRouter();
    const { locale } = router;
    const i18n = locale === 'es' ? es : en;

    return { i18n };
}