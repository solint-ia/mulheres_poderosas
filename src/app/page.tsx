import Header from '../components/Header';
import Hero from '../components/Hero';
import Manifesto from '../components/Manifesto';
import SpeakersSection from '../components/SpeakersSection';
import ScheduleSection from '../components/ScheduleSection';
import Pillars from '../components/Pillars';
import AudienceSection from '../components/AudienceSection';
import ExperienceSection from '../components/ExperienceSection';
import InvestmentSection from '../components/InvestmentSection';
import TicketsSection from '../components/TicketsSection';
import FAQSection from '../components/FAQSection';
import OrganizerSection from '../components/OrganizerSection';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import StickyMobileCTA from '../components/StickyMobileCTA';
import { getCachedTickets } from '../lib/tickets-store';
import { lowestTicketPrice } from '../lib/tickets';

// Os ingressos vêm do Redis (editáveis em /admin); o painel revalida a página ao salvar
export const revalidate = 300;

export default async function Home() {
  const tickets = await getCachedTickets();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <SpeakersSection />
        <ScheduleSection />
        <Pillars />
        <AudienceSection />
        <ExperienceSection />
        <InvestmentSection />
        <TicketsSection tickets={tickets} />
        <FAQSection />
        <OrganizerSection />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA fromPrice={lowestTicketPrice(tickets)} />
    </>
  );
}
