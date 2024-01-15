import React from "react"
import Image from "next/image"

import { Accordion } from "@/components/ui/accordion"
import { useTranslation } from "@/app/i18n"

interface PrincipleContentProps {
  image: string
  children: React.ReactNode
  width?: number
  height?: number
}
const PrincipleContent = ({
  image,
  children,
  width = 300,
  height = 300,
}: PrincipleContentProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 py-4 md:mb-8 md:grid-cols-2 md:items-center md:gap-2 md:py-6">
      <div className="m-auto py-6 md:py-0">
        <Image
          width={width}
          height={height}
          src={image}
          alt="principle image"
        />
      </div>
      <span className="flex flex-col gap-4 break-words font-sans text-lg font-normal leading-[150%]">
        {children}
      </span>
    </div>
  )
}
export default async function AboutPage({ params: { lang } }: any) {
  const { t } = await useTranslation(lang, "about-page")

  const [
    principle1Descriptions,
    principle2Descriptions,
    principle3Descriptions,
    principle4Descriptions,
  ] = [
    t("principle-1-description", {
      returnObjects: true,
    }),
    t("principle-2-description", {
      returnObjects: true,
    }),
    t("principle-3-description", {
      returnObjects: true,
    }),
    t("principle-4-description", {
      returnObjects: true,
    }),
  ] as Array<string>[]

  return (
    <div className="bg-anakiwa-200">
      <div className="bg-second-gradient">
        <div className="container mx-auto grid grid-cols-1 gap-16 py-10 lg:grid-cols-[1fr_300px] lg:gap-2 lg:py-20">
          <div className="flex flex-col gap-8 lg:w-4/5">
            <h6 className="break-words font-display text-4xl font-bold text-tuatara-950 md:py-4 md:text-5xl">
              {t("title")}
            </h6>
            <span className="font-sans text-base font-normal leading-[27px] text-tuatara-950">
              {t("description")}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 px-8 py-16 md:px-32 md:py-24">
        <div className="mx-auto pb-4">
          <Image
            width={280}
            height={280}
            src="/logos/pse-logo-bg.svg"
            alt="pse logo"
          />
        </div>
        <h6 className="font-display text-4xl">{t("our-principles-title")}</h6>
        <Accordion
          type="multiple"
          items={[
            {
              label: t("principle-1-title"),
              value: "1",
              children: (
                <PrincipleContent
                  width={126}
                  height={114}
                  image="/logos/principle-1.svg"
                >
                  {principle1Descriptions?.map(
                    (description: string, index: number) => {
                      return <p key={index}>{description}</p>
                    }
                  )}
                </PrincipleContent>
              ),
            },
            {
              label: t("principle-2-title"),
              value: "2",
              children: (
                <PrincipleContent
                  image="/logos/principle-2.svg"
                  width={176}
                  height={260}
                >
                  {principle2Descriptions?.map(
                    (description: string, index: number) => {
                      return <p key={index}>{description}</p>
                    }
                  )}
                </PrincipleContent>
              ),
            },
            {
              label: t("principle-3-title"),
              value: "3",
              children: (
                <PrincipleContent
                  image="/logos/principle-3.svg"
                  width={236}
                  height={260}
                >
                  {principle3Descriptions?.map(
                    (description: string, index: number) => {
                      return <p key={index}>{description}</p>
                    }
                  )}
                </PrincipleContent>
              ),
            },
            {
              label: t("principle-4-title"),
              value: "4",
              children: (
                <PrincipleContent
                  image="/logos/principle-4.svg"
                  width={238}
                  height={260}
                >
                  {principle4Descriptions?.map(
                    (description: string, index: number) => {
                      return <p key={index}>{description}</p>
                    }
                  )}
                </PrincipleContent>
              ),
            },
          ]}
        />
      </div>
    </div>
  )
}
