import LearnDataFetching from "./components/LearnDataFetching";
import LearnLink from "./components/LearnLink";
import LearnUseRouter from "./components/LearnUseRouter";

export default function Home() {
  return (
    <main className="flex flex-col text-4xl gap-10  justify-center items-center">
      {/* <LearnLink /> */}
      {/* <LearnUseRouter /> */}
      <LearnDataFetching />
    </main>
  );
}
