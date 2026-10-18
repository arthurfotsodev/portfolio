import { DotPattern } from "@/components/ui/dot-pattern";
import {
  ButtonLink,
  Container,
  Eyebrow,
  GridSection,
} from "@/components/ui/ui";
import { entries, site } from "@/lib/site";
import { cn } from "cn";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <Container className="pt-12">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(280px_circle_at_center,white,transparent)]",
        )}
      />
      <GridSection className="sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Eyebrow>Portfolio · Blog · Docs</Eyebrow>
            <h1 className="text-5xl font-bold tracking-tight leading-[1.05] mt-4 max-w-[14ch]">
              Je construis des produits{" "}
              <span className="text-amber-400">COBOL/Java</span> et je raconte
              comment.
            </h1>
            <p className="text-base text-fg-muted mt-6 max-w-[52ch]">
              {site.role}. Chaque projet a son journal de développement : les
              choix, les bugs, les refontes, version après version.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink
                link="/projects"
                icon={<ArrowRight className="size-4" strokeWidth={1.5} />}
                title="Voir les projets"
                className="h-first-btn"
              />
              <ButtonLink link="/blog" title="Lire le blog" />
              <ButtonLink link="/about" title="À propos" />
            </div>
          </div>

          {/* Fenêtre « git log » : les dernières entrées de journal */}
          <div className="border border-border bg-background rounded-lg">
            <div className="flex items-center gap-2 border-b border-border px-4 py-2">
              <span className="size-2 rounded-full bg-amber-400/50" />
              <span className="size-2 rounded-full bg-amber-400/50" />
              <span className="size-2 rounded-full bg-amber-400/50" />
              <span className="ml-2 text-muted-foreground">~/journal — git log</span>
            </div>
            <ul className="divide-y divide-border font-mono text-[13px] leading-[22px]">
              {entries.slice(0, 5).map((e) => (
                <li key={`${e.project}-${e.slug}`}>
                  <Link
                    href={`/blog/projects/${e.project}/${e.slug}`}
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-surface-hover"
                  >
                    <span className="text-muted-foreground">{e.version}</span>
                    <span className="truncate text-foreground">{e.title}</span>
                    <span className="ml-auto hidden shrink-0 text-muted-foreground sm:inline">
                      {e.projectTitle.toLowerCase()}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </GridSection>
      {/* <GridSection>

      </GridSection> */}
    </Container>
  );
}
