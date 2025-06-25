import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
// import imageAngelaFisher from '@/images/team/angela-fisher.jpg'
// import imageBenjaminRussel from '@/images/team/benjamin-russel.jpg'
// import imageBlakeReid from '@/images/team/blake-reid.jpg'
// import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg'
// import imageDriesVincent from '@/images/team/dries-vincent.jpg'
import imageSadmanSakib from '@/images/team/sadman_sakib.jpg'
import imagePranganSen from '@/images/team/prangan_sen.jpg'
import imageSubhroSaha from '@/images/team/subro_saha.jpg'
// import imageEmmaDorsey from '@/images/team/emma-dorsey.jpg'
// import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpg'
// import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpg'
// import imageLeonardKrasner from '@/images/team/leonard-krasner.jpg'
// import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
// import imageMichaelFoster from '@/images/team/michael-foster.jpg'
// import imageWhitneyFrancis from '@/images/team/whitney-francis.jpg'
import { loadArticles } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Balance passion with purpose."
        invert
      >
        <p>
          We’re a team of people who care deeply about what we do — and how we
          do it. Our values guide our work and how we show up for one another.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Integrity" invert>
            We operate with honesty, transparency, and respect — with our
            clients and within our team.
          </GridListItem>
          <GridListItem title="Flexibility" invert>
            We trust our team to work in the way that’s best for them. We
            prioritize outcomes over hours.
          </GridListItem>
          <GridListItem title="Empathy" invert>
            We approach collaboration with curiosity and compassion —
            recognizing that great work comes from people who feel supported.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'Sadman Sakib',
        role: 'Co-Founder / CEO',
        image: { src: imageSadmanSakib },
      },
      {
        name: 'Prangan Sen',
        role: 'Co-Founder / CTO',
        image: { src: imagePranganSen },
      },
      {
        name: 'Subhro Saha',
        role: 'Partner & Business Relations',
        image: { src: imageSubhroSaha },
      },
    ],
  },
  // {
  //   title: 'Team',
  //   people: [
  //     {
  //       name: 'Chelsea Hagon',
  //       role: 'Senior Developer',
  //       image: { src: imageChelseaHagon },
  //     },
  //     {
  //       name: 'Emma Dorsey',
  //       role: 'Senior Designer',
  //       image: { src: imageEmmaDorsey },
  //     },
  //     {
  //       name: 'Leonard Krasner',
  //       role: 'VP, User Experience',
  //       image: { src: imageLeonardKrasner },
  //     },
  //     {
  //       name: 'Blake Reid',
  //       role: 'Junior Copywriter',
  //       image: { src: imageBlakeReid },
  //     },
  //     {
  //       name: 'Kathryn Murphy',
  //       role: 'VP, Human Resources',
  //       image: { src: imageKathrynMurphy },
  //     },
  //     {
  //       name: 'Whitney Francis',
  //       role: 'Content Specialist',
  //       image: { src: imageWhitneyFrancis },
  //     },
  //     {
  //       name: 'Jeffrey Webb',
  //       role: 'Account Coordinator',
  //       image: { src: imageJeffreyWebb },
  //     },
  //     {
  //       name: 'Benjamin Russel',
  //       role: 'Senior Developer',
  //       image: { src: imageBenjaminRussel },
  //     },
  //     {
  //       name: 'Angela Fisher',
  //       role: 'Front-end Developer',
  //       image: { src: imageAngelaFisher },
  //     },
  //   ],
  // },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <RootLayout>
      <PageIntro eyebrow="About us" title="Our strength is collaboration">
        <p>
          We believe that great products come from strong partnerships. That’s
          why we work side by side with our clients — to align on vision, solve
          complex challenges, and build with purpose.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Conveysoft was founded by a team of product thinkers and
            technologists who believed there was a better way to deliver impact.
            We combine deep technical expertise with a user-first mindset to
            bring ideas to life, fast.
          </p>
          <p>
            Whether you’re launching a new venture or scaling an existing
            platform, our cross-functional teams plug in seamlessly — providing
            strategy, design, and engineering tailored to your needs. We’re here
            to help you move forward with clarity and confidence.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="2-10" label="Team members" />
          <StatListItem value="15+" label="Clients served" />
          {/* <StatListItem value="$25M" label="In client value delivered" /> */}
        </StatList>
      </Container>

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Our team shares insights on design, development, and product strategy — from brand sprints to system architecture."
        pages={blogArticles}
      />

      <ContactSection />
    </RootLayout>
  )
}
