import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedReveal from '@/components/AnimatedReveal';
import ImageSlideshow from '@/components/ImageSlideshow';

export default function PastEventsPage() {
  return (
    <>
      <Navbar />
      <main className="container py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <section className="grid gap-10">
          <article>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6">Study Skills Workshop</h2>
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-start">
              <div className="flex-1 w-full">
                <ul className="text-gray-700 leading-relaxed space-y-2 text-sm sm:text-base list-disc list-inside pl-4">
                  <li>An organized educational event designed to enhance children's learning beyond the school curriculum.</li>
                  <li>Encourages curiosity, creativity, and self-directed learning in a structured environment.</li>
                  <li>Helps children develop focus, discipline, and effective study habits.</li>
                  <li>Integrates hands-on activities, games, and group projects for better engagement.</li>
                  <li>Promotes collaboration and teamwork among participants.</li>
                  <li>Builds essential life skills such as time management and goal setting.</li>
                  <li>Provides opportunities for children to explore new academic subjects and interests.</li>
                  <li>Makes learning fun, interactive, and memorable through practical experiences.</li>
                  <li>Helps improve confidence and problem-solving abilities.</li>
                  <li>Bridges the gap between traditional learning and modern educational techniques.</li>
                </ul>
              </div>
              <div className="flex-1 w-full md:w-auto">
                <ImageSlideshow
                  images={[
                    "/Study Skills Workshop1.jpg",
                    "/Study Skills Workshop2.jpg",
                    "/Study Skills Workshop3.jpg"
                  ]}
                  alt="Study Skills Workshop"
                  className="overflow-hidden rounded-xl shadow-lg border border-gray-200 w-full"
                />
              </div>
            </div>
          </article>

          <article>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6">Breastfeeding Week</h2>
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-start">
              <div className="flex-1 w-full">
                <ul className="text-gray-700 leading-relaxed space-y-2 text-sm sm:text-base list-disc list-inside pl-4">
                  <li>Celebrated annually during the first week of August worldwide.</li>
                  <li>Aims to promote awareness about the importance and benefits of breastfeeding.</li>
                  <li>Highlights health advantages for infants, such as stronger immunity and better nutrition.</li>
                  <li>Emphasizes the emotional and physical bonding between mother and child.</li>
                  <li>Encourages mothers through education, support, and community initiatives.</li>
                  <li>Addresses myths and misconceptions surrounding breastfeeding.</li>
                  <li>Promotes workplace policies that support breastfeeding mothers.</li>
                  <li>Organized by global health organizations like WHO and UNICEF.</li>
                  <li>Focuses on reducing health risks for both mother and baby.</li>
                  <li>Reinforces the message that breastfeeding is a key part of sustainable health and nutrition.</li>
                </ul>
              </div>
              <div className="flex-1 w-full md:w-auto">
                <ImageSlideshow
                  images={[
                    "/Breastfeeding Week1.jpg",
                    "/Breastfeeding Week2.jpg",
                    "/Breastfeeding Week3.jpg"
                  ]}
                  alt="Breastfeeding Week"
                  className="overflow-hidden rounded-xl shadow-lg border border-gray-200"
                />
              </div>
            </div>
          </article>

          <article>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6">Parenting Session At HolyCross</h2>
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-start">
              <div className="flex-1 w-full">
                <ul className="text-gray-700 leading-relaxed space-y-2 text-sm sm:text-base list-disc list-inside pl-4">
                  <li>A school-based event designed to engage parents as active partners in education.</li>
                  <li>Helps parents understand the school's approach to holistic child development.</li>
                  <li>Encourages open communication between parents, teachers, and students.</li>
                  <li>Provides guidance on balancing academic and emotional support at home.</li>
                  <li>Focuses on positive parenting strategies and effective discipline.</li>
                  <li>Builds stronger home-school collaboration for overall child well-being.</li>
                  <li>Offers expert talks, Q&A sessions, and interactive discussions.</li>
                  <li>Helps parents identify and nurture their child's strengths.</li>
                  <li>Promotes a shared vision of nurturing confident, well-rounded learners.</li>
                  <li>Strengthens community bonds through parent participation and dialogue.</li>
                </ul>
              </div>
              <div className="flex-1 w-full md:w-auto">
                <ImageSlideshow
                  images={[
                    "/Parenting Session At HolyCross1.jpg",
                    "/Parenting Session At HolyCross2.jpg"
                  ]}
                  alt="Parenting Session At HolyCross"
                  className="overflow-hidden rounded-xl shadow-lg border border-gray-200"
                />
              </div>
            </div>
          </article>

          <article>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6">Parenting PreSchoolers</h2>
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-start">
              <div className="flex-1 w-full">
                <ul className="text-gray-700 leading-relaxed space-y-2 text-sm sm:text-base list-disc list-inside pl-4">
                  <li>Focuses on supporting children aged 3 to 5 years, a critical stage of development.</li>
                  <li>Addresses challenges in language, behavior, and emotional regulation.</li>
                  <li>Emphasizes the importance of routine, consistency, and patience.</li>
                  <li>Encourages positive reinforcement and gentle discipline techniques.</li>
                  <li>Guides parents on promoting independence and self-expression.</li>
                  <li>Highlights the role of play in early learning and social development.</li>
                  <li>Offers tips for effective communication and listening with young children.</li>
                  <li>Helps parents manage common issues like tantrums and separation anxiety.</li>
                  <li>Builds understanding of developmental milestones and expectations.</li>
                  <li>Promotes a nurturing, loving, and safe environment at home.</li>
                </ul>
              </div>
              <div className="flex-1 w-full md:w-auto">
                <ImageSlideshow
                  images={[
                    "/Parenting PreSchoolers1.jpg",
                    "/Parenting PreSchoolers2.jpg",
                    "/Parenting PreSchoolers3.jpg"
                  ]}
                  alt="Parenting PreSchoolers"
                  className="overflow-hidden rounded-xl shadow-lg border border-gray-200"
                />
              </div>
            </div>
          </article>

          <article>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6">Parenting Teens</h2>
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-start">
              <div className="flex-1 w-full">
                <ul className="text-gray-700 leading-relaxed space-y-2 text-sm sm:text-base list-disc list-inside pl-4">
                  <li>Focuses on children aged 13 to 19 years, a phase of emotional and cognitive transformation.</li>
                  <li>Helps parents understand adolescent psychology and communication barriers.</li>
                  <li>Encourages trust, empathy, and open dialogue between parents and teens.</li>
                  <li>Guides on setting healthy boundaries and balancing freedom with responsibility.</li>
                  <li>Addresses common teen challenges such as peer pressure and self-identity.</li>
                  <li>Promotes mental well-being and resilience in teenagers.</li>
                  <li>Encourages parental modeling of positive behavior and emotional control.</li>
                  <li>Highlights the importance of academic and emotional support during exams.</li>
                  <li>Helps families navigate digital habits and social media responsibly.</li>
                  <li>Prepares teens for independence and adult decision-making.</li>
                </ul>
              </div>
              <div className="flex-1 w-full md:w-auto">
                <ImageSlideshow
                  images={[
                    "/Parenting Teens1.jpg",
                    "/Parenting Teens2.jpg",
                    "/Parenting Teens3.jpg"
                  ]}
                  alt="Parenting Teens"
                  className="overflow-hidden rounded-xl shadow-lg border border-gray-200"
                />
              </div>
            </div>
          </article>

          <article>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6">EQ Anger Management For Teens</h2>
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-start">
              <div className="flex-1 w-full">
                <ul className="text-gray-700 leading-relaxed space-y-2 text-sm sm:text-base list-disc list-inside pl-4">
                  <li>Aims to teach teens how to recognize and manage anger constructively.</li>
                  <li>Focuses on developing emotional intelligence (EQ) for better self-awareness.</li>
                  <li>Helps teens identify emotional triggers and unhealthy reactions.</li>
                  <li>Provides practical techniques for calming and communication.</li>
                  <li>Encourages empathy and perspective-taking in conflict situations.</li>
                  <li>Reduces stress and improves relationships with family and peers.</li>
                  <li>Builds confidence in handling challenging social or academic situations.</li>
                  <li>Integrates mindfulness and relaxation exercises for emotional regulation.</li>
                  <li>Promotes responsible decision-making and accountability.</li>
                  <li>Supports long-term emotional growth and maturity.</li>
                </ul>
              </div>
              <div className="flex-1 w-full md:w-auto">
                <ImageSlideshow
                  images={[
                    "/EQ Anger Management For Teens1.jpg",
                    "/EQ Anger Management For Teens 2.jpg"
                  ]}
                  alt="EQ Anger Management For Teens"
                  className="overflow-hidden rounded-xl shadow-lg border border-gray-200"
                />
              </div>
            </div>
          </article>

          <article>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6">Parenting At Gurudwara</h2>
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-start">
              <div className="flex-1 w-full">
                <ul className="text-gray-700 leading-relaxed space-y-2 text-sm sm:text-base list-disc list-inside pl-4">
                  <li>Community-based session rooted in Sikh values and traditions.</li>
                  <li>Promotes spiritual and moral guidance in parenting.</li>
                  <li>Encourages raising children with compassion, humility, and respect.</li>
                  <li>Strengthens cultural identity and family bonding.</li>
                  <li>Provides a platform for parents to share experiences and challenges.</li>
                  <li>Highlights the importance of Seva (selfless service) and gratitude.</li>
                  <li>Discusses how to balance modern parenting with spiritual teachings.</li>
                  <li>Offers practical strategies for instilling discipline and kindness.</li>
                  <li>Builds a sense of community and collective responsibility in parenting.</li>
                  <li>Reinforces faith-based upbringing with emotional intelligence and love.</li>
                </ul>
              </div>
              <div className="flex-1 w-full md:w-auto">
                <AnimatedReveal
                  src="/Parenting_at_Gurudwara.jpg"
                  alt="Parenting session at Gurudwara"
                  className="overflow-hidden rounded-xl shadow-lg border border-gray-200"
                />
              </div>
            </div>
          </article>

          <article>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6">Cracking The EQ Code For Career Success</h2>
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-start">
              <div className="flex-1 w-full">
                <ul className="text-gray-700 leading-relaxed space-y-2 text-sm sm:text-base list-disc list-inside pl-4">
                  <li>Focuses on the role of Emotional Intelligence (EQ) in professional growth.</li>
                  <li>Teaches how to understand and manage one's emotions effectively.</li>
                  <li>Enhances communication, collaboration, and leadership skills.</li>
                  <li>Improves problem-solving and decision-making under pressure.</li>
                  <li>Builds better interpersonal relationships in the workplace.</li>
                  <li>Helps manage conflicts and adapt to team dynamics.</li>
                  <li>Encourages empathy and emotional awareness in leadership roles.</li>
                  <li>Connects EQ with motivation, productivity, and career advancement.</li>
                  <li>Emphasizes the importance of self-regulation in achieving goals.</li>
                  <li>Positions EQ as a key differentiator for long-term success.</li>
                </ul>
              </div>
              <div className="flex-1 w-full md:w-auto">
                <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.youtube.com/embed/Yu-WtgL4xl4"
                    title="Cracking The EQ Code For Career Success"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
