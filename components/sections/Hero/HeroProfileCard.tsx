import Image from "next/image";

import { profile } from "@/data/profile";

export default function HeroProfileCard() {
  return (
    <div
      className="
        rounded-3xl
        border
        bg-white
        dark:bg-slate-900
        p-8
        shadow-xl
      "
    >

      <Image
        src={profile.image}
        alt={profile.name}
        width={400}
        height={400}
        priority
        className="rounded-2xl object-cover"
      />

      <h3 className="mt-6 text-2xl font-bold">
        {profile.name}
      </h3>

      <p className="mt-2 text-blue-600">
        {profile.title}
      </p>

      <div className="mt-8 space-y-3">

        <p>📍 {profile.location}</p>

        <p>🎓 Gümüşhane University</p>

        <p>🧠 Deep Learning</p>

        <p>🧠 Artificial Intelligence</p>

      </div>

    </div>
  );
}