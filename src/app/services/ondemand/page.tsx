import BackToTop from '@/components/BackToTop';
import CateringService from '@/components/CateringService';
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';

export default function BirthdayPage() {
return (
    <>
        <Header />
        <CateringService service="ondemand" />
        <Footer />
        <BackToTop/>
    </>
);
}