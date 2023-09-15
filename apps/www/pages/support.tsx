import Link from 'next/link'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { Button, IconMessageCircle, IconGitHub, Divider, IconMail, IconArrowUpRight } from 'ui'

import Container from '~/components/Container'
import DefaultLayout from '~/components/Layouts/Default'
import SectionContainer from '~/components/Layouts/SectionContainer'
import InteractiveShimmerCard from '../components/InteractiveShimmerCard'

const data = [
  {
    title: 'Ask the Community',
    paragraph: 'Ask the Community',
    useThisFor: '',
    links: [
      {
        label: '',
        url: '',
        icon: '',
      },
    ],
  },
]

const Index = () => {
  const router = useRouter()

  const meta_title = 'Help & Support | Supabase'
  const meta_description =
    'Find help and support for Supabase. Our Support team provide answers on all types of issues, including account information, billing, and refunds.'

  return (
    <>
      <NextSeo
        title={meta_title}
        description={meta_description}
        openGraph={{
          title: meta_title,
          description: meta_description,
          url: `https://supabase.com/${router.pathname}`,
          images: [
            {
              url: `https://supabase.com/images/og/og-image-v2.jpg`,
            },
          ],
        }}
      />
      <DefaultLayout className="!min-h-fit">
        <div className="bg-alternative">
          <SectionContainer className="space-y-2 text-center">
            <h1 className="text-brand font-mono text-base uppercase tracking-widest">Support</h1>
            <p className="h1 tracking-[-1.5px]">Hello, how can we help?</p>
          </SectionContainer>
        </div>
        <SectionContainer className="text grid gap-5 md:grid-cols-3">
          <InteractiveShimmerCard innerClassName="flex flex-col p-5">
            <div className="mb-4 lg:mb-8 flex-1">
              <h2 className="text text-lg font-medium">Troubleshooting</h2>
              <div className="my-2 block">
                <p className="text-light">
                  Learn how to diagnose and fix common issues with your Supabase project.
                </p>
              </div>
            </div>
            <div>
              <Link
                href="/docs/guides/platform/troubleshooting"
                as="/docs/guides/platform/troubleshooting"
                passHref
              >
                <Button size="small" type="default" asChild>
                  <a target="_blank">Troubleshooting Guide</a>
                </Button>
              </Link>
            </div>
          </InteractiveShimmerCard>
          <InteractiveShimmerCard innerClassName="flex flex-col p-5">
            <div className="mb-4 lg:mb-8 flex-1">
              <h2 className="text text-lg font-medium">Issues and Feature requests</h2>
              <div className="my-2 block">
                <p className="text-light">
                  Found a bug or want to suggest a new feature? We'd love to hear about it in our
                  GitHub issues.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Link
                href="https://github.com/supabase/supabase/issues"
                as="https://github.com/supabase/supabase/issues"
                passHref
              >
                <Button size="small" type="default" iconRight={<IconGitHub />} asChild>
                  <a target="_blank">Open GitHub Issue</a>
                </Button>
              </Link>
            </div>
          </InteractiveShimmerCard>

          <InteractiveShimmerCard innerClassName="flex flex-col p-5">
            <div className="mb-4 lg:mb-8 flex-1">
              <h2 className="text text-lg font-medium">Ask the Community</h2>
              <div className="my-2 block">
                <p className="text-light">
                  Join our GitHub discussions or our Discord server to browse for help and best
                  practices.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Link
                href="https://github.com/supabase/supabase/discussions"
                as="https://github.com/supabase/supabase/discussions"
                passHref
              >
                <Button size="small" type="default" iconRight={<IconMessageCircle />} asChild>
                  <a target="_blank">Join the discussion</a>
                </Button>
              </Link>
              <Link
                href="https://discord.supabase.com/"
                as="https://discord.supabase.com/"
                passHref
              >
                <Button
                  size="small"
                  type="default"
                  iconRight={
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 71 55"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                  asChild
                >
                  <a target="_blank">Join Discord</a>
                </Button>
              </Link>
            </div>
          </InteractiveShimmerCard>
        </SectionContainer>
        <SectionContainer className="!pt-0">
          <div className="mx-auto max-w-6xl bg-alternative border rounded-xl p-6 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 xl:gap-10 justify-between">
              <div className="col-span-full lg:col-span-4 gap-2 flex flex-col">
                <h2 className="text-2xl lg:text-3xl lg:max-w-[360px] tracking-[-1px]">
                  Can't find what you're looking for?
                </h2>
              </div>
              <div className="col-span-full lg:col-start-5 xl:col-start-6 lg:col-span-7 flex flex-col gap-4">
                <p className="text-light">
                  No need to worry, the Supabase Support Team is ready to help.
                </p>
                <div className="flex gap-2">
                  <Link href="https://supabase.com/dashboard/support/new" passHref>
                    <Button type="secondary" size="small" iconRight={<IconArrowUpRight />} asChild>
                      <a>Open Ticket</a>
                    </Button>
                  </Link>
                  <Link href="https://forms.supabase.com/enterprise" passHref>
                    <Button type="default" size="small" asChild>
                      <a>Contact Enterprise Sales</a>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </DefaultLayout>
    </>
  )
}

export default Index
