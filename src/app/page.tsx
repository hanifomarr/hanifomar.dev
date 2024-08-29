import { Building } from "lucide-react";
import Image from "next/image";

// const Card = () => {
//   return (
//     <a
//       className="group relative flex h-full w-full transform-gpu flex-col justify-between gap-5 overflow-hidden rounded-xl text-white transition-all duration-500 will-change-[outline,_transform] group-hover:scale-[.97] hover:scale-[.97] active:scale-100"
//       href="http://github.com/mateusfg7"
//       target="_blank"
//     >
//       <span
//         aria-hidden="true"
//         className="pointer-events-none absolute inset-0 -z-20"
//       >
//         <span
//           aria-hidden="true"
//           className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-neutral-900/20 dark:bg-neutral-900/50"
//         ></span>
//       </span>
//       <span aria-hidden="true" className="px-6 pt-6">
//         <span className="flex justify-between">
//           <Building />
//         </span>
//       </span>
//       <span className="space-y-0.5 px-6 pb-6">
//         <span className="block font-semibold">GitHub</span>
//         <span className="block text-sm">My experiments (aka projects)</span>
//       </span>
//     </a>
//   );
// };

export default function Home() {
  return (
    <section className=" container max-w-4xl space-y-11 pb-8 pt-6 md:pb-12 md:mt-10 lg:py-32 ">
      <div className=" flex flex-col gap-4 text-start">
        <h1 className="text-3xl sm:text-5xl font-black text-balance">
          Hi ✌🏻, <br />
          I&apos;m Hanif and I transforming ideas into beautiful code
        </h1>
      </div>

      {/* <div>
        <div className="mt-8 grid grid-cols-3 gap-3 md:grid-cols-6">
          <div className="col-span-3">
            <Card />
          </div>
          <div className="col-span-2">
            <Card />
          </div>
          <Card />
        </div>

        <div className="mt-3 grid grid-cols-3 md:grid-cols-6">
          <div className="col-span-3 flex flex-col gap-3">
            <div className="flex gap-3">
              <div className="w-24">
                <Card />
              </div>
              <div className="flex w-full flex-col gap-3">
                <Card />
              </div>
            </div>

            <div className="cols-span-3">
              <Card />
            </div>
          </div>

          <div className="col-span-3 space-y-3 md:ml-3">
            <div className="flex gap-3">
              <Card />

              <Card />
            </div>
            <Card />
          </div>
        </div>
      </div> */}
    </section>
  );
}
