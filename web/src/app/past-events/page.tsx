import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedReveal from '@/components/AnimatedReveal';
import ImageSlideshow from '@/components/ImageSlideshow';
import Reveal from '@/components/Reveal';
import VideoFrame from '@/components/VideoFrame';

type EventMedia =
  | { type: 'slideshow'; images: string[]; alt: string; objectPosition?: string }
  | { type: 'image'; src: string; alt: string; objectPosition?: string }
  | { type: 'video'; src: string; title: string };

type Event = {
  title: string;
  badge: string;
  bullets: string[];
  media: EventMedia;
};

const events: Event[] = [
  {
    title: 'Study Skills Workshop',
    badge: 'Learning Lab',
    bullets: [
      "An organized educational event designed to enhance children's learning beyond the school curriculum.",
      'Encourages curiosity, creativity, and self-directed learning in a structured environment.',
      'Helps children develop focus, discipline, and effective study habits.',
      'Integrates hands-on activities, games, and group projects for better engagement.',
      'Promotes collaboration and teamwork among participants.',
      'Builds essential life skills such as time management and goal setting.',
      'Provides opportunities for children to explore new academic subjects and interests.',
      'Makes learning fun, interactive, and memorable through practical experiences.',
      'Helps improve confidence and problem-solving abilities.',
    ],
    media: {
      type: 'slideshow',
      images: [
        '/Study Skills Workshop1.jpg',
        '/Study Skills Workshop2.jpg',
        '/Study Skills Workshop3.jpg',
      ],
      alt: 'Study Skills Workshop',
      objectPosition: 'center top',
    },
  },
  {
    title: 'Breastfeeding Week',
    badge: 'Community Outreach',
    bullets: [
      'Celebrated annually during the first week of August worldwide.',
      'Aims to promote awareness about the importance and benefits of breastfeeding.',
      "Highlights health advantages for infants, such as stronger immunity and better nutrition.",
      'Emphasizes the emotional and physical bonding between mother and child.',
      'Encourages mothers through education, support, and community initiatives.',
      'Addresses myths and misconceptions surrounding breastfeeding.',
      'Promotes workplace policies that support breastfeeding mothers.',
      'Organized by global health organizations like WHO and UNICEF.',
      'Focuses on reducing health risks for both mother and baby.',
    ],
    media: {
      type: 'slideshow',
      images: [
        '/Breastfeeding Week1.jpg',
        '/Breastfeeding Week2.jpg',
        '/Breastfeeding Week3.jpg',
      ],
      alt: 'Breastfeeding Week',
      objectPosition: 'center top',
    },
  },
  {
    title: 'Parenting Session At HolyCross',
    badge: 'School Collaboration',
    bullets: [
      'A school-based event designed to engage parents as active partners in education.',
      "Helps parents understand the school's approach to holistic child development.",
      'Encourages open communication between parents, teachers, and students.',
      'Provides guidance on balancing academic and emotional support at home.',
      'Focuses on positive parenting strategies and effective discipline.',
      'Builds stronger home-school collaboration for overall child well-being.',
      'Offers expert talks, Q&A sessions, and interactive discussions.',
      "Helps parents identify and nurture their child's strengths.",
      'Promotes a shared vision of nurturing confident, well-rounded learners.',
      'Strengthens community bonds through parent participation and dialogue.',
    ],
    media: {
      type: 'slideshow',
      images: [
        '/Parenting Session At HolyCross1.jpg',
        '/Parenting Session At HolyCross2.jpg',
      ],
      alt: 'Parenting Session At HolyCross',
      objectPosition: 'center top',
    },
  },
  {
    title: 'Parenting PreSchoolers',
    badge: 'Early Years',
    bullets: [
      'Focuses on supporting children aged 3 to 5 years, a critical stage of development.',
      'Addresses challenges in language, behavior, and emotional regulation.',
      'Emphasizes the importance of routine, consistency, and patience.',
      'Encourages positive reinforcement and gentle discipline techniques.',
      'Guides parents on promoting independence and self-expression.',
      'Highlights the role of play in early learning and social development.',
      'Offers tips for effective communication and listening with young children.',
      'Helps parents manage common issues like tantrums and separation anxiety.',
      'Builds understanding of developmental milestones and expectations.',
    ],
    media: {
      type: 'slideshow',
      images: [
        '/Parenting PreSchoolers1.jpg',
        '/Parenting PreSchoolers2.jpg',
        '/Parenting PreSchoolers3.jpg',
      ],
      alt: 'Parenting PreSchoolers',
      objectPosition: 'center top',
    },
  },
  {
    title: 'Parenting Teens',
    badge: 'Adolescence',
    bullets: [
      'Focuses on children aged 13 to 19 years, a phase of emotional and cognitive transformation.',
      'Helps parents understand adolescent psychology and communication barriers.',
      'Encourages trust, empathy, and open dialogue between parents and teens.',
      'Guides on setting healthy boundaries and balancing freedom with responsibility.',
      'Addresses common teen challenges such as peer pressure and self-identity.',
      'Promotes mental well-being and resilience in teenagers.',
      'Encourages parental modeling of positive behavior and emotional control.',
      'Highlights the importance of academic and emotional support during exams.',
      'Helps families navigate digital habits and social media responsibly.',
    ],
    media: {
      type: 'slideshow',
      images: [
        '/Parenting Teens1.jpg',
        '/Parenting Teens2.jpg',
        '/Parenting Teens3.jpg',
      ],
      alt: 'Parenting Teens',
      objectPosition: 'center top',
    },
  },
  {
    title: 'EQ Anger Management For Teens',
    badge: 'EQ Clinics',
    bullets: [
      'Aims to teach teens how to recognize and manage anger constructively.',
      'Focuses on developing emotional intelligence (EQ) for better self-awareness.',
      'Helps teens identify emotional triggers and unhealthy reactions.',
      'Provides practical techniques for calming and communication.',
      'Encourages empathy and perspective-taking in conflict situations.',
      'Reduces stress and improves relationships with family and peers.',
      'Builds confidence in handling challenging social or academic situations.',
      'Integrates mindfulness and relaxation exercises for emotional regulation.',
      'Promotes responsible decision-making and accountability.',
    ],
    media: {
      type: 'slideshow',
      images: [
        '/EQ Anger Management For Teens1.jpg',
        '/EQ Anger Management For Teens 2.jpg',
      ],
      alt: 'EQ Anger Management For Teens',
      objectPosition: 'center top',
    },
  },
  {
    title: 'Parenting At Gurudwara',
    badge: 'Faith & Family',
    bullets: [
      'Community-based session rooted in Sikh values and traditions.',
      'Promotes spiritual and moral guidance in parenting.',
      'Encourages raising children with compassion, humility, and respect.',
      'Strengthens cultural identity and family bonding.',
      'Provides a platform for parents to share experiences and challenges.',
      'Highlights the importance of Seva (selfless service) and gratitude.',
      'Discusses how to balance modern parenting with spiritual teachings.',
      'Offers practical strategies for instilling discipline and kindness.',
      'Builds a sense of community and collective responsibility in parenting.',
    ],
    media: {
      type: 'image',
      src: '/Parenting_at_Gurudwara.jpg',
      alt: 'Parenting session at Gurudwara',
      objectPosition: 'center top',
    },
  },
  {
    title: 'Cracking The EQ Code For Career Success',
    badge: 'Workplace EQ',
    bullets: [
      'Focuses on the role of Emotional Intelligence (EQ) in professional growth.',
      "Teaches how to understand and manage one's emotions effectively.",
      'Enhances communication, collaboration, and leadership skills.',
      'Improves problem-solving and decision-making under pressure.',
      'Builds better interpersonal relationships in the workplace.',
      'Helps manage conflicts and adapt to team dynamics.',
      'Encourages empathy and emotional awareness in leadership roles.',
      'Connects EQ with motivation, productivity, and career advancement.',
    ],
    media: {
      type: 'video',
      src: 'https://www.youtube.com/embed/Yu-WtgL4xl4',
      title: 'Cracking The EQ Code For Career Success',
    },
  },
];

export default function PastEventsPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden py-8 sm:py-12 md:py-16 bg-black md:bg-[#EAF3FF] text-white md:text-gray-900">
        <div className="pointer-events-none hidden sm:block absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" aria-hidden />
        <div className="pointer-events-none absolute -top-32 right-10 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute top-20 -left-20 h-64 w-64 rounded-full bg-brand-400/20 blur-3xl" aria-hidden />

        <div className="container relative px-4 sm:px-6">
          <Reveal className="text-center space-y-4">
            <div className="mx-auto rounded-2xl bg-white px-5 py-1 text-xs sm:text-sm uppercase tracking-[0.5em] text-brand-900 shadow-sm md:bg-brand-900 md:text-white md:shadow-none">
              Event Archive
            </div>
            <p className="text-white max-w-3xl mx-auto md:text-gray-600">
              A snapshot of workshops, parenting labs, and EQ sessions facilitated by Dr. Roshni Sodhi. These experiences combine education, emotional intelligence, and community care.
            </p>
          </Reveal>

          <section className="mt-12 space-y-10 sm:space-y-12">
            {events.map((event, idx) => (
              <Reveal key={event.title} className="group">
                <article className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/85 shadow-xl shadow-brand-900/10 backdrop-blur">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-50/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex flex-col md:flex-row gap-6 sm:gap-8 p-6 sm:p-8">
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-3 text-brand-800 text-xs sm:text-sm font-semibold tracking-[0.4em] uppercase">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-100 text-brand-700 text-base font-bold tracking-normal">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        {event.badge}
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">{event.title}</h2>
                      <ul className="event-bullets grid gap-2 text-sm sm:text-base text-gray-700 leading-relaxed">
                        {event.bullets.map((bullet) => (
                          <li key={bullet} className="event-bullet">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex-1 w-full md:max-w-xl flex md:justify-end md:self-center">
                      <div className="w-full max-w-md">
                        {renderMedia(event.media)}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

function renderMedia(media: EventMedia) {
  if (media.type === 'slideshow') {
    return (
      <ImageSlideshow
        images={media.images}
        alt={media.alt}
        className=""
        objectPosition={media.objectPosition ?? 'center center'}
      />
    );
  }

  if (media.type === 'image') {
    return (
      <AnimatedReveal
        src={media.src}
        alt={media.alt}
        className=""
        objectPosition={media.objectPosition}
        objectFit="contain"
      />
    );
  }

  return <VideoFrame src={media.src} title={media.title} />;
}
