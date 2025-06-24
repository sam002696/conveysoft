import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import { RootLayout } from '@/components/RootLayout'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-135 flex-none lg:w-180">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-148 lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Every successful project begins with a deep understanding of our
          client’s business objectives, users, and technical landscape. Our
          discovery phase is designed to align stakeholders, define the scope,
          and surface opportunities for innovation.
        </p>
        <p>
          During discovery, we work closely with your team to identify business
          goals, user needs, and technical constraints. Through collaborative
          sessions and in-depth research, we assess feasibility, define core
          requirements, and establish a realistic timeline. This process ensures
          that everyone is aligned before development begins.
        </p>
        <p>
          At the end of discovery, we deliver a comprehensive strategy document
          that outlines priorities, timelines, architecture considerations, and
          user experience direction.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Business goal alignment</TagListItem>
        <TagListItem>User needs analysis</TagListItem>
        <TagListItem>Technical feasibility review</TagListItem>
        <TagListItem>Requirements gathering</TagListItem>
        <TagListItem>Timeline planning</TagListItem>
        <TagListItem>Strategic roadmap</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          With a clear plan in place, we move into product design and
          development. Our team follows agile methodologies to iterate quickly,
          deliver incrementally, and stay aligned with evolving requirements.
        </p>
        <p>
          Design and engineering work hand-in-hand, ensuring the product
          delivers exceptional user experiences backed by scalable, secure, and
          maintainable code. Frequent check-ins and demos keep your team in the
          loop and allow for real-time feedback.
        </p>
        <p>
          We focus on building robust foundations — modular architecture,
          well-documented APIs, and automated testing — that allow your product
          to scale confidently as it grows.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Debra Fiscal', role: 'Product Manager at Nuova' }}
        className="mt-12"
      >
        Conveysoft’s team brought our vision to life with professionalism and
        precision. Their transparent process and high-quality code made the
        build phase seamless.
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          As we near completion, we shift focus toward final validation,
          deployment, and training. Our QA and testing teams work to ensure the
          product meets functional, performance, and security standards.
        </p>
        <p>
          We prepare detailed launch plans, including infrastructure
          provisioning, CI/CD pipelines, and monitoring setup. Our goal is a
          smooth transition from development to production with zero disruption
          to users.
        </p>
        <p>
          Post-launch, we offer support and maintenance services to ensure your
          product continues to evolve and improve. We see delivery not as the
          end, but the beginning of a long-term partnership.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Quality Assurance">
          Manual and automated testing to ensure reliability, performance, and
          security across all platforms.
        </ListItem>
        <ListItem title="Infrastructure & DevOps">
          Deployment pipelines, cloud provisioning, monitoring, and alerting
          systems built for scale and uptime.
        </ListItem>
        <ListItem title="Ongoing Support">
          Post-launch maintenance, feature updates, and incident response to
          keep your platform running smoothly.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-100 stroke-neutral-950/5"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
          At Conveysoft, our values are more than just words—they shape the way
          we work, collaborate, and build software. We’re committed to
          delivering reliable, impactful solutions that help our clients thrive
          in a rapidly evolving digital landscape.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Quality">
            We prioritize clean, maintainable code, thoughtful design, and
            robust testing to deliver software that lasts.
          </GridListItem>
          <GridListItem title="Efficiency">
            We use proven tools and reusable components to move fast—without
            sacrificing precision or scalability.
          </GridListItem>
          <GridListItem title="Collaboration">
            Great software is built together. We work closely with our clients
            through every phase, ensuring transparency and alignment.
          </GridListItem>
          <GridListItem title="Adaptability">
            We embrace change, iterate quickly, and design flexible
            architectures that support future growth and innovation.
          </GridListItem>
          <GridListItem title="Integrity">
            We communicate honestly, act ethically, and deliver on our
            promises—earning trust through actions, not words.
          </GridListItem>
          <GridListItem title="Innovation">
            We continuously explore new technologies and techniques to solve
            complex problems and unlock new value for our clients.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
          At Conveysoft, we follow a structured and collaborative approach to
          software development. From initial discovery to final delivery, we
          focus on building scalable, high-quality solutions tailored to our
          clients’ unique needs. With years of experience and a deep
          understanding of modern technologies, we turn ideas into reliable
          digital products—efficiently and effectively.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </RootLayout>
  )
}
