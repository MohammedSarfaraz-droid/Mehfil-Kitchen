import CateringService from '@/components/CateringService';
import Header from '@/components/Header';
import { Footer } from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export default function BirthdayPage() {
    return (
        <>
            <Header />
            <CateringService service="wedding" />
            <Footer />
            <BackToTop/>
        </>
    );
}