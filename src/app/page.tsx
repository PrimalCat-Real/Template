import ShinyButton from "@/components/buttons/ShinyButton";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { ThemeSwitch } from "@/components/shared/ThemeToggle";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <section className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <div className="text-4xl font-medium tracking-tight">
          <h2>The modern capital platform.</h2>
          <h2>Allowing you to grow on your terms.</h2>
        </div>
        <div className="flex items-center">
          <p className="flex-wrap text-start max-w-prose text-muted-foreground">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
            sapiente consectetur?
          </p>
          {/* TODO make this separated component */}
          <ShinyButton></ShinyButton>
          <ThemeSwitch></ThemeSwitch>
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
