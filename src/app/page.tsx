import SocialButton from "../components/SocialButton";
import Navbar from "../components/navbar";
import Linkedin from "../../public/linkedin.svg";
import Github from "../../public/github.svg";
import Behance from "../../public/behance.svg";
import Email from "../../public/email.svg";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-4 h-[80vh] items-center justify-center">
        <div className="h-[30rem] rounded-3xl p-10 flex flex-col gap-16 bg-gradient-to-r from-rose-100 to-teal-100">
          <h1 className="text-4xl font-semibold">
            Hello, I'm a Frontend Developer with focus on react
          </h1>
          <p className="flex-1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-4 justify-self-end">
            <SocialButton bgColor="github">
              <Github className="h-5 w-5" />
            </SocialButton>
            <SocialButton bgColor="behance">
              <Behance className="h-5 w-5" />
            </SocialButton>
            <SocialButton bgColor="linkedin">
              <Linkedin className="h-5 w-5" />
            </SocialButton>
            <SocialButton bgColor="email">
              <Email className="h-5 w-5" />
            </SocialButton>
          </div>
        </div>
        <div className="hidden sm:block h-[30rem] rounded-3xl bg-[url('/profile.jpeg')] bg-cover bg-center " />
      </section>
    </main>
  );
}
