import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoUnsealDark from '@/images/clients/unseal/logomark-dark.svg'

import logoReact from '@/images/technologies/react.svg'
import logoJavaScript from '@/images/technologies/javascript.svg'
import logoNodejs from '@/images/technologies/nodejs.svg'
import logoLaravel from '@/images/technologies/laravel.svg'
import logoSpringBoot from '@/images/technologies/springboot.svg'
import logoMySQL from '@/images/technologies/mysql.svg'
import logoMongoDB from '@/images/technologies/mongodb.svg'
import logoDocker from '@/images/technologies/docker.svg'
import logoReduxToolkit from '@/images/technologies/redux.svg'
import logoReduxSaga from '@/images/technologies/reduxsaga.svg'
import logoTailwind from '@/images/technologies/tailwindcss.svg'
import logojwt from '@/images/technologies/jsonwebtokens.svg'

import imageLaptop from '@/images/laptop.jpg'
import { loadCaseStudies } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

const technologies = [
  ['React', logoReact],
  ['JavaScript', logoJavaScript],
  ['NodeJs', logoNodejs],
  ['Laravel', logoLaravel],
  ['Spring Boot', logoSpringBoot],
  ['MySQL', logoMySQL],
  ['MongoDB', logoMongoDB],
  ['Docker', logoDocker],
  ['Redux Toolkit', logoReduxToolkit],
  ['Redux Saga', logoReduxSaga],
  ['Tailwind CSS', logoTailwind],
  ['JWT', logojwt],
]

function Technologies() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Technologies we’ve worked with
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {technologies.map(([tech, logo]) => (
              <li key={tech} className="flex flex-col items-center space-y-2">
                <FadeIn>
                  <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-white p-4 shadow-md">
                    <Image
                      src={logo}
                      alt={tech}
                      width={40}
                      height={40}
                      unoptimized
                    />
                  </div>
                  <div className="pt-1 text-center text-sm font-medium text-white">
                    {tech}
                  </div>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Harnessing technology for a brighter future"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe technology is the answer to the world’s greatest
          challenges. It’s also the cause, so we find ourselves in bit of a
          catch 22 situation.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          As long as those opportunities involve giving us money to re-purpose
          old projects — we can come up with an endless number of those.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-135 flex-none lg:w-180">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
            <ListItem title="Web Development">
              Modern, responsive, and performance-driven websites built with
              scalable architecture. Whether it&apos;s a company portfolio or a
              full-fledged platform, each build is optimized for speed,
              accessibility, and SEO.
            </ListItem>
            <ListItem title="Application Development">
              End-to-end development of custom applications using frameworks
              like React, Next.js, Spring Boot, and Laravel. From frontend
              interactivity to backend logic, everything is engineered for
              performance and maintainability.
            </ListItem>
            <ListItem title="E-Commerce">
              Scalable e-commerce systems tailored to your business — from
              custom storefronts to integrations with payment gateways, order
              management, and inventory control. Built to grow as you grow.
            </ListItem>
            <ListItem title="Blockchain Development">
              End-to-end blockchain solutions tailored to your needs—from smart
              contract development to full dApp integration. Whether you&apos;re
              building on Ethereum, Solana, or Layer 2 networks, we ensure
              secure, scalable, and future-ready blockchain infrastructure.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

// export const metadata = {
//   description:
//     'We help businesses bring ideas to life through expert design, seamless development, and reliable product delivery.',
// }

export const metadata = {
  title: 'Conveysoft – Scalable Software Solutions for Modern Businesses',
  description:
    'We help businesses bring ideas to life through expert design, seamless development, and reliable product delivery.',
  authors: [{ name: 'Conveysoft Team', url: 'https://www.conveysoft.dev' }],
  creator: 'ConveySoft',
  metadataBase: new URL('https://www.conveysoft.dev'),
  openGraph: {
    title: 'Conveysoft – Scalable Software Solutions for Modern Businesses',
    description:
      'Explore tailored software solutions that drive business growth. We build custom applications, e-commerce platforms, and blockchain systems.',
    url: 'https://www.conveysoft.dev',
    siteName: 'Conveysoft',
    locale: 'en_US',
    type: 'website',
  },
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
            Scalable software solutions for modern businesses.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            We deliver scalable, secure, and custom-built software solutions
            designed to solve real business challenges. From system architecture
            and backend services to modern web and mobile interfaces, each
            project is engineered with performance, usability, and long-term
            growth in mind.
          </p>
        </FadeIn>
      </Container>

      <Technologies />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Nuova', logo: logoUnsealDark }}
      >
        The team at Conveysoft went above and beyond with Nuova’s
        onboarding—building tailored role-based portals that deliver the exact
        tools each user needs, from secure communication to real-time property
        oversight, all without overwhelming complexity.
      </Testimonial>

      <Services />

      <ContactSection />
    </RootLayout>
  )
}
