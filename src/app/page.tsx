import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { InstagramIcon, PhoneIcon } from '@/components/SocialIcons'

import portraitImage from '@/images/photos/formandos-2023.jpg'
import airPlane from '@/images/logos/pappper-airplane.svg'
import father from '@/images/logos/father.svg'

import image1 from '@/images/photos/love-friends.jpg'
import image2 from '@/images/photos/kids.jpg'
import image3 from '@/images/photos/girl.jpg'
import school from '@/images/photos/school.jpg'
import phone from '@/images/logos/phone-volume-solid.svg'


function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        {Icon && (
          <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        )}
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export default async function Home() {
  const categories = [
    {
      name: 'Faixa etária',
      href: '#',
      imageSrc: image1,
      imageAlt:
        'Brown leather key ring with brass metal loops and rivets on wood table.',
      description:
        'Atendemos com carinho crianças na faixa etária de 2 a 6 anos. 💖👧👦',
    },
    {
      name: 'Horário',
      href: '#',
      imageSrc: image2,
      imageAlt:
        'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
      description:
        'Oferecemos cuidado integral para filhas e filhos de pais trabalhadores, das 7h às 17h. 🌟 ',
    },
    {
      name: 'Rotina',
      href: '#',
      imageSrc: image3,
      imageAlt:
        'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
      description:
        'Proporcionamos um ambiente completo e estimulante! 🍽️✨ Com 5 refeições diárias balanceadas, aulas e atividades educativas e recreativas, garantimos um dia repleto de aprendizado e diversão para as crianças.',
    },
  ]

  return (
    <>
      <Container className="mt-16">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="rainbow-text text-4xl font-bold tracking-tight  sm:text-5xl">
              Bem-vindo(a) ao Lar <span className="rainbow-text">Amigo!</span>
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Há <strong>21 anos</strong>, a Associação{' '}
                <strong>LAR AMIGO</strong> iniciou sua jornada como um projeto
                de amor e dedicação às crianças. Desde então, temos resistido e
                crescido, tornando-nos um ponto de referência para pais
                trabalhadores que buscam um ambiente seguro e educativo para
                seus filhos.
              </p>

              <p>
                Ao longo dessas duas décadas, enfrentamos desafios e celebramos
                conquistas, sempre focados em oferecer o melhor para as{' '}
                <strong>49 crianças</strong> que confiam em nós diariamente.
                Agradecemos imensamente aos nossos colaboradores anteriores,
                cujo apoio foi crucial para a melhoria contínua de nossa
                infraestrutura.
              </p>
            </div>

            <SocialLink
              href="tel:313665-1975"
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              <Image src={father} alt="" className="mt-6 w-20" />
              <button
                type="button"
                className="relative inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Matricule sua criança
              </button>
            </SocialLink>

            <SocialLink
              href="tel:313665-1975"
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              <p className="card2 text-xl font-semibold leading-8 tracking-tight text-gray-800">
                <span className="font-bold text-[#008545] ">Ajude-nos</span>
                <br />
                <span>Associação Lar Amigo</span>
                <br />

                <span>Banco Bradesco</span>
                <br />

                <span>Agência: 6456-4</span>
                <br />
                <span>Conta: 0152160-8</span>
                <br />
                <span>PIX: CNPJ 73.775.827-0001-40</span>
              </p>
            </SocialLink>
          </div>

          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://www.instagram.com/lar_amigo/"
                icon={InstagramIcon}
                className="mt-4"
              >
                Seguir lar_amigo no Instagram
              </SocialLink>
              <SocialLink
                href="tel:313665-1975"
                icon={PhoneIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                (31) 3665-1975
              </SocialLink>

              <Image src={airPlane} alt="" className="w-30 mt-4" />
            </ul>
          </div>

          <figure className="border-l border-indigo-600 pl-8">
            <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900 dark:text-zinc-400">
              <p>
                <strong>
                  Somos mais que um projeto, somos um abraço de amor e empatia
                  pelo próximo
                </strong>
                . <strong>Sem fins lucrativos</strong>, contamos com a sua
                solidariedade para continuar fazendo a diferença. Seja parceiro
                da Associação LAR AMIGO e apadrinhe uma de nossas crianças. Será
                um prazer recebê-lo em nosso espaço.
              </p>
            </blockquote>
          </figure>

          <p></p>
          <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
            {categories.map((category) => (
              <a key={category.name} className="group block">
                <div
                  aria-hidden="true"
                  className="aspect-h-2 aspect-w-3 lg:aspect-h-6 lg:aspect-w-5 overflow-hidden rounded-lg group-hover:opacity-75"
                >
                  <Image
                    src={category.imageSrc}
                    alt={category.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900 dark:text-zinc-400">
                  {category.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-zinc-400">
                  {category.description}
                </p>
              </a>
            ))}
          </div>

          <div>
            <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-zinc-400">
                Visite-nos
              </h2>
              <p className="mt-4 text-base text-gray-700 dark:text-zinc-400">
                Endereço Av. Nossa Senhora de Fátima, 215, Bairro Pedra Azul,
                Contagem, MG, CEP: 32.185-100
              </p>
            </div>
          </div>
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={school}
              alt="lar-amigo"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>

          <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-zinc-400">
              Nossa missão
            </h2>

            <p className="mt-4 text-base text-gray-500 dark:text-zinc-400">
              Nossa missão é proporcionar um ambiente acolhedor e educativo,
              contribuindo para o desenvolvimento integral das crianças,
              promovendo valores de respeito, solidariedade e aprendizado
              contínuo.
            </p>
          </div>
        </div>
      </Container>
    </>
  )
}
